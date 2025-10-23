---
keywords:
  - Producto
  - P2P
  - tutorial
  - programación
  - javascript
  - bitcoin
tags:
  - Producto
  - P2P
  - Tutorial
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin bajo el capó: una mirada técnica a por qué es el intercambio P2P más seguro


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


Aaaaah Bitcoin, esta maravillosa forma de dinero que prospera gracias a sus características esenciales. Todos la amamos, pero también reconocemos que existen riesgos en la parte de la soberanía propia: compartes tus semillas y lo pierdes todo. Envías algo a la dirección equivocada y nunca lo recuperarás.

Por eso es tan importante que el software relacionado con Bitcoin sea de código abierto, ¡y la App de Peach está disponible en Github para que cualquiera la revise!

Por supuesto, que sea de código abierto no significa que todo el mundo vaya a leer cuidadosamente el código y hacer ingeniería inversa del mecanismo. Por eso escribo este artículo: para **mostrar cuán segura es Peach** y cuáles son los pasos realizados para lograrlo.

## Paso 1: crear una cuenta sin KYC en Peach

Para dejarlo muy claro: tu Bitcoin Seed es tu cuenta de Peach.

Si quieres usar Peach, necesitas crear una cuenta, y eso consiste en compartir la Clave Pública de tu cuenta y demostrar que eres su propietario.

Para hacerlo, debes:

*  1 - obtener la fecha y hora actuales (en milisegundos) como texto  

*  2 - usar tu Clave Privada para generar una firma del texto anterior  

*  3 - enviar la Clave Pública, la fecha y hora actuales, y la firma.

También necesitas generar un uniqueId (identificador único) que se usará para evitar que otros usuarios finjan ser tú. Esto es útil en casos como la pérdida de las semillas y mantener la misma cuenta. Pero no nos enfoquemos demasiado en eso.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>


Aquí está el código para realizar esto en Javascript:

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

¡Felicidades! Acabas de crear una cuenta en Peach. El servidor ha validado que, en este momento, eres el propietario del Par de Claves Bitcoin correspondiente a la Clave Pública enviada.

## Paso 2: enviar tu Clave Pública PGP

Habrá mucha encriptación, pero también algo de desencriptación. Las Claves Bitcoin solo permiten encriptación unidireccional, por lo que necesitaremos Claves PGP para realizar encriptación bidireccional. Esto es fundamental para cifrar y descifrar datos bancarios, mensajes de chat, etc.  

Enviar la Clave Pública PGP es similar al proceso de enviar la Clave Pública Bitcoin. Sin embargo, hay un paso adicional: firmar la Clave Pública PGP con la Clave Privada Bitcoin, para verificar doblemente que el usuario es propietario de ambas claves, la Bitcoin y la PGP.

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

En este momento, ¡Peach tiene tus Claves Públicas Bitcoin y PGP! Esto será extremadamente relevante para comerciar en Peach.


## Próximos pasos

A partir de aquí, el tutorial mostrará ambos lados: el del Comprador y el del Vendedor.

Los pasos serán los siguientes:

*   3.S El Vendedor crea una Oferta de Venta  

*   4.S El Vendedor financia el Escrow de Peach  

*   5.B El Comprador realiza una Solicitud de Comercio a la Oferta de Venta  

*   5.S El Vendedor acepta la Solicitud de Comercio del Comprador  

*   6.B El Comprador declara que la transferencia Fiat ha sido realizada  

*   6.S El Vendedor confirma que ha recibido el Pago  


## Paso 3.S: el Vendedor crea una Oferta de Venta

Crear una Oferta de Venta equivale a anunciar que estás dispuesto a vender una cantidad específica de Bitcoin. Pero eso no es todo: el Vendedor debe aceptar algo a cambio. En resumen, una Oferta de Venta es:

*   una cantidad de Bitcoin a vender  

*   las Monedas que el Vendedor acepta  

*   los Métodos de Pago que el Vendedor acepta (efectivo, Transferencia Bancaria, una transacción de Revolut, etc.)  

*   la Prima (qué tan caro es el Bitcoin respecto al valor de mercado actual)  


Si todo va bien, un Comprador se interesará en la oferta y solicitará comerciar con ella. En ese momento, tendrá que seleccionar una sola Moneda y un solo Método de Pago de entre los disponibles, pero mientras más opciones muestre el Vendedor, mayores serán sus posibilidades de atraer a un Comprador.

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

Como puedes ver en el código, el Vendedor está anunciando que vende 21,000 sats (0.00021 Bitcoin) con una prima del 1%. Quiere recibir Euros a través de su cuenta Wise.  
Si prestas atención, NO está enviando su ID de cuenta Wise, solo está enviando un Hash. Peach nunca conocerá los Detalles del Método de Pago, para mantener el anonimato.  
También se envía una Dirección de Retorno. Esto se usa en caso de reembolso: si ningún Comprador quiere tu Bitcoin, puedes recuperarlo.

## Paso 4.S: el Vendedor financia el Escrow de Peach

