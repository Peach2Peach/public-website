---
keywords:
  - Produkt
  - P2P
  - Tutorial
  - Programmierung
  - JavaScript
  - Bitcoin
tags:
  - Produkt
  - P2P
  - Tutorial
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin Under the Hood: ein technischer Blick darauf, warum es die sicherste P2P-Börse ist


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

Aaaaah Bitcoin, diese wunderbare Form von Geld, die durch ihre Kernfunktionen gedeiht. Wir alle lieben es, aber wir erkennen auch, dass es Risiken im Bereich der Selbstsouveränität gibt: du teilst deine Seeds und verlierst alles. Du schickst etwas an die falsche Adresse und bekommst es nie zurück.

Deshalb ist es sehr wichtig, Bitcoin-bezogene Software als Open Source zur Verfügung zu stellen, und die Peach-App ist auf Github für alle einsehbar!

Natürlich bedeutet Open Source nicht, dass jeder den Code sorgfältig liest und den Mechanismus rückentwickelt. Deshalb schreibe ich diesen Artikel: um **zu zeigen, wie sicher Peach ist** und welche Schritte unternommen werden, um dies zu erreichen.

## Schritt 1: Erstellen eines No-KYC-Kontos auf Peach 

Um ganz klar zu sein: Dein Bitcoin-Seed ist dein Peach-Konto.

Wenn du Peach nutzen möchtest, musst du ein Konto erstellen, das darin besteht, den Public Key deines Kontos zu teilen und zu beweisen, dass du der Eigentümer bist.

Dazu musst du:

*  1 - das aktuelle Datum und die Uhrzeit (in Millisekunden) als Text erhalten

*  2 - deinen Private Key verwenden, um eine Signatur des vorherigen Textes zu erzeugen

*  3 - den Public Key, das aktuelle Datum und die Signatur einreichen.

Du musst außerdem eine uniqueId generieren, die verwendet wird, um zu verhindern, dass andere Benutzer sich als du ausgeben. Dies ist nützlich in Fällen wie dem Verlust der Seeds und der Beibehaltung desselben Kontos. Aber konzentrieren wir uns nicht zu sehr darauf.


<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Hier ist der Code, um dies in Javascript auszuführen:

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

Herzlichen Glückwunsch! Du hast gerade ein Konto auf Peach erstellt! Der Server hat überprüft, dass du in diesem Moment der Eigentümer des Bitcoin-Schlüsselpaares bist, das dem eingereichten Public Key entspricht.

## Schritt 2: Einreichen deines öffentlichen PGP-Schlüssels

Es wird viel Verschlüsselung, aber auch etwas Entschlüsselung geben. Die Bitcoin-Schlüssel erlauben nur Einweg-Verschlüsselung, daher benötigen wir PGP-Schlüssel, um eine Zwei-Wege-Verschlüsselung durchzuführen. Dies ist grundlegend, um Bankkontodaten, Chatnachrichten usw. zu verschlüsseln und zu entschlüsseln. Das Einreichen des öffentlichen PGP-Schlüssels ist ähnlich wie das Einreichen des öffentlichen Bitcoin-Schlüssels. Allerdings gibt es einen zusätzlichen Schritt: der öffentliche PGP-Schlüssel muss mit dem Bitcoin-Private-Key signiert werden, um sicherzustellen, dass der Benutzer sowohl Eigentümer der Bitcoin- als auch der PGP-Schlüssel ist.

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

In diesem Moment hat Peach sowohl deinen öffentlichen Bitcoin- als auch deinen PGP-Schlüssel! Dies wird für den Handel auf Peach äußerst relevant sein.

## Nächste Schritte

Ab diesem Punkt zeigt das Tutorial beide Seiten: die Käuferseite und die Verkäuferseite.

Die Schritte sind die folgenden:

* 3.S Der Verkäufer erstellt ein Verkaufsangebot

* 4.S Der Verkäufer hinterlegt die Bitcoin im Peach-Escrow

* 5.B Der Käufer stellt eine Handelsanfrage zu dem Verkaufsangebot

* 5.S Der Verkäufer akzeptiert die Handelsanfrage des Käufers

* 6.B Der Käufer gibt an, dass die Fiat-Überweisung durchgeführt wurde

* 6.S Der Verkäufer bestätigt, dass er die Zahlung erhalten hat


## Schritt 3.S: Verkäufer erstellt ein Verkaufsangebot

Ein Verkaufsangebot zu erstellen bedeutet, dass du ankündigst, bereit zu sein, eine bestimmte Menge Bitcoin zu verkaufen. Aber das ist nicht alles: Der Verkäufer muss etwas als Gegenleistung akzeptieren. Genauer gesagt, ein Verkaufsangebot besteht aus:

