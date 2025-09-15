// --- Global state ---
const state = {
  ask: { currentPage: 0, numberOfPages: 0, loaded: false }, // sell offers
  bid: { currentPage: 0, numberOfPages: 0, loaded: false }, // buy offers
  currentSort: 'lowestPremium',
  currentCurrency: 'EUR',
  currentTab: 'ask' // 'ask' or 'bid'
};

let methodOfPayment = {}; // currency => [methodIds...]

// Bootstrapping
document.addEventListener('DOMContentLoaded', async () => {
  const el = getDOMElements();
  await initializePaymentMethods(el.currencySelect);
  initializeEventListeners(el);

  // Initial load: fetch SELL first (visible tab), defer BUY until tab is clicked or after SELL finishes
  await fetchOrderBook('ask');
  // Preload the other side in the background for snappier UX
  fetchOrderBook('bid').catch(err => console.error('Preloading bid failed:', err));
});

// Collect DOM references
function getDOMElements() {
  return {
    // Tabs
    tabSellBtn: document.getElementById('tabSellBtn'),
    tabBuyBtn: document.getElementById('tabBuyBtn'),
    panelAsk: document.getElementById('panel-ask'),
    panelBid: document.getElementById('panel-bid'),

    // SELL (ask)
    tableAsk: document.getElementById('offerte-table'),
    orderbookContainerAsk: document.getElementById('offerte-tbody'),
    loadingContainerAsk: document.getElementById('loading'),
    beforePageBtnAsk: document.getElementById('beforePageBtn'),
    afterPageBtnAsk: document.getElementById('afterPageBtn'),
    currentPageSpanAsk: document.getElementById('currentPage'),

    // BUY (bid)
    tableBid: document.getElementById('offerte-table-bids'),
    orderbookContainerBid: document.getElementById('offerte-tbody-bids'),
    loadingContainerBid: document.getElementById('loading-bids'),
    beforePageBtnBid: document.getElementById('beforePageBtnBid'),
    afterPageBtnBid: document.getElementById('afterPageBtnBid'),
    currentPageSpanBid: document.getElementById('currentPageBid'),

    // Shared controls
    orderBySelect: document.getElementById('orderBySelect'),
    currencySelect: document.getElementById('currencySelect'),

    // Two paginators, in DOM order: [askPaginator, bidPaginator]
    paginators: document.querySelectorAll('.pagination')
  };
}

// Fetch available payment methods and populate currency options
async function initializePaymentMethods(currencySelect) {
  await getMethodOfPayment();
  populateCurrencyOptions(currencySelect);
}

// Fill the currency selector from available payment methods
function populateCurrencyOptions(currencySelect) {
  currencySelect.innerHTML = '';
  Object.keys(methodOfPayment).forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    option.selected = state.currentCurrency === currency;
    currencySelect.appendChild(option);
  });
}

// Wire up filters, pagination, and tabs
function initializeEventListeners(el) {
  // Filters
  el.orderBySelect.addEventListener('change', () => updateSorting());
  el.currencySelect.addEventListener('change', () => updateCurrency());

  // Pagination
  el.beforePageBtnAsk.addEventListener('click', () => changePage('ask', 'remove'));
  el.afterPageBtnAsk.addEventListener('click', () => changePage('ask', 'add'));
  el.beforePageBtnBid.addEventListener('click', () => changePage('bid', 'remove'));
  el.afterPageBtnBid.addEventListener('click', () => changePage('bid', 'add'));

  // Tabs
  el.tabSellBtn.addEventListener('click', () => setActiveTab('ask'));
  el.tabBuyBtn.addEventListener('click', () => setActiveTab('bid'));
}

// Set the active tab (show one panel, hide the other)
function setActiveTab(side) {
  if (state.currentTab === side) return;

  const el = getDOMElements();
  state.currentTab = side;

  // Toggle active class and ARIA
  const isAsk = side === 'ask';
  el.tabSellBtn.classList.toggle('active', isAsk);
  el.tabBuyBtn.classList.toggle('active', !isAsk);
  el.tabSellBtn.setAttribute('aria-selected', isAsk ? 'true' : 'false');
  el.tabBuyBtn.setAttribute('aria-selected', !isAsk ? 'true' : 'false');

  // Show/hide panels
  el.panelAsk.classList.toggle('hidden', !isAsk);
  el.panelBid.classList.toggle('hidden', isAsk);

  // Lazy-load the side if not loaded yet
  if (!state[side].loaded) {
    fetchOrderBook(side).catch(err => console.error(`Error loading ${side}:`, err));
  }

  // Keep header title in sync with the visible tab (optional)
  // If you want the H2 to change text, uncomment below:
  // const h2 = document.querySelector('#orderbook-container .top-header h2');
  // h2.textContent = isAsk ? i18n('orderbook.sellOffer', lang) : i18n('orderbook.buyOffer', lang);
}

