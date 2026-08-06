---
keywords:
  - entropia Bitcoin
  - seed phrase
  - lista parole BIP39
  - come vengono generate le seed phrase
  - sicurezza autocustodia Bitcoin
  - generazione numeri casuali wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  Una guida peachy su cos'è davvero l'entropia, come funzionano le seed phrase, da dove arriva veramente la casualità e quanto sono sicure le tue 12 parole.
---

# Una guida peachy sull'entropia, le seed phrase e come stare al sicuro

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="Una pesca dei cartoni animati in salopette blu corre in un deserto di orologi molli, carte da gioco, calcolatrici e formule matematiche fluttuanti, inseguita da un dinosauro" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Trasparenza: questo articolo è stato scritto senza IA. L'immagine di copertina invece sì.*

## Cos'è l'entropia?

Per iniziare: l'entropia è una misura del caos.

Lo scopo non è dire che qualcosa ha X quantità di entropia, ma poter confrontare 2 cose e dire che una ha più entropia dell'altra.

Per esempio:

- un uovo rotto ha più entropia di un uovo perfetto
- una stanza in disordine ha più entropia di una stanza pulita

E le proprietà interessanti dell'entropia sono:

- è più facile aumentare l'entropia (creare caos) che invertirla (creare ordine)
- il mondo vive in una costante tendenza all'aumento dell'entropia

Ecco perché è più facile trovare qualcosa in una stanza ordinata che in una stanza in disordine, e perché la stanza diventa più disordinata con il tempo e devi spendere energia per pulirla.

La maggior parte delle cose nella nostra vita trae vantaggio da una bassa entropia. L'autocustodia di Bitcoin trae vantaggio da un'alta entropia. Ma possiamo dire che l'entropia è soggettiva. Se io conosco la mia seed phrase, l'entropia del mio wallet è molto bassa. È alta solo per tutti gli altri. Se dico a tutti 1 delle mie parole, sto riducendo l'entropia per loro, ma resta comunque piuttosto alta.

## Cos'è una seed phrase?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Cinque germogli in stadi di crescita crescenti che spuntano da terra scura" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(un seme che diventa pianta — la stessa idea dietro al "seed" di seed phrase)*

Prima di tutto: perché chiamarlo seed (seme)? Nei computer, la casualità viene da qualche parte. Se forniamo un seme, la casualità crescerà da lì, sempre nello stesso modo.

Una seed phrase è una convenzione per memorizzare un numero tra 0 e 340282366920938463463374607431768211455. Sì, è un numero grande, e 12 parole inglesi ti aiutano a memorizzare il tuo numero speciale lì dentro.

Il trucco è che questo numero potrebbe essere scritto in binario (qualcosa come 01110010101… ma molto lungo). Così la comunità Bitcoin ha deciso di creare una lista di parole inglesi e di associare a ciascuna una sequenza di 11 bit.

Per esempio:

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 cose interessanti:

- esistono liste di parole per inglese, portoghese, cinese, coreano, francese, spagnolo, italiano e ceco;
- per assicurarsi che le persone non sbaglino nell'inserire la propria seed phrase, c'è un sistema che ti avvisa se hai inserito una seed "sbagliata", così non puoi semplicemente sbagliare una delle tue parole, aprire un wallet vuoto e spaventarti.

## 12 parole bastano?

La quantità di numeri rappresentabili con le 12 parole è enorme, ed è considerata sicura. Se vuoi aiutarti a ricordare le 12 parole e le scrivi su un foglio in ordine casuale a casa tua, è ancora relativamente sicuro farlo: a qualcuno servirà moooolto tempo per provare tutte le combinazioni di quelle 12 parole.

Certo, più parole significano più spazio, quindi più difficile da indovinare. Ma a volte abbastanza è abbastanza.

Solo con 12 parole, un computer veloce impiegherebbe circa 10²² anni — all'incirca mille miliardi di volte l'età dell'universo — per controllare tutti quei numeri e "rubare" tutti i wallet Bitcoin da 12 parole. Se unisci l'intera potenza di mining di Bitcoin e la reindirizzi a indovinare le seed, ci vorrebbero comunque circa 11 miliardi di anni. E questo essendo generosi: i chip di mining sanno fare solo SHA-256, mentre controllare una singola seed phrase richiede migliaia di volte più lavoro di un singolo hash.

Per me, è sostenibile. Ma aggiungere una parola in più aumenta il tempo mooolto di più. Sta a te!

## Come vengono generate quelle seed?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Vignetta: durante un giro nel reparto contabilità viene presentato il generatore di numeri casuali, un troll che ripete nove, nove, nove, nove. Sei sicuro che sia casuale? È questo il problema con la casualità: non puoi mai esserne sicuro." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, di Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Casualmente. Tuttavia, la casualità è un'illusione: nulla è veramente casuale.

Ti ricordi quando eri a scuola e l'insegnante voleva che uno studente a caso andasse alla lavagna? Non sceglievano mai lo studente #1, ma lo studente #7 veniva sempre scelto "a caso".

I computer non possono produrre nulla di casuale. Ma possono generare pseudocasualità. Per esempio, possono usare i valori di temperatura del sistema degli ultimi 30 minuti, più la luce che entra dalla webcam, più la velocità di internet, più il comportamento di mouse/tastiera, ecc., come fonti di casualità. L'obiettivo è ottenere casualità da fonti praticamente impossibili da controllare.

