---
keywords:
  - Product
  - P2P
  - tutorial
  - programmeren
  - javascript
  - bitcoin
tags:
  - Product
  - P2P
  - Tutorial
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin onder de motorkap: een technische blik op waarom het het veiligste P2P-platform is


<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/CGx9LYGTKj8?si=kVrF-PgImNrN1wKg"
    title="PEACH VIDEO OF Under the Hood"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>


Aaaaah Bitcoin — dit prachtige geldsysteem dat floreert dankzij zijn kernfuncties.  
We houden er allemaal van, maar we weten ook dat er risico’s zijn met zelfsoevereiniteit: deel je je seed, dan verlies je alles.  
Stuur je het naar het verkeerde adres, dan krijg je het nooit terug.

Daarom is open-source software in het Bitcoin-ecosysteem zo belangrijk — de Peach-app is beschikbaar op GitHub voor iedereen die wil controleren!

Natuurlijk betekent open source niet dat iedereen de code zorgvuldig leest of begrijpt hoe het werkt.  
Daarom schrijf ik dit artikel: om **te laten zien hoe veilig Peach is** en welke stappen deze veiligheid garanderen.

## Stap 1: Een No-KYC-account aanmaken op Peach

Om heel duidelijk te zijn: je Bitcoin Seed **is je Peach-account**.

Om Peach te gebruiken, moet je een account aanmaken, wat inhoudt dat je je publieke sleutel deelt en bewijst dat je deze bezit.

Om dit te doen:

*  1 - haal de huidige datum en tijd op (in milliseconden) als tekst  
*  2 - gebruik je private key om een handtekening van die tekst te genereren  
*  3 - stuur de public key, de huidige datum/tijd en de handtekening  

Je moet ook een `uniqueId` genereren om te voorkomen dat andere gebruikers zich voordoen als jij.  
Dit is handig in gevallen zoals het verliezen van seeds maar hetzelfde account behouden.  
Maar laten we hier niet te diep op ingaan.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Hier is de JavaScript-code:

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

Gefeliciteerd! Je hebt zojuist een account aangemaakt op Peach!  
De server heeft geverifieerd dat jij op dit moment de eigenaar bent van het Bitcoin Key-Pair dat overeenkomt met de ingediende public key.

## Stap 2: Je publieke PGP-sleutel indienen

Er zal veel encryptie zijn… maar ook wat decryptie.  
Bitcoin-sleutels staan alleen éénrichtingsencryptie toe, dus we hebben PGP-sleutels nodig voor tweerichtingenencryptie.  
Dit is essentieel om bankgegevens, chatberichten, enz. te encrypten/decrypten.

Het indienen van de publieke PGP-sleutel lijkt op het indienen van de publieke Bitcoin-sleutel, maar er is een extra stap:  
de publieke PGP-sleutel moet worden ondertekend met de Bitcoin private key, om te dubbelchecken dat de gebruiker beide sleutels bezit.

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

Op dit moment heeft Peach zowel je Bitcoin- als PGP-public keys!  
Dit zal uiterst belangrijk zijn voor handelen op Peach.

## Volgende stappen

Vanaf dit punt laat de tutorial beide kanten zien: de koperzijde en de verkoperszijde.

De stappen zijn:

*   3.S Verkoper maakt een verkoopaanbod  
*   4.S Verkoper financiert de Peach Escrow  
*   5.B Koper doet een Trade Request op het verkoopaanbod  
*   5.S Verkoper accepteert het Trade Request van de Koper  
*   6.B Koper verklaart dat de Fiat-betaling is gedaan  
*   6.S Verkoper bevestigt dat hij de betaling heeft ontvangen  

## Stap 3.S: Verkoper maakt een verkoopaanbod

Een verkoopaanbod maken betekent dat je aankondigt dat je een bepaalde hoeveelheid Bitcoin wilt verkopen.  
Maar dat is niet alles: de Verkoper moet ook iets in ruil accepteren.

Een verkoopaanbod bevat:

* hoeveelheid Bitcoin te verkopen  
* de valuta’s die de Verkoper accepteert  
* de betalingsmethoden die de Verkoper accepteert (contant, bankoverschrijving, Revolut, etc.)  
* de premie (hoeveel duurder de Bitcoin is vergeleken met de huidige marktwaarde)  

Als alles goed gaat, zal een Koper geïnteresseerd zijn en een Trade Request indienen.  
Op dat moment moet hij **één valuta en één betalingsmethode** selecteren uit de beschikbare opties.  
Hoe meer opties de Verkoper toont, hoe groter de kans een Koper aan te trekken.

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