* einer Menge Bitcoin, die verkauft werden soll

* den Währungen, die der Verkäufer akzeptiert

* den Zahlungsmethoden, die der Verkäufer akzeptiert (Bargeld, Banküberweisung, Revolut-Transaktion usw.)

* dem Aufpreis (wie teuer die Bitcoin im Vergleich zum aktuellen Marktwert sind)

Wenn alles gut läuft, wird ein Käufer an dem Angebot interessiert sein und eine Handelsanfrage stellen. In diesem Moment muss er eine einzelne Währung und Zahlungsmethode aus den verfügbaren auswählen. Je mehr Optionen der Verkäufer jedoch anbietet, desto größer sind seine Chancen, einen Käufer anzuziehen.

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

Wie im Code zu sehen ist, kündigt der Verkäufer an, dass er 21.000 Sats (0,00021 Bitcoin) mit einem Aufpreis von 1 % verkauft. Er möchte Euro über sein Wise-Konto erhalten.  
Wenn man genau hinsieht, übermittelt er NICHT seine Wise-Konto-ID, sondern nur einen Hash. Peach wird niemals die Details seiner Zahlungsmethode erfahren, um die Anonymität zu wahren.  
Außerdem wird eine Rücksendeadresse übermittelt. Diese wird im Falle einer Rückerstattung verwendet: kein Käufer möchte deine Bitcoin, sodass du sie zurückbekommen kannst.

## Schritt 4.S: Verkäufer hinterlegt die Bitcoin im Peach-Escrow

Nach einer erfolgreichen Anfrage an die Peach-API zur Erstellung des Verkaufsangebots erhält der Verkäufer die Sell-Offer-ID:



```j
const sellOfferId = offerCreateRes.data.id;

```

Dieser Wert ist wichtig, behalte ihn. Es gibt andere Möglichkeiten, ihn zu erhalten, aber behalte ihn vorerst. Das Verkaufsangebot wurde erstellt, ist jedoch noch nicht öffentlich: keine Käufer können damit interagieren. Zuerst muss der Verkäufer den Escrow finanzieren.

Der Escrow ist wie ein Tresor, der sowohl die Autorisierung des Verkäufers als auch von Peach benötigt, um geöffnet zu werden. Die Bitcoin werden in den Tresor gelegt und bleiben dort sicher bis zum Ende des Handels. Da die Autorisierung des Verkäufers erforderlich ist und der Escrow ein Skript auf der Bitcoin-Blockchain ist (eine P2WSH-Adresse), benötigt Peach den Public Key des Verkäufers, um diesen Escrow zu erstellen.

In diesem Moment übermittelt der Verkäufer den Public Key, den er für den Escrow verwenden möchte, an Peach. Peach wählt seinen eigenen Public Key für den Tresor und konstruiert ihn, wodurch eine Adresse entsteht.

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

Wie im Code zu sehen ist, hat der Verkäufer beschlossen, ein neues Schlüsselpaar unter Verwendung der Sell-Offer-ID auf dem Ableitungspfad abzuleiten. Dies ist ein sicherer Ansatz, da er leicht reproduzierbar ist.  
Nach der Übermittlung des Public Keys gibt die Peach-API die Adresse zurück, an die der Verkäufer die 21.000 Sats senden soll. Du musst jedoch nicht darauf vertrauen, dass diese Adresse gültig ist: du kannst sie überprüfen.

Also lassen wir uns das überprüfen!  

Die Peach-API gibt auch den Public Key zurück, den Peach für diesen speziellen Escrow verwendet hat, und das ermöglicht uns, die Adresse durch das Schreiben des Bitcoin-Skripts selbst zu rekonstruieren:

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

Dies ist das Skript, das wir für den Escrow verwenden:

* es erfordert immer die Signatur von Peach

* es erfordert entweder:

  * - die Signatur des Verkäufers

  * - dass seit der Überweisung der Bitcoin an diese Adresse 4320 Blöcke gemined wurden

Warum 4320 Blöcke? Das entspricht 30 Tagen, bei einem Durchschnitt von 1 Block alle 10 Minuten. Warum haben wir diese Alternative, dass nach einem Monat nur noch die Signatur von Peach erforderlich ist? Weil Verkäufer möglicherweise nicht kooperativ sind, ihre Schlüssel verlieren usw. Eines ist sicher: Peach hat einen einwandfreien Ruf, wenn es um die Verwaltung der Gelder der Verkäufer geht.

Nachdem du das Skript erstellt hast, kannst du die P2WSH-Adresse überprüfen, die es generiert, und sehen, dass sie mit der Adresse übereinstimmt, die die Peach-API als Antwort auf die Erstellung des Escrows gesendet hat.

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


