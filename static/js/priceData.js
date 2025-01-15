let tradePeaks = []
let filters = {
    date: '24h',
    currency: 'EUR'
}

const priceElements = document.querySelectorAll('.new-teaser-price');
const priceCurrencySelects = document.querySelectorAll('#priceCurrencySelect')
const priceFilterPillows = document.querySelectorAll('.new-teaser-filters-pillow');
const flagIcons = document.querySelectorAll('#flagIcon')

async function getPriceData() {
    const response = await fetch(`https://peach-cors-proxy.vercel.app/v1/market/TradePricePeaks`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    tradePeaks = (await response.json()).tradePeaks;

    const initialPillow = document.getElementById(filters.date);
    setActivePillow(initialPillow);
    updatePrice();

    priceCurrencySelects.forEach(priceCurrencySelect => {
        priceCurrencySelect.addEventListener('change', () => {
            filters.currency = priceCurrencySelect.value
    
            const flagIconsMap = {
                'EUR': "/img/flags/europe-icon.svg",
                'USD': "/img/flags/united-states-icon.svg",
                'CHF': "/img/flags/switzerland-icon.svg"
            };

            flagIcons.forEach(flagIcon => {
                flagIcon.src = flagIconsMap[priceCurrencySelect.value] || "";
            });
    
            updatePrice()
        })
    });

    priceFilterPillows.forEach(pillow => {
        pillow.addEventListener('click', () => {
            setActivePillow(pillow);
            filters.date = pillow.id;
            updatePrice();
        });
    });
}

function setActivePillow(activePillow) {
    priceFilterPillows.forEach(pillow => {
        if (pillow.id == activePillow.id) {
            pillow.classList.add('active');
        } else {
            pillow.classList.remove('active')
        }
    });
}

function updatePrice() {
    const price = tradePeaks[filters.date][filters.currency].toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    priceElements.forEach(element => {
        element.innerHTML = price;
    });
}

getPriceData();