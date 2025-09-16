# FAQ sul Commercio

:::details Come posso essere sicuro di ricevere i bitcoin / i soldi?

Quando crei un’offerta di vendita o accetti un’offerta di acquisto, il venditore invia i bitcoin a un indirizzo controllato sia da lui che da Peach: i bitcoin possono essere spostati solo se entrambi firmano. Questo garantisce che:

- Il venditore non possa spostare i bitcoin (indietro) da solo  
- Peach non possa rubare i bitcoin  
- L’acquirente non riceva i bitcoin fino a quando non viene effettuato il pagamento  
- Il venditore possa riavere i bitcoin se l’acquirente non risponde  

Se lo scambio non si risolve normalmente, questo indirizzo passa automaticamente sotto il pieno controllo di Peach dopo circa 30 giorni (più precisamente: quando sono stati minati 4320 blocchi di bitcoin). Questo garantisce che:

- L’acquirente possa ricevere i bitcoin se può dimostrare di aver pagato ma il venditore non risponde  
- I bitcoin non rimangano bloccati se succede qualcosa al venditore  

Questa è la parte più importante per mettere al sicuro il tuo scambio. In aggiunta, abbiamo anche il nostro sofisticato sistema di reputazione che ti aiuta a identificare utenti che utilizzano Peach in modo affidabile da tempo.
:::

:::details Perché esiste un limite di trading?

Le normative svizzere stabiliscono che una persona può acquistare fino a 1000 CHF di bitcoin al giorno senza fornire la propria identità al venditore. Poiché preferiamo non finire in prigione, applichiamo questo limite nell’app.

Tutti i tuoi dati di pagamento sono memorizzati sul tuo telefono, quindi non possiamo vederli. Quello che possiamo vedere è un hash\* dell’ID del tuo telefono e dei tuoi dati di pagamento. Questo ci permette di bloccare ogni scambio che superi il limite personale.

\* Un hash è un dato reso irriconoscibile, simile a una crittografia. Gli stessi dati generano sempre lo stesso hash. Questo significa che non sappiamo quali siano i dati, ma possiamo rilevare se vengono usati due volte.
:::

:::details C’è un modo per comprare/vendere oltre il limite?

Se sei un venditore ad alto volume, inviaci una mail a [$contactEmail$](mailto:$contactEmail$)!  
Ti verrà richiesto di seguire una procedura KYC e i tuoi limiti verranno rimossi.
:::

:::details Quali sono le commissioni per fare trading su Peach?

Peach addebita all’acquirente il 2% del volume della transazione. Quando fai trading su Peach, effettui transazioni sulla blockchain di Bitcoin, il che comporta delle commissioni di rete. Alla fine della transazione puoi sempre vedere la struttura completa delle commissioni, che può apparire così:

![Dettaglio Operazione](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Come posso annullare un’offerta o una transazione?

Puoi annullare le tue offerte e transazioni cliccando sulla X rossa in alto nello schermo, quando disponibile:

![Annulla Operazione](/img/faq/trading/cancel.png)

Detto ciò, spesso questo ha conseguenze. Prima di abbinarti con qualcuno, puoi annullare in qualsiasi momento. Dopo l’abbinamento, invece, la tua reputazione sarà influenzata negativamente. Inoltre, come venditore, dovrai chiedere il permesso all’acquirente per annullare la transazione. Potrebbe aver già effettuato il pagamento!
:::

:::details Perché ho ricevuto meno sats di quelli che pensavo di acquistare?

Peach addebita una commissione del 2% all’acquirente, il che significa che riceverai meno sats rispetto alla quantità concordata. Inoltre, dovrai pagare le commissioni di rete di Bitcoin. Ad esempio, la tua operazione potrebbe essere così:

![Dettaglio Acquisto](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details E se non voglio usare il wallet Peach per il pagamento / rimborso?

Ovviamente sei libero di usare il tuo wallet se preferisci. Consigliamo comunque vivamente il wallet Peach, in quanto è il modo più semplice per effettuare una transazione. Puoi poi trasferire i fondi su qualsiasi altro wallet.

Se vuoi aggiungere il tuo wallet, puoi disattivare “pagamento su wallet Peach” e impostare un indirizzo di pagamento personalizzato:

![Disattiva Wallet](/img/faq/trading/disablewallet.png)

Quando effettui una transazione, dovrai firmare un messaggio per confermare che controlli quel wallet, come richiesto dalle normative svizzere.

A breve introdurremo il supporto xpub, ma per ora dovrai modificare manualmente l’indirizzo se non vuoi riutilizzarlo.
:::

:::details Come viene calcolato il prezzo di Bitcoin su Peach?

Il prezzo BTC che mostriamo su Peach è una media dei prezzi BTC provenienti da exchange centralizzati.
:::

:::details Cosa succede con le valute in forte inflazione come Argentina, Venezuela, ecc.?

Le valute ad alta inflazione subiscono una forte volatilità, quindi i prezzi che trovi nei vari exchange possono differire. Peach mostra il prezzo secondo una media dei prezzi BTC da diverse fonti.
:::

:::details Come accelerare una transazione bloccata a causa di basse commissioni di mining?

Dipende dal tipo di transazione. Ecco un elenco delle transazioni possibili su Peach e le relative soluzioni per aumentare le commissioni:

1. Transazione per finanziare l’escrow per pubblicare un’offerta di vendita o accettare un’offerta di acquisto  

- Se hai finanziato l’escrow dal wallet Peach, puoi usare RBF (Replace-By-Fee) per aumentare le commissioni  
- Se hai finanziato l’escrow da un wallet esterno, verifica se supporta RBF  

2. Transazione di rilascio dall’escrow (acquisto di Bitcoin)  

- Se il tuo indirizzo di ricezione è dal wallet Peach, puoi prelevare l’importo totale su un tuo wallet esterno con commissioni più alte (Impostazioni > Commissioni di rete) – tecnica CPFP  
- Se il tuo indirizzo di ricezione è da un wallet esterno, puoi usare la tecnica CPFP se supportata  

3. Transazione di invio dal wallet Peach a un altro wallet  

- RBF (Replace-By-Fee) dal wallet Peach nei dettagli della transazione!
  :::

:::details Cos’è GroupHug?
GroupHug è semplicemente il termine che abbiamo dato all’operazione di raggruppare le transazioni di diversi utenti, così da evitare che ciascuno paghi commissioni singole. Per una spiegazione più dettagliata, consulta il nostro [post sul blog](https://peachbitcoin.com/blog/group-hug).
:::

:::details Se ho una sola offerta di acquisto attiva verrà eseguita immediatamente?

No, il tuo pagamento sarà inserito in una coda. Il pagamento verrà effettuato quando abbastanza utenti partecipano al batch. Il numero di partecipanti richiesti è visibile nelle informazioni sul pagamento in sospeso. Lì puoi anche vedere quante posizioni del batch attuale sono occupate e un ETA che indica il tempo massimo di attesa.
:::

:::details Come funziona se ho più offerte di acquisto in corso?

Come già menzionato, i tuoi pagamenti saranno messi in coda per essere raggruppati con altri partecipanti.
:::

:::details Esiste un limite al numero di partecipanti al batch?

No, i batch possono includere anche più partecipanti oltre al minimo richiesto. Non è un limite rigido, ma una soglia. Appena si raggiunge il minimo, raccogliamo tutti i psbt e li raggruppiamo per eseguire la transazione, riducendo le commissioni per ogni partecipante.
:::

:::details Come firmare un indirizzo esterno?
Segui questi passaggi per firmare l’indirizzo di ricezione quando acquisti Bitcoin su un wallet esterno:

_Nota: I primi 2 passaggi sono utili se vuoi **sempre** ricevere i tuoi fondi su indirizzi esterni. Se vuoi farlo solo una volta, o a volte usare il wallet Peach, inizia dal passaggio 3._

1. Vai nelle impostazioni  

- disattiva il wallet Peach  
- vai all’indirizzo di pagamento  

2. Incolla il nuovo indirizzo di ricezione  

3. Segui il processo per pubblicare la tua offerta di acquisto e prima di pubblicarla assicurati di scegliere l’indirizzo esterno (clicca sulla piccola icona del wallet in alto a destra nella schermata di riepilogo dell’offerta).  

4. Una volta confermata l’offerta, apparirà il messaggio da firmare. Copialo e torna al tuo wallet.  

5. Cerca l’opzione “firma/verifica”\* e incolla:  

- il tuo indirizzo di ricezione  
- il messaggio Peach  

6. Clicca su firma e apparirà la firma. Copiala.  

7. Incolla la firma nel wallet Peach e conferma.  

8. La tua offerta è pubblicata.  

_\* Avvertenza: non tutti i wallet supportano la funzione firma/verifica._  
Peach consiglia Blue Wallet, Sparrow o Samourai Wallet. Altre opzioni includono Ledger e Trezor (Hardware Wallets), Bitcoin Core ed Electrum.  

Puoi anche trovare un tutorial passo passo su come firmare un messaggio con Blue Wallet sul nostro canale Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Come usare CPFP per accelerare transazioni bloccate?

Segui i passaggi in questo video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) per accelerare le transazioni bloccate usando CPFP nell’app Peach.
:::

:::details Come funziona finanziare più offerte di vendita da un wallet esterno?

Quando vuoi finanziare più offerte di vendita contemporaneamente, l’app genera un indirizzo intermedio dal tuo wallet Peach. Una volta che i bitcoin arrivano a questo indirizzo, viene creata una nuova transazione per ogni escrow. Ad esempio, se vuoi finanziare 5 offerte di vendita, verranno inviate 5 transazioni a diversi indirizzi escrow.
:::
