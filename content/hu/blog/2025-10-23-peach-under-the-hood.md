---
keywords:
  - Termék
  - P2P
  - útmutató
  - programozás
  - javascript
  - bitcoin
tags:
  - Termék
  - P2P
  - Útmutató
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin a motorháztető alatt: technikai betekintés, miért ez a legbiztonságosabb P2P csere


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


Aaaaah, a Bitcoin — ez a csodálatos pénzforma, amely az alapvető tulajdonságainak köszönhetően virágzik. Mindannyian szeretjük, de azt is tudjuk, hogy az egyéni szuverenitás kockázatokkal jár: ha megosztod a seedjeidet, mindent elveszítesz. Ha rossz címre küldesz pénzt, soha nem látod viszont.

Ezért olyan fontos a nyílt forráskód a Bitcoin ökoszisztémában — a Peach alkalmazás is elérhető a Githubon, bárki megvizsgálhatja!

Persze az, hogy valami nyílt forráskódú, nem jelenti azt, hogy mindenki bele fog nézni, vagy érteni fogja, hogyan működik.  
Ezért írom ezt a cikket: hogy **megmutassam, mennyire biztonságos a Peach**, és milyen lépések garantálják ezt.

## 1. lépés: Hozz létre egy KYC-mentes Peach fiókot

Legyünk tiszták: a Bitcoin-seeded **maga a Peach fiókod**.

Ha használni szeretnéd a Peach-et, létre kell hoznod egy fiókot, ami abból áll, hogy megosztod a nyilvános kulcsodat, és bizonyítod, hogy birtoklod is azt.

Ehhez:

*  1 - lekéred az aktuális időt (milliszekundumban) szövegként  
*  2 - ezt a szöveget aláírod a privát kulcsoddal  
*  3 - elküldöd a nyilvános kulcsot, az aktuális időt és az aláírást  

Emellett generálnod kell egy `uniqueId`-t, amely megakadályozza, hogy mások kiadjanak magukat érted.  
Ez akkor hasznos, ha például elveszted a seedjeidet, de meg akarod tartani ugyanazt a fiókot.  
De ebbe most ne mélyedjünk bele.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Így néz ki ez JavaScript-ben:

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

Gratulálok! Most létrehoztál egy fiókot a Peach-en!  
A szerver ellenőrizte, hogy a megadott nyilvános kulcshoz tartozó Bitcoin-kulcspár ténylegesen a tiéd.

## 2. lépés: PGP nyilvános kulcs feltöltése

Sok titkosítás következik… de lesz némi visszafejtés is.  
A Bitcoin-kulcsok csak egyirányú titkosítást tesznek lehetővé, ezért PGP kulcsokra is szükség van a kétirányú kommunikációhoz.  
Ez elengedhetetlen a banki adatok és az üzenetek biztonságos kezeléséhez.  

A PGP nyilvános kulcs feltöltése hasonló a Bitcoin kulcs feltöltéséhez, de van egy plusz lépés:  
a PGP kulcsot **alá kell írni a Bitcoin privát kulcsoddal**, hogy bizonyítsd: mindkettő a te tulajdonod.

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

Ezen a ponton a Peach már ismeri mindkét nyilvános kulcsodat — a Bitcoin- és a PGP-kulcsot!  
Ez nagyon fontos lesz a kereskedés során.


## További lépések

Mostantól két szereplőnk lesz: a Vevő és az Eladó.

A következő lépések:

*   3.S Az Eladó létrehozza az eladási ajánlatot  
*   4.S Az Eladó feltölti a Peach escrow-t  
*   5.B A Vevő ajánlatot tesz az eladásra  
*   5.S Az Eladó elfogadja az ajánlatot  
*   6.B A Vevő jelzi, hogy megtörtént a fiat fizetés  
*   6.S Az Eladó megerősíti a beérkezést  


## 3.S lépés: Az Eladó létrehozza az eladási ajánlatot

Egy eladási ajánlat létrehozása azt jelenti, hogy az Eladó jelezni akarja: hajlandó egy adott mennyiségű Bitcoint eladni.  
De ez nem minden — azt is meg kell határoznia, mit fogad el cserébe.  

Egy eladási ajánlat tartalmazza:

* az eladni kívánt Bitcoin mennyiségét  
* az elfogadott fiat pénznemeket  
* az elfogadott fizetési módokat (készpénz, banki átutalás, Revolut stb.)  
* a prémiumot (az aktuális piaci ár fölötti százalék)  

