---
keywords:
  - Prodotto
  - P2P
  - tutorial
  - programmazione
  - javascript
  - bitcoin
tags:
  - Prodotto
  - P2P
  - Tutorial
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin sotto il cofano: uno sguardo tecnico sul perché è lo scambio P2P più sicuro


<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/UvdbHlsPmK0"
    title="PEACH VIDEO OF Under the Hood"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>


Aaaaah Bitcoin — questa meravigliosa forma di denaro che prospera grazie alle sue caratteristiche fondamentali.  
Tutti lo amiamo, ma sappiamo anche che ci sono rischi legati alla sovranità individuale: se condividi i tuoi seed, perdi tutto.  
Se invii fondi all’indirizzo sbagliato, non li rivedrai mai.

Per questo è così importante il codice open source nell’ecosistema Bitcoin — l’app Peach è disponibile su Github per chiunque voglia controllarla!

Certo, open source non significa che tutti leggeranno il codice con attenzione o capiranno come funziona.  
Per questo scrivo questo articolo: per **mostrare quanto Peach sia sicuro** e quali passaggi garantiscono questa sicurezza.

## Passo 1: Creare un account No-KYC su Peach

Per essere chiari: il tuo seed Bitcoin **è il tuo account Peach**.

Se vuoi usare Peach, devi creare un account, il che consiste nel condividere la tua chiave pubblica e dimostrare di esserne il proprietario.

Per farlo, devi:

*  1 - ottenere la data e l’ora correnti (in millisecondi) come testo  
*  2 - usare la tua chiave privata per generare una firma di quel testo  
*  3 - inviare la chiave pubblica, la data/ora corrente e la firma  

Devi anche generare un `uniqueId` per evitare che altri utenti si fingano te.  
Questo è utile, ad esempio, in caso di perdita dei seed mantenendo lo stesso account.  
Ma non soffermiamoci troppo su questo.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Ecco il codice in JavaScript:

```j

  const seed = randomBytes(64);

  const root = bip32.fromSeed(seed, bitcoin);
  const child = root.derivePath("m/0");
  const keyPair = ECPair.fromPrivateKey(child.privateKey, { network: bitcoin });

  const publicKeyHex = Buffer.from(keyPair.publicKey).toString("hex");

  const session = axios.create({
    baseURL: "https://api.peachbitcoin.com/",
    httpAgent: new http.Agent({ keepAlive: false }),
    httpsAgent: new https.Agent({ keepAlive: false }),
  });

  const registerMessage = String(Date.now());
  const registerMessageSignature = signWithBtcPrivKey(registerMessage, keyPair);

  const resp = await session.post("v1/user/register", {
    publicKey: publicKeyHex,
    message: registerMessage,
    signature: registerMessageSignature,
    uniqueId: "my_own_unique_id_random_12345",
  });

  const accessToken = resp.data.accessToken;

  session.defaults.headers.common["authorization"] = accessToken;

```

Congratulazioni! Hai appena creato un account su Peach!  
Il server ha verificato che tu, in questo momento, sei il proprietario della coppia di chiavi Bitcoin corrispondente alla chiave pubblica inviata.

## Passo 2: Inviare la chiave pubblica PGP

Ci sarà molta crittografia… ma anche un po’ di decrittazione.  
Le chiavi Bitcoin permettono solo crittografia unidirezionale, quindi useremo chiavi PGP per una crittografia bidirezionale.  
Questo è fondamentale per proteggere dati bancari, messaggi chat, ecc.

Inviare la chiave pubblica PGP è simile all’invio della chiave pubblica Bitcoin, ma con un passo in più:  
la chiave pubblica PGP deve essere **firmata con la chiave privata Bitcoin**, per confermare che l’utente possiede entrambe le chiavi.

<br><br>
<img src="/img/blog/under-the-hood/underthehood02.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

```j

const { privateKey: pgpPrivateKey, publicKey: pgpPublicKey } =
    await createPGPKey();

  const pgpPublicKeyMessageSignature = signWithBtcPrivKey(
    pgpPublicKey,
    keyPair
  );
  const setPgpKeysMessage = String(Date.now());

  const setPgpKeysMessageSignature = await signPGPMessage(
    pgpPrivateKey,
    setPgpKeysMessage
  );

  await session.patch("v1/user", {
    pgpPublicKey: pgpPublicKey, // the PGP Pub key
    signature: pgpPublicKeyMessageSignature, // the above signed by the BTC Key
    message: setPgpKeysMessage, // the current timestamp
    pgpSignature: setPgpKeysMessageSignature, // the above signed by the PGP Key
  });

```