In de code kondigt de Verkoper aan dat hij 21.000 sats (0,00021 Bitcoin) verkoopt met een premie van 1%.  
Hij wil euro’s ontvangen via zijn Wise-account.  
Hij verstuurt zijn Wise-ID niet, alleen een hash.  
Peach zal de betalingsgegevens nooit kennen, om anonimiteit te behouden.  
Er wordt ook een **terugkeeradres** ingediend voor het geval van terugbetalingen.

## Stap 4.S: Verkoper financiert de Peach Escrow

Na een succesvolle API-aanvraag om het verkoopaanbod te maken, ontvangt de Verkoper het verkoopaanbied-ID:

```j
const sellOfferId = offerCreateRes.data.id;

```

Bewaar dit ID goed.  
Het verkoopaanbod is gemaakt, maar nog niet publiek: geen Koper kan ermee interacteren.  
Eerst moet de Verkoper de Escrow financieren.

De Escrow is als een kluis die zowel de toestemming van de Verkoper als Peach vereist.  
De Bitcoin wordt in de kluis geplaatst en blijft veilig tot het einde van de Trade.  
Omdat de toestemming van de Verkoper nodig is en de Escrow een Script op de Bitcoin Blockchain is (een P2WSH-adres), heeft Peach de publieke sleutel van de Verkoper nodig om deze Escrow te maken.

Op dit moment levert de Verkoper de publieke sleutel die hij wil gebruiken voor de Escrow.  
Peach selecteert haar eigen publieke sleutel en bouwt het adres.

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

In de code genereert de Verkoper een nieuw Key Pair vanaf het verkoopaanbied-ID.  
Dit is veilig en reproduceerbaar.

Na het indienen van de publieke sleutel, retourneert de Peach API het adres waar de Verkoper de 21.000 sats naartoe moet sturen.  
Maar je hoeft niet blind te vertrouwen — je kunt dit verifiëren.

Laten we het verifiëren!

De Peach API retourneert ook de publieke sleutel die Peach voor deze specifieke Escrow gebruikte, zodat we het adres kunnen **recreëren via het Bitcoin Script**.

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

Het script voor de Escrow:

* vereist altijd de handtekening van Peach  
* en verder:
  * vereist de handtekening van de Verkoper  
  * of dat er 4320 blocks zijn gemined sinds de Bitcoin naar dat adres werd gestuurd  

Waarom 4320 blocks?  
Dat zijn ongeveer 30 dagen blocks (1 block per 10 minuten gemiddeld).  
Na 1 maand kan Peach alleen ondertekenen in het geval de Verkoper niet meewerkt of zijn sleutels verliest.  

Peach heeft een onberispelijke reputatie in het beheren van de fondsen van de Verkopers.

Na het bouwen van het script kun je het P2WSH-adres verifiëren en zien dat het overeenkomt met het adres dat Peach API terugstuurt.

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

Perfect! Voer nu een Bitcoin-transactie uit naar dat adres en wacht tot de Escrow als gefinancierd wordt verklaard.

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

Na 1 block wordt het verkoopaanbod publiek en kunnen kopers ermee interacteren.


## Stap 5.B: Koper doet een Trade Request op het verkoopaanbod

Nu is het tijd voor actie door de Koper!

Eerst controleren we alle beschikbare verkoopaanbiedingen:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Voor eenvoud kiest de Koper de eerste beschikbare aanbieding.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

De Koper wil een Trade Request doen, waarmee hij aangeeft te willen handelen volgens de voorwaarden van de Verkoper.  
Klinkt eenvoudig, maar dit is **de meest complexe stap** van het hele proces.

De Koper moet het volgende indienen:

* Voorkeursbetalingsmethode (een van de door de Verkoper toegestane methoden)  
* Voorkeursvaluta (zoals hierboven)  
* Symmetrische sleutel (voor directe communicatie met de Verkoper) gecodeerd  
* Handtekening van de symmetrische sleutel  
* Betalingsgegevens gecodeerd met de symmetrische sleutel  
* Handtekening van de betalingsgegevens  
* Release-adres: waar de Koper de aangekochte Bitcoin wil ontvangen  
* Handtekening van het Release-adres: bewijs dat de Koper eigenaar is van dat adres (BIP-322)  
* Maximale mining fee: hoeveel de Koper bereid is op te offeren aan fees voor de uiteindelijke transactie  

