---
keywords:
  - Produkt
  - P2P
  - poradnik
  - programowanie
  - javascript
  - bitcoin
tags:
  - Produkt
  - P2P
  - Poradnik
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin „pod maską”: techniczne spojrzenie na to, dlaczego jest najbezpieczniejszą giełdą P2P


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


Aaaaah Bitcoin — ta wspaniała forma pieniędzy, która rozwija się dzięki swoim podstawowym funkcjom.  
Wszyscy go kochamy, ale wiemy też, że istnieją ryzyka związane z samostanowieniem: jeśli udostępnisz swoje seed, tracisz wszystko.  
Wyślesz na niewłaściwy adres, i nigdy tego nie odzyskasz.

Dlatego open-source’owe oprogramowanie w ekosystemie Bitcoin jest tak ważne — aplikacja Peach jest dostępna na GitHub dla każdego, kto chce ją sprawdzić!

Oczywiście bycie open-source nie oznacza, że wszyscy będą dokładnie czytać kod i analizować jego mechanizmy.  
Dlatego piszę ten artykuł: aby **pokazać, jak bezpieczna jest Peach** i jakie kroki zapewniają to bezpieczeństwo.

## Krok 1: Tworzenie konta bez KYC w Peach

Dla jasności: Twój Bitcoin Seed **jest Twoim kontem Peach**.

Aby korzystać z Peach, musisz utworzyć konto, co polega na udostępnieniu klucza publicznego konta i udowodnieniu, że jest on Twój.

Aby to zrobić:

*  1 - pobierz aktualną datę i godzinę (w milisekundach) jako tekst  
*  2 - użyj swojego klucza prywatnego, aby wygenerować podpis tego tekstu  
*  3 - prześlij klucz publiczny, aktualną datę/godzinę oraz podpis  

Musisz także wygenerować `uniqueId`, aby inni użytkownicy nie mogli podszywać się pod Ciebie.  
Jest to przydatne np. w przypadku utraty seed, przy zachowaniu tego samego konta.  
Nie będziemy się jednak teraz nad tym zbytnio rozwodzić.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>


Oto kod w JavaScript:

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

Gratulacje! Właśnie utworzyłeś konto w Peach!  
Serwer zweryfikował, że w tym momencie jesteś właścicielem pary kluczy Bitcoin odpowiadającej przesłanemu kluczowi publicznemu.

## Krok 2: Przesyłanie publicznego klucza PGP

Będzie dużo szyfrowania… ale także trochę deszyfrowania.  
Klucze Bitcoin pozwalają tylko na szyfrowanie jednokierunkowe, więc potrzebujemy kluczy PGP do szyfrowania dwukierunkowego.  
Jest to kluczowe do szyfrowania/odszyfrowywania danych bankowych, wiadomości czatu itp.

Przesyłanie publicznego klucza PGP jest podobne do przesyłania publicznego klucza Bitcoin, ale istnieje dodatkowy krok:  
publiczny klucz PGP musi być podpisany przy użyciu prywatnego klucza Bitcoin, aby upewnić się, że użytkownik posiada oba klucze.

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


W tym momencie Peach posiada zarówno Twój klucz publiczny Bitcoin, jak i PGP!  
Będzie to niezwykle istotne dla handlu na Peach.

## Kolejne kroki

Od tego momentu poradnik pokaże obie strony: stronę Kupującego i Sprzedającego.

Kroki są następujące:

*   3.S Sprzedający tworzy ofertę sprzedaży  
*   4.S Sprzedający finansuje Peach Escrow  
*   5.B Kupujący składa Trade Request na ofertę sprzedaży  
*   5.S Sprzedający akceptuje Trade Request Kupującego  
*   6.B Kupujący deklaruje, że przelew fiat został wykonany  
*   6.S Sprzedający potwierdza otrzymanie płatności  

## Krok 3.S: Sprzedający tworzy ofertę sprzedaży

Tworzenie oferty sprzedaży oznacza, że Sprzedający ogłasza gotowość sprzedaży określonej ilości Bitcoin.  
Ale to nie wszystko: Sprzedający musi zaakceptować coś w zamian.

Oferta sprzedaży obejmuje:

* ilość Bitcoin do sprzedaży  
* waluty akceptowane przez Sprzedającego  
* metody płatności akceptowane przez Sprzedającego (gotówka, przelew bankowy, Revolut itp.)  
* premium (jak drogie jest Bitcoin względem aktualnej wartości rynkowej)  

