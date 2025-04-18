document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.payment-button');
    const allGrids = document.querySelectorAll('.payment-grid_894');

    // Funzione per attivare il tab corretto
    const activateTab = (targetId) => {
        allGrids.forEach(grid => {
            grid.classList.toggle('active', grid.id === targetId);
        });

        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.target === targetId);
        });
    };

    // Aggiungere event listener ai pulsanti
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(this.dataset.target);
        });
    });

    // Attivare automaticamente il primo tab disponibile
    const firstTab = tabs[0];
    if (firstTab) {
        activateTab(firstTab.dataset.target);
    }
});
