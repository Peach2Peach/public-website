window.addEventListener('load', async function() {
  // Registrazione del Service Worker
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      // Registrazione del Service Worker avvenuta con successo
      console.log('Service Worker registrato con successo:', registration);
    } catch (error) {
      // Registrazione del Service Worker fallita
      console.error('Registrazione del Service Worker fallita:', error);
    }
  }

  // Codice per caricare e processare il contenuto Markdown
  const markdownFunction = marked.parse || marked.marked || null;

  if (markdownFunction) {
    console.log('Libreria marked.js caricata correttamente come funzione.');

    const lang = navigator.language || 'en';
    const contentPaths = [`/${lang}/index.html`]; // Assicurati che questo percorso sia corretto

    // Aggiungi i percorsi principali per tutte le lingue disponibili
    const MAIN_PATHS = [
      '/blog',
      '/for-meetups',
      '/for-businesses/',
      '/peach-for-businesses/',
      '/support/',
      '/buy-btc-with-cash/',
      '/how-it-works/',
      '/buy-btc-with-cash/',
      '/how-to-buy-btc-no-kyc/'
    ];
    const LANGUAGES = ['es', 'de', 'it', 'fr', 'el', 'hu', 'nl', 'pl', 'pt', 'sw', 'uk'];
    
    MAIN_PATHS.forEach(path => {
      LANGUAGES.forEach(lang => {
        contentPaths.push(`/${lang}${path}`);
      });
    });

    for (const contentPath of contentPaths) {
      try {
        const response = await fetch(contentPath);
        const text = await response.text();
        // Converti il contenuto Markdown in HTML
        const htmlContent = markdownFunction(text);
        // Crea un div per ogni contenuto e iniettalo nel body
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = htmlContent;
        document.body.appendChild(contentDiv);
      } catch (error) {
        console.error(`Errore nel caricamento del file Markdown da ${contentPath}:`, error);
      }
    }
  } else {
    console.error('La libreria marked.js non è stata caricata correttamente.');
  }
});