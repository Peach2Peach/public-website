---
keywords:
  - Προϊόν
  - P2P
  - οδηγός
  - προγραμματισμός
  - javascript
  - bitcoin
tags:
  - Προϊόν
  - P2P
  - Οδηγός
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin κάτω από την κουκούλα: μια τεχνική ματιά στο γιατί είναι το ασφαλέστερο P2P exchange


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


Aaaaah Bitcoin — αυτή η υπέροχη μορφή χρήματος που ανθίζει χάρη στα βασικά της χαρακτηριστικά.  
Όλοι το αγαπάμε, αλλά γνωρίζουμε επίσης ότι υπάρχουν κίνδυνοι με την αυτοκυριαρχία: αν μοιραστείς τα seed σου, τα χάνεις όλα.  
Αν στείλεις σε λάθος διεύθυνση, δεν θα τα ξαναδείς ποτέ.

Γι’ αυτό είναι σημαντικό το open-source λογισμικό στο οικοσύστημα Bitcoin — η εφαρμογή Peach είναι διαθέσιμη στο Github για όποιον θέλει να την ελέγξει!

Φυσικά, το ότι είναι open-source δεν σημαίνει ότι όλοι θα διαβάσουν προσεκτικά τον κώδικα ή θα καταλάβουν πώς λειτουργεί.  
Γι’ αυτό γράφω αυτό το άρθρο: για να **δείξω πόσο ασφαλής είναι η Peach** και ποια βήματα εξασφαλίζουν αυτήν την ασφάλεια.

## Βήμα 1: Δημιουργία λογαριασμού χωρίς KYC στην Peach

Για να είμαστε σαφείς: το Bitcoin seed σου **είναι ο λογαριασμός Peach σου**.

Για να χρησιμοποιήσεις την Peach, πρέπει να δημιουργήσεις έναν λογαριασμό, που περιλαμβάνει την κοινοποίηση του δημόσιου κλειδιού σου και την απόδειξη ότι το κατέχεις.

Για να το κάνεις:

*  1 - πάρε την τρέχουσα ημερομηνία και ώρα (σε milliseconds) ως κείμενο  
*  2 - χρησιμοποίησε το ιδιωτικό κλειδί σου για να υπογράψεις αυτό το κείμενο  
*  3 - υποβάλεις το δημόσιο κλειδί, την τρέχουσα ημερομηνία/ώρα και την υπογραφή  

Επιπλέον, πρέπει να δημιουργήσεις ένα `uniqueId` για να αποτρέψεις άλλους χρήστες από το να προσποιηθούν ότι είσαι εσύ.  
Αυτό είναι χρήσιμο σε περιπτώσεις όπως η απώλεια των seed αλλά η διατήρηση του ίδιου λογαριασμού.  
Αλλά ας μην εμβαθύνουμε τώρα σε αυτό.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>

Αυτός είναι ο κώδικας σε JavaScript:

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

Συγχαρητήρια! Μόλις δημιούργησες λογαριασμό στην Peach!  
Ο διακομιστής έχει επαληθεύσει ότι εσύ, αυτή τη στιγμή, είσαι ο ιδιοκτήτης του ζεύγους κλειδιών Bitcoin που αντιστοιχεί στο υποβληθέν δημόσιο κλειδί.

## Βήμα 2: Υποβολή του Δημόσιου Κλειδιού PGP

Θα υπάρχει πολλή κρυπτογράφηση… αλλά και κάποια αποκρυπτογράφηση.  
Τα Bitcoin κλειδιά επιτρέπουν μόνο μονοκατευθυντική κρυπτογράφηση, οπότε θα χρειαστούμε PGP κλειδιά για αμφίδρομη κρυπτογράφηση.  
Αυτό είναι βασικό για την κρυπτογράφηση/αποκρυπτογράφηση τραπεζικών δεδομένων, μηνυμάτων chat κλπ.