Veel, toch?  
Maar dat is waarom Peach superveilig is!  
Laten we stap voor stap doorgaan.

### Voorkeursbetalingsmethode en valuta

Dit is het eenvoudigst:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Symmetrische sleutel

De symmetrische sleutel wordt gebruikt met **AES256 tweerichtingsencryptie**: je kunt een bericht coderen en decoderen met dezelfde sleutel.

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

Genereer een willekeurig nummer:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Je mag deze sleutel niet in het openbaar indienen!  
Het moet zodanig worden gecodeerd dat alleen Koper en Verkoper het kunnen decoderen, met behulp van hun publieke PGP-sleutels.

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

De Verkoper moet ook de symmetrische sleutel ondertekenen om te bevestigen dat deze door de Koper is gegenereerd:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Betalingsgegevens

Dit zijn de meest waardevolle gegevens: IBAN, Revolut-username, alles wat de oorsprong van de Fiat-betaling identificeert.  
De Koper codeert deze gegevens met de symmetrische sleutel zodat alleen de Verkoper ze kan decoderen.

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

### Release-adres definiëren en eigendom bewijzen

Je moet definiëren waar de Bitcoin van de transactie naartoe gestuurd moet worden.  
Een adres creëren is eenvoudig; eigendom bewijzen is lastiger.  
Dit gebeurt voor regulatoire doeleinden en als extra veiligheidsmaatregel.  
We gebruiken **BIP-322**: je ondertekent een bericht met je private Bitcoin key, verifieerbaar via het adres.

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

### Maximale mining fee

De Koper kan bepalen hoeveel hij bereid is te betalen aan miners voor de transactie.

### Trade Request indienen

Alles is nu klaar en de Koper dient het Trade Request in.

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

Nu is het de beurt aan de Verkoper om dit te accepteren.

## Stap 5.S: Verkoper accepteert het Trade Request

De Verkoper controleert de lijst met ontvangen Trade Requests:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Als de Verkoper het Trade Request wil accepteren, deelt hij zijn betalingsgegevens met de Koper, zodat deze weet waar de Fiat naartoe gestuurd moet worden.

Omdat de symmetrische sleutel al door de Koper is ingediend, kan de Verkoper deze decoderen en gebruiken om zijn eigen betalingsgegevens te coderen.

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


En dat is het! Nu kan de Verkoper het Trade Request accepteren en begint de officiële transactie.

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

Als het hele proces ingewikkeld lijkt, hier is een illustratie:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Stap 6.B: Koper verklaart de betaling gedaan te hebben

De Koper kan controleren of hij contracten heeft (Trades overeengekomen met een Verkoper) via de endpoint `contract summaries`:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Als een contract de status **“paymentRequired”** heeft, is het zijn beurt om de Fiat-betaling te doen.

Hiervoor decodeert hij de betalingsgegevens van de Verkoper met de symmetrische sleutel van het moment dat het Trade Request werd gedaan.  
Als hij deze niet heeft opgeslagen, kan hij zijn eigen PGP private key gebruiken.

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

Dit gebeurt buiten Peach: de Koper opent zijn bankapp en voert de Fiat-overdracht uit.

De Bitcoin staat al in de Escrow, beheerd door Peach en de Verkoper.  
Je kunt het Escrow-adres controleren via een Blockchain Explorer.

Na de betaling verklaart de Koper dat deze is voltooid:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Dit was het laatste stap voor de Koper.  
Nu moet de Verkoper bevestigen dat hij de Fiat ontvangen heeft en de Bitcoin vrijgeven naar het adres van de Koper.

## Stap 6.S: Verkoper bevestigt de betaling

Net als de Koper controleert de Verkoper de contracten die aan hem zijn toegewezen.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

De API-respons bevat een **PSBT** (Partially Signed Bitcoin Transaction)  
die de Bitcoin uit de Escrow naar het adres van de Koper stuurt.  
Deze is al ondertekend door Peach, alleen de handtekening van de Verkoper ontbreekt.

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

Nu kan de Verkoper de transactie voltooien door de 2 handtekeningen en het Escrow Bitcoin Script door te geven.  
We gebruiken het MultiSig-pad van het script (het tweede pad) en voegen `OP_FALSE` toe aan de stack om de IF-statement correct te beïnvloeden.

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

De laatste stap: stuur de voltooide transactie naar de Peach API:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Dames en heren, zo handelen we op Peach met **maximale veiligheid en privacy!**
