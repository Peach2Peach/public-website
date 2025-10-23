---
keywords:
  - Продукт
  - P2P
  - навчання
  - програмування
  - javascript
  - bitcoin
tags:
  - Продукт
  - P2P
  - Навчання
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin під капотом: технічний погляд на те, чому це найнадійніший P2P-обмін


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


Ааааах, Bitcoin — ця чудова форма грошей, яка процвітає завдяки своїм базовим властивостям. Ми всі його любимо, але всі розуміємо, що самостійне зберігання має ризики: поділишся своїми seed-фразами — і втратиш усе. Відправиш монети на неправильну адресу — і ніколи їх не повернеш.

Саме тому відкритість коду програм, пов’язаних із Bitcoin, є надзвичайно важливою — і додаток Peach доступний на Github для всіх бажаючих переглянути!

Звісно, відкритий код не означає, що всі уважно читають його й проводять реверс-інжиніринг. Саме тому я пишу цю статтю: щоб **показати, наскільки безпечна Peach**, і які кроки робляться для досягнення цієї безпеки.

## Крок 1: створення акаунта без KYC у Peach

Щоб було абсолютно зрозуміло: ваш Bitcoin Seed — це ваш акаунт у Peach.

Якщо ви хочете користуватися Peach, потрібно створити акаунт — тобто надати Публічний ключ свого акаунта і довести, що ви його власник.

Для цього необхідно:

*  1 - отримати поточну дату й час (у мілісекундах) у вигляді тексту  
*  2 - використати свій Приватний ключ, щоб підписати цей текст  
*  3 - надіслати Публічний ключ, поточну дату/час і підпис  

Також потрібно згенерувати `uniqueId`, який використовується для запобігання видаванню іншими користувачами себе за вас. Це корисно, наприклад, якщо ви втратили seed, але хочете зберегти той самий акаунт. Але не будемо заглиблюватись у це зараз.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Ось код для виконання цього в Javascript:

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

Вітаємо! Ви щойно створили акаунт у Peach! Сервер підтвердив, що саме ви на даний момент є власником пари ключів Bitcoin, які відповідають надісланому Публічному ключу.

## Крок 2: надсилання вашого публічного PGP-ключа

Далі буде багато шифрування — але також і розшифровки. Ключі Bitcoin дозволяють лише одностороннє шифрування, тому нам потрібні PGP-ключі для двостороннього шифрування.  
Це потрібно для шифрування та розшифрування банківських даних, чатів тощо.  

Надсилання публічного PGP-ключа схоже на надсилання публічного Bitcoin-ключа.  
Але є додатковий крок: потрібно підписати публічний PGP-ключ своїм приватним Bitcoin-ключем, щоб підтвердити, що користувач є власником обох ключів — Bitcoin і PGP.

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

На цьому етапі Peach має обидва ваші публічні ключі — Bitcoin і PGP! Це буде дуже важливо під час торгівлі в Peach.


## Наступні кроки

Далі в туторіалі показано обидві сторони процесу: Покупця та Продавця.

Послідовність буде така:

*   3.S Продавець створює пропозицію на продаж  
*   4.S Продавець фінансує Escrow у Peach  
*   5.B Покупець надсилає запит на угоду до пропозиції продажу  
*   5.S Продавець приймає запит від Покупця  
*   6.B Покупець оголошує, що фіат-переказ виконано  
*   6.S Продавець підтверджує отримання платежу  


## Крок 3.S: Продавець створює пропозицію на продаж

Створення пропозиції на продаж означає, що ви оголошуєте про готовність продати певну кількість Bitcoin.  
Але цього недостатньо: Продавець повинен зазначити, що він приймає в обмін.  
Пропозиція на продаж включає:

* кількість Bitcoin для продажу  
* валюти, які Продавець приймає  
* способи оплати, які приймаються (готівка, банківський переказ, Revolut тощо)  
* премію (наскільки ціна Bitcoin відрізняється від ринкової)  

Якщо все йде добре, Покупець зацікавиться пропозицією і надішле запит на угоду.  
На цьому етапі він повинен обрати одну валюту та один метод оплати серед доступних. Чим більше варіантів покаже Продавець, тим більше шансів привернути Покупця.

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

