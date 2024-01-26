# FAQ Privacy

:::details Quali informazioni raccoglie Peach su di me?

Cerchiamo di conservare il minimo assoluto di dati possibile sui nostri utenti. Di seguito è riportato un breve riepilogo di ciò che abbiamo sui nostri server:

- L'hash\* dell'ID del tuo telefono
- L'hash dei tuoi dati di pagamento
- Le tue chat crittografate
- I dati dei tuoi scambi (tipo di metodo di pagamento utilizzato, importo dell'acquisto, ecc.)
- Dati di utilizzo (se hai dato il consenso)

Per una panoramica completa, consulta la nostra [politica sulla privacy](/privacy-policy/).

\* Un hash è un dato reso irriconoscibile, simile alla crittografia. Gli stessi dati porteranno sempre allo stesso hash. Ciò significa che non sappiamo quali sono i dati, ma saremo in grado di individuare se gli stessi dati vengono utilizzati due volte.
:::

<!--
:::details What info is sent when I share usage data?
Give a list
:::
-->

:::details Chi può vedere i miei dati di pagamento?

Solo la controparte può vedere i tuoi dati di pagamento; vengono inviati tramite i server di Peach, ma sono completamente crittografati end-to-end (come con la maggior parte delle app di chat), in modo che noi non possiamo vederne il contenuto.

Quando inizi una disputa, i tuoi dettagli di pagamento, quelli della controparte e la cronologia della chat saranno visibili al mediatore Peach assegnato.
:::

:::details Come verificare l'APK?

Segui questi passaggi per verificare che l'APK che hai scaricato sia il vero APK di Peach:

- Scarica l'APK che desideri installare dal sito web, insieme alla firma e al manifest (tutto può essere trovato su https://peachbitcoin.com/apk)

- Scarica la chiave PGP di Peach da [qui](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) (può essere trovata anche in fondo al sito web)

- Genera il checksum del file APK scaricato e confrontalo con il checksum nel manifest.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(sostituisci app-prod-arm64-v8a-release.apk con il nome del tuo file). Dovrebbe essere lo stesso nome indicato nel manifest. In caso contrario, contattaci e assicurati di non installare quell'applicazione sul tuo dispositivo. Per l'esempio fatto sopra, dovresti visualizzare il seguente output:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Se confrontiamo questo con quello trovato nel file manifest-peach.txt, possiamo verificare che corrispondono.

- Aggiungi la chiave Peach al tuo portachiavi.
```
gpg --import PGP-peach.asc
```
(assicurati di sostituire PGP-peach.asc con il nome corretto del file, di solito sarà 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Verifica le firme che hai scaricato in precedenza con il seguente comando:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
Nell'output dovresti vedere la seguente riga:
```
gpg: Good signature from "hello@peachbitcoin.com <hello@peachbitcoin.com>" [unknown]
```
:::

:::details Come firmare un indirizzo esterno?
Segui questi passaggi per firmare l'indirizzo di ricezione quando acquisti Bitcoin e li ricevi su un wallet esterno:

_Nota: i primi 2 passaggi sono utili se desideri **sempre** ricevere i tuoi fondi in un indirizzo esterno. Se vuoi farlo solo una volta, o desideri utilizzare occasionalmente il wallet Peach, inizia dal passaggio 3._

1. Vai in impostazioni
   - disabilita il wallet Peach
   - vai all'indirizzo di pagamento

2. Incolla il nuovo indirizzo di ricezione

3. Continua il processo per pubblicare la tua offerta di acquisto e, prima di pubblicarla, assicurati di selezionare ricevere su un indirizzo del wallet esterno (clicca sull'icona del wallet in alto a destra sulla schermata di riepilogo dell'offerta).

4. Una volta confermata la tua offerta di acquisto, apparirà il messaggio per firmare il tuo indirizzo. Copialo e torna al tuo wallet esterno.

5. Cerca l'opzione "firma/verifica"* e incolla:
   - il tuo indirizzo di ricezione
   - il messaggio di Peach

6. Fai clic su firma e verrà visualizzata la firma. Copiala.

7. Incolla la firma nella schermata di Peach e fai clic su conferma.

8. La tua offerta è pubblicata.

_*Disclaimer: non tutti i wallet esterni supportano l'opzione di firma/verifica dell'indirizzo. Peach consiglia di utilizzare Blue Wallet, Sparrow o Samourai in quanto offrono tutti l'opzione di firma/verifica._
:::

:::details Taproot è supportato?

- Sì, puoi inviare a indirizzi Taproot dal portafoglio Peach.
- Puoi anche ricevere direttamente dall'escrow al tuo indirizzo Taproot esterno.

:::

:::details Come posso connettermi al mio nodo personale?

Collegarti al tuo nodo migliora la privacy, poiché tutte le transazioni vengono instradate nella rete Bitcoin tramite il tuo nodo anziché quello di Peach.

Attualmente, Peach non supporta Tor, quindi devi utilizzare un IPv4 per collegarti al tuo nodo. Se non è aperto su Internet, puoi collegarti solo tramite la rete locale o tramite una VPN privata.

Guarda il nostro [tutorial video](https://www.youtube.com/watch?v=xtvq2i3mIYg) per imparare come collegarti al tuo nodo personale.

Se stai usando Umbrel, puoi utilizzare umbrel.{numero di porta} al posto dell'IP del tuo nodo.

:::


:::details Cos'è il controllo delle monete?

Il portafoglio Peach supporta il controllo delle monete o la gestione delle monete. L'obiettivo del controllo delle monete è mantenere le tue monete separate se lo desideri, per gestire la privacy.

Guarda il nostro video che spiega il controllo delle monete in dettaglio: [How to do coin control using the Peach Wallet](https://www.youtube.com/watch?v=zWwIekSv3U8)

:::