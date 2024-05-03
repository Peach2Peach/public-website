---
keywords:
  - vendita di bitcoin
  - escrow
  - transazione batch
tags:
  - Come Fare
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  A partire dalla versione 0.3.0, Peach App introduce la possibilità di creare e finanziare più offerte di vendita. Ecco come funziona.
---

# Come Finanziare Più Offerte di Vendita

A partire dalla versione 0.3.0, Peach App introduce la possibilità di creare e finanziare più offerte di vendita. Questa funzione offre due vantaggi principali:

- **risparmio di tempo**, niente più ripetuti tap sui pulsanti
- **risparmio di commissioni**, finanziare tutti gli escrow in una singola transazione: ad esempio raggruppando 5 pagamenti in una sola transazione è possibile risparmiare facilmente il 60% sulle commissioni di transazione.

## Come Funziona

### Finanziamento dal portafoglio di Peach

Finanziare le tue offerte di vendita dal tuo portafoglio di Peach è l'opzione più semplice. Quando clicchi sul pulsante "finanzia dal portafoglio di Peach", l'applicazione Peach si occupa di tutto per te. Crea una transazione di finanziamento che invia automaticamente i fondi necessari a ciascun indirizzo di escrow.

### Finanziamento da portafoglio esterno

Se preferisci utilizzare un portafoglio esterno, puoi comunque finanziare più offerte di vendita, ma comporta un processo a due fasi:

1. **Invia sats a un Indirizzo Interno del Portafoglio di Peach**: L'indirizzo che vedi è un indirizzo interno del portafoglio di Peach appositamente registrato a questo scopo. L'applicazione Peach tiene d'occhio questo indirizzo fino a quando le tue offerte non vengono cancellate o l'indirizzo viene finanziato.
2. **Finanziamento e Distribuzione**: Una volta che i sats arrivano a questo indirizzo interno, la logica dell'applicazione Peach divide i fondi tra le offerte di vendita che hai creato e li invia agli indirizzi di escrow individuali.

## Domande Frequenti

Mentre leggi, potresti averti chiesto una di queste domande. Anch'io me le sono chieste, quindi mi piacerebbe darti una risposta subito.

:::details Perché non un singolo escrow per molte offerte di vendita?
Infatti, abbiamo considerato come possiamo avere un solo escrow da cui molte offerte di vendita possono essere soddisfatte.
Il motivo per cui non usiamo un unico escrow è che renderebbe molto più difficile effettuare i pagamenti.
Nell'attuale configurazione, gli escrow vengono pagati completamente in una singola transazione ed è fatto. Tuttavia, se dovessimo pagare un escrow parzialmente al compratore A, la natura della transazione bitcoin ci lascerebbe con un output di cambio dei sats che non sono ancora stati spesi. Per semplicità, diciamo che il cambio torna allo stesso indirizzo di escrow.
Ci troviamo ancora con un altro problema da risolvere: transazioni in sospeso. Immagina che la prima transazione di rilascio al compratore A sia in sospeso a 8 sats / vB ma la rete attualmente elabora solo transazioni con 21 sats / vB e superiori. Se iniziamo un'altra transazione di rilascio al compratore B mentre non è ancora confermata, il compratore B dovrà spendere più commissioni di transazione per far confermare la transazione più velocemente.
:::

:::details Perché non posso creare 2 offerte di vendita contemporaneamente?
Per il processo a due fasi, le commissioni vengono risparmiate per finanziare 3 escrow o più. Per evitare di incorrere in commissioni aggiuntive, non consentiamo il finanziamento raggruppato di due offerte di vendita.
:::

:::details Posso raggruppare le mie stesse transazioni, devo fare il processo a due fasi?
Al momento, sì. Ma rilasceremo presto un aggiornamento per creare più offerte di vendita senza mostrare l'indirizzo di finanziamento intermedio.
:::

## Note Finali

Se vuoi saperne di più sulle funzionalità di Peach, o leggere alcuni dei nostri altri articoli, puoi trovarli qui!

[Come Ripristinare Portafogli Bitcoin Utilizzando una Frase Seed](https://peachbitcoin.com/it/blog/how-to-restore-peach-wallet/)

[Come Finanziare Più Offerte di Vendita](https://peachbitcoin.com/it/blog/funding-multiple-sell-offers/)

[Come Acquistare e Vendere Bitcoin con Contanti Utilizzando Peach](https://peachbitcoin.com/it/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Come Aggiungere un Nuovo Metodo di Pagamento sull'App Peach](https://peachbitcoin.com/it/blog/how-to-add-a-payment-method/)

[Peach si Espande nel Sud del Mondo!](https://peachbitcoin.com/it/blog/peach-expands-to-the-global-south/)

[Resa Pubblica della Nostra Peach-API](https://peachbitcoin.com/it/blog/making-our-peach-api-public/)

[Funzionalità Completa del Portafoglio](https://peachbitcoin.com/it/blog/full-wallet-functionality/)

[Cos'è GroupHug?](https://peachbitcoin.com/it/blog/group-hug/)

[Perché la Serie P2P? Capitolo 1](https://peachbitcoin.com/it/blog/why-p2p-chapter-1/)

[Perché la Serie P2P? Capitolo 2](https://peachbitcoin.com/it/blog/why-p2p-chapter-2/)

[Perché la Serie P2P? Capitolo 3](https://peachbitcoin.com/it/blog/why-p2p-chapter-3-circular-economies/)

[Perché la Serie P2P? Capitolo 4](https://peachbitcoin.com/it/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/it/blog/peach-for-meetups/)

Se vuoi saperne di più su di noi, controlla i nostri social, o semplicemente [contattaci](mailto:hello@peachbitcoin.com) (utilizza la nostra [chiave PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) se possibile), saremo felici di sentirti!

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continua a diffondere la parola su Peach, chissà quando troverai l'incontro della tua vita!