Η υποβολή του Δημόσιου Κλειδιού PGP είναι παρόμοια με την υποβολή του Δημόσιου Κλειδιού Bitcoin, αλλά υπάρχει ένα επιπλέον βήμα:  
το Δημόσιο Κλειδί PGP πρέπει να υπογραφεί με το Ιδιωτικό Κλειδί Bitcoin για να επαληθευτεί ότι ο χρήστης κατέχει και τα δύο κλειδιά.

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

Αυτό το σημείο, η Peach έχει και τα δύο Δημόσια Κλειδιά σου — Bitcoin και PGP!  
Αυτό θα είναι εξαιρετικά σημαντικό για το trading στην Peach.

## Επόμενα Βήματα

Από εδώ και πέρα, ο οδηγός θα δείξει και τις δύο πλευρές: τον Αγοραστή και τον Πωλητή.

Τα βήματα είναι:

*   3.S Ο Πωλητής δημιουργεί μια Προσφορά Πώλησης  
*   4.S Ο Πωλητής χρηματοδοτεί το Peach Escrow  
*   5.B Ο Αγοραστής υποβάλλει Αίτημα Συναλλαγής στην Προσφορά  
*   5.S Ο Πωλητής αποδέχεται το Αίτημα Συναλλαγής του Αγοραστή  
*   6.B Ο Αγοραστής δηλώνει ότι η Fiat μεταφορά ολοκληρώθηκε  
*   6.S Ο Πωλητής επιβεβαιώνει ότι έλαβε την Πληρωμή  

## Βήμα 3.S: Ο Πωλητής δημιουργεί Προσφορά Πώλησης

Η δημιουργία μιας Προσφοράς Πώλησης σημαίνει ότι ο Πωλητής ανακοινώνει ότι είναι πρόθυμος να πουλήσει μια συγκεκριμένη ποσότητα Bitcoin.  
Αλλά δεν είναι μόνο αυτό: ο Πωλητής πρέπει να αποδεχτεί κάτι ως αντάλλαγμα.

Μια Προσφορά Πώλησης περιλαμβάνει:

* ποσότητα Bitcoin προς πώληση  
* τα νομίσματα που αποδέχεται ο Πωλητής  
* τους τρόπους πληρωμής που αποδέχεται (μετρητά, τραπεζικό έμβασμα, Revolut κλπ.)  
* το Premium (πόσο πιο ακριβό είναι το Bitcoin σε σχέση με την τρέχουσα αγορά)  

Αν όλα πάνε καλά, ένας Αγοραστής θα ενδιαφερθεί και θα ζητήσει να πραγματοποιήσει συναλλαγή.  
Σε εκείνο το σημείο, θα πρέπει να επιλέξει **ένα νόμισμα και έναν τρόπο πληρωμής** από τα διαθέσιμα.  
Όσο περισσότερες επιλογές εμφανίζει ο Πωλητής, τόσο μεγαλύτερες οι πιθανότητες να προσελκύσει Αγοραστή.

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

Στον κώδικα, ο Πωλητής ανακοινώνει την πώληση 21.000 sats (0,00021 Bitcoin) με 1% premium.  
Θέλει να λάβει Ευρώ μέσω Wise.  
Δεν υποβάλλει το Wise ID του, μόνο ένα hash.  
Η Peach δεν θα γνωρίζει ποτέ τα στοιχεία πληρωμής του, για να παραμείνει ανώνυμος.  
Υποβάλλεται επίσης μια **Διεύθυνση Επιστροφής** για επιστροφές.

## Βήμα 4.S: Ο Πωλητής χρηματοδοτεί το Peach Escrow

Μετά από επιτυχημένο αίτημα στο API της Peach για τη δημιουργία της Προσφοράς, ο Πωλητής λαμβάνει το ID της Προσφοράς:

```j
const sellOfferId = offerCreateRes.data.id;

```

