---
keywords:
  - Produto
  - P2P
  - tutorial
  - programação
  - javascript
  - bitcoin
tags:
  - Produto
  - P2P
  - Tutorial
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin por dentro: uma visão técnica de por que é a exchange P2P mais segura


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


Aaaaah Bitcoin, essa forma maravilhosa de dinheiro que prospera graças às suas características fundamentais. Todos nós a amamos, mas todos reconhecemos que há riscos na parte da soberania individual: você compartilha suas seeds e perde tudo. Você envia para o endereço errado e nunca mais recupera.

É por isso que o código aberto de softwares relacionados ao Bitcoin é tão importante — e o App da Peach está disponível no Github para todos revisarem!

Claro, ser open source não significa que todos irão ler cuidadosamente o código e fazer engenharia reversa do mecanismo.  
Por isso escrevo este artigo: para **mostrar o quão segura é a Peach** e quais são as etapas tomadas para alcançar essa segurança.

## Passo 1: criando uma conta sem KYC na Peach

Para deixar bem claro: sua Bitcoin Seed é a sua conta Peach.

Se você quiser usar a Peach, precisa criar uma conta, e isso consiste em compartilhar a Chave Pública da sua conta e provar que você é o dono dela.

Para isso, você precisa:

*  1 - obter a Data e Hora atuais (em milissegundos) como texto  

*  2 - usar sua Chave Privada para gerar uma assinatura do texto anterior  

*  3 - enviar a Chave Pública, a data/hora atual e a assinatura.

Você também precisa gerar um uniqueId (identificador único) que será usado para evitar que outros usuários finjam ser você. Isso é útil em casos como perda das seeds e manutenção da mesma conta. Mas não vamos focar muito nisso agora.

<br><br>
<img src="/img/blog/under-the-hood/underthehood01.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 70%;">
<br><br>


Aqui está o código para realizar isso em Javascript:

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

Parabéns! Você acabou de criar uma conta na Peach!  
O Servidor validou que, neste momento, você é o dono do Par de Chaves Bitcoin correspondente à Chave Pública enviada.

## Passo 2: enviando sua Chave Pública PGP

Haverá muita criptografia — e também alguma descriptografia. As chaves Bitcoin permitem apenas criptografia unidirecional, portanto precisaremos de Chaves PGP para realizar criptografia bidirecional.  
Isso é fundamental para criptografar e descriptografar dados bancários, mensagens de chat, etc.  

O envio da Chave Pública PGP é semelhante ao processo de envio da Chave Pública Bitcoin. No entanto, há uma etapa extra: assinar a Chave Pública PGP com a Chave Privada Bitcoin, para verificar que o usuário é dono de ambas as chaves — Bitcoin e PGP.

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

Neste momento, a Peach possui suas Chaves Públicas Bitcoin e PGP! Isso será extremamente relevante para negociar dentro da Peach.


## Próximos Passos

A partir daqui, o tutorial mostrará os dois lados: o lado do Comprador e o lado do Vendedor.

As etapas serão as seguintes:

*   3.S O Vendedor cria uma Oferta de Venda  
*   4.S O Vendedor financia o Escrow da Peach  
*   5.B O Comprador faz uma Solicitação de Negociação para a Oferta de Venda  
*   5.S O Vendedor aceita a Solicitação de Negociação do Comprador  
*   6.B O Comprador declara que a transferência Fiat foi realizada  
*   6.S O Vendedor confirma que recebeu o Pagamento  


## Passo 3.S: o Vendedor cria uma Oferta de Venda

Criar uma Oferta de Venda é equivalente a anunciar que você está disposto a vender uma quantidade específica de Bitcoin.  
Mas não é só isso: o Vendedor deve aceitar algo em troca. Resumidamente, uma Oferta de Venda contém:

*   uma quantidade de Bitcoin a ser vendida  
*   as Moedas que o Vendedor aceita  
*   os Métodos de Pagamento aceitos (dinheiro em mãos, transferência bancária, transação via Revolut, etc.)  
*   o Prêmio (quanto o Bitcoin custa em relação ao valor de mercado atual)  

Se tudo correr bem, um Comprador se interessará pela oferta e solicitará a negociação.  
Nesse momento, ele precisará selecionar uma única Moeda e um único Método de Pagamento dentre os disponíveis — quanto mais opções o Vendedor oferecer, maiores as chances de atrair um Comprador.

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

Como você pode ver no código, o Vendedor está anunciando que está vendendo 21.000 sats (0.00021 Bitcoin) com um prêmio de 1%. Ele quer receber Euros através de sua conta Wise.  
Se prestar atenção, ele **NÃO** está enviando o ID da conta Wise — apenas um Hash.  
A Peach nunca saberá os detalhes do método de pagamento, para manter o anonimato.  
Também é enviada um Endereço de Retorno. Isso é usado em caso de reembolso: se nenhum Comprador quiser seu Bitcoin, você pode recebê-lo de volta.

## Passo 4.S: o Vendedor financia o Escrow da Peach

Após uma solicitação bem-sucedida à API da Peach para criar a Oferta de Venda, o Vendedor obtém o ID da Oferta de Venda:

```j
const sellOfferId = offerCreateRes.data.id;

```

Esse valor é importante — guarde-o. Há outras maneiras de obtê-lo, mas mantenha-o por enquanto.  
A Oferta de Venda foi criada, mas ainda não está pública: nenhum Comprador pode interagir com ela.  
Primeiro, o Vendedor precisa financiar o Escrow.

O Escrow é como um cofre que requer a autorização tanto do Vendedor quanto da Peach para ser aberto.  
O Bitcoin é colocado dentro do cofre e permanece seguro até o fim da negociação.  
Como ele exige a autorização do Vendedor, e o Escrow é um Script na Blockchain do Bitcoin (um endereço P2WSH), a Peach precisa da Chave Pública do Vendedor para criar esse Escrow.

Neste momento, o Vendedor envia a Chave Pública que deseja usar para o Escrow à Peach; a Peach seleciona sua própria Chave Pública para o cofre e o constrói, resultando em um endereço.

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

Como você pode ver no código, o Vendedor decidiu derivar um novo Par de Chaves usando o ID da Oferta de Venda no caminho de derivação.  
Essa é uma abordagem segura, pois é facilmente reproduzível.  
Após enviar a Chave Pública, a API da Peach retorna o endereço para o qual o Vendedor deve enviar os 21.000 sats.  
No entanto, você não precisa confiar cegamente nesse endereço: pode verificá-lo.

Vamos verificar!

A API da Peach também retorna a Chave Pública usada pela Peach para este Escrow específico, o que nos permite recriar o endereço escrevendo o Script Bitcoin:

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

Este é o Script usado para o Escrow:

*  sempre requer a assinatura da Peach  
*  e também:  
   * requer a assinatura do Vendedor  
   * ou requer que 4320 blocos tenham sido minerados desde que o Bitcoin foi enviado para aquele endereço  

Por que 4320 blocos?  
Isso equivale a 30 dias de mineração, com uma média de 1 bloco a cada 10 minutos.  
E por que existe essa alternativa que requer apenas a assinatura da Peach após um mês?  
Porque os Vendedores podem não cooperar, perder suas chaves, etc.  
Uma coisa é certa: a Peach tem uma reputação impecável no gerenciamento dos fundos dos Vendedores.

Depois de construir o script, você pode verificar o endereço P2WSH gerado e confirmar que é o mesmo retornado pela API da Peach ao criar o Escrow.

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

Perfeito! Agora basta fazer uma transação Bitcoin para esse endereço e esperar até que o Escrow seja declarado como financiado.

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

Assim que for declarado como financiado (após 1 bloco ser minerado), a Oferta de Venda se torna pública e os Compradores podem começar a interagir com ela.

## Passo 5.B: o Comprador faz uma Solicitação de Negociação para a Oferta de Venda

Agora é a hora do Comprador agir!

Primeiro, vamos verificar todas as Ofertas de Venda disponíveis:

```j
const sellOffers = await session.get("v069/sellOffer");
```

Para simplificar, o Comprador se interessará pela primeira Oferta de Venda disponível.

```j
const sellOfferToTradeRequestId = sellOffers.data.offers[0].id;
```

Agora, o Comprador quer fazer uma Solicitação de Negociação, informando ao Vendedor que está disposto a negociar sob suas condições.  
Parece simples, certo? Mas este é o passo mais complexo de todo o processo.

Vamos detalhar o que o Comprador precisa enviar:

* o Método de Pagamento preferido (um dos aceitos pelo Vendedor)  
* a Moeda preferida (mesmo que acima)  
* uma Chave Simétrica (para o Comprador e o Vendedor se comunicarem diretamente) Criptografada  
* a assinatura da Chave Simétrica  
* os Dados de Pagamento Criptografados usando a Chave Simétrica  
* uma assinatura dos Dados de Pagamento  
* o Endereço de Liberação: onde o Comprador quer receber o Bitcoin comprado  
* a Assinatura da Mensagem do Endereço de Liberação (prova de propriedade, via BIP 322)  
* a taxa máxima de mineração: quanto o Comprador está disposto a ceder de seu Bitcoin final para pagar as taxas dos mineradores.  

É bastante coisa, não? Mas é isso que torna a Peach super segura!  
Vamos por partes.

### O Método de Pagamento e a Moeda preferidos:

Este é o mais simples:

```j
  const payment_data_currency = "EUR";
  const payment_data_method = "wise";

```

### A Chave Simétrica:

A Chave Simétrica será usada com Criptografia Bidirecional AES256: você pode criptografar uma mensagem e depois descriptografá-la usando a mesma chave.

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

Para criar uma, basta gerar um número aleatório:

```j
  const symmetricKey = randomBytes(32);
  const symmetricKeyHex = symmetricKey.toString("hex");

```

Você não deve enviar essa chave em texto claro — isso anularia seu propósito.  
Ela deve ser criptografada de modo que apenas o Comprador e o Vendedor possam descriptografá-la.  
Como ambos enviaram suas Chaves Públicas PGP, precisamos criptografá-la de forma que apenas as Chaves Privadas PGP correspondentes possam descriptografá-la:

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

E para que o Vendedor tenha certeza de que a Chave Simétrica foi gerada pelo Comprador, ele também deve assiná-la usando sua chave PGP:

```j
  const symmetricKeySignature = await signPGPMessage(
    pgpPrivateKey,
    symmetricKeyHex
  );

```

### Os Dados de Pagamento:

Essa é a informação mais valiosa: seus Dados de Pagamento. Pode ser seu IBAN, seu nome de usuário no Revolut — qualquer dado que identifique a origem do seu pagamento Fiat.  
O Vendedor depois compartilhará suas próprias informações com o Comprador.

Agora que temos uma Chave Simétrica, podemos usá-la para Criptografar os Dados de Pagamento, e o Vendedor poderá usá-la depois para Descriptografar.

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

### Definindo o Endereço de Liberação e provando propriedade:

Você deve definir para qual endereço quer que o Bitcoin da negociação seja enviado posteriormente.  
Criar um endereço é a parte fácil.  
A parte difícil é provar a propriedade do endereço.  
Fazemos isso por razões regulatórias, para garantir que o Comprador é realmente o dono, e, felizmente, isso também serve como uma medida de segurança extra (isso torna a Peach imune ao ataque de substituição de endereço via bibliotecas Javascript, ocorrido em setembro de 2025).

A prova de propriedade é feita usando BIP-322, que permite usar sua Chave Privada Bitcoin para assinar uma mensagem que pode ser validada pelo endereço.

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

### Um último detalhe: a taxa máxima de mineração:

Como Comprador, talvez você não queira gastar muito em taxas para receber seu Bitcoin e prefira esperar até que as taxas caiam antes de liberar os fundos.  
Nesse caso, você pode definir a Taxa Máxima de Mineração que está disposto a “pagar” para que o Bitcoin seja enviado a você.

### Finalmente, você faz a Solicitação de Negociação à Oferta de Venda

Que jornada, hein? Mas é isso — agora você pode enviá-la.

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

Agora é a vez do Vendedor aceitá-la.

## Passo 5.S: o Vendedor aceita a Solicitação de Negociação

O Vendedor aguardava que um Comprador interagisse com sua Oferta de Venda.  
Ele verifica a lista de Solicitações de Negociação:

```j
const receivedTradeRequestRequest = await session.get(
    "v069/sellOffer/" + sellOfferId + "/tradeRequestReceived"
  );

  const tradeReq = receivedTradeRequestRequest.data[0];

```

Se o Vendedor decidir aceitar a Solicitação de Negociação, ele deve compartilhar seus Dados de Pagamento com o Comprador, para que este saiba para onde enviar o pagamento Fiat.

Como uma Chave Simétrica já foi criada e enviada pelo Comprador, o Vendedor pode descriptografá-la (pois foi criptografada com sua Chave Pública PGP) e usá-la para criptografar seus próprios Dados de Pagamento.

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

E pronto! Agora o Vendedor pode aceitar a Solicitação de Negociação e uma troca oficial começa!

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

Se compreender todo o processo foi difícil, aqui está uma imagem para ilustrá-lo:

<br><br>
<img src="/img/blog/under-the-hood/underthehood07.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 90%;">
<br><br>

## Passo 6.B: o Comprador declara que o Pagamento foi feito

O Comprador pode verificar se tem Contratos (que são trocas acordadas entre um Comprador e um Vendedor) consultando o endpoint de resumos de Contrato:

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data.find((obj) =>
    obj.id.startsWith(sellOfferToTradeRequestId + "-")
  );

  if (contract.tradeStatus !== "paymentRequired") throw Error;
```

Isso retornará uma lista de todos os Contratos dos quais ele participa.  
Se houver um Contrato com status “paymentRequired”, então é a vez dele realizar o pagamento Fiat.

Para isso, ele precisa descriptografar os Dados de Pagamento do Vendedor usando a Chave Simétrica gerada na Solicitação de Negociação original.  
Se ele não a salvou, tudo bem, pois ela está disponível e pode ser descriptografada com sua Chave Privada PGP.

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

Agora, isso deve acontecer fora da Peach: o Comprador abre seu aplicativo bancário (ou similar) e realiza uma transferência Fiat para o destinatário dos Dados de Pagamento do Vendedor.

Se este passo causar insegurança ao leitor, lembre-se: o Bitcoin já está no Escrow, controlado pela Peach e pelo Vendedor.  
Você pode até acessar o endereço do Escrow — disponível nos dados do Contrato retornados pela API — e verificar, via explorador de Blockchain, se o Bitcoin está lá.  

Após realizar a transferência Fiat, o Comprador deve declarar que o Pagamento foi feito:

```j
  const confirmPaymentRes = await session.post(
    "v1/contract/" + contract.id + "/payment/confirm"
  );
```

<br><br>
<img src="/img/blog/under-the-hood/underthehood08.png" alt="this is the power of p2p exchanger" style="display:block; margin: auto; width: 40%;">
<br><br>

Esse foi o último passo do Comprador.  
Agora o Vendedor deve confirmar que recebeu o pagamento Fiat e liberar o Bitcoin no Escrow para o endereço do Comprador.

## Passo 6.S: o Vendedor confirma que recebeu o Pagamento

Da mesma forma que o Comprador, o Vendedor verifica os Contratos atribuídos a ele.

```j
  const contractsRes = await session.get("v1/contracts/summary");
  const contract = contractsRes.data[0];

  const contractRes = await session.get("v1/contract/" + contract.id);

```

Na resposta da API do Contrato, o Vendedor receberá uma Transação Bitcoin Parcialmente Assinada (PSBT), que é uma transação do Bitcoin no Escrow para o endereço do Comprador, já com a assinatura da Peach.  
Isso significa que só precisa da assinatura do Vendedor para se tornar uma transação válida:

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

Agora o Vendedor pode finalizar a Transação, passando as duas assinaturas e o Script Bitcoin do Escrow.  
Como estamos seguindo o caminho MultiSig do script (escrito como o segundo caminho), precisamos passar OP_FALSE na pilha, para que a instrução IF seja avaliada corretamente.

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

O último passo: enviar a Transação finalizada para a API da Peach:

```j
  await session.post("v1/contract/" + contract.id + "/payment/confirm", {
    releaseTransaction: tx,
  });

```

Senhoras e senhores, é assim que negociamos na Peach com máxima segurança e privacidade!
