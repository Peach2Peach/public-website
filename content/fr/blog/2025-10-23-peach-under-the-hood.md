---
keywords:
  - Produit
  - P2P
  - tutoriel
  - programmation
  - javascript
  - bitcoin
tags:
  - Produit
  - P2P
  - Tutoriel
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin sous le capot : un regard technique sur pourquoi c’est le plus sûr des échanges P2P


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

Aaaaah, le Bitcoin — cette merveilleuse forme de monnaie qui prospère grâce à ses caractéristiques fondamentales. Nous l’aimons tous, mais nous savons aussi qu’il comporte des risques liés à la souveraineté individuelle : partagez vos seeds, et vous perdez tout. Envoyez des fonds à la mauvaise adresse, et vous ne les reverrez jamais.

C’est pourquoi le code open source dans l’écosystème Bitcoin est si important — et l’application Peach est disponible sur Github pour que tout le monde puisse la consulter !

Bien sûr, open source ne veut pas dire que tout le monde lira le code avec attention ou analysera son fonctionnement en détail.  
C’est pourquoi j’écris cet article : pour **montrer à quel point Peach est sécurisé** et quelles sont les étapes mises en place pour y parvenir.

## Étape 1 : créer un compte sans KYC sur Peach

Soyons clairs : votre seed Bitcoin **est** votre compte Peach.

Si vous souhaitez utiliser Peach, vous devez créer un compte, ce qui consiste à partager la clé publique de votre compte et à prouver que vous en êtes le propriétaire.

Pour cela, il faut :

*  1 - obtenir la date et l’heure actuelles (en millisecondes) sous forme de texte  
*  2 - utiliser votre clé privée pour générer une signature de ce texte  
*  3 - soumettre la clé publique, la date/heure actuelle et la signature  

Vous devez également générer un `uniqueId`, qui servira à empêcher d’autres utilisateurs de se faire passer pour vous.  
Cela est utile dans des cas comme la perte de vos seeds tout en souhaitant garder le même compte.  
Mais ne nous attardons pas trop là-dessus.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 70%;">
<br><br>

Voici le code Javascript correspondant :

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

Félicitations ! Vous venez de créer un compte sur Peach !  
Le serveur a validé que vous êtes, à ce moment précis, le propriétaire de la paire de clés Bitcoin correspondant à la clé publique soumise.

## Étape 2 : soumettre votre clé publique PGP

Il y aura beaucoup de chiffrement… mais aussi un peu de déchiffrement.  
Les clés Bitcoin ne permettent qu’un chiffrement à sens unique, donc nous aurons besoin de clés PGP pour permettre le chiffrement et le déchiffrement bidirectionnels.  
C’est essentiel pour sécuriser les données bancaires, les messages de chat, etc.  

Soumettre la clé publique PGP est similaire au processus de soumission de la clé publique Bitcoin, mais il y a une étape supplémentaire :  
vous devez **signer la clé publique PGP avec votre clé privée Bitcoin**, afin de confirmer que vous êtes bien le propriétaire des deux clés (Bitcoin et PGP).

<br><br>
<img src="/img/blog/under-the-hood/underthehood02.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 70%;">
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

À ce stade, Peach possède vos deux clés publiques — Bitcoin et PGP !  
Cela sera très important pour le trading sur Peach.


## Étapes suivantes

À partir de maintenant, le tutoriel va présenter les deux côtés : celui de l’Acheteur et celui du Vendeur.

Les étapes seront les suivantes :

*   3.S Le Vendeur crée une offre de vente  
*   4.S Le Vendeur alimente l’Escrow de Peach  
*   5.B L’Acheteur fait une demande d’échange sur l’offre de vente  
*   5.S Le Vendeur accepte la demande d’échange  
*   6.B L’Acheteur déclare que le paiement fiat a été effectué  
*   6.S Le Vendeur confirme qu’il a reçu le paiement  


## Étape 3.S : le Vendeur crée une offre de vente

