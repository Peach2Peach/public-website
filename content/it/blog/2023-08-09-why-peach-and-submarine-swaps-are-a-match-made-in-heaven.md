---
keywords:
  - Bitcoin
  - acquistare bitcoin
  - vendere bitcoin
  - app Peach
  - P2P
  - scambio P2P
  - come acquistare bitcoin
  - come vendere bitcoin
  - peer to peer
tags:
  - Prodotto
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin è denaro per persone libere. Crediamo che ogni singolo essere umano abbia il diritto di scegliere quale denaro usare per conservare la sua ricchezza, il risultato del suo lavoro, del suo tempo e della sua energia.
  La missione di Peach è contribuire alla diffusione di Bitcoin nelle mani delle persone.
---

# LN <-> On-Chain Swaps, di @swissnode

## Perché Peach e gli scambi sottomarini sono una combinazione perfetta

Sono stato piuttosto esplicito nel mio sostegno a Peach e ho persino messo qualche sats dove c'è la mia bocca dopo essere stato convinto quasi due anni fa della genialità di ciò che Peach offre alla comunità Bitcoin: un modo semplice per il semplice stacker di accumulare i suoi sats senza la necessità di identificarsi presso una piattaforma per farlo.

Mi sono reso conto, in quanto gestore del nodo lightning SwissNode, che l'abbinamento delle valute non deve necessariamente limitarsi a uno scambio fiat-Bitcoin. Ci sono infatti casi d'uso che vanno oltre. Benvenuti nel mondo degli scambi sottomarini onchain-offchain.

Uno scambio sottomarino è, semplicemente, un modo per convertire i sats che il partner A ha onchain con i sats che il partner B potrebbe avere sulla Lightning Network (LN). A guadagna sats tramite una fattura LN e B guadagna sats onchain tramite una transazione usuale sulla Blockchain.

Ci sono due motivi principali per voler fare questo. Un gestore di nodi potrebbe semplicemente volere più della sua liquidità sul lato lightning, forse per bilanciare la proporzione di sats detenuti nella capacità del canale "locale" e quelli detenuti nella capacità del canale "remoto". Lascio lì, questo è ovviamente un aspetto più tecnico dello scambio sottomarino. Al contrario, un gestore di nodi potrebbe voler convertire parte della sua liquidità dalla rete lightning in "utxos" onchain. Questo è successo a me quando un controparte voleva il pagamento solo tramite la blockchain invece che tramite la lightning, ad esempio.

Il secondo motivo per volere uno scambio del genere è, tuttavia, qualcosa che quasi tutti i Bitcoiners possono o DOVREBBERO gustarsi: la capacità di interrompere la tracciabilità dell'insieme di utxo che possiedono in modo che nessuna entità abbia la capacità di sapere cosa è successo ai sats precedentemente detenuti onchain. Questo non può essere sottolineato abbastanza! Una volta che i sats nel tuo utxo sono passati, possiedi quindi la tua liquidità in vari canali che sono praticamente impossibili da esaminare. La natura della lightning è tale che la consolidata contabilità a partita doppia dei canali utilizzati significa che solo i tuoi partner di canale sono in grado di sapere quanti sats possiedi dall'altro lato del canale. In teoria potresti scambiare quei sats lightning di nuovo e poi essere in possesso di un utxo che non può affatto essere tracciato al suo proprietario!

Perché Peach vorrebbe fare questo? ... vi chiederete... Ecco il punto. Offrendo questo servizio quasi gratuitamente, Peach diventa improvvisamente ESTREMAMENTE attraente per migliaia di proprietari di nodi che hanno bisogno di scambiare liquidità onchain/offchain. Attualmente esistono servizi come il servizio LOOP di Lightning Labs ma pagherai parecchio per il privilegio. In questo modo Peach è sicuro di guadagnare centinaia se non migliaia di nuovi utenti che hanno bisogno di questo servizio. Anche offrendolo gratuitamente, avrebbero a bordo molti che sono venuti per gli scambi ma poi hanno scoperto il modo migliore per accumulare p2 senza kyc.

Come funziona questo nella pratica? Molto semplicemente, non differisce molto dal solito caso d'uso di Peach: Il venditore creerà un escrow onchain con Peach per un certo numero di sats. L'unica deviazione dal percorso normale è che ora deve decidere: chiederà i sats lightning tramite LNURL. Consente al venditore di determinare un margine (-21% < x < 21%). Potrebbe essere un'idea nelle versioni future rendere anche le normali fatture LN una vendita senza margine. Una volta fatto questo, inizia il solito processo... Una volta che l'escrow è stato creato e confermato, un acquirente può indicare la sua volontà di acquistare quei sats onchain con un "match". Se il venditore "doppio matcha", l'acquirente deve inviare i sats off-chain tramite LNURL. Una volta confermato dal venditore, l'escrow rilascerà i sats onchain all'acquirente. I processi usuale si applicano ancora nel caso in cui l'acquirente o il venditore contestino l'azione dell'altro. Peach determinerà ciò che è ciò e rilascerà l'escrow secondo il normale processo di disputa consolidato e collaudato.

@swissnode

## Note Finali

Se vuoi saperne di più sulle funzionalità di Peach, o leggere alcuni dei nostri altri articoli, puoi trovarli qui!

[Come recuperare i portafogli Bitcoin utilizzando una frase di seed](https://peachbitcoin.com/it/blog/how-to-restore-peach-wallet/)

[Come Finanziare Più Offerte di Vendita](https://peachbitcoin.com/it/blog/funding-multiple-sell-offers/)

[Come acquistare e vendere Bitcoin con contanti utilizzando Peach](https://peachbitcoin.com/it/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Come aggiungere un nuovo metodo di pagamento sull'app Peach](https://peachbitcoin.com/it/blog/how-to-add-a-payment-method/)

[Peach si espande nel Sud del Mondo!](https://peachbitcoin.com/it/blog/peach-expands-to-the-global-south/)

[Rendiamo il nostro Peach-API pubblico](https://peachbitcoin.com/it/blog/making-our-peach-api-public/)

[Funzionalità completa del portafoglio](https://peachbitcoin.com/it/blog/full-wallet-functionality/)

[Cos'è GroupHug?](https://peachbitcoin.com/it/blog/group-hug/)

[Perché la serie P2P? Capitolo 1](https://peachbitcoin.com/it/blog/why-p2p-chapter-1/)

[Perché la serie P2P? Capitolo 2](https://peachbitcoin.com/it/blog/why-p2p-chapter-2/)

[Perché la serie P2P? Capitolo 3](https://peachbitcoin.com/it/blog/why-p2p-chapter-3-circular-economies/)

[Perché la serie P2P? Capitolo 4](https://peachbitcoin.com/it/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x incontri](https://peachbitcoin.com/it/blog/peach-for-meetups/)

Se vuoi saperne di più su di noi, dai un'occhiata ai nostri social, o semplicemente [contattaci](mailto:hello@peachbitcoin.com) (utilizza la nostra [chiave PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) se possibile), saremo felici di sentirti!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continua a diffondere la parola di Peach, chissà quando troverai l'abbinamento della tua vita!