A questo punto, Peach ha entrambe le tue chiavi pubbliche — Bitcoin e PGP!  
Questo sarà molto rilevante per il trading su Peach.

## Passaggi successivi

Da questo punto in poi, il tutorial mostrerà entrambi i lati: Acquirente e Venditore.

I passaggi saranno:

*   3.S Il Venditore crea un’offerta di vendita  
*   4.S Il Venditore finanzia l’Escrow di Peach  
*   5.B L’Acquirente fa una richiesta di scambio sull’offerta  
*   5.S Il Venditore accetta la richiesta dell’Acquirente  
*   6.B L’Acquirente dichiara di aver effettuato il pagamento Fiat  
*   6.S Il Venditore conferma di aver ricevuto il pagamento  

## Passo 3.S: Il Venditore crea un’offerta di vendita

Creare un’offerta di vendita significa annunciare che sei disposto a vendere una certa quantità di Bitcoin.  
Ma non è tutto: il Venditore deve anche accettare qualcosa in cambio.  

Un’offerta di vendita include:

* la quantità di Bitcoin da vendere  
* le valute accettate dal Venditore  
* i metodi di pagamento accettati (contanti, bonifico bancario, Revolut, ecc.)  
* il premio (quanto il Bitcoin è più costoso rispetto al prezzo di mercato attuale)  

Se tutto va bene, un Acquirente sarà interessato e richiederà di scambiare.  
A quel punto dovrà selezionare **una sola valuta e un solo metodo di pagamento** tra quelli disponibili.  
Più il Venditore mostra opzioni, più probabilità ha di attirare un Acquirente.

<br><br>
<img src="/img/blog/under-the-hood/underthehood03.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

```j

const sats_to_sell = 21000;
  const sell_premium = 1; // 1%
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

  const { address: returnAddress } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin,
  });
  const sellOfferPaymentDataToEncrypt = JSON.stringify({
    reference: "",
    userName: "@myWiseIdTradingBot",
  });

  const paymentDataEncryptSHA256 = await sha256(sellOfferPaymentDataToEncrypt);

  const offerCreateRes = await session.post("v1/offer", {
    type: "ask",
    amount: sats_to_sell,
    meansOfPayment: { [payment_data_currency]: [payment_data_method] }, // {"EUR": ["wise"]}
    paymentData: {
      [payment_data_method]: { hashes: [paymentDataEncryptSHA256] },
    },
    returnAddress: returnAddress,
    premium: sell_premium,
  });

```

Nel codice, il Venditore annuncia la vendita di 21.000 sats (0,00021 Bitcoin) con un premio dell’1%.  
Vuole ricevere Euro tramite il suo account Wise.  
Non sta inviando il suo ID Wise, solo un hash.  
Peach non conoscerà mai i dettagli del metodo di pagamento, per mantenere l’anonimato.  
Viene anche inviata un’**indirizzo di ritorno**, utilizzato in caso di rimborso.

## Passo 4.S: Il Venditore finanzia l’Escrow di Peach

Dopo una richiesta API riuscita per creare l’offerta, il Venditore ottiene l’ID dell’offerta:

```j
const sellOfferId = offerCreateRes.data.id;

```

Questo valore è importante — conservalo.  
L’offerta è stata creata ma non è ancora pubblica: nessun Acquirente può interagire.  
Prima il Venditore deve finanziare l’Escrow.

L’Escrow è come una cassaforte che richiede l’autorizzazione sia del Venditore che di Peach.  
Il Bitcoin viene inserito nella cassaforte e rimane al sicuro fino alla fine del Trade.  
Poiché richiede l’autorizzazione del Venditore e l’Escrow è uno script sulla Blockchain Bitcoin (un indirizzo P2WSH), Peach ha bisogno della chiave pubblica del Venditore per creare l’Escrow.

A questo punto, il Venditore invia la chiave pubblica da usare per l’Escrow.  
Peach seleziona la propria chiave pubblica e costruisce l’indirizzo.

<br><br>
<img src="/img/blog/under-the-hood/underthehood04.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

