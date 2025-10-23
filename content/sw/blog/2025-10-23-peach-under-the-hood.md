---
keywords:
  - Bidhaa
  - P2P
  - mwongozo
  - programu
  - javascript
  - bitcoin
tags:
  - Bidhaa
  - P2P
  - Mwongozo
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin Chini ya Hoods: mtazamo wa kiufundi kwa nini ni ubadilishaji wa P2P salama zaidi


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



Aaaaah Bitcoin — aina hii nzuri ya pesa inayofanikiwa kutokana na vipengele vyake vya msingi.  
Sote tunapenda, lakini tunatambua pia kwamba kuna hatari zinazohusiana na uhuru wa binafsi: ukishiriki seed zako, unaweza kupoteza kila kitu.  
Ukituma kwa anwani isiyo sahihi, hutapata tena.

Hivyo basi, kutoa programu zinazohusiana na Bitcoin kama open-source ni muhimu sana — App ya Peach inapatikana kwenye GitHub kwa kila mtu ambaye anataka kuangalia!

Kwa hakika, kuwa open-source haimaanishi kila mtu atasoma kwa makini na kuelewa kanuni na mbinu.  
Ndiyo maana ninaandika makala hii: ili **kuonyesha jinsi Peach ilivyo salama** na hatua zilizofanywa kufanikisha hilo.

## Hatua 1: Kutengeneza Akaunti Isiyo na KYC kwenye Peach

Ili kuwa wazi kabisa: Seed yako ya Bitcoin **ndiyo Akaunti yako ya Peach**.

Ili kutumia Peach, unahitaji kutengeneza akaunti, ambayo inahusisha kushiriki Public Key ya akaunti yako na kuthibitisha umiliki wako.

Ili kufanya hivyo:

*  1 - pata Tarehe na Muda wa sasa (kwa millisekunde) kama maandishi  
*  2 - tumia Private Key yako kuunda saini ya maandishi hayo  
*  3 - tuma Public Key, tarehe/muda wa sasa na saini  

Pia unahitaji kuunda `uniqueId` itakayosaidia kuzuia watumiaji wengine kujifanya wewe.  
Hii ni muhimu kwa mfano ikiwa unapoteza seed zako lakini unataka kudumisha akaunti hiyo hiyo.  
Lakini tusiingilie undani sana hapa.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Hapa kuna nambari ya JavaScript kufanya hili:

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

Hongera! Umeunda akaunti kwenye Peach!  
Server imehakiki kwamba kwa wakati huu wewe ndiye mmiliki wa Bitcoin Key-Pair inayolingana na Public Key uliyoituma.

## Hatua 2: Kutuma Public PGP Key yako

Kutakuwa na usimbaji wa data mwingi… na pia ufunguaji wa data.  
Bitcoin Keys zinaweza tu kusimba kwa njia moja, kwa hivyo tunahitaji PGP Keys kwa usimbaji wa njia mbili.  
Hii ni muhimu kwa usimbaji na ufunguaji wa data za akaunti za benki, ujumbe wa chat, n.k.

Kutuma Public PGP Key ni sawa na kutuma Public Bitcoin Key, lakini kuna hatua ya ziada:  
kusaini Public PGP Key kwa Bitcoin Private Key, ili kuthibitisha kuwa mtumiaji ndiye mmiliki wa Bitcoin na PGP Keys zote.

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

Kwa wakati huu, Peach ina Public Keys zote zako za Bitcoin na PGP!  
Hii itakuwa muhimu sana kwa biashara kwenye Peach.

## Hatua Zifuatazo

Kuanzia sasa, mwongozo utaonyesha pande zote mbili: upande wa Mnunuzi na upande wa Muuzaji.

Hatua ni:

*   3.S Muuzaji anaunda Ofa ya Uuzaji  
*   4.S Muuzaji anatoza Peach Escrow  
*   5.B Mnunuzi anatoa Trade Request kwenye Ofa ya Uuzaji  
*   5.S Muuzaji anakubali Trade Request ya Mnunuzi  
*   6.B Mnunuzi anatangaza kuwa Malipo ya Fiat yamefanywa  
*   6.S Muuzaji anathibitisha kupokea Malipo  

## Hatua 3.S: Muuzaji anaunda Ofa ya Uuzaji

Kuunda Ofa ya Uuzaji ni sawa na kutangaza kuwa uko tayari kuuza kiasi fulani cha Bitcoin.  
Lakini si hivyo tu: Muuzaji lazima akubali kitu kwa malipo.  

Tofauti ya Ofa ya Uuzaji:

* kiasi cha Bitcoin cha kuuza  
* Sarafu zinazokubalika na Muuzaji  
* Mbinu za Malipo zinazokubalika na Muuzaji (pesa taslimu, Uhamisho wa Benki, Revolut, nk.)  
* Premium (bei ya juu ya Bitcoin kulingana na thamani ya soko)  

Iwapo kila kitu kitakwenda vizuri, Mnunuzi atavutiwa na ofa na kutoa Trade Request.  
Wakati huo, lazima achague **sarafu moja na njia ya malipo moja**.  
Kadri Muuzaji anavyoonyesha chaguzi nyingi, ndivyo uwezekano wa kuvutia Mnunuzi unavyoongezeka.

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

Kwenye nambari, Muuzaji anatangaza kuuza 21,000 Sats (0.00021 Bitcoin) kwa premium ya 1%.  
Anataka kupokea Euro kupitia akaunti yake ya Wise.  
Haitoi ID ya akaunti yake ya Wise, bali hash tu.  
Peach haitajua maelezo ya Malipo yake, ili kudumisha usiri.  
Pia, anatoa **Anwani ya Kurudisha** kwa kesi ya kurudishiwa fedha.

## Hatua 4.S: Muuzaji anatoza Peach Escrow

Baada ya ombi la API la Peach kuunda Ofa ya Uuzaji, Muuzaji anapata ID ya Ofa:

```j
const sellOfferId = offerCreateRes.data.id;

```

Hifadhi thamani hii.  
Oferta imetengenezwa, lakini bado si ya umma: hakuna Mnunuzi anayeweza kuingiliana nayo.  
Kwanza, Muuzaji lazima atoze Escrow.

Escrow ni kama Hazina inayohitaji idhini ya Muuzaji na Peach.  
Bitcoin inaingizwa kwenye Hazina na inabaki salama hadi mwisho wa Biashara.  
Kwa kuwa inahitaji idhini ya Muuzaji, na Escrow ni Script kwenye Bitcoin Blockchain (anwani ya P2WSH), Peach inahitaji Public Key ya Muuzaji kuunda Escrow hii.

Kwa wakati huu, Muuzaji anatoa Public Key anayotaka kutumia kwa Escrow.  
Peach huchagua Public Key yake yenyewe na kuunda anwani.

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

Kwenye nambari, Muuzaji anatoa Key Pair mpya kwa kutumia ID ya Ofa ya Uuzaji.  
Hii ni njia salama na inayoweza kurudiwa.

Baada ya kutuma Public Key, API ya Peach inarudisha anwani ambapo Muuzaji anatakiwa kutuma 21,000 Sats.  
Lakini huna haja ya kuamini tu: unaweza kuthibitisha.

Tuthibitishe!

API ya Peach pia inarudisha Public Key iliyotumika kwa Escrow hii, ambayo inaturuhusu kuunda anwani tena kwa kutumia Bitcoin Script.

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

Script ya Escrow:

* inahitaji saini ya Peach kila wakati  
* na zaidi:
  * inahitaji saini ya Muuzaji  
  * au kwamba block 4320 zimechimbwa tangu Bitcoin itumwe kwenye anwani hiyo  

Kwa nini 4320 block?  
Hiyo ni takriban siku 30 za block (1 block kila dakika 10 kwa wastani).  
Baada ya mwezi, Peach inaweza kutoa saini peke yake ikiwa Muuzaji hatashirikiana au atapoteza key zake.

Peach ina sifa safi ya kushughulikia fedha za Muuzaji.

Baada ya kujenga script, unaweza kuthibitisha anwani ya P2WSH inayoundwa na kuona kuwa ni ile ile API ya Peach iliyorudisha.

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

Nzuri! Sasa fanya muamala wa Bitcoin kwa anwani hiyo na subiri Escrow itajulikana kama imefadhiliwa.

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

Baada ya block moja, Ofa ya Uuzaji inakuwa ya umma na Wanunuzi wanaweza kuanza kuingiliana nayo.


## Hatua 5.B: Mnunuzi anatoa Trade Request kwenye Ofa ya Uuzaji

Sasa ni wakati wa Mnunuzi kuchukua hatua!

Kwanza, angalia Ofa zote za Uuzaji zilizopo:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Kwa urahisi, Mnunuzi atavutiwa na Ofa ya kwanza iliyopo.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Mnunuzi anataka kutoa Trade Request, kumjulisha Muuzaji kuwa yuko tayari kufanya Biashara chini ya masharti yake.  
Inaonekana rahisi, lakini hili ndilo hatua **ngumu zaidi** ya mchakato mzima.

Mnunuzi lazima atume:

* Njia ya Malipo inayopendekezwa (moja kati ya zile zinazokubaliwa na Muuzaji)  
* Sarafu inayopendekezwa (kama ilivyotajwa hapo juu)  
* Key Simetrici (kwa mawasiliano ya moja kwa moja kati ya Mnunuzi na Muuzaji) iliyosimbwa  
* Saini ya Key Simetrici  
* Data za Malipo zilizofichwa kwa kutumia Key Simetrici  
* Saini ya Data za Malipo  
* Anwani ya Kutoa (Release Address): ambapo Mnunuzi anataka kupokea Bitcoin iliyonunuliwa  
* Saini ya Ujumlishaji wa Anwani ya Kutoa: uthibitisho kwamba Mnunuzi ndiye mmiliki, ukitumia BIP-322  
* Ada ya juu ya kuchimba: kiasi gani Mnunuzi yuko tayari kutoa kwa malipo ya Miners  

Ni mengi, sivyo?  
Lakini ndiyo maana Peach ni salama sana!  
Tufanye hatua kwa hatua.

### Njia ya Malipo na Sarafu inayopendekezwa

Hii ni rahisi zaidi:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Key Simetrici

Key Simetrici itatumika na **AES256 Usimbaji wa Mbili-Njia**: unaweza kusimba ujumbe na kisha kuufungua kwa kutumia key ile ile.

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

Tengeneza namba nasibu:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Hautatumia key hii waziwazi!  
Lazima isimbwe kwa njia ambayo Mnunuzi na Muuzaji pekee wanaweza kuufungua, kwa kutumia Public PGP Keys zao.

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

Ili Muuzaji ajue kuwa Key Simetrici imetengenezwa na Mnunuzi, lazima pia aisaini:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Data za Malipo

Hizi ndizo taarifa muhimu zaidi: IBAN, username ya Revolut, kila kitu kinachotambua chanzo cha malipo ya Fiat.  
Mnunuzi anazisimba na Key Simetrici ili Muuzaji aweze kuzipata baadaye.

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

### Kuweka Anwani ya Kutoa na kuthibitisha umiliki

Lazima uamue wapi Bitcoin ya Biashara itatumwa.  
Kuunda anwani ni rahisi; kuthibitisha umiliki ni changamoto.  
Hufanywa kwa sababu za kisheria na kama tahadhari ya ziada.  
Tuna tumia **BIP-322**: saini ujumbe kwa Private Key yako ya Bitcoin, uthibitishwe kwa Anwani.

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

### Ada ya juu ya kuchimba

Mnunuzi anaweza kuamua kiasi cha juu kinachokubalika cha ada ya miners kwa muamala.

### Kutoa Trade Request

Sasa kila kitu kimeandaliwa, na Mnunuzi anatuma Trade Request.

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

Sasa ni zamu ya Muuzaji kukubali.

## Hatua 5.S: Muuzaji anakubali Trade Request

Muuzaji anakagua orodha ya Trade Requests zilizopokelewa:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Kama Muuzaji anakubali Trade Request, lazima ashiriki Data zake za Malipo na Mnunuzi, ili Mnunuzi ajue wapi Fiat itatumwa.

Kwa kuwa Key Simetrici tayari imetumwa na Mnunuzi, Muuzaji anaweza kuifungua na kuitumia kusimba Data zake za Malipo.

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

Na hiyo ni yote! Sasa Muuzaji anaweza kukubali Trade Request na Biashara rasmi inaanza.

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

Ikiwa kuelewa mchakato mzima ni mgumu, hapa kuna picha ya kuelezea:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Hatua 6.B: Mnunuzi anatangaza Malipo yametolewa

Mnunuzi anaweza kuangalia kama ana Mikataba (Trades zilizokubaliwa na Muuzaji) kwa kutumia endpoint ya `contract summaries`:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Kama Mkataba una hali ya **“paymentRequired”**, basi ni zamu ya Mnunuzi kufanya malipo ya Fiat.

Ili kufanya hivyo, afungua Data za Malipo za Muuzaji kwa Key Simetrici ya wakati Trade Request ilitolewa.  
Kama hakuwa ameihifadhi, anaweza kutumia Private PGP Key yake.

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

Hii inapaswa kufanywa nje ya Peach: Mnunuzi anafungua App ya Benki na kufanya Uhamisho wa Fiat.

Bitcoin tayari ipo kwenye Escrow, inasimamiwa na Peach na Muuzaji.  
Unaweza pia kuangalia Anwani ya Escrow kwenye data za Mkataba na kutumia Blockchain Explorer.

Baada ya malipo kufanywa, Mnunuzi anatangaza kuwa Malipo yametolewa:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Hii ilikuwa Hatua ya mwisho ya Mnunuzi.  
Sasa Muuzaji lazima athibitishe kupokea Fiat na kutoa Bitcoin kwenye Anwani ya Mnunuzi.

## Hatua 6.S: Muuzaji anathibitisha kupokea Malipo

Vivyo hivyo, Muuzaji anakagua Mikataba iliyopangiwa kwake.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

Majibu ya API yanajumuisha **PSBT** (Partially Signed Bitcoin Transaction)  
ambayo ni muamala wa Bitcoin kutoka Escrow hadi Anwani ya Mnunuzi.  
Saini ya Peach tayari ipo, inahitaji saini ya Muuzaji tu.

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

Sasa Muuzaji anaweza kumalizia Muamala, kwa kuwasilisha saini zote mbili na Escrow Bitcoin Script.  
Tunaanza na njia ya MultiSig ya script (njia ya pili) na kuingiza `OP_FALSE` kwenye stack ili kuathiri IF statement kwa usahihi.

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

Hatua ya mwisho: tuma Muamala uliokamilika kwenye API ya Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Basi wapenzi, hivi ndivyo tunavyofanya biashara kwenye Peach kwa **usalama na faragha ya hali ya juu!**
