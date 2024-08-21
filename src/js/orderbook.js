let currentPage = 0;
let numberOfPage = 0;
let currentSort = 'lowestPremium';  // Default sort type
let currencies = new Set([]);
let currentCurrency = "EUR";

document.addEventListener('DOMContentLoaded', function () {
  const table = document.getElementById('offerte-table');
  const orderbookContainer = document.getElementById('offerte-tbody');
  const loadingContainer = document.getElementById('loading');
  const beforePageBtn = document.getElementById('beforePageBtn');
  const afterPageBtn = document.getElementById('afterPageBtn');
  const currentPageSpan = document.getElementById('currentPage');
  const orderBySelect = document.getElementById('orderBySelect');
  const currencySelect = document.getElementById("currencySelect");
  const priceTh = document.getElementById("priceTh");
  const pagination = document.querySelector('.pagination');

  orderBySelect.addEventListener('change', function () {
    currentSort = this.value;
    currentPage = 0;
    fetchOrderBook(currentPage);  // Reset to the first page whenever sorting changes
  });

  currencySelect.addEventListener('change', function () {
    currentCurrency = this.value;
    currentPage = 0;
    fetchOrderBook(currentPage);
    priceTh.innerHTML = `Price (${currentCurrency})`;
  });

  function updatePagination() {
    beforePageBtn.style.display = currentPage > 0 ? 'inline-block' : 'none';
    afterPageBtn.style.display = currentPage < numberOfPage - 1 ? 'inline-block' : 'none';
    currentPageSpan.textContent = currentPage + 1;
  }

  async function fetchOrderBook(page = 0) {
    table.style.display = "none";
    pagination.style.display = "none";
    loadingContainer.style.display = 'block';
    orderbookContainer.innerHTML = ''; // trashbin the table

    try {
      const data = await getOffers(page);
      numberOfPage = Math.ceil(data.total / 50);

      currencySelect.innerHTML = '';
      currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.innerHTML = currency;
        option.selected = currentCurrency == currency;
        currencySelect.appendChild(option);
      });

      data.offers.forEach(offer => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><a target="_blank" href="${offer.url}">${offer.method}</a></td>
          <td><a target="_blank" href="${offer.url}">${offer.price.toLocaleString('fr-FR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</a></td>
          <td><a target="_blank" href="${offer.url}">${offer.amount.toLocaleString('fr-FR')}</a></td>
        `;
        orderbookContainer.appendChild(row);
      });

      loadingContainer.style.display = 'none';
      table.style.display = "table";
      updatePagination();
      pagination.style.display = "flex";

    } catch (error) {
      console.error('Error fetching order book:', error);
      orderbookContainer.innerHTML = '<tr><td colspan="3">Failed to load order book.</td></tr>';
      loadingContainer.style.display = 'none';
      table.style.display = "table";
      pagination.style.display = "flex";
    }
  }

  function changePage(type) {
    if ((type === 'add' && currentPage < numberOfPage - 1) || (type === 'remove' && currentPage > 0)) {
      currentPage = type === 'add' ? currentPage + 1 : currentPage - 1;
      fetchOrderBook(currentPage);
      scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  }

  beforePageBtn.addEventListener('click', () => {
    changePage('remove');
  });

  afterPageBtn.addEventListener('click', () => {
    changePage('add');
  });

  // load before start
  fetchOrderBook();
});

async function getOffers(page) {
  const priceResponse = await fetch(`https://peach-cors-proxy.vercel.app/v1/market/price/BTC${currentCurrency}`);
  const { price: basePrice } = await priceResponse.json();

  if (!priceResponse.ok) {
    throw new Error(`HTTP error! Status: ${priceResponse.status}`);
  }

  const offerResponse = await fetch(`https://peach-cors-proxy.vercel.app/v1/offer/search?page=${page}&sortBy=${currentSort}&size=50`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: "ask"
    })
  });

  const { offers, remaining, total } = await offerResponse.json();

  if (!offerResponse.ok) {
    throw new Error(`HTTP error! Status: ${offerResponse.status}`);
  }

  const data = [];

  offers.forEach(offer => {
    if (offer.meansOfPayment[currentCurrency]) {
      Object.entries(offer.meansOfPayment).map(e => e[0]).forEach(e => {
        if (!currencies.has(e)) {
          currencies.add(e);
        }
      });

      offer.meansOfPayment[currentCurrency].forEach(method => {
        data.push({
          service: 'Peach Bitcoin',
          url: 'https://peachbitcoin.com',
          features: [
            'on-chain',
            'p2p'
          ],
          method: method.startsWith('cash.') ? 'Cash' : method,
          price: (basePrice * (offer.premium ? offer.premium / 100 + 1 : 1) * 1.02),
          amount: offer.amount
        });
      });
    }
  });

  return { offers: data, remaining, total };
}