Αυτό το ID είναι σημαντικό — κράτησέ το.  
Η Προσφορά δημιουργήθηκε αλλά δεν είναι ακόμα δημόσια: κανένας Αγοραστής δεν μπορεί να αλληλεπιδράσει.  
Πρώτα, ο Πωλητής πρέπει να χρηματοδοτήσει το Escrow.

Το Escrow είναι σαν ένα θησαυροφυλάκιο που απαιτεί εξουσιοδότηση τόσο από τον Πωλητή όσο και από την Peach.  
Το Bitcoin τοποθετείται εκεί και παραμένει ασφαλές μέχρι το τέλος της Συναλλαγής.  
Αφού απαιτείται η εξουσιοδότηση του Πωλητή και το Escrow είναι ένα Bitcoin Script (διεύθυνση P2WSH), η Peach χρειάζεται το Δημόσιο Κλειδί του Πωλητή για να δημιουργήσει το Escrow.

Σε αυτό το σημείο, ο Πωλητής υποβάλλει το Δημόσιο Κλειδί που θα χρησιμοποιηθεί.  
Η Peach επιλέγει το δικό της Δημόσιο Κλειδί και κατασκευάζει τη διεύθυνση.

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

Στον κώδικα, ο Πωλητής παράγει ένα νέο ζεύγος κλειδιών από το ID της Προσφοράς.  
Αυτό είναι ασφαλές και αναπαραγώγιμο.

Μετά την υποβολή του Δημόσιου Κλειδιού, το API επιστρέφει τη διεύθυνση όπου πρέπει να στείλει τα 21.000 sats.  
Αλλά δεν χρειάζεται να εμπιστευτείς τυφλά — μπορείς να το επαληθεύσεις.

Ας το επαληθεύσουμε!

Το API επιστρέφει επίσης το Δημόσιο Κλειδί που χρησιμοποίησε η Peach για αυτό το Escrow, ώστε να μπορούμε να **αναδημιουργήσουμε τη διεύθυνση** με το Bitcoin Script.

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

Το Script για το Escrow:

* απαιτεί πάντα την υπογραφή της Peach  
* και επιπλέον:
  * απαιτεί την υπογραφή του Πωλητή  
  * ή ότι έχουν εξορυχθεί 4320 blocks από την αποστολή του Bitcoin  

Γιατί 4320 blocks;  
Αυτό ισοδυναμεί με περίπου 30 μέρες blocks (1 block κάθε 10 λεπτά).  
Μετά από 30 μέρες, η Peach μπορεί να υπογράψει μόνη της σε περίπτωση που ο Πωλητής δεν συνεργαστεί ή χάσει τα κλειδιά.

Η Peach έχει άριστη φήμη στη διαχείριση των κεφαλαίων των Πωλητών.

Μετά την κατασκευή του script, μπορείς να επαληθεύσεις ότι η παραγόμενη διεύθυνση P2WSH ταιριάζει με αυτή που έστειλε το API.

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

Τέλεια! Τώρα απλώς στείλε μια συναλλαγή Bitcoin σε αυτή τη διεύθυνση και περίμενε να δηλωθεί ότι το Escrow έχει χρηματοδοτηθεί.

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

Μετά από ένα block, η Προσφορά γίνεται δημόσια και οι Αγοραστές μπορούν να αλληλεπιδράσουν.

## Βήμα 5.B: Ο Αγοραστής υποβάλλει Αίτημα Συναλλαγής στην Προσφορά

Τώρα είναι η στιγμή για δράση του Αγοραστή!

Πρώτα, ελέγχουμε όλες τις διαθέσιμες Προσφορές Πώλησης:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Για απλότητα, ο Αγοραστής ενδιαφέρεται για την πρώτη διαθέσιμη Προσφορά Πώλησης.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Ο Αγοραστής θέλει να υποβάλει Αίτημα Συναλλαγής, δηλώνοντας ότι θέλει να κάνει συναλλαγή σύμφωνα με τους όρους του Πωλητή.  
Ακούγεται απλό, αλλά αυτό είναι το πιο πολύπλοκο βήμα ολόκληρης της διαδικασίας.