```j
const childSell = root.derivePath(`m/84'/0'/0'/${sellOfferId}'`);

  const keyPairSellOffer = ECPair.fromPrivateKey(childSell.privateKey, {
    network: bitcoin,
  });

  const sellOfferPublicKey = Buffer.from(keyPairSellOffer.publicKey).toString(
    "hex"
  );

  const escrowCreateRes = await session.post(
    "v1/offer/" + sellOfferId + "/escrow",
    {
      publicKey: sellOfferPublicKey,
    }
  );

  const escrowAddress = escrowCreateRes.data.escrows.bitcoin;

  const escrowPeachPublicKey =
    escrowCreateRes.data.escrowPeachPublicKey.bitcoin;

```

Nel codice, il Venditore ha derivato una nuova coppia di chiavi dall’ID dell’offerta.  
Questo è un approccio sicuro e riproducibile.

Dopo l’invio della chiave pubblica, l’API Peach restituisce l’indirizzo dove inviare i 21.000 sats.  
Ma non devi fidarti ciecamente: puoi verificarlo tu stesso.

Verifichiamolo!

L’API restituisce anche la chiave pubblica che Peach ha usato per quell’Escrow, così possiamo **ricreare l’indirizzo** scrivendo lo script Bitcoin.

```j
   OP_IF
       ${script.number.encode(4320).toString("hex")}
       OP_CHECKSEQUENCEVERIFY
       OP_DROP
   OP_ELSE
       ${sellerPublicKey}
       OP_CHECKSIGVERIFY
   OP_ENDIF
   ${peachPublicKey}
   OP_CHECKSIG
```

Lo script per l’Escrow:

* richiede sempre la firma di Peach  
* e poi:
  * richiede la firma del Venditore  
  * oppure che siano stati minati 4320 blocchi dopo l’invio del Bitcoin  

Perché 4320 blocchi?  
Sono circa 30 giorni di blocchi (1 blocco ogni 10 minuti).  
Dopo un mese Peach può firmare da sola, in caso il Venditore non sia collaborativo o perda le chiavi.  

Peach ha una reputazione impeccabile nella gestione dei fondi dei Venditori.

Una volta costruito lo script, puoi verificare che l’indirizzo P2WSH generato corrisponda a quello restituito dall’API Peach.

```j
  const multisigScript = bitcoin.script.compile([
    Buffer.from(sellOfferPublicKey, "hex"),
    bitcoin.opcodes.OP_CHECKSIGVERIFY,
  ]);

  const timelockScript = bitcoin.script.compile([
    bitcoin.script.number.encode(4320),
    bitcoin.opcodes.OP_CHECKSEQUENCEVERIFY,
    bitcoin.opcodes.OP_DROP,
  ]);

  const redeemScript = bitcoin.script.compile([
    bitcoin.opcodes.OP_IF,
    ...timelockScript,
    bitcoin.opcodes.OP_ELSE,
    ...multisigScript,
    bitcoin.opcodes.OP_ENDIF,
    Buffer.from(escrowPeachPublicKey, "hex"),
    bitcoin.opcodes.OP_CHECKSIG,
  ]);

  const escrowPayment = bitcoin.payments.p2wsh({
    redeem: { output: redeemScript },
    network: bitcoin,
  });

  console.log("Addresses Match:", escrowPayment.address === escrowAddress);

```

Perfetto! Ora invia una transazione Bitcoin a quell’indirizzo e aspetta che l’Escrow sia dichiarato finanziato.

```j
  while (true) {
    const fundingStatusRes = await session.get(
      "v1/offer/" + sellOfferId + "/escrow"
    );
    if (fundingStatusRes.data.funding.status === "FUNDED") {
      break;
    }
  }

```

Dopo un blocco, l’offerta diventa pubblica e gli Acquirenti possono interagire.

## Passo 5.B: L’Acquirente fa una richiesta di scambio

Ora è il turno dell’Acquirente!

Per prima cosa, controlla tutte le offerte disponibili:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Per semplicità, l’Acquirente sceglie la prima offerta disponibile.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

L’Acquirente invia la richiesta di scambio, indicando di voler acquistare secondo le condizioni del Venditore.  
Sembra semplice, ma è **il passo più complesso** di tutto il processo.

L’Acquirente deve inviare:

* metodo di pagamento preferito  
* valuta preferita  
* chiave simmetrica (per comunicare con il Venditore) crittografata  
* firma della chiave simmetrica  
* dati di pagamento crittografati con la chiave simmetrica  
* firma dei dati di pagamento  
* indirizzo di ricezione del Bitcoin acquistato  
* firma di possesso dell’indirizzo (BIP-322)  
* fee massima di mining che l’Acquirente è disposto a pagare  