Perfekt! Führe nun einfach eine Bitcoin-Transaktion an diese Adresse aus und warte, bis der Escrow als finanziert deklariert wird.

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

Sobald er als finanziert deklariert ist (nach dem Mining eines Blocks), wird das Verkaufsangebot öffentlich und Käufer können beginnen, damit zu interagieren!

## Schritt 5.B: Käufer stellt eine Handelsanfrage zu dem Verkaufsangebot

Jetzt ist es Zeit für den Käufer, aktiv zu werden!

Zuerst überprüfen wir alle verfügbaren Verkaufsangebote:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Der Einfachheit halber wird der Käufer am ersten verfügbaren Verkaufsangebot interessiert sein.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Nun möchte der Käufer eine Handelsanfrage stellen und dem Verkäufer mitteilen, dass er unter seinen Bedingungen handeln möchte. Klingt einfach, oder? Aber dies ist der komplexeste Schritt des gesamten Prozesses.

Schauen wir uns an, was der Käufer einreichen muss:

* die bevorzugte Zahlungsmethode (eine der vom Verkäufer erlaubten)

* die bevorzugte Währung (wie oben)

* einen symmetrischen Schlüssel (für die direkte Kommunikation zwischen Käufer und Verkäufer) verschlüsselt

* die Signatur des symmetrischen Schlüssels

* die Zahlungsdaten, verschlüsselt mit dem symmetrischen Schlüssel

* eine Signatur der Zahlungsdaten

* die Release-Adresse: wohin der Käufer die gekauften Bitcoin erhalten möchte

* die Signatur der Release-Adressnachricht: ein Nachweis, dass der Käufer diese Adresse besitzt, unter Verwendung von BIP 322

* die maximale Mining-Gebühr: wie viel der Käufer von seinen endgültigen Bitcoin für die Miner-Gebühren der finalen Transaktion opfern möchte

Das ist eine Menge, oder? Aber genau deshalb ist Peach super sicher! Gehen wir Schritt für Schritt vor.

### Die bevorzugte Zahlungsmethode und Währung:

Dies ist der einfachste Teil:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Der symmetrische Schlüssel:

Der symmetrische Schlüssel wird mit AES256 Bidirectional Encryption verwendet: du kannst eine Nachricht verschlüsseln und anschließend mit demselben Schlüssel wieder entschlüsseln:

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

Um einen zu erstellen, generiere einfach eine Zufallszahl:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Du wirst diesen Schlüssel nicht unverschlüsselt einreichen: das würde seinen Zweck zunichte machen. Er muss so verschlüsselt werden, dass nur der Käufer und der Verkäufer ihn entschlüsseln können. Da beide Benutzer ihre öffentlichen PGP-Schlüssel eingereicht haben, müssen wir ihn so verschlüsseln, dass nur die Entschlüsselung mit einem der entsprechenden privaten PGP-Schlüssel möglich ist:


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

Und damit der Verkäufer sicher sein kann, dass der symmetrische Schlüssel vom Käufer erstellt wurde, muss er ihn außerdem mit seinem PGP-Schlüssel signieren:


