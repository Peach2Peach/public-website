let tradePeaks = {};
let filters = { date: '24h', currency: 'EUR' };

const priceElements = document.querySelectorAll('.new-teaser-price');
const priceCurrencySelects = document.querySelectorAll('#priceCurrencySelect');
const priceFilterPillows = document.querySelectorAll('.new-teaser-filters-pillow');
const flagIcons = document.querySelectorAll('#flagIcon');

async function getPriceData() {
  try {
    const res = await fetch('https://peach-cors-proxy.vercel.app/v1/market/tradePricePeaks', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    // accept either { tradePeaks: {...} } or plain {...}
    tradePeaks = json.tradePeaks || json;

    const initialPillow = document.getElementById(filters.date);
    if (initialPillow) setActivePillow(initialPillow);
    updatePrice();

    priceCurrencySelects.forEach(sel => {
      sel.addEventListener('change', () => {
        filters.currency = sel.value;

        const flagIconsMap = {
          EUR: '/img/flags/europe-icon.svg',
          USD: '/img/flags/united-states-icon.svg',
          CHF: '/img/flags/switzerland-icon.svg',
        };
        flagIcons.forEach(img => (img.src = flagIconsMap[filters.currency] || ''));

        updatePrice();
      });
    });

    priceFilterPillows.forEach(pillow => {
      pillow.addEventListener('click', () => {
        setActivePillow(pillow);
        filters.date = pillow.id;
        updatePrice();
      });
    });
  } catch (e) {
    console.error('ATH widget fetch failed:', e);
    priceElements.forEach(el => (el.textContent = '—'));
  }
}

function setActivePillow(activePillow) {
  priceFilterPillows.forEach(pillow => {
    pillow.classList.toggle('active', pillow.id === activePillow.id);
  });
}

function updatePrice() {
  const v = tradePeaks?.[filters.date]?.[filters.currency];
  if (typeof v !== 'number') {
    priceElements.forEach(el => (el.textContent = '—'));
    return;
  }
  const formatted = v.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const symbols = { EUR: '€', USD: '$', CHF: 'CHF' };
  priceElements.forEach(el => (el.textContent = `${symbols[filters.currency] || ''} ${formatted}`));
}

getPriceData();
