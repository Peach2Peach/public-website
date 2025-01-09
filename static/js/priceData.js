let tradePeaks = []
let filters = {
    date: '24h',
    currency: 'EUR'
}

const priceElement = document.querySelector('.new-teaser-price');
const priceCurrencySelect = document.querySelector('#priceCurrencySelect')
const priceFilterPillows = document.querySelectorAll('.new-teaser-filters-pillow');
const flagIcon = document.querySelector('#flagIcon')

async function getPriceData() {
    const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/market/TradePricePeaks`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    tradePeaks = (await response.json()).tradePeaks;

    const initialPillow = document.getElementById(filters.date);
    setActivePillow(initialPillow);
    updatePrice();

    priceCurrencySelect.addEventListener('change', () => {
        filters.currency = priceCurrencySelect.value

        const flagIcons = {
            'EUR': "/img/flags/europe-icon.svg",
            'USD': "/img/flags/united-states-icon.svg",
            'CHF': "/img/flags/switzerland-icon.svg"
        };
        flagIcon.src = flagIcons[priceCurrencySelect.value] || "";

        updatePrice()
    })

    priceFilterPillows.forEach(pillow => {
        pillow.addEventListener('click', () => {
            setActivePillow(pillow);
            filters.date = pillow.id;
            updatePrice();
        });
    });
}

function setActivePillow(activePillow) {
    priceFilterPillows.forEach(pillow => pillow.classList.remove('active'));
    activePillow.classList.add('active');
}

function updatePrice() {
    const price = tradePeaks[filters.date][filters.currency].toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    priceElement.innerHTML = price;
}

getPriceData();