Un esempio famoso è la casualità di Cloudflare che usa le lampade lava. Ne possiedono moltissime, hanno una webcam che le riprende costantemente, e i motivi imprevedibili delle bolle di lava vengono usati come fonte di casualità.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="Una parete con decine di lampade lava colorate disposte su scaffali nella hall di un ufficio" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(la parete di lampade lava di Cloudflare a San Francisco, filmata 24 ore su 24 come fonte di casualità)*

## Allora perché alcune seed sono state scoperte?

Riguardo all'incidente Coldcard, c'era un errore nel codice che usava una cattiva fonte di casualità. Una volta che gli hacker hanno notato che la casualità era solo una combinazione di fattori semplici, questo ha ristretto le possibilità ed è diventata una questione di cercare tra quei candidati.

Di nuovo: l'entropia è soggettiva. Non appena qualcuno ha un "indizio", l'entropia scende. Un altro indizio, e l'entropia scende ancora di più.

Esempio: immagina che io abbia una libreria molto alta, piena di libri. Ti dico che c'è una banconota da 5 euro nascosta in uno dei libri. Sarà molto difficile trovarla. Ma inizi a guardarti intorno e noti che non ho una scala per arrivare ai punti più alti dello scaffale. Quindi credi che la banconota da 5 euro debba essere nei libri raggiungibili senza scala. Concentri i tuoi sforzi sui candidati giusti e diventi 5 euro più ricco 🙂

## Come genera Peach le seed per il Peach Wallet?

Peach è un'app mobile, quindi ha accesso alla fonte pseudocasuale sicura del telefono. In parole semplici: si affida alla casualità del telefono, che è la stessa usata per molti altri aspetti di sicurezza del telefono.

Ma come ottiene il telefono quella casualità? Crea un calderone di casualità con valori fisici:

- il tempo di avvio di tutte le app/servizi del telefono + quanto ci hanno messo ad avviarsi (fino a un milionesimo di millisecondo)
- il rumore elettrico nei circuiti: altamente imprevedibile e molto sensibile alla temperatura
- come viene "toccato" il tuo telefono: il ritmo dei tocchi, la posizione esatta dei tocchi, quanto durano, ecc.
- i valori dell'accelerometro: quanto è stato scosso il tuo telefono, l'inclinazione attuale, le coordinate geografiche attuali e passate (altitudine inclusa)
- molte altre cose (es: intensità luminosa sulla/e fotocamera/e, suono dal microfono, ecc.)
- un po' del calderone di casualità precedente, da prima che il telefono venisse spento e riacceso

In altre parole: il tuo telefono sarebbe già stato hackerato se quella fonte di entropia fosse cattiva.

## Conclusione: sono al sicuro?

Alcune persone tirano i dadi per generare le proprie seed, il che è effettivamente una buona fonte di entropia (a meno che tu non abbia dadi truccati, e qualcuno abbia accesso a quei dadi truccati. Bruciali dopo averli usati, chi lo sa!?). Altri "si fidano" delle fonti digitali di casualità leggendo il codice usato per generarle, ma non tutti sono ingegneri. Puoi chiedere a un'IA di valutare se un certo software è buono per generare seed, ma in quel momento ti stai fidando dell'IA.

Gli hardware wallet non rendono la tua seed più difficile da indovinare, riducono solo il rischio che gli hacker accedano a un file che contiene le seed.

Bitcoin è difficile, essere proprietario del proprio denaro è difficile, ma ne vale la pena. Fai le tue ricerche, non seguire le mode, e andrà tutto bene.

Una cosa che consiglio: sviluppare la tecnica del Palazzo della Memoria, per conservare la tua seed phrase nella tua testa.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Copertina di un album che raffigura un gigantesco edificio di cemento a forma di testa, in piedi in un deserto sotto un sole pallido" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(la copertina dell'album musicale "Memory Palace", della band "Intervals")*

Happy peaching 🍑

---

## Note finali

Se vuoi saperne di più sulle funzionalità di Peach, o leggere qualcuno dei nostri altri articoli, li trovi qui!

[Ti serve un hardware wallet](https://peachbitcoin.com/it/blog/you-need-a-hw/)
[Come ripristinare il tuo Peach wallet da una seed phrase](https://peachbitcoin.com/it/blog/how-to-restore-peach-wallet/)
[Come comprare Bitcoin P2P con Peach](https://peachbitcoin.com/it/buy-bitcoin-no-id/)
[Cos'è GroupHug e come ti fa risparmiare sulle commissioni?](https://peachbitcoin.com/it/blog/group-hug/)
[Perché P2P? Le basi](https://peachbitcoin.com/it/blog/why-p2p-chapter-1/)
[Truffe di triangolazione nei mercati P2P](https://peachbitcoin.com/it/blog/triangulation-scams/)

Se vuoi saperne di più su di noi, dai un'occhiata ai nostri social, o semplicemente [contattaci](mailto:hello@peachbitcoin.com) (se possibile usa la nostra [chiave PGP](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com)), saremo felici di sentirti!

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continua a diffondere il verbo di Peach, chissà quando troverai il match della tua vita!