Jeżeli wszystko pójdzie dobrze, Kupujący będzie zainteresowany i złoży Trade Request.  
W tym momencie musi wybrać **jedną walutę i jedną metodę płatności** spośród dostępnych.  
Im więcej opcji pokazuje Sprzedający, tym większa szansa na przyciągnięcie Kupującego.

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

W kodzie Sprzedający ogłasza sprzedaż 21.000 sats (0,00021 Bitcoin) z 1% premią.  
Chce otrzymać euro na konto Wise.  
Nie przesyła ID konta Wise, tylko hash.  
Peach nigdy nie pozna danych płatności, aby zachować anonimowość.  
Przesyłany jest także **adres zwrotny** na wypadek zwrotu.

## Krok 4.S: Sprzedający finansuje Peach Escrow

Po udanym żądaniu do API Peach w celu utworzenia oferty, Sprzedający otrzymuje ID oferty sprzedaży:

```j
const sellOfferId = offerCreateRes.data.id;

```

Zachowaj to ID.  
Oferta została utworzona, ale nie jest jeszcze publiczna: żaden Kupujący nie może wchodzić w interakcję.  
Najpierw Sprzedający musi sfinansować Escrow.

Escrow jest jak sejf, który wymaga autoryzacji zarówno Sprzedającego, jak i Peach.  
Bitcoin trafia do sejfu i pozostaje tam bezpieczny aż do zakończenia transakcji.  
Ponieważ wymagana jest autoryzacja Sprzedającego, a Escrow to skrypt na blockchain Bitcoin (adres P2WSH), Peach potrzebuje klucza publicznego Sprzedającego do utworzenia Escrow.

W tym momencie Sprzedający przesyła klucz publiczny, który chce użyć dla Escrow.  
Peach wybiera własny klucz publiczny i buduje adres.

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

W kodzie Sprzedający generuje nową parę kluczy na podstawie ID oferty.  
Jest to bezpieczne i możliwe do odtworzenia.

Po przesłaniu klucza publicznego, API Peach zwraca adres, na który Sprzedający powinien wysłać 21.000 sats.  
Nie trzeba jednak ufać w ciemno — można to zweryfikować.

Zweryfikujmy!

API Peach zwraca również publiczny klucz użyty do tego Escrow, co pozwala **odtworzyć adres za pomocą Bitcoin Script**.

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

Skrypt Escrow:

* zawsze wymaga podpisu Peach  
* oraz dodatkowo:
  * wymaga podpisu Sprzedającego  
  * lub że od wysłania Bitcoin na ten adres wydobyto 4320 bloków  

Dlaczego 4320 bloków?  
To około 30 dni bloków (średnio 1 blok co 10 minut).  
Po miesiącu Peach może podpisać sama w przypadku, gdy Sprzedający nie współpracuje lub utraci klucze.  

Peach ma nienaganną reputację w zarządzaniu środkami Sprzedających.

Po zbudowaniu skryptu możesz zweryfikować generowany adres P2WSH i sprawdzić, że jest taki sam jak adres zwrócony przez API Peach.

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

Świetnie! Teraz wykonaj transakcję Bitcoin na ten adres i poczekaj, aż Escrow zostanie uznany za sfinansowany.

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

Po jednym bloku oferta staje się publiczna i Kupujący mogą zacząć wchodzić w interakcje.


## Krok 5.B: Kupujący składa Trade Request na ofertę sprzedaży

Teraz czas na działanie Kupującego!

Najpierw sprawdzamy wszystkie dostępne oferty sprzedaży:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Dla uproszczenia, Kupujący wybiera pierwszą dostępną ofertę.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Kupujący chce złożyć Trade Request, informując Sprzedającego, że chce handlować na jego warunkach.  
Brzmi prosto, ale jest to **najbardziej skomplikowany krok** całego procesu.

Kupujący musi przesłać:

* preferowana metoda płatności (jedna z dozwolonych przez Sprzedającego)  
* preferowana waluta (jak wyżej)  
* klucz symetryczny (do bezpośredniej komunikacji z Sprzedającym) zaszyfrowany  
* podpis klucza symetrycznego  
* dane płatności zaszyfrowane kluczem symetrycznym  
* podpis danych płatności  
* adres docelowy (Release Address), gdzie Kupujący chce otrzymać zakupione Bitcoin  
* podpis adresu docelowego (BIP-322) – dowód własności adresu  
* maksymalna opłata minerska: ile Kupujący jest gotów zapłacić za opłaty transakcyjne  