```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Die Zahlungsdaten:


Dies ist das wertvollste Informationsstück: deine Zahlungsdaten. Das können deine Bankkontodaten (IBAN), dein Revolut-Benutzername oder alles sein, was die Herkunft deiner Fiat-Zahlung identifiziert. Der Verkäufer wird später seine Informationen mit dem Käufer teilen.

Da wir nun einen symmetrischen Schlüssel haben, können wir ihn verwenden, um die Zahlungsdaten zu verschlüsseln. Diese werden später vom Verkäufer zur Entschlüsselung verwendet.


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

### Definition der Release-Adresse und Eigentumsnachweis:

Du musst festlegen, wohin die Bitcoin aus dem Handel danach gesendet werden sollen. Eine Adresse zu erstellen ist der einfache Teil. Der schwierige Teil ist der Nachweis des Eigentums an der Adresse. Dies machen wir aus regulatorischen Gründen, um sicherzustellen, dass der Käufer tatsächlich der Eigentümer ist. Glücklicherweise dient es auch als zusätzliche Sicherheitsmaßnahme (allein dies macht Peach immun gegen den Address-Replacement-Angriff unter Verwendung von Javascript-Bibliotheken aus dem September 2025).

Der Eigentumsnachweis erfolgt unter Verwendung von BIP-322, das es dir ermöglicht, deine Bitcoin-Privatschlüssel zu verwenden, um eine Nachricht zu signieren, die mit der Adresse überprüft werden kann.

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


### Ein letztes Detail: die maximale Mining-Gebühr

Als Käufer möchtest du möglicherweise nicht so viel für Gebühren ausgeben, um deine Bitcoin zu erhalten, und wartest lieber, bis die Gebühren sinken, bevor du die Mittel erhältst. In diesem Fall kannst du die maximale Mining-Gebühr festlegen, die du bereit bist zu „zahlen“, um die Bitcoin zu erhalten.

### Schließlich: Erstellen der Handelsanfrage zum Verkaufsangebot

Was für ein Abenteuer, oder? Aber hier ist sie, und du kannst sie einreichen.

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



Nun ist der Verkäufer an der Reihe, sie zu akzeptieren.

## Schritt 5.S: Verkäufer akzeptiert die Handelsanfrage

Der Verkäufer hat darauf gewartet, dass ein Käufer mit seinem Verkaufsangebot interagiert. Er überprüft die Liste der Handelsanfragen:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Wenn der Verkäufer die Handelsanfrage akzeptieren möchte, muss er seine Zahlungsdaten mit dem Käufer teilen, damit der Käufer weiß, wohin das Fiat gesendet werden soll.

Da der Käufer bereits einen symmetrischen Schlüssel erstellt und eingereicht hat, kann der Verkäufer diesen entschlüsseln (da er mit seinem eigenen PGP-Öffentlichen Schlüssel verschlüsselt wurde) und ihn verwenden, um seine eigenen Zahlungsdaten zu verschlüsseln.

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

Und das war’s! Jetzt kann der Verkäufer die Handelsanfrage akzeptieren und ein offizieller Handel beginnt!

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

Wenn es schwierig war, den gesamten Prozess zu verstehen, hier ist ein Bild zur Veranschaulichung:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Schritt 6.B: Käufer erklärt die Zahlung als durchgeführt

Der Käufer kann überprüfen, ob er Verträge (Trades, die von Käufer und Verkäufer vereinbart wurden) hat, indem er das Endpoint für Contract-Summaries abfragt:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Dies gibt ihm eine Liste aller Verträge, an denen er beteiligt ist. Wenn ein Vertrag den Handelsstatus „paymentRequired“ hat, ist er an der Reihe, die Fiat-Zahlung vorzunehmen.

Dazu muss er die Zahlungsdaten des Verkäufers mit dem symmetrischen Schlüssel entschlüsseln, der bei der ursprünglichen Handelsanfrage erstellt wurde. Wenn er ihn nicht gespeichert hat, ist das in Ordnung, da er mit seinem PGP-Privatschlüssel entschlüsselt werden kann.

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

Dies soll außerhalb von Peach geschehen: Der Käufer öffnet seine Banking-App (oder Ähnliches) und führt eine Fiat-Überweisung an den Empfänger der Zahlungsdaten des Verkäufers durch.

Wenn dir als Leser dieser Schritt unsicher erscheint, denke daran: Die Bitcoin befinden sich bereits im Escrow, der von Peach und dem Verkäufer kontrolliert wird. Du kannst sogar auf die Escrow-Adresse zugreifen, die in den Vertragsdaten der API verfügbar ist, und einen Blockchain-Explorer verwenden, um zu prüfen, ob die Bitcoin dort sind.  
Nach der Durchführung der Fiat-Überweisung muss der Käufer erklären, dass die Zahlung erfolgt ist:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Das war der letzte Schritt des Käufers. Nun muss der Verkäufer bestätigen, dass er das Fiat erhalten hat, und die Bitcoin im Escrow an die Adresse des Käufers freigeben.

## Schritt 6.S: Verkäufer bestätigt den Zahlungseingang

Ähnlich wie der Käufer überprüft der Verkäufer die ihm zugewiesenen Verträge.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

In der API-Antwort des Vertrags erhält der Verkäufer eine teilweise signierte Bitcoin-Transaktion (PSBT), bei der es sich um eine Transaktion der Bitcoin im Escrow zur Adresse des Käufers handelt, mit einer Signatur von Peach. Das bedeutet, dass nur noch die Signatur des Verkäufers benötigt wird, damit sie gültig wird:

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

Nun kann der Verkäufer die Transaktion finalisieren, indem er die beiden Signaturen und das Escrow-Bitcoin-Skript übergibt. Da wir den MultiSig-Pfad des Skripts durchlaufen (als 2. Pfad geschrieben), müssen wir OP_FALSE an den Stack übergeben, um die IF-Bedingung korrekt zu beeinflussen.


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

Der letzte Schritt: die finalisierte Transaktion an die Peach-API übermitteln:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```


Meine Damen und Herren, so handeln wir bei Peach mit maximaler Sicherheit und Privatsphäre!