Después de una solicitud exitosa a la API de Peach para crear la Oferta de Venta, el Vendedor obtiene el ID de la Oferta de Venta:

```j
const sellOfferId = offerCreateRes.data.id;

```

Este valor es importante, guárdalo. Hay otras formas de obtenerlo, pero por ahora consérvalo. La Oferta de Venta fue creada, pero aún no es pública: ningún Comprador puede interactuar con ella. Primero, el Vendedor necesita financiar el Escrow.

El Escrow es como una bóveda que requiere la autorización tanto del Vendedor como de Peach para abrirse. El Bitcoin se introduce en la bóveda y permanece allí de forma segura hasta el final del intercambio.  
Como requiere la autorización del Vendedor, y el Escrow es un Script en la Blockchain de Bitcoin (una dirección P2WSH), Peach necesita la Clave Pública del Vendedor para crear este Escrow.

En este momento, el Vendedor envía la Clave Pública que desea usar para el Escrow a Peach, Peach selecciona su propia Clave Pública para la bóveda y la construye, generando una dirección.

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

Como puedes ver en el código, el Vendedor decidió derivar un nuevo Par de Claves usando el ID de la Oferta de Venta en la ruta de derivación. Este es un enfoque seguro, porque es fácilmente reproducible.  
Después de enviar la Clave Pública, la API de Peach devuelve la dirección a la que el Vendedor debe enviar los 21,000 sats. Sin embargo, no necesitas confiar ciegamente en que esta dirección es válida: puedes verificarla.

¡Así que verifiquémosla!

La API de Peach también devuelve la Clave Pública que Peach usó para este Escrow específico, y esto nos permitirá recrear la dirección escribiendo el Script de Bitcoin:

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

Este es el Script que usamos para el Escrow:

*  siempre requiere la firma de Peach  

*  además, requiere:  
   * la firma del Vendedor  
   * o que se hayan minado 4320 bloques desde que el Bitcoin fue enviado a esa dirección  


¿Por qué 4320 bloques? Eso equivale a 30 días de bloques minados, a un promedio de 1 bloque cada 10 minutos.  
¿Y por qué existe esa alternativa de requerir solo la firma de Peach después de un mes? Porque los Vendedores podrían no cooperar, perder sus claves, etc.  
Algo es cierto: Peach tiene una reputación impecable en el manejo de los fondos de los Vendedores.

Después de construir el script, puedes verificar la dirección P2WSH que genera y comprobar que es la misma que la API de Peach envió como respuesta al crear el Escrow.

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

¡Perfecto! Ahora solo realiza una transacción Bitcoin a esa dirección y espera hasta que el Escrow sea declarado como financiado.

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

Una vez declarado como financiado (después de que se mine 1 bloque), la Oferta de Venta se vuelve pública y los Compradores pueden empezar a interactuar con ella.

## Paso 5.B: el Comprador realiza una Solicitud de Comercio a la Oferta de Venta

¡Ahora es el momento de que el Comprador entre en acción!

Primero, revisemos todas las Ofertas de Venta disponibles:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Para simplificar, el Comprador se interesará en la primera Oferta de Venta disponible.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Ahora, el Comprador quiere realizar una Solicitud de Comercio, informando al Vendedor que está dispuesto a comerciar bajo sus condiciones.  
Suena simple, ¿verdad? Pero este es el paso más complejo de todo el proceso.

Desglosemos lo que el Comprador necesita enviar:

* el Método de Pago preferido (uno de los permitidos por el Vendedor)  
* la Moneda preferida (igual que arriba)  
* una Clave Simétrica (para que el Comprador y el Vendedor se comuniquen directamente) Encriptada  
* la firma de la Clave Simétrica  
* los Datos de Pago Encriptados usando la Clave Simétrica  
* una firma de los Datos de Pago  
* la Dirección de Liberación: donde el Comprador quiere recibir el Bitcoin comprado  
* la Firma del Mensaje de la Dirección de Liberación: una prueba de que el Comprador posee esa dirección, usando BIP 322  
* la tarifa máxima de minería: cuánto está dispuesto el Comprador a descontar de su Bitcoin final para pagar las tarifas mineras de la transacción final  

Es mucho, ¿verdad? ¡Pero por eso Peach es tan segura! Vamos paso a paso.

### El Método de Pago y la Moneda preferidos:

Este es el más simple:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### La Clave Simétrica:

La Clave Simétrica se utilizará con cifrado bidireccional AES256: puedes cifrar un mensaje y luego descifrarlo usando la misma clave.

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

Para crear una, simplemente genera un número aleatorio:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

No vas a enviar esta clave a simple vista: eso arruinaría su propósito.  
Debes cifrarla de manera que solo el Comprador y el Vendedor puedan descifrarla.  
Como ambos usuarios enviaron sus Claves Públicas PGP, necesitamos cifrarla de modo que solo se pueda descifrar usando una de las Claves Privadas PGP correspondientes:

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

Y para que el Vendedor esté seguro de que la Clave Simétrica fue creada por el Comprador, este también debe firmarla usando su clave PGP:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Los Datos de Pago:

Esta es la información más valiosa: tus Datos de Pago. Puede ser tu IBAN bancario, tu nombre de usuario de Revolut, cualquier dato que identifique el origen de tu pago Fiat.  
El Vendedor más tarde compartirá su información con el Comprador.

Ahora que tenemos una Clave Simétrica, podemos usarla para cifrar los Datos de Pago, y luego el Vendedor la usará para descifrarlos.

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

### Definir la Dirección de Liberación y probar la propiedad:

Debes definir a qué dirección quieres que se envíe el Bitcoin de la transacción una vez completada. Crear una dirección es la parte fácil.  
La parte difícil es probar la propiedad de la dirección.  
Hacemos esto por motivos regulatorios, para asegurar que el Comprador es realmente el propietario, y además actúa como una precaución extra (esto por sí solo hace que Peach sea inmune al ataque de sustitución de direcciones usando librerías Javascript de septiembre de 2025).

La prueba de propiedad se realiza usando BIP-322, que te permite usar tu Clave Privada Bitcoin para firmar un mensaje que puede validarse usando la Dirección.

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

### Un último detalle: la tarifa máxima de minería:

Como Comprador, puede que no quieras gastar demasiado en tarifas para recibir tu Bitcoin, y prefieras esperar a que las tarifas bajen antes de recibir los fondos.  
En este caso, puedes definir la Tarifa Máxima de Minería que estás dispuesto a “pagar” para que te envíen el Bitcoin.

### Finalmente, realizas la Solicitud de Comercio a la Oferta de Venta

¡Vaya recorrido! Pero aquí está, y puedes enviarla.

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

Ahora es el turno del Vendedor de aceptarla.

## Paso 5.S: el Vendedor acepta la Solicitud de Comercio

El Vendedor ha estado esperando que un Comprador interactúe con su Oferta de Venta.  
Revisa la lista de Solicitudes de Comercio:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Si el Vendedor desea aceptar la Solicitud de Comercio, debe compartir sus Datos de Pago con el Comprador, para que este sepa a dónde debe enviarse el pago Fiat.

Como el Comprador ya creó y envió una Clave Simétrica, el Vendedor puede descifrarla (porque fue cifrada con su propia Clave Pública PGP) y usarla para cifrar sus propios Datos de Pago.

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

¡Y eso es todo! Ahora el Vendedor puede aceptar la Solicitud de Comercio y comienza una transacción oficial.

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

Si entender todo el proceso fue difícil, aquí hay una imagen para ilustrarlo:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Paso 6.B: el Comprador declara que el Pago ha sido realizado

El Comprador puede verificar si tiene Contratos (que son intercambios acordados entre un Comprador y un Vendedor) consultando el endpoint de resúmenes de Contrato:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Esto le proporcionará una lista de todos los Contratos en los que participa.  
Si hay un Contrato con el estado de intercambio “paymentRequired”, entonces es su turno de realizar el pago Fiat.

Para que eso suceda, debe descifrar los Datos de Pago del Vendedor usando la Clave Simétrica del momento en que se realizó la Solicitud de Comercio.  
Si no la guardó, no hay problema, porque está disponible para él y puede descifrarla con su Clave Privada PGP.

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

Ahora esto debe ocurrir fuera de Peach: el Comprador abre su aplicación bancaria (u otra similar) y realiza una transferencia Fiat al destinatario de los Datos de Pago del Vendedor.

Si este paso, como lector, te genera dudas, recuerda que el Bitcoin ya está en el Escrow, controlado por Peach y el Vendedor.  
Incluso puedes acceder a la dirección del Escrow, que está disponible en los datos del Contrato devueltos por la API, y usar un explorador de Blockchain para verificar si el Bitcoin está allí.

Después de realizar la transferencia Fiat, el Comprador debe declarar que el Pago fue realizado:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Este fue el último paso del Comprador.  
Ahora el Vendedor debe confirmar que ha recibido el pago Fiat y liberar el Bitcoin del Escrow a la dirección del Comprador.

## Paso 6.S: el Vendedor confirma que ha recibido el Pago

De manera similar al Comprador, el Vendedor revisa los Contratos que le han sido asignados.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

En la respuesta de la API del Contrato, el Vendedor obtendrá una Transacción Bitcoin Parcialmente Firmada (PSBT), que es una transacción del Bitcoin en el Escrow hacia la dirección del Comprador, con una firma de Peach.  
Esto significa que solo necesita la firma del Vendedor para convertirse en una transacción válida:

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

Ahora el Vendedor puede finalizar la Transacción, pasando las dos firmas y el Script Bitcoin del Escrow.  
Como estamos usando la ruta MultiSig del script (escrita como la segunda ruta), debemos pasar OP_FALSE a la pila para que la instrucción IF se evalúe correctamente.

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

El último paso: enviar la Transacción finalizada a la API de Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

¡Damas y caballeros, así es como comerciamos en Peach con la máxima seguridad y privacidad!
