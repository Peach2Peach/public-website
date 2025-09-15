let currentPage = 0; // Pagina corrente
let numberOfPages = 0; // Numero totale di pagine
let currentSort = 'lowestPremium'; // Ordinamento corrente
let currentCurrency = "EUR"; // Valuta corrente
let methodOfPayment = {}; // Metodo di pagamento disponibile

document.addEventListener('DOMContentLoaded', async () => {
  const elements = getDOMElements(); // Ottiene gli elementi DOM
  await initializePaymentMethods(elements.currencySelect); // Inizializza i metodi di pagamento
  initializeEventListeners(elements); // Imposta i listener sugli eventi
  fetchOrderBook(); // Recupera i dati per la visualizzazione dell'order book
});

function getDOMElements() {
  return {
    table: document.getElementById('offerte-table'),
    orderbookContainer: document.getElementById('offerte-tbody'),
    loadingContainer: document.getElementById('loading'),
    beforePageBtn: document.getElementById('beforePageBtn'),
    afterPageBtn: document.getElementById('afterPageBtn'),
    currentPageSpan: document.getElementById('currentPage'),
    orderBySelect: document.getElementById('orderBySelect'),
    currencySelect: document.getElementById("currencySelect"),
    priceTh: document.getElementById("priceTh"),
    pagination: document.querySelector('.pagination')
  };
}

// Funzione asincrona per ottenere i metodi di pagamento e popolare le opzioni di valuta
async function initializePaymentMethods(currencySelect) {
  await getMethodOfPayment();
  populateCurrencyOptions(currencySelect);
}

// Popola il selettore di valuta con le opzioni dei metodi di pagamento
function populateCurrencyOptions(currencySelect) {
  currencySelect.innerHTML = '';
  Object.keys(methodOfPayment).forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    option.selected = currentCurrency === currency;
    currencySelect.appendChild(option);
  });
}

// Inizializza i listener per eventi sui selettori e i pulsanti di navigazione
function initializeEventListeners({ orderBySelect, currencySelect, beforePageBtn, afterPageBtn }) {
  orderBySelect.addEventListener('change', () => updateSorting());
  currencySelect.addEventListener('change', () => updateCurrency());
  beforePageBtn.addEventListener('click', () => changePage('remove'));
  afterPageBtn.addEventListener('click', () => changePage('add'));
}

// Aggiorna l'ordinamento e ricarica l'order book
function updateSorting() {
  currentSort = document.getElementById('orderBySelect').value;
  currentPage = 0;
  fetchOrderBook();
}

// Cambia la valuta e aggiorna la tabella dell'order book
function updateCurrency() {
  currentCurrency = document.getElementById("currencySelect").value;
  currentPage = 0;
  fetchOrderBook();
}

// Aggiorna la navigazione tra le pagine in base alla pagina corrente
function updatePagination({ beforePageBtn, afterPageBtn, currentPageSpan }) {
  beforePageBtn.style.display = currentPage > 0 ? 'inline-block' : 'none';
  afterPageBtn.style.display = currentPage < numberOfPages - 1 ? 'inline-block' : 'none';
  currentPageSpan.textContent = currentPage + 1;
}

// Recupera i dati dell'order book e aggiorna la tabella
async function fetchOrderBook(page = 0) {
  const elements = getDOMElements();
  toggleLoadingState(elements, true);
  
  try {
    const data = await getOffers(page);
    numberOfPages = Math.ceil(data.total / 50);
    populateOrderbookTable(data.offers, elements.orderbookContainer);
    toggleLoadingState(elements, false);
  } catch (error) {
    displayError(elements.orderbookContainer);
    console.error('Error fetching order book:', error);
  }
}

// Alterna lo stato di caricamento per mostrare o nascondere gli elementi
function toggleLoadingState({ table, loadingContainer, pagination }, isLoading) {
  table.style.display = isLoading ? "none" : "table";
  pagination.style.display = isLoading ? "none" : "flex";
  loadingContainer.style.display = isLoading ? 'block' : 'none';
}

// Popola la tabella dell'order book con le offerte
function populateOrderbookTable(offers, container) {
  container.innerHTML = '';
  offers.forEach(offer => {
    const row = document.createElement('tr');

    // Dati delle colonne: id, metodo di pagamento, prezzo, quantità e valutazione
    const cols = {
      peachId: offer.peachId,
      method: offer.method,
      price: offer.price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      amount: offer.amount.toLocaleString('fr-FR'),
      rating: offer.rating
    }

    // Aggiunge i dati alle celle della riga
    Object.entries(cols).forEach(([key, value]) => {
      const td = document.createElement("td")
      const aTag = document.createElement("a")

      aTag.href = offer.url
      aTag.target = "_blank"

      if (key === 'rating') {
        const div = renderRating(value) // Mostra le stelle per la valutazione
        aTag.appendChild(div)
      } else {
        aTag.innerHTML = value
      }

      td.appendChild(aTag)
      row.appendChild(td)
    });

    container.appendChild(row);
  });
  updatePagination(getDOMElements());
}

// Rendering delle stelle di valutazione e aggiunge il valore numerico
function renderRating(value) {
  const starsDiv = document.createElement('div');
  starsDiv.style.display = 'flex';

  const stars = Math.floor(value); // Stelle intere
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

// Crea l'elemento SVG per una stella piena
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

// Crea l'elemento SVG per una mezza stella
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

// Crea l'elemento SVG per una stella vuota
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

function displayError(container) {
  container.innerHTML = '<tr><td colspan="4">Failed to load order book.</td></tr>';
}

function changePage(type) {
  if ((type === 'add' && currentPage < numberOfPages - 1) || (type === 'remove' && currentPage > 0)) {
    currentPage += type === 'add' ? 1 : -1;
    fetchOrderBook(currentPage);
    scrollTo({ behavior: "smooth", top: 0 });
  }
}

async function getOffers(page) {
  const basePrice = await fetchBasePrice();
  const offerData = await fetchOfferData(page);
  return formatOfferData(offerData, basePrice);
}

async function fetchBasePrice() {
  const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/market/price/BTC${currentCurrency}`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  const { price } = await response.json();

  return price;
}

async function fetchOfferData(page) {
  const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/offer/search?page=${page}&sortBy=${currentSort}&size=50`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: "ask", meansOfPayment: { [currentCurrency]: methodOfPayment[currentCurrency] } })
  });

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return await response.json();
}

function formatOfferData({ offers, total }, basePrice) {
  const data = offers.map(offer => offer.meansOfPayment[currentCurrency].map(method => ({
    service: 'Peach Bitcoin',
    url: 'https://peachbitcoin.com',
    method: method.startsWith('cash.') ? 'Cash' : method,
    price: basePrice * ((offer.premium ? offer.premium / 100 : 0) + 1) * 1.02,
    amount: offer.amount,
    rating: ((offer.user.rating + 1) * 2.5),
    peachId: `Peach${offer.user.id.slice(4, 8)}`.toUpperCase()
  }))).flat();

  return { offers: data, total };
}

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