Molto, vero?  
Ma è ciò che rende Peach super sicuro!  
Procediamo passo passo.

### Metodo di pagamento e valuta

È la parte più semplice:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Chiave simmetrica

La chiave simmetrica sarà usata con crittografia bidirezionale AES256: puoi criptare e decriptare con la stessa chiave.

```j
async function decryptDataWithSymmetricKey(encryptedMessage, symmetricKey) {
  const message = await openpgp.readMessage({
    armoredMessage: encryptedMessage,
  });

  const { data: decrypted } = await openpgp.decrypt({
    message,
    passwords: [symmetricKey],
    format: "utf8",
  });

  return decrypted;
}

async function encryptDataWithSymmetricKey(data, symmetricKey) {
  const message = await openpgp.createMessage({ text: data });
  const encrypted = await openpgp.encrypt({
    message,
    passwords: [symmetricKey],
    format: "armored",
    config: {
      preferredSymmetricAlgorithm: openpgp.enums.symmetric.aes256,
    },
  });
  return encrypted;
}

```

Generane una casuale:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Non inviare questa chiave in chiaro!  
Deve essere crittografata in modo che solo Acquirente e Venditore possano decriptarla, usando le chiavi pubbliche PGP.

```j
async function encryptForMultipleRecipients(secret, publicKeysArmored) {
  const publicKeys = await Promise.all(
    publicKeysArmored.map((armored) => openpgp.readKey({ armoredKey: armored }))
  );
  const message = await openpgp.createMessage({ text: secret });

  const encrypted = await openpgp.encrypt({
    message,
    encryptionKeys: publicKeys,
  });

  return encrypted;
}

  const matchingUserPgpPubKey = sellOffers.data.offers[0].user.pgpPublicKey;

  const symmetricKeyEncrypted = await encryptForMultipleRecipients(
    symmetricKeyHex,
    [pgpPublicKey, matchingUserPgpPubKey]
  );

```

Il Venditore firma la chiave per confermare che proviene dall’Acquirente:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Dati di pagamento

Qui ci sono le informazioni più sensibili: IBAN, username Revolut, ecc.  
L’Acquirente le cripta con la chiave simmetrica, così solo il Venditore può leggerle.

```j
const paymentDataToEncrypt = JSON.stringify({
    reference: "",
    userName: "@buyerWiseId",
  });

const paymentDataEncrypted = await encryptDataWithSymmetricKey(
paymentDataToEncrypt,
symmetricKeyHex
);

const paymentDataSignature = await signPGPMessage(
pgpPrivateKey,
paymentDataToEncrypt
);

```

### Indirizzo di ricezione e prova di proprietà

Definisci dove vuoi ricevere il Bitcoin.  
Creare un indirizzo è facile; provare la proprietà è più complesso.  
Questo serve a scopi regolatori e di sicurezza (protezione contro l’attacco “address replacement”).

La prova avviene tramite **BIP-322**: firmi un messaggio con la tua chiave privata Bitcoin, verificabile dall’indirizzo.

```j
  const { address } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin,
  });

  const ownershipMessage =
    "I confirm that only I, peach" +
    publicKeyHex.slice(0, 8) +
    ", control the address " +
    address;

  const releaseAddressSignature = signWithBIP322(
    wif,
    address,
    ownershipMessage
  );

```

### Fee massima di mining

L’Acquirente può limitare quanto è disposto a spendere di fee per ottenere il Bitcoin.

### Invia la richiesta di scambio

Ora tutto è pronto, e l’Acquirente invia la richiesta.

```j
  await session.post(
    "v069/sellOffer/" + sellOfferToTradeRequestId + "/tradeRequestPerformed",
    {
      paymentMethod: payment_data_method,
      currency: payment_data_currency,
      paymentDataHashed: paymentDataToEncryptSHA256,
      paymentDataEncrypted: paymentDataEncrypted,
      paymentDataSignature: paymentDataSignature,
      symmetricKeyEncrypted: symmetricKeyEncrypted,
      symmetricKeySignature: symmetricKeySignature,
      maxMiningFeeRate: 2, // sats/vb
      releaseAddress: address,
      releaseAddressMessageSignature: releaseAddressSignature,
    }
  );

```

<br><br>
<img src="/img/blog/under-the-hood/underthehood05.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Il turno passa al Venditore.

## Passo 5.S: Il Venditore accetta la richiesta

