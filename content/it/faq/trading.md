# FAQ Scambi

:::details Come posso essere sicuro di ricevere i bitcoin / i soldi?

Quando si effettua un'offerta di vendita, il venditore invia i bitcoin a un indirizzo controllato da lui e da Peach chiamato (deposito). I bitcoin possono essere spostati da qui solo se entrambi firmano l'operazione. Ciò garantisce che:

- Il venditore non può spostare i bitcoin da solo
- Peach non può rubare i bitcoin
- Il compratore non riceve i bitcoin fino a pagamento effettuato
- Il venditore può riavere i bitcoin indietro se il compratore non risponde

Se lo scambio non si conclude normalmente, questo indirizzo passa automaticamente sotto il completo controllo di Peach dopo circa 30 giorni (per essere precisi: quando sono stati estratti 4320 blocchi di bitcoin). Ciò garantisce che:

- L'acquirente può ottenere i bitcoin se può dimostrare di aver effettuato il pagamento ma il venditore non risponde
- I bitcoin non rimangano bloccati se accade qualcosa al venditore

Questo è il punto più importante per garantire la sicurezza del tuo scambio. Oltre a ciò, abbiamo anche un elaborato sistema di reputazione che ti aiuta a identificare le persone che hanno utilizzato Peach in modo affidabile e per molto tempo.
:::

:::details Perché c'è un limite di scambio?

Le normative svizzere stabiliscono che una persona può acquistare fino a 1000CHF di bitcoin al giorno senza fornire la propria identificazione al venditore. Poiché preferiamo evitare di finire in prigione, applichiamo questo limite nell'app.

Tutti i tuoi dati di pagamento vengono memorizzati sul tuo telefono, quindi non possiamo vederli. Quello che possiamo vedere è l'hash\* dell'ID del tuo telefono e dei tuoi dati di pagamento. Questo ci consente di bloccare qualsiasi transazione che superi il limite personale.

\* Un hash è un dato reso irriconoscibile, simile alla crittografia. Gli stessi dati porteranno sempre allo stesso hash. Ciò significa che non sappiamo quali sono i dati, ma saremo in grado di individuare se gli stessi dati vengono utilizzati due volte.
:::

:::details C'è un modo per acquistare/vendere più del limite di scambio?

Se sei un compratore o un venditore con un alto volume di scambi, inviaci una email a [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Quali sono le commissioni per scambiare su Peach?

Peach addebita al compratore una commissione pari al 2% dell'importo totale scambiato. Quando effettui uno scambio su Peach, stai effettuando transazioni sulla blockchain di Bitcoin, il che comporta commissioni di transazione. Alla fine della tuo scambio puoi sempre visualizzare i dettagli completi delle commissioni, che potrebbe figurare come segue:

![Dettagli dello scambio](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Come posso annullare un'offerta o uno scambio?

Puoi annullare le tue offerte e scambi facendo clic sulla X rossa in alto sullo schermo, quando è disponibile:

![Annulla scambio](/img/faq/trading/cancel.png)

Detto ciò, questo spesso comporta delle conseguenze. Prima di fare match a qualcuno, puoi annullare le offerte in qualsiasi momento. Dopo il match però, la tua reputazione sarà influenzata negativamente. Inoltre, come venditore, dovrai chiedere il permesso al compratore per annullare la transazione in quanto potrebbe già aver effettuato il pagamento!
:::

:::details Perché ho ricevuto meno sats di quanti pensavo di acquistare?

Peach addebita una commissione del 2% al compratore, il che significa che riceverai meno sats rispetto all'importo dello scambio. Inoltre, dovrai pagare le commissioni di rete Bitcoin. La tua transazione potrebbe apparire come segue:

![Dettagli dell'acquisto](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Cosa succede se non voglio usare il wallet Peach per il pagamento / rimborso?

Naturalmente, sei libero di utilizzare il tuo wallet esterno se lo desideri. Tuttavia, consigliamo vivamente di utilizzare il wallet Peach, in quanto è il modo più semplice per effettuare una transazione. Puoi sempre inviare i fondi a qualsiasi altro wallet esterno.

Se desideri aggiungere il tuo wallet esterno, puoi disabilitare "pagamento al wallet Peach" e impostare un indirizzo di pagamento personalizzato:

![Disabilita wallet](/img/faq/trading/disablewallet.png)

Quando effettui uno scambio, dovrai firmare un messaggio per dimostrare di essere il proprietario di questo wallet, come richiesto dalla normativa svizzera.

Stiamo lavorando al supporto xpub, molto presto sarà disponibile, ma per ora dovrai modificare manualmente questo indirizzo se non desideri riutilizzarlo.

:::

:::details Come viene calcolato il prezzo del Bitcoin su Peach?

Il prezzo di BTC che mostriamo su Peach è una media del prezzo di BTC su exchange centralizzati.
:::

:::details Come sbloccare una transazione ferma a causa delle basse commissioni di rete?
Dipende dal tipo di transazione di cui stiamo parlando. Ecco un elenco di tutte le transazioni che possono avvenire su Peach e le soluzioni per aumentarne le commissioni:

1. Transazione per finanziare il deposito al fine di pubblicare un'offerta di vemdita:
> Se hai finanziato il deposito dal Wallet Peach, puoi effettuare RBF (Replace-By-Fee) per incrementare le commissioni di rete.
> Se hai finanziato il deposito da un wallet esterno, verifica se supporta RBF (Replace-By-Fee) per aumentare le commissioni di rete.

2. Transazione di rilascio del deposito (acquisto di Bitcoin):
> Se il tuo indirizzo di ricezione appartiene al Wallet Peach, puoi ritirare l'importo totale su un tuo wallet esterno usando CPFP (Child Pay For Parent) impostando commissioni più elevate da Impostazioni → Commissioni di rete
> Se il tuo indirizzo di ricezione è di un wallet esterno, puoi utilizzare CPFP se supportato dal tuo wallet.

3. Invio di una transazione dal Wallet Peach a un altro wallet:
> RBF (Replace-By-Fee) dal Wallet Peach dai dettagli della tua transazione!
:::