Ha minden jól megy, egy vevő érdeklődni fog az ajánlat iránt, és ajánlatot tesz.  
Ekkor választania kell **egy pénznemet és egy fizetési módot** az Eladó által megadottak közül.  
Minél több lehetőséget kínál az Eladó, annál nagyobb az esélye, hogy vevőt talál.

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

A kódban látható, hogy az Eladó 21 000 satoshit (0.00021 Bitcoin) kínál 1%-os prémiummal,  
eurót szeretne kapni Wise-on keresztül,  
de nem adja meg a Wise-azonosítóját — csak annak hash-ét.  
A Peach tehát sosem ismeri meg a fizetési részleteit, így megmarad az anonimitás.  
Az Eladó megad egy **visszautalási címet** is, arra az esetre, ha visszatérítés szükséges.

## 4.S lépés: Az Eladó feltölti az escrow-t

Sikeres API-hívás után az Eladó megkapja az ajánlat azonosítóját:

```j
const sellOfferId = offerCreateRes.data.id;

```

Ez az azonosító fontos — őrizd meg.  
Az ajánlat még nem nyilvános: a vevők még nem láthatják.  
Előbb az escrow-t kell feltölteni.

Az escrow olyan, mint egy trezor, amit **a Peach és az Eladó együtt** tud kinyitni.  
A Bitcoin ide kerül, és itt marad biztonságban a tranzakció végéig.  
Mivel ez egy Bitcoin-szkript (P2WSH cím), a Peach-nek szüksége van az Eladó nyilvános kulcsára a létrehozáshoz.

Az Eladó elküldi a használandó nyilvános kulcsot,  
a Peach pedig kiválasztja a sajátját, és elkészíti a címet.

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

A kódban az Eladó az ajánlat azonosítójából derivál egy új kulcspárt.  
Ez biztonságos és reprodukálható módszer.  

Miután a kulcs elküldésre került, az API visszaadja a címet, ahová az Eladónak el kell küldenie a 21 000 satoshit.  
De nem kell vakon megbízni — ellenőrizheted magad is a címet.

Nézzük is meg!

Az API visszaküldi a Peach által használt nyilvános kulcsot is, így **újra létre tudjuk hozni a címet** a Bitcoin-szkriptből.

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

Az escrow-szkript így néz ki:

* mindig szükséges a Peach aláírása  
* ezen felül:
  * az Eladó aláírása is kell  
  * vagy 4320 blokk eltelte azóta, hogy a Bitcoin letétbe került  

Miért 4320 blokk?  
Ez körülbelül **30 napnyi** bányászat (1 blokk / 10 perc).  
Miért kell, hogy Peach egyedül is aláírhasson 30 nap után?  
Mert előfordulhat, hogy egy eladó inaktív, elveszíti a kulcsait stb.  

A Peach kiváló hírnévnek örvend a Vevők és Eladók pénzének kezelésében.

A szkript létrehozása után ellenőrizheted, hogy a P2WSH-cím megegyezik-e az API által visszaadott címmel.

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

Tökéletes!  
Most már csak el kell küldeni a tranzakciót a Bitcoin-hálózaton, és megvárni, amíg az escrow finanszírozása megerősítést nyer.

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

Egy blokknyi megerősítés után az ajánlat nyilvánossá válik, és a vevők kapcsolatba léphetnek vele.

## 5.B lépés: A Vevő ajánlatot tesz

Most a Vevő következik!

Először lekérdezi az elérhető eladási ajánlatokat:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Tegyük fel egyszerűség kedvéért, hogy a Vevőt az első ajánlat érdekli.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

A Vevő ajánlatot szeretne tenni — jelezve, hogy hajlandó az Eladó feltételei szerint vásárolni.  
Egyszerűnek tűnik, de ez **a legösszetettebb lépés** az egész folyamatban.

A Vevőnek meg kell adnia:

* a választott fizetési módot  
* a választott pénznemet  
* egy szimmetrikus kulcsot (a titkosított kommunikációhoz) — titkosítva  
* ennek az aláírását  
* a titkosított fizetési adatokat  
* azok aláírását  
* a Bitcoin fogadó címet  
* a tulajdon igazolását (BIP 322 segítségével)  
* a maximális bányadíjat, amit hajlandó fizetni  

Ez rengeteg, ugye?  
De épp ez teszi a Peach-et rendkívül biztonságossá!  
Menjünk végig lépésről lépésre.

### Fizetési mód és pénznem:

Ez a legegyszerűbb rész:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Szimmetrikus kulcs:

A szimmetrikus kulcs AES256 kétirányú titkosítást biztosít: ugyanazzal a kulccsal lehet titkosítani és visszafejteni.

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

Egy véletlenszerű szám generálásával hozható létre:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

De ezt a kulcsot **nem lehet nyíltan elküldeni**.  
Úgy kell titkosítani, hogy csak a Vevő és az Eladó tudja visszafejteni —  
a már megadott PGP nyilvános kulcsok segítségével.

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

És hogy az Eladó biztos lehessen benne, hogy a kulcs valóban a Vevőtől származik,  
a Vevő aláírja a PGP kulcsával:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Fizetési adatok:

Ez a legérzékenyebb rész: a fiat fizetéshez szükséges adatok (IBAN, Revolut-azonosító stb.).  
A Vevő ezeket titkosítja a szimmetrikus kulccsal, így csak az Eladó tudja visszafejteni.

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

### Fogadó cím és tulajdon igazolása:

Meg kell adni, hová szeretnéd megkapni a Bitcoint.  
A cím létrehozása egyszerű, de **bizonyítani**, hogy a tiéd — bonyolultabb.  
Ez megfelelőségi és biztonsági szempontból is fontos (különösen a 2025 szeptemberében felfedezett „address replacement” támadás ellen).

A bizonyítás a **BIP-322** szabvány alapján történik: aláírsz egy üzenetet a privát kulcsoddal,  
majd az ellenőrizhető a cím alapján.

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

### Maximális bányadíj

A Vevő korlátozhatja, hogy mennyi díjat hajlandó fizetni a végső tranzakcióban.

### Ajánlat elküldése

Most, hogy minden kész, a Vevő elküldi az ajánlatot.

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

A labda most az Eladó térfelén van.

## 5.S lépés: Az Eladó elfogadja az ajánlatot

Az Eladó megvárta, hogy a Vevő reagáljon.  
Most lekérdezi az ajánlatokra érkezett kérelmeket:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Ha egy ajánlat szimpatikus, az Eladó megosztja **a saját fizetési adatait** is, hogy a Vevő tudja, hová küldje a fiat pénzt.

Mivel a Vevő már küldött egy szimmetrikus kulcsot (PGP-vel titkosítva), az Eladó visszafejtheti,  
és ugyanazzal a kulccsal titkosíthatja a saját fizetési adatait.

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

Ezzel az Eladó készen áll az ajánlat elfogadására, és a csere hivatalosan elindul!

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

Ha ez így zavaros, íme egy szemléltető ábra:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>


## 6.B lépés: A Vevő jelzi, hogy a fizetés megtörtént

A Vevő lekérheti az **aktív szerződéseit** (az elfogadott ajánlatokat) az API `contract summaries` végpontján keresztül:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Ha egy szerződés állapota **„paymentRequired”**, az azt jelenti, hogy a fiat fizetést még el kell küldenie.

Ekkor a Vevő visszafejti az Eladó fizetési adatait a korábban használt szimmetrikus kulccsal.  
Ha ezt elvesztette, PGP privát kulcsával is visszafejtheti.

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

Ez a lépés a Peach-en kívül történik:  
a Vevő megnyitja a banki alkalmazását, és elküldi az átutalást az Eladó által megadott adatokkal.

Ha aggódnál: a Bitcoin már az escrow-ban van, amit csak a Peach és az Eladó együtt tud feloldani.  
Az escrow címét a szerződésből lekérheted, és ellenőrizheted a Bitcoin-blokkláncon.

Miután a fizetés megtörtént, a Vevő jelzi:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Ezzel a Vevő feladata véget ért.  
Most az Eladó következik, aki megerősíti a beérkezést, és felszabadítja a Bitcoint.

## 6.S lépés: Az Eladó megerősíti a fizetés beérkezését

Az Eladó lekérdezi a szerződéseit.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

A szerződés API válasza tartalmaz egy **részben aláírt Bitcoin tranzakciót (PSBT)**,  
ami a Bitcoin-t az escrow-ból a Vevő címére küldi.  
Ez már a Peach által alá van írva — csak az Eladó aláírása hiányzik.

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

Az Eladó hozzáadja a saját aláírását és a szkriptet.  
Mivel a **MultiSig** útvonalat használjuk, a verembe `OP_FALSE` kerül, hogy az IF feltétel helyesen értékelődjön.

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

Végül az Eladó elküldi a teljes tranzakciót az API-nak:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Hölgyeim és uraim, így zajlik egy Peach csere —  **a lehető legnagyobb biztonsággal és adatvédelemmel!**