Il Venditore controlla le richieste ricevute:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Se decide di accettare, condivide i propri dati di pagamento con l’Acquirente.  
Poiché l’Acquirente ha già inviato una chiave simmetrica, il Venditore può decriptarla e usarla per criptare i propri dati di pagamento.

```j
  const receivedSymmetricKey = await decryptWithPrivateKey(
    tradeReq.symmetricKeyEncrypted,
    pgpPrivateKey
  );

  const sellOfferPaymentDataEncrypted = await encryptDataWithSymmetricKey(
    sellOfferPaymentDataToEncrypt,
    receivedSymmetricKey
  );

  const sellOfferPaymentDataSignature = await signPGPMessage(
    pgpPrivateKey,
    sellOfferPaymentDataToEncrypt
  );

```

A questo punto, l’offerta è ufficialmente accettata e inizia lo scambio.

<br><br>
<img src="/img/blog/under-the-hood/underthehood06.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

```j
  await session.post(
    "v069/sellOffer/" +
      sellOfferId +
      "/tradeRequestReceived/" +
      tradeReq.userId +
      "/accept",
    {
      paymentDataEncrypted: sellOfferPaymentDataEncrypted,
      paymentDataSignature: sellOfferPaymentDataSignature,
      paymentData: {
        [payment_data_method]: { hashes: [paymentDataEncryptSHA256] },
      },
    }
  );

```

Se tutto il processo è complesso, ecco un’immagine che lo illustra:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Passo 6.B: L’Acquirente dichiara il pagamento

L’Acquirente può controllare i contratti attivi tramite l’endpoint API `contract summaries`:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Se lo stato di un contratto è **“paymentRequired”**, deve procedere al pagamento Fiat.

Per farlo, decripta i dati del Venditore usando la chiave simmetrica.  
Se ha perso la chiave, può usare la propria chiave privata PGP.

```j

  const contractRes = await session.get("v1/contract/" + contract.id);

  const receivedSymmetricKey = await decryptWithPrivateKey(
    contractRes.data.symmetricKeyEncrypted,
    pgpPrivateKey
  );

  if (receivedSymmetricKey !== symmetricKeyHex) throw Error;

  const decryptedSellerPaymentData = await decryptDataWithSymmetricKey(
    contractRes.data.paymentDataEncrypted,
    receivedSymmetricKey
  );

  console.log("Seller Payment Data ", JSON.parse(decryptedSellerPaymentData));
```

Questo avviene al di fuori di Peach: l’Acquirente apre la propria app bancaria e invia il pagamento Fiat ai dati del Venditore.

Il Bitcoin è già nell’Escrow, controllato da Peach e dal Venditore.  
Puoi verificare l’indirizzo Escrow con un Blockchain Explorer.

Dopo il pagamento, l’Acquirente dichiara l’avvenuto pagamento:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Questo conclude il passo dell’Acquirente.  
Ora il Venditore conferma il pagamento e rilascia il Bitcoin.

## Passo 6.S: Il Venditore conferma il pagamento

Il Venditore controlla i contratti a lui assegnati:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

La risposta API include una **PSBT** (Partial Signed Bitcoin Transaction)  
che invia il Bitcoin dell’Escrow all’indirizzo dell’Acquirente.  
È già firmata da Peach, manca solo la firma del Venditore.

```j
  const releasePSBTBase64 = contractRes.data.releasePsbt;

  const parsedPSBT = bitcoin.Psbt.fromBase64(releasePSBTBase64, {
    network: bitcoin,
  });

  parsedPSBT.signInput(0, childSell);

```

<br><br>
<img src="/img/blog/under-the-hood/underthehood09.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Il Venditore aggiunge la firma e lo script dell’Escrow.  
Usiamo la MultiSig: inseriamo `OP_FALSE` nello stack per influenzare correttamente l’IF.

```j
export const getFinalScript = (_inputIndex, input, bitcoinScript) => {
  const network = bitcoin;

  const payment = payments.p2wsh({
    network,
    redeem: {
      network,
      output: bitcoinScript,
      input: bitcoin.script.compile([
        input.partialSig[0].signature,
        input.partialSig[1].signature,
        opcodes.OP_FALSE,
      ]),
    },
  });

  parsedPSBT.finalizeInput(0, getFinalScript);

  const tx = parsedPSBT.extractTransaction().toHex();

```

Infine, l’Elvatore invia la transazione completa all’API Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Signore e signori, ecco come si fa trading su Peach con **massima sicurezza e privacy!**