Créer une offre de vente revient à annoncer que vous êtes prêt à vendre un certain montant de Bitcoin.  
Mais ce n’est pas tout : le Vendeur doit également préciser ce qu’il accepte en échange.  

Une offre de vente comprend :

* le montant de Bitcoin à vendre  
* les devises acceptées par le Vendeur  
* les méthodes de paiement acceptées (espèces, virement bancaire, Revolut, etc.)  
* la prime (le pourcentage au-dessus du prix du marché actuel)  

Si tout se passe bien, un Acheteur sera intéressé par cette offre et demandera à échanger.  
À ce moment-là, il devra sélectionner une seule devise et une seule méthode de paiement parmi celles proposées.  
Plus le Vendeur en propose, plus il a de chances d’attirer un Acheteur.

<br><br>
<img src="/img/blog/under-the-hood/underthehood03.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
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

Comme on peut le voir dans le code, le Vendeur annonce qu’il vend 21 000 sats (0.00021 Bitcoin) avec une prime de 1%.  
Il souhaite recevoir des euros via son compte Wise.  
Remarquez qu’il **ne soumet pas** son identifiant Wise — seulement un hash.  
Peach ne connaîtra donc jamais les détails de sa méthode de paiement, afin de préserver l’anonymat.  
Il soumet également une **adresse de retour**, utilisée en cas de remboursement.

## Étape 4.S : le Vendeur alimente l’Escrow de Peach

Après une requête réussie à l’API Peach pour créer l’offre de vente, le Vendeur reçoit l’ID de l’offre :

```j
const sellOfferId = offerCreateRes.data.id;

```

Cet identifiant est important — conservez-le précieusement.  
L’offre est créée, mais elle n’est pas encore publique : aucun acheteur ne peut encore interagir avec elle.  
Le Vendeur doit d’abord alimenter l’Escrow.

L’Escrow agit comme un coffre-fort nécessitant **l’autorisation du Vendeur et de Peach** pour être ouvert.  
Les Bitcoins y sont placés et y restent en sécurité jusqu’à la fin de la transaction.  
Comme il s’agit d’un script sur la blockchain Bitcoin (une adresse P2WSH), Peach a besoin de la clé publique du Vendeur pour le créer.

À ce moment-là, le Vendeur soumet à Peach la clé publique qu’il souhaite utiliser pour l’Escrow.  
Peach choisit ensuite sa propre clé publique et construit l’adresse correspondante.

<br><br>
<img src="/img/blog/under-the-hood/underthehood04.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
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

Comme montré dans le code, le Vendeur dérive une nouvelle paire de clés à partir de l’ID de l’offre.  
C’est une approche sûre, car elle est facilement reproductible.  

Une fois la clé publique envoyée, l’API Peach renvoie l’adresse où le Vendeur doit envoyer les 21 000 sats.  
Mais inutile de faire aveuglément confiance — vous pouvez vérifier vous-même l’adresse.

Vérifions !

L’API Peach renvoie également la clé publique utilisée par Peach pour cet Escrow, ce qui nous permet de **recréer l’adresse** en construisant le script Bitcoin correspondant.

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

Voici le script utilisé pour l’Escrow :

* il nécessite toujours la signature de Peach  
* et ensuite :
  * soit la signature du Vendeur  
  * soit que 4 320 blocs aient été minés depuis le dépôt des fonds  

Pourquoi 4 320 blocs ?  
Parce que cela correspond à environ **30 jours** de minage (1 bloc toutes les 10 minutes).  
Pourquoi cette alternative permettant à Peach de signer seul après 1 mois ?  
Parce que certains Vendeurs peuvent être inactifs, perdre leurs clés, etc.  

Peach a une réputation irréprochable pour la gestion des fonds des Vendeurs.

Une fois le script construit, vous pouvez vérifier l’adresse P2WSH qu’il génère — et constater qu’elle correspond bien à celle retournée par l’API Peach.

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