Ας αναλύσουμε τι πρέπει να υποβάλει ο Αγοραστής:

* Προτιμώμενος τρόπος πληρωμής (ένας από τους επιτρεπόμενους από τον Πωλητή)  
* Προτιμώμενο νόμισμα (όπως παραπάνω)  
* Συμμετρικό Κλειδί (για άμεση επικοινωνία με τον Πωλητή) κρυπτογραφημένο  
* Υπογραφή του Συμμετρικού Κλειδιού  
* Δεδομένα πληρωμής κρυπτογραφημένα με το Συμμετρικό Κλειδί  
* Υπογραφή των Δεδομένων Πληρωμής  
* Διεύθυνση Παραλαβής: πού θέλει να λάβει τα Bitcoin που αγοράζει  
* Υπογραφή της Διεύθυνσης Παραλαβής (BIP-322) για απόδειξη ιδιοκτησίας  
* Μέγιστο κόστος mining που είναι διατεθειμένος να πληρώσει  

Πολύ, σωστά;  
Αλλά γι’ αυτό η Peach είναι υπερασφαλής!  
Πάμε βήμα-βήμα.

### Προτιμώμενος τρόπος πληρωμής και νόμισμα

Αυτό είναι το πιο απλό:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### Συμμετρικό Κλειδί

Το Συμμετρικό Κλειδί θα χρησιμοποιηθεί με **AES256 Διπλής Κατεύθυνσης**: μπορείς να κρυπτογραφήσεις και να αποκρυπτογραφήσεις με το ίδιο κλειδί.

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

Δημιούργησέ το τυχαία:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Δεν πρέπει να υποβληθεί σε απλό κείμενο!  
Πρέπει να κρυπτογραφηθεί έτσι ώστε μόνο ο Αγοραστής και ο Πωλητής να μπορούν να το αποκρυπτογραφήσουν, χρησιμοποιώντας τα Δημόσια Κλειδιά PGP.

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

Ο Πωλητής πρέπει να υπογράψει επίσης το Συμμετρικό Κλειδί για να επιβεβαιώσει ότι δημιουργήθηκε από τον Αγοραστή:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Δεδομένα Πληρωμής

Εδώ βρίσκονται τα πιο ευαίσθητα δεδομένα: IBAN, username Revolut κλπ.  
Ο Αγοραστής τα κρυπτογραφεί με το Συμμετρικό Κλειδί, ώστε μόνο ο Πωλητής να μπορεί να τα διαβάσει.

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

### Ορισμός Διεύθυνσης Παραλαβής και απόδειξη ιδιοκτησίας

Πρέπει να ορίσεις πού θέλεις να σταλούν τα Bitcoin μετά τη Συναλλαγή.  
Η δημιουργία διεύθυνσης είναι εύκολη.  
Η απόδειξη ιδιοκτησίας είναι πιο δύσκολη και γίνεται για κανονιστικούς λόγους και ασφάλεια.  
Χρησιμοποιούμε **BIP-322**: υπογράφεις ένα μήνυμα με το Ιδιωτικό σου Κλειδί Bitcoin, επαληθεύσιμο από τη διεύθυνση.

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

### Τελευταία λεπτομέρεια: Μέγιστο κόστος mining

Ο Αγοραστής μπορεί να καθορίσει πόσα είναι διατεθειμένος να πληρώσει σε fees για να λάβει τα Bitcoin.

### Τέλος, υποβολή Αιτήματος Συναλλαγής

Τώρα όλα είναι έτοιμα και ο Αγοραστής στέλνει το Αίτημα Συναλλαγής.

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


Τώρα είναι η σειρά του Πωλητή να το αποδεχτεί.

## Βήμα 5.S: Ο Πωλητής αποδέχεται το Αίτημα Συναλλαγής