Dużo, prawda?  
Ale dlatego Peach jest superbezpieczna!  
Przejdźmy krok po kroku.

### Preferowana metoda płatności i waluta

To najprostsze:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Klucz symetryczny

Klucz symetryczny jest używany z **AES256 szyfrowaniem dwukierunkowym**: można zaszyfrować wiadomość i odszyfrować ją tym samym kluczem.

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

Wygeneruj losową liczbę:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Nie należy przesyłać klucza jawnie!  
Trzeba go zaszyfrować w taki sposób, aby tylko Kupujący i Sprzedający mogli go odszyfrować, korzystając z publicznych kluczy PGP.

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

Sprzedający musi również podpisać klucz symetryczny, aby upewnić się, że został wygenerowany przez Kupującego:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Dane płatności

To najbardziej wrażliwe informacje: IBAN, nazwa użytkownika Revolut, wszystko, co identyfikuje źródło płatności fiat.  
Kupujący szyfruje te dane kluczem symetrycznym, aby tylko Sprzedający mógł je odszyfrować.

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

### Ustalenie adresu docelowego i dowód własności

Musisz ustalić, gdzie Bitcoin z transakcji zostanie wysłany.  
Utworzenie adresu jest proste, trudniejsze jest udowodnienie własności.  
Robimy to ze względów regulacyjnych i jako dodatkowe zabezpieczenie.  
Używamy **BIP-322**: podpisujesz wiadomość swoim prywatnym kluczem Bitcoin, weryfikowalną za pomocą adresu.

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

### Maksymalna opłata minerska

Kupujący może ustalić, ile maksymalnie jest gotów zapłacić w opłatach minerskich za transakcję.

### Złożenie Trade Request

Teraz wszystko jest gotowe i Kupujący składa Trade Request.

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

Teraz kolej na Sprzedającego, aby go zaakceptował.

## Krok 5.S: Sprzedający akceptuje Trade Request

Sprzedający sprawdza listę otrzymanych Trade Requests:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Jeżeli Sprzedający chce zaakceptować Trade Request, musi udostępnić swoje dane płatności Kupującemu, aby ten wiedział, gdzie wysłać fiat.

Ponieważ klucz symetryczny został już stworzony przez Kupującego, Sprzedający może go odszyfrować i użyć do zaszyfrowania swoich własnych danych płatności.

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

I to wszystko! Teraz Sprzedający może zaakceptować Trade Request i rozpoczyna się oficjalna transakcja.

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

Jeżeli proces wydaje się skomplikowany, oto ilustracja:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Krok 6.B: Kupujący deklaruje wykonanie płatności

Kupujący może sprawdzić, czy ma jakieś kontrakty (Trades ustalone z Sprzedającym) za pomocą endpointu `contract summaries`:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Jeżeli kontrakt ma status **“paymentRequired”**, wtedy Kupujący musi dokonać płatności fiat.

W tym celu odszyfrowuje dane płatności Sprzedającego kluczem symetrycznym z momentu złożenia Trade Request.  
Jeśli ich nie zachował, może użyć swojego prywatnego klucza PGP.

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

Proces ten odbywa się poza Peach: Kupujący otwiera aplikację bankową i wykonuje przelew fiat.

Bitcoin znajduje się już w Escrow, kontrolowany przez Peach i Sprzedającego.  
Można sprawdzić adres Escrow w eksploratorze blockchain.

Po dokonaniu płatności Kupujący deklaruje, że została wykonana:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

To był ostatni krok Kupującego.  
Teraz Sprzedający musi potwierdzić, że otrzymał fiat i uwolnić Bitcoin na adres Kupującego.

## Krok 6.S: Sprzedający potwierdza płatność

Tak samo jak Kupujący, Sprzedający sprawdza kontrakty przypisane do niego.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

Odpowiedź API zawiera **PSBT** (Partially Signed Bitcoin Transaction)  
przesyłającą Bitcoin z Escrow na adres Kupującego.  
Podpis Peach jest już w transakcji, brakuje tylko podpisu Sprzedającego.

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

Sprzedający może teraz sfinalizować transakcję, dodając dwa podpisy i Escrow Bitcoin Script.  
Używamy ścieżki MultiSig (druga ścieżka skryptu) i dodajemy `OP_FALSE` do stosu, aby poprawnie wpłynąć na instrukcję IF.

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

Ostatni krok: przesłanie sfinalizowanej transakcji do API Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Drodzy Państwo, tak handlujemy na Peach z **maksymalnym bezpieczeństwem i prywatnością!**