Parfait !  
Il ne reste plus qu’à envoyer la transaction Bitcoin vers cette adresse et attendre la confirmation de financement de l’Escrow.

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

Dès qu’elle est confirmée (après un bloc), l’offre devient publique, et les Acheteurs peuvent commencer à interagir avec elle.

## Étape 5.B : l’Acheteur fait une demande d’échange

C’est maintenant au tour de l’Acheteur d’agir !

Commençons par consulter les offres de vente disponibles :

```j
const sellOffers = await session.get("v069/sellOffer");
```

Pour simplifier, supposons que l’Acheteur s’intéresse à la première offre disponible.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

L’Acheteur souhaite alors faire une demande d’échange, pour informer le Vendeur qu’il est prêt à acheter selon ses conditions.  
Cela semble simple, non ? Mais c’est **l’étape la plus complexe** du processus.

L’Acheteur doit soumettre :

* la méthode de paiement souhaitée (parmi celles autorisées par le Vendeur)  
* la devise souhaitée  
* une clé symétrique (pour communiquer directement avec le Vendeur) — chiffrée  
* la signature de cette clé symétrique  
* les données de paiement chiffrées avec cette clé  
* la signature des données de paiement  
* l’adresse de réception du Bitcoin acheté  
* la preuve de possession de cette adresse (via BIP 322)  
* les frais de minage maximum que l’Acheteur est prêt à payer  

Ça fait beaucoup, n’est-ce pas ?  
Mais c’est exactement ce qui rend Peach extrêmement sûr !  
Voyons tout cela pas à pas.

### Méthode de paiement et devise :

C’est la partie la plus simple :

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### La clé symétrique :

La clé symétrique sera utilisée pour un chiffrement bidirectionnel AES256 : vous pouvez chiffrer un message et le déchiffrer avec la même clé.

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

Pour en créer une, générez simplement un nombre aléatoire :

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Mais attention : vous ne pouvez pas envoyer cette clé en clair.  
Elle doit être chiffrée de manière à ce que seuls l’Acheteur et le Vendeur puissent la déchiffrer.  
Puisque les deux ont soumis leurs clés publiques PGP, il faut la chiffrer de manière à ce qu’elle ne puisse être déchiffrée qu’avec **l’une des clés privées correspondantes**.

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

Et pour que le Vendeur sache que la clé vient bien de l’Acheteur, celui-ci doit la signer avec sa clé PGP :

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Les données de paiement :

C’est la partie la plus sensible : vos données de paiement — IBAN, identifiant Revolut, etc.  
Elles permettent d’identifier la provenance du paiement fiat.  
Le Vendeur partagera ensuite les siennes.

Maintenant que nous avons la clé symétrique, nous pouvons l’utiliser pour **chiffrer les données de paiement**, que le Vendeur pourra déchiffrer plus tard.

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

### Définir l’adresse de réception et prouver la propriété :

Vous devez indiquer où vous souhaitez recevoir les Bitcoins achetés.  
Créer une adresse est facile, mais **prouver que vous en êtes le propriétaire** est plus subtil.  
C’est à la fois une exigence de conformité et une mesure de sécurité supplémentaire (ce qui rend Peach résistant à l’attaque de remplacement d’adresse découverte en septembre 2025).

La preuve de propriété se fait via **BIP-322**, qui permet de signer un message avec votre clé privée Bitcoin, puis de le vérifier à partir de l’adresse.

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

### Dernier détail : les frais de minage maximum

En tant qu’Acheteur, vous pouvez ne pas vouloir payer trop de frais pour recevoir votre Bitcoin.  
Dans ce cas, vous pouvez définir le **frais de minage maximum** que vous êtes prêt à « céder » pour la transaction finale.

### Enfin, soumettre la demande d’échange

Quelle aventure, non ? Mais nous y voilà, et vous pouvez maintenant soumettre la demande.

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
<img src="/img/blog/under-the-hood/underthehood05.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
<br><br>