// Update sorting and refresh both tables (reset pagination)
function updateSorting() {
  state.currentSort = document.getElementById('orderBySelect').value;
  state.ask.currentPage = 0;
  state.bid.currentPage = 0;
  // reload both sides (faster UX if both are cached by browser)
  fetchOrderBook('ask');
  fetchOrderBook('bid');
}

// Change currency and refresh both tables (reset pagination)
function updateCurrency() {
  state.currentCurrency = document.getElementById('currencySelect').value;
  state.ask.currentPage = 0;
  state.bid.currentPage = 0;
  fetchOrderBook('ask');
  fetchOrderBook('bid');
}

// Update pagination controls for a given side
function updatePagination(side, el) {
  const isAsk = side === 'ask';
  const beforeBtn = isAsk ? el.beforePageBtnAsk : el.beforePageBtnBid;
  const afterBtn  = isAsk ? el.afterPageBtnAsk  : el.afterPageBtnBid;
  const pageSpan  = isAsk ? el.currentPageSpanAsk : el.currentPageSpanBid;

  const { currentPage, numberOfPages } = state[side];

  beforeBtn.style.display = currentPage > 0 ? 'inline-block' : 'none';
  afterBtn.style.display = currentPage < numberOfPages - 1 ? 'inline-block' : 'none';
  pageSpan.textContent = currentPage + 1;
}

// Fetch orderbook data and render table for a given side ('ask' | 'bid')
async function fetchOrderBook(side = 'ask', pageOverride = null) {
  const el = getDOMElements();
  toggleLoadingState(side, el, true);

  try {
    const page = pageOverride !== null ? pageOverride : state[side].currentPage;
    const data = await getOffers(side, page);

    state[side].numberOfPages = Math.ceil(data.total / 50);

    const container = side === 'ask' ? el.orderbookContainerAsk : el.orderbookContainerBid;
    populateOrderbookTable(data.offers, container);

    toggleLoadingState(side, el, false);
    updatePagination(side, el);
    state[side].loaded = true;
  } catch (error) {
    const container = side === 'ask' ? el.orderbookContainerAsk : el.orderbookContainerBid;
    displayError(container);
    console.error(`Error fetching ${side} order book:`, error);
  }
}

// Show/hide the correct table, loader, and its paginator for a given side
function toggleLoadingState(side, el, isLoading) {
  const isAsk = side === 'ask';
  const table = isAsk ? el.tableAsk : el.tableBid;
  const loading = isAsk ? el.loadingContainerAsk : el.loadingContainerBid;
  const paginator = isAsk ? el.paginators[0] : el.paginators[1];

  table.style.display = isLoading ? 'none' : 'table';
  paginator.style.display = isLoading ? 'none' : 'flex';
  loading.style.display = isLoading ? 'block' : 'none';
}

// Render rows into the provided container
function populateOrderbookTable(offers, container) {
  container.innerHTML = '';
  offers.forEach(offer => {
    const row = document.createElement('tr');

    // Columns: id, payment method, price, amount, rating
    const cols = {
      peachId: offer.peachId,
      method: offer.method,
      price: offer.price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      amount: offer.amount.toLocaleString('fr-FR'),
      rating: offer.rating
    };

    Object.entries(cols).forEach(([key, value]) => {
      const td = document.createElement('td');
      const aTag = document.createElement('a');

      aTag.href = offer.url;
      aTag.target = '_blank';

      if (key === 'rating') {
        const div = renderRating(value); // star rating visuals
        aTag.appendChild(div);
      } else {
        aTag.innerHTML = value;
      }

      td.appendChild(aTag);
      row.appendChild(td);
    });

    container.appendChild(row);
  });
}

// Build star rating + numeric value
function renderRating(value) {
  const starsDiv = document.createElement('div');
  starsDiv.style.display = 'flex';

  const stars = Math.floor(value);
  const halfStar = value % 1 >= 0.5;

  for (let index = 0; index < 5; index++) {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';

    if (index < stars) {
      starContainer.innerHTML = createFullStar();
    } else if (index === stars && halfStar) {
      starContainer.innerHTML = createHalfStar();
    } else {
      starContainer.innerHTML = createEmptyStar();
    }

    starsDiv.appendChild(starContainer);
  }

  const divRating = document.createElement('div');
  divRating.textContent = value.toFixed(1);
  divRating.style.margin = '-2px 0 0 0.25rem';
  starsDiv.appendChild(divRating);

  return starsDiv;
}

