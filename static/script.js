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
      const contentPath = `/${lang}/index.html`; // Assicurati che questo percorso sia corretto
  
      try {
        const response = await fetch(contentPath);
        const text = await response.text();
        // Converti il contenuto Markdown in HTML
        const htmlContent = markdownFunction(text);
        // Inietta l'HTML nel div con id "content"
        document.getElementById('content').innerHTML = htmlContent;
      } catch (error) {
        console.error('Errore nel caricamento del file Markdown:', error);
      }
    } else {
      console.error('La libreria marked.js non è stata caricata correttamente.');
    }
  });  