Як видно з коду, Продавець пропонує продати 21 000 сатоші (0.00021 Bitcoin) з премією 1%. Він хоче отримати євро через свій акаунт Wise.  
Зверніть увагу — він **НЕ** надсилає свій ID акаунта Wise, лише хеш. Peach ніколи не знатиме дані платіжного методу, щоб зберегти анонімність.  
Також надсилається зворотна адреса — вона використовується у випадку повернення (якщо жоден покупець не зацікавиться).

## Крок 4.S: Продавець фінансує Escrow у Peach

Після успішного запиту до API Peach для створення пропозиції продажу, Продавець отримує ID пропозиції:

```j
const sellOfferId = offerCreateRes.data.id;

```

Це значення важливе — збережіть його. Є інші способи отримати його, але поки просто збережіть.  
Пропозиція створена, але ще не опублікована — жоден покупець не може з нею взаємодіяти. Спочатку Продавець повинен профінансувати Escrow.

Escrow — це як сейф, який вимагає дозволу і Продавця, і Peach, щоб відкритися.  
Bitcoin розміщується всередині сейфа і залишається там у безпеці до завершення угоди.  
Оскільки він вимагає дозволу Продавця, а Escrow є скриптом у блокчейні Bitcoin (адреса P2WSH), Peach потрібен публічний ключ Продавця для створення цього Escrow.

На цьому етапі Продавець надсилає Peach публічний ключ, який хоче використати для Escrow. Peach обирає свій власний публічний ключ і створює спільну адресу.

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

Як видно з коду, Продавець вирішив створити нову пару ключів, використовуючи ID пропозиції як шлях деривації. Це безпечний і відтворюваний підхід.  
Після надсилання публічного ключа API Peach повертає адресу, на яку Продавець має відправити 21 000 сатоші. Але не потрібно просто довіряти — адресу можна перевірити.

Перевірімо!

API Peach також повертає публічний ключ, який Peach використала для цього Escrow, що дозволяє нам відтворити адресу, створивши Bitcoin-скрипт:

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

Скрипт для Escrow виглядає так:

* завжди вимагає підпис Peach  
* і додатково:  
  * або підпис Продавця  
  * або проходження 4320 блоків з моменту надсилання Bitcoin  

Чому 4320 блоків? Це 30 днів майнінгу (1 блок кожні 10 хвилин).  
Чому через місяць можна використати лише підпис Peach? Бо Продавці можуть бути неактивні, втратити ключі тощо.  
Peach має бездоганну репутацію у збереженні коштів Продавців.

Після створення скрипта ви можете перевірити згенеровану адресу P2WSH і переконатися, що це та сама, яку надіслала API Peach.

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

Ідеально! Тепер просто відправте Bitcoin на цю адресу й дочекайтеся підтвердження фінансування Escrow.

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

Після підтвердження (після одного блоку) пропозиція стає публічною, і покупці можуть почати взаємодію з нею.

## Крок 5.B: Покупець надсилає запит на угоду до пропозиції

Настав час дій для Покупця!

Спершу переглянемо всі доступні пропозиції продажу:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Для спрощення Покупець зацікавиться першою доступною пропозицією.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Тепер Покупець хоче зробити запит на угоду, повідомивши Продавцю, що готовий торгувати на запропонованих умовах.  
Звучить просто, чи не так? Але це найскладніший крок у всьому процесі.

Покупець повинен надіслати:

* бажаний метод оплати (дозволений Продавцем)  
* бажану валюту  
* симетричний ключ (для безпосереднього спілкування з Продавцем) — зашифрований  
* підпис цього ключа  
* зашифровані платіжні дані  
* підпис платіжних даних  
* адресу отримання Bitcoin після угоди  
* підпис повідомлення про володіння адресою (BIP 322)  
* максимальну комісію за майнінг  

Багато, правда? Але саме це робить Peach такою безпечною!  
Розберімо крок за кроком.

### Симетричний ключ:

Симетричний ключ буде використовуватися з двостороннім шифруванням AES256:  
ви можете зашифрувати повідомлення й розшифрувати його тим самим ключем.

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

Щоб створити його, просто згенеруйте випадкове число:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Але не можна передавати цей ключ у відкритому вигляді — це зруйнує мету шифрування.  
Його потрібно зашифрувати так, щоб лише Покупець і Продавець могли його розшифрувати.  
Оскільки обидва надали свої публічні PGP-ключі, потрібно зашифрувати його так, щоб його можна було розшифрувати тільки за допомогою відповідного приватного PGP-ключа:

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

І щоб Продавець був упевнений, що симетричний ключ створив саме Покупець, той має підписати його своїм PGP-ключем:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Платіжні дані:

Це найцінніша частина інформації — ваші платіжні дані.  
Це може бути ваш банківський IBAN, ім’я користувача Revolut або інші реквізити, за якими можна ідентифікувати відправника фіат-переказу.  
Продавець пізніше надішле свої дані Покупцю.

Тепер, коли у нас є симетричний ключ, ми можемо використати його для шифрування платіжних даних, які Продавець згодом розшифрує.

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

### Визначення адреси отримання та підтвердження володіння:

Ви повинні визначити, куди саме хочете, щоб після угоди було надіслано Bitcoin.  
Створити адресу просто, а от довести володіння — складніше.  
Це робиться для регуляторних вимог і як додатковий захід безпеки (саме він робить Peach несприйнятливою до **Attack Replacement Attack**, виявленої у вересні 2025 р.).

Доказ володіння здійснюється за допомогою **BIP-322**, який дозволяє підписати повідомлення приватним Bitcoin-ключем, а перевірку виконати через саму адресу.

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

### І остання деталь: максимальна комісія майнерів

Як Покупець, ви можете не захотіти витрачати надто багато на комісію за транзакцію.  
У такому випадку можна вказати **максимальну комісію за майнінг**, яку ви готові “заплатити”, щоб отримати Bitcoin.

### Нарешті, створюємо запит на угоду

Оце так процес, га? Але ось ми й дійшли до моменту надсилання запиту:

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

Тепер черга Продавця прийняти його.

## Крок 5.S: Продавець приймає запит на угоду

Продавець чекав, поки хтось відреагує на його пропозицію продажу.  
Він перевіряє список запитів на угоду:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Якщо Продавець хоче прийняти запит, він повинен поділитися своїми платіжними даними з Покупцем, щоб той знав, куди надсилати фіат-платіж.

Оскільки симетричний ключ уже був створений і надісланий Покупцем, Продавець може його розшифрувати (адже він був зашифрований його публічним PGP-ключем) і використати цей самий ключ для шифрування своїх платіжних даних.

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

І все! Тепер Продавець може прийняти запит — і офіційна торгівля розпочинається!

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

Якщо весь процес здається складним — ось схема, що ілюструє його:


<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Крок 6.B: Покупець оголошує, що платіж виконано

Покупець може перевірити, чи має він активні контракти (тобто угоди, які погоджені обома сторонами) через запит до `contract summaries` у API:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

У відповідь він отримає список усіх контрактів, у яких бере участь.  
Якщо один із них має статус **“paymentRequired”**, це означає, що зараз його черга здійснити фіат-переказ.

Для цього він повинен розшифрувати платіжні дані Продавця за допомогою симетричного ключа, створеного під час запиту на угоду.  
Якщо він не зберіг ключ — не страшно, його можна розшифрувати за допомогою приватного PGP-ключа Покупця.

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

Далі все відбувається поза межами Peach:  
Покупець відкриває свій банківський застосунок (або аналог) і здійснює переказ фіатних коштів за реквізитами Продавця.

Якщо ви, читаючи це, сумніваєтеся — пам’ятайте: Bitcoin уже знаходиться в Escrow, який контролюється Peach і Продавцем.  
Можна навіть перевірити адресу Escrow (вона є у даних контракту, що повертає API) і через блокчейн-експлорер переконатися, що Bitcoin там.

Після здійснення фіат-переказу Покупець має повідомити, що платіж виконано:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Це був останній крок Покупця.  
Тепер Продавець має підтвердити, що отримав фіат, і відпустити Bitcoin із Escrow на адресу Покупця.

## Крок 6.S: Продавець підтверджує отримання платежу

Так само, як і Покупець, Продавець перевіряє контракти, призначені йому.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

У відповіді API контракту Продавець отримає **PSBT** (Partially Signed Bitcoin Transaction) — це частково підписана транзакція з Escrow на адресу Покупця, підписана Peach.  
Це означає, що для її дійсності бракує лише підпису Продавця.

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

Тепер Продавець може фіналізувати транзакцію, передавши обидва підписи та скрипт Escrow.  
Оскільки ми використовуємо шлях **MultiSig** (другий варіант у скрипті), потрібно додати `OP_FALSE` у стек, щоб IF-умова обробилася правильно.

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


Останній крок: надіслати фіналізовану транзакцію до API Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Пані та панове — ось як ми торгуємо на Peach із максимальною безпекою та приватністю!