// Full star SVG
function createFullStar() {
  return `
    <svg style="width: 1rem; height: 1rem;" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.35253 0.708885C5.04004 0.634866 5.65065 1.0396 5.84123 1.69868C5.87482 1.81487 5.89172 1.93924 5.89553 2.0606C5.90377 2.32031 5.89848 2.58045 5.89848 2.84038C5.89848 2.86429 5.87805 2.88324 5.85416 2.88412C5.66492 2.89109 5.47989 2.88286 5.29907 2.82295C4.73199 2.63554 4.35527 2.11417 4.34936 1.50416C4.34682 1.25671 4.34872 1.00905 4.34894 0.761602" fill="#05A85A"/>
      <path d="M7.64579 1.867C7.64568 1.867 7.64559 1.8671 7.64561 1.86721C7.70633 2.40742 7.32183 2.8682 6.80277 2.88369C6.50936 2.89249 6.24001 2.64168 6.36265 2.37498C6.4214 2.2472 6.51207 2.13404 6.63861 2.03699C6.78059 1.92811 6.94243 1.87066 7.12033 1.86765C7.29443 1.86485 7.46874 1.867 7.64579 1.867Z" fill="#05A85A"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.5002C9.31371 13.5002 12 10.5883 12 7.51662C12 4.85907 9.98918 3.06754 7.30093 3.27684C6.43855 3.34399 5.56145 3.34399 4.69907 3.27684C2.01082 3.06754 0 4.85907 0 7.51662C0 10.5883 2.68629 13.5002 6 13.5002ZM5.95274 11.2106C7.72701 11.2106 9.16534 9.65074 9.16534 8.00539C9.16534 6.51024 7.97762 5.52683 6.42939 5.75947C6.11403 5.80686 5.79146 5.80686 5.47609 5.75947C3.92787 5.52683 2.74014 6.51024 2.74014 8.00539C2.74014 9.65074 4.17847 11.2106 5.95274 11.2106Z" fill="url(#paint0_diamond_1742_23608)"/>
      <defs>
        <radialGradient id="paint0_diamond_1742_23608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 3.26025) rotate(139.525) scale(15.7752 17.7577)">
          <stop stop-color="#FFA24C"/>
          <stop offset="0.50246" stop-color="#FF7A50"/>
          <stop offset="1" stop-color="#FF4D42"/>
        </radialGradient>
      </defs>
    </svg>
  `;
}

// Half star SVG
function createHalfStar() {
  return `
    <svg style="width: 1rem; height: 1rem;" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stop-color="#FF7A50" />
            <stop offset="50%" stop-color="#9ca3af" />
        </linearGradient>
      </defs>
      <path d="M4.35253 0.708885C5.04004 0.634866 5.65065 1.0396 5.84123 1.69868C5.87482 1.81487 5.89172 1.93924 5.89553 2.0606C5.90377 2.32031 5.89848 2.58045 5.89848 2.84038C5.89848 2.86429 5.87805 2.88324 5.85416 2.88412C5.66492 2.89109 5.47989 2.88286 5.29907 2.82295C4.73199 2.63554 4.35527 2.11417 4.34936 1.50416C4.34682 1.25671 4.34872 1.00905 4.34894 0.761602" fill="url(#halfGradient)"/>
      <path d="M7.64579 1.867C7.64568 1.867 7.64559 1.8671 7.64561 1.86721C7.70633 2.40742 7.32183 2.8682 6.80277 2.88369C6.50936 2.89249 6.24001 2.64168 6.36265 2.37498C6.4214 2.2472 6.51207 2.13404 6.63861 2.03699C6.78059 1.92811 6.94243 1.87066 7.12033 1.86765C7.29443 1.86485 7.46874 1.867 7.64579 1.867Z" fill="url(#halfGradient)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.5002C9.31371 13.5002 12 10.5883 12 7.51662C12 4.85907 9.98918 3.06754 7.30093 3.27684C6.43855 3.34399 5.56145 3.34399 4.69907 3.27684C2.01082 3.06754 0 4.85907 0 7.51662C0 10.5883 2.68629 13.5002 6 13.5002ZM5.95274 11.2106C7.72701 11.2106 9.16534 9.65074 9.16534 8.00539C9.16534 6.51024 7.97762 5.52683 6.42939 5.75947C6.11403 5.80686 5.79146 5.80686 5.47609 5.75947C3.92787 5.52683 2.74014 6.51024 2.74014 8.00539C2.74014 9.65074 4.17847 11.2106 5.95274 11.2106Z" fill="url(#halfGradient)"/>
    </svg>
  `;
}