C’est maintenant au Vendeur de jouer.

## Étape 5.S : le Vendeur accepte la demande d’échange

Le Vendeur a attendu qu’un Acheteur interagisse avec son offre.  
Il consulte la liste des demandes d’échange :

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

S’il souhaite en accepter une, il doit partager **ses propres données de paiement** avec l’Acheteur, pour que celui-ci sache où envoyer le paiement fiat.

Puisqu’une clé symétrique a déjà été créée et envoyée par l’Acheteur, le Vendeur peut la déchiffrer (elle a été chiffrée avec sa clé publique PGP) et l’utiliser pour chiffrer ses propres données de paiement.

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

Et voilà ! Le Vendeur peut maintenant accepter la demande, et l’échange officiel commence !

<br><br>
<img src="/img/blog/under-the-hood/underthehood06.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
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

Si tout cela semble complexe, voici un schéma pour l’illustrer :

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 90%;">
<br><br>

## Étape 6.B : l’Acheteur déclare que le paiement a été effectué

L’Acheteur peut vérifier s’il a des **contrats actifs** (des échanges acceptés par les deux parties) via l’endpoint `contract summaries` de l’API :

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Cela lui renverra la liste de tous les contrats où il est impliqué.  
Si un contrat a le statut **“paymentRequired”**, cela signifie que c’est à lui d’effectuer le paiement fiat.

Pour cela, il doit **déchiffrer les données de paiement du Vendeur** à l’aide de la clé symétrique utilisée lors de la demande d’échange.  
S’il ne l’a pas sauvegardée, pas de souci — il peut la déchiffrer avec sa clé privée PGP.

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

Cette étape se déroule en dehors de Peach :  
l’Acheteur ouvre son application bancaire (ou équivalent) et effectue le virement fiat au bénéficiaire indiqué.

Si vous hésitez à ce stade, rappelez-vous que les Bitcoins sont déjà dans l’Escrow, contrôlé conjointement par Peach et le Vendeur.  
Vous pouvez même consulter l’adresse de l’Escrow (fournie par l’API du contrat) et vérifier sur la blockchain que les fonds s’y trouvent.

Une fois le paiement fiat effectué, l’Acheteur doit le déclarer :

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
<br><br>

C’était la dernière étape pour l’Acheteur.  
Désormais, le Vendeur doit confirmer qu’il a bien reçu le paiement et libérer les Bitcoins dans l’Escrow vers l’adresse de l’Acheteur.

## Étape 6.S : le Vendeur confirme la réception du paiement

Comme pour l’Acheteur, le Vendeur consulte les contrats qui lui sont assignés.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

Dans la réponse de l’API du contrat, le Vendeur reçoit une **transaction Bitcoin partiellement signée (PSBT)**.  
Il s’agit de la transaction de transfert des Bitcoins de l’Escrow vers l’adresse de l’Acheteur, déjà signée par Peach.  
Elle n’a besoin que de la signature du Vendeur pour devenir valide.

```j
  const releasePSBTBase64 = contractRes.data.releasePsbt;

  const parsedPSBT = bitcoin.Psbt.fromBase64(releasePSBTBase64, {
    network: bitcoin,
  });

  parsedPSBT.signInput(0, childSell);

```

<br><br>
<img src="/img/blog/under-the-hood/underthehood09.png" alt="this is the power of p2p Marketplace" style="display:block; margin: auto; width: 40%;">
<br><br>

Le Vendeur peut alors finaliser la transaction, en ajoutant les deux signatures et le script de l’Escrow.  
Comme nous passons par le chemin **MultiSig** du script (le second), il faut ajouter `OP_FALSE` dans la pile afin que la condition IF soit correctement évaluée.

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

Dernière étape : soumettre la transaction finalisée à l’API de Peach :

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Mesdames et Messieurs, voici comment nous échangeons sur Peach avec **un maximum de sécurité et de confidentialité !**