Ο Πωλητής περιμένει Αγοραστή να αλληλεπιδράσει με την Προσφορά του.  
Ελέγχει τη λίστα Αιτημάτων Συναλλαγής:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Αν ο Πωλητής θέλει να αποδεχτεί το Αίτημα, πρέπει να μοιραστεί τα δεδομένα πληρωμής του με τον Αγοραστή, ώστε να ξέρει πού να στείλει τα Fiat.

Εφόσον το Συμμετρικό Κλειδί έχει ήδη δημιουργηθεί από τον Αγοραστή, ο Πωλητής μπορεί να το αποκρυπτογραφήσει και να το χρησιμοποιήσει για να κρυπτογραφήσει τα δικά του δεδομένα πληρωμής.

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

Και αυτό είναι! Τώρα ο Πωλητής μπορεί να αποδεχτεί το Αίτημα και ξεκινά η επίσημη Συναλλαγή.

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

Αν η διαδικασία φαίνεται περίπλοκη, εδώ υπάρχει μια εικόνα που την απεικονίζει:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Βήμα 6.B: Ο Αγοραστής δηλώνει ότι η Πληρωμή πραγματοποιήθηκε

Ο Αγοραστής μπορεί να ελέγξει αν έχει συμβόλαια (Trades συμφωνημένα με Πωλητή) μέσω του endpoint `contract summaries`:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Αν ένα συμβόλαιο έχει κατάσταση **“paymentRequired”**, τότε πρέπει να προχωρήσει στην Fiat πληρωμή.

Για αυτό, αποκρυπτογραφεί τα δεδομένα πληρωμής του Πωλητή χρησιμοποιώντας το Συμμετρικό Κλειδί από τη στιγμή που δημιουργήθηκε το Αίτημα Συναλλαγής.  
Αν δεν το έχει αποθηκεύσει, μπορεί να χρησιμοποιήσει το Ιδιωτικό Κλειδί PGP.

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

Αυτό συμβαίνει εκτός Peach: ο Αγοραστής ανοίγει την Τραπεζική του εφαρμογή και στέλνει την Fiat πληρωμή.

Το Bitcoin είναι ήδη στο Escrow, ελεγχόμενο από την Peach και τον Πωλητή.  
Μπορείς να ελέγξεις τη διεύθυνση Escrow με έναν Blockchain Explorer.

Μετά την πληρωμή, ο Αγοραστής δηλώνει ότι έγινε η Πληρωμή:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Αυτό ήταν το τελευταίο βήμα του Αγοραστή.  
Τώρα ο Πωλητής πρέπει να επιβεβαιώσει ότι έλαβε τα Fiat και να απελευθερώσει τα Bitcoin στον Αγοραστή.

## Βήμα 6.S: Ο Πωλητής επιβεβαιώνει την Πληρωμή

Όπως και ο Αγοραστής, ο Πωλητής ελέγχει τα συμβόλαια που του έχουν ανατεθεί.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

Η απάντηση του API περιλαμβάνει μια **PSBT** (Partially Signed Bitcoin Transaction)  
που στέλνει τα Bitcoin από το Escrow στη διεύθυνση του Αγοραστή.  
Έχει ήδη την υπογραφή της Peach και χρειάζεται μόνο την υπογραφή του Πωλητή.

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

Τώρα ο Πωλητής ολοκληρώνει τη Συναλλαγή, προσθέτοντας τις 2 υπογραφές και το Escrow Bitcoin Script.  
Χρησιμοποιούμε τη MultiSig διαδρομή (δεύτερη διαδρομή του script) και βάζουμε `OP_FALSE` στο stack για να επηρεάσουμε σωστά την IF δήλωση.

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

Το τελευταίο βήμα: υποβολή της ολοκληρωμένης Συναλλαγής στο API της Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Κυρίες και κύριοι, έτσι γίνεται το trading στην Peach με **μέγιστη ασφάλεια και ιδιωτικότητα!**