// Empty star SVG
function createEmptyStar() {
  return `
    <svg style="width: 1rem; height: 1rem;" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.35253 0.708885C5.04004 0.634866 5.65065 1.0396 5.84123 1.69868C5.87482 1.81487 5.89172 1.93924 5.89553 2.0606C5.90377 2.32031 5.89848 2.58045 5.89848 2.84038C5.89848 2.86429 5.87805 2.88324 5.85416 2.88412C5.66492 2.89109 5.47989 2.88286 5.29907 2.82295C4.73199 2.63554 4.35527 2.11417 4.34936 1.50416C4.34682 1.25671 4.34872 1.00905 4.34894 0.761602" fill="#9ca3af"/>
      <path d="M7.64579 1.867C7.64568 1.867 7.64559 1.8671 7.64561 1.86721C7.70633 2.40742 7.32183 2.8682 6.80277 2.88369C6.50936 2.89249 6.24001 2.64168 6.36265 2.37498C6.4214 2.2472 6.51207 2.13404 6.63861 2.03699C6.78059 1.92811 6.94243 1.87066 7.12033 1.86765C7.29443 1.86485 7.46874 1.867 7.64579 1.867Z" fill="#9ca3af"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.5002C9.31371 13.5002 12 10.5883 12 7.51662C12 4.85907 9.98918 3.06754 7.30093 3.27684C6.43855 3.34399 5.56145 3.34399 4.69907 3.27684C2.01082 3.06754 0 4.85907 0 7.51662C0 10.5883 2.68629 13.5002 6 13.5002ZM5.95274 11.2106C7.72701 11.2106 9.16534 9.65074 9.16534 8.00539C9.16534 6.51024 7.97762 5.52683 6.42939 5.75947C6.11403 5.80686 5.79146 5.80686 5.47609 5.75947C3.92787 5.52683 2.74014 6.51024 2.74014 8.00539C2.74014 9.65074 4.17847 11.2106 5.95274 11.2106Z" fill="#9ca3af"/>
      <defs>
        <radialGradient id="paint0_diamond_1742_23609" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 3.26025) rotate(139.525) scale(15.7752 17.7577)">
          <stop stop-color="#9ca3af"/>
          <stop offset="0.50246" stop-color="#9ca3af"/>
          <stop offset="1" stop-color="#9ca3af"/>
        </radialGradient>
      </defs>
    </svg>
  `;
}

// Error row
function displayError(container) {
  container.innerHTML = '<tr><td colspan="5">Failed to load order book.</td></tr>';
}

// Pagination change
function changePage(side, type) {
  const s = state[side];
  if ((type === 'add' && s.currentPage < s.numberOfPages - 1) || (type === 'remove' && s.currentPage > 0)) {
    s.currentPage += type === 'add' ? 1 : -1;
    fetchOrderBook(side, s.currentPage);
    scrollTo({ behavior: 'smooth', top: 0 });
  }
}

// Data orchestrator
async function getOffers(side, page) {
  const basePrice = await fetchBasePrice();
  const offerData = await fetchOfferData(side, page);
  return formatOfferData(side, offerData, basePrice);
}

// BTC/Fiat price
async function fetchBasePrice() {
  const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/market/price/BTC${state.currentCurrency}`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  const { price } = await response.json();
  return price;
}

// Offers for a side/page
async function fetchOfferData(side, page) {
  const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/offer/search?page=${page}&sortBy=${state.currentSort}&size=50`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: side === 'ask' ? 'ask' : 'bid',
      meansOfPayment: { [state.currentCurrency]: methodOfPayment[state.currentCurrency] }
    })
  });

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return await response.json();
}

// Normalize offer rows for UI
function formatOfferData(side, { offers, total }, basePrice) {
  const data = offers
    .map(offer =>
      offer.meansOfPayment[state.currentCurrency].map(method => ({
        service: 'Peach Bitcoin',
        url: 'https://peachbitcoin.com',
        method: method.startsWith('cash.') ? 'Cash' : method,
        // Display price: base * (1 + premium) * 1.02
        price: basePrice * ((offer.premium ? offer.premium / 100 : 0) + 1) * 1.02,
        amount: offer.amount,
        rating: ((offer.user.rating + 1) * 2.5),
        peachId: `Peach${offer.user.id.slice(4, 8)}`.toUpperCase()
      }))
    )
    .flat();

  return { offers: data, total };
}

// Build currency => methods map
async function getMethodOfPayment() {
  const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/info`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  const { paymentMethods } = await response.json();

  methodOfPayment = paymentMethods.reduce((acc, item) => {
    item.currencies.forEach(currency => {
      acc[currency] = acc[currency] || [];
      acc[currency].push(item.id);
    });
    return acc;
  }, {});
}
