# FAQ de Negociação

:::details Como posso ter certeza de que vou receber os bitcoins / o dinheiro?

Ao criar uma oferta de venda ou aceitar uma oferta de compra, o vendedor envia os bitcoins para um endereço controlado por ele e pela Peach: os bitcoins só podem ser movidos se ambos assinarem. Isso garante que:

- O vendedor não possa mover os bitcoins (de volta) sozinho  
- A Peach não possa roubar os bitcoins  
- O comprador não receba os bitcoins até que o pagamento seja feito  
- O vendedor possa recuperar os bitcoins se o comprador não responder  

Se a negociação não for concluída normalmente, esse endereço passa automaticamente para o controle total da Peach após cerca de 30 dias (mais precisamente: quando 4320 blocos de bitcoin tiverem sido minerados). Isso garante que:

- O comprador possa receber os bitcoins se conseguir provar que fez o pagamento e o vendedor não responder  
- Os bitcoins não fiquem presos se acontecer algo com o vendedor  

Essa é a parte mais importante para proteger sua negociação. Além disso, temos também nosso sistema de reputação detalhado, que ajuda a identificar pessoas que usam a Peach de forma confiável há muito tempo.
:::

:::details Por que existe um limite de negociação?

A regulamentação suíça determina que uma pessoa só pode comprar até 1000 CHF em bitcoins por dia sem fornecer sua identificação ao vendedor. Como preferimos não ir para a prisão, aplicamos esse limite no app.

Todos os seus dados de pagamento ficam armazenados no seu telefone, então não podemos vê-los. O que conseguimos ver é um hash\* do ID do seu telefone e dos seus dados de pagamento. Isso nos permite bloquear negociações que ultrapassem o limite pessoal.

\* Um hash é um dado tornado irreconhecível, semelhante a uma criptografia. Os mesmos dados sempre geram o mesmo hash. Isso significa que não sabemos quais são os dados, mas conseguimos detectar se foram usados duas vezes.
:::

:::details Existe alguma forma de comprar/vender acima do limite?

Se você é um vendedor de alto volume, envie-nos um e-mail para [$contactEmail$](mailto:$contactEmail$)!  
Você será solicitado a passar por um processo KYC e seus limites serão removidos.
:::

:::details Quais são as taxas de negociação na Peach?

A Peach cobra 2% do volume da negociação em taxas do comprador. Ao negociar na Peach, você realiza transações na blockchain do Bitcoin, o que gera taxas de rede. No final da negociação você sempre poderá ver a estrutura completa das taxas, que pode ser algo assim:

![Detalhe da Negociação](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Como posso cancelar uma oferta ou negociação?

Você pode cancelar suas ofertas e negociações clicando no X vermelho no topo da tela, sempre que disponível:

![Cancelar Negociação](/img/faq/trading/cancel.png)

No entanto, isso geralmente traz consequências. Antes de combinar com alguém, você pode cancelar a qualquer momento. Depois de combinar, sua reputação será impactada negativamente. Além disso, como vendedor, você precisará pedir permissão ao comprador para cancelar a negociação. Ele pode já ter feito o pagamento!
:::

:::details Por que recebi menos sats do que esperava?

A Peach cobra 2% de taxa de negociação do comprador, o que significa que você receberá menos sats do que o valor da negociação. Além disso, será necessário pagar taxas de rede do Bitcoin. Sua negociação, por exemplo, pode se parecer com isso:

![Detalhe da Compra](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details E se eu não quiser usar a carteira da Peach para o pagamento / reembolso?

Claro, você pode usar sua própria carteira se quiser. Ainda assim, recomendamos fortemente o uso da carteira da Peach, pois é de longe a maneira mais fácil de negociar. Depois, você pode enviar os fundos para qualquer outra carteira.

Se quiser adicionar sua própria carteira, você pode desativar “pagamento para a carteira da Peach” e definir um endereço de pagamento personalizado:

![Desativar Carteira](/img/faq/trading/disablewallet.png)

Ao fazer uma negociação, você precisará assinar uma mensagem confirmando que controla essa carteira, conforme exigem as regulamentações suíças.

Em breve adicionaremos suporte para xpub, mas por enquanto será necessário alterar manualmente esse endereço se não quiser reutilizá-lo.
:::

:::details Como é calculado o preço do Bitcoin na Peach?

O preço do BTC exibido na Peach é uma média agregada dos preços do BTC em exchanges centralizadas.
:::

:::details O que acontece com moedas em alta inflação, como Argentina, Venezuela, etc.?

Moedas em alta inflação sofrem de grande volatilidade, por isso os preços podem variar entre exchanges diferentes. A Peach mostra o preço com base em uma média dos preços de BTC de várias fontes.
:::

:::details Como acelerar uma transação travada por taxas de mineração baixas?

Depende do tipo de transação. Aqui está uma lista de transações possíveis na Peach e as soluções para aumentar as taxas:

1. Transação para financiar o escrow ao publicar uma oferta de venda ou aceitar uma de compra  

- Se você financiou o escrow a partir da carteira da Peach, pode usar RBF (Replace-By-Fee) e reenviar a transação com taxas maiores  
- Se você financiou o escrow a partir de uma carteira externa, precisa verificar se ela suporta RBF  

2. Transação de liberação do escrow (compra de Bitcoin)  

- Se seu endereço de recebimento for da carteira da Peach, você pode sacar o valor total para uma carteira externa sua com taxas maiores (Configurações > Taxas de Rede) – técnica CPFP  
- Se seu endereço de recebimento for de uma carteira externa, você também pode usar a técnica CPFP se sua carteira suportar  

3. Transação de envio da carteira da Peach para outra carteira  

- RBF (Replace-By-Fee) a partir da carteira da Peach nos detalhes da transação!
  :::

:::details O que é GroupHug?
GroupHug é simplesmente o termo que demos à ação de agrupar transações de diferentes usuários para evitar que cada um pague taxas individualmente. Para uma explicação mais detalhada, confira nosso [post no blog](https://peachbitcoin.com/blog/group-hug).
:::

:::details Se eu tiver apenas uma oferta de compra em aberto, ela será liberada imediatamente?

Não, seu pagamento será adicionado a uma fila de espera. O pagamento será feito quando usuários suficientes participarem do batch. O número de participantes necessários pode ser visto nas informações de pagamento pendente. Lá você também pode ver quantas vagas do batch atual estão ocupadas e um ETA que mostra o tempo máximo de espera.
:::

:::details Como funciona se eu tiver várias ofertas de compra em andamento?

Como mencionado, seus pagamentos serão adicionados à fila para serem agrupados com outros participantes.
:::

:::details Existe um limite para o número de participantes em um batch?

Não, os batches também podem incluir mais participantes além do mínimo exigido. Não é um corte rígido, mas sim um limite. Assim que o mínimo for atingido, simplesmente agrupamos todos os psbts e fazemos a transação, reduzindo as taxas para cada participante.
:::

:::details Como assinar um endereço externo?
Siga estas etapas para assinar o endereço de recebimento ao comprar Bitcoin em uma carteira externa:

_Nota: Os 2 primeiros passos são úteis se você quiser **sempre** receber seus fundos em endereços externos. Se quiser fazer isso apenas uma vez, ou às vezes usar a carteira da Peach, comece a partir do passo 3._

1. Vá para configurações  

- desative a carteira da Peach  
- vá para o endereço de pagamento  

2. Cole o novo endereço de recebimento  

3. Prossiga com o processo de publicação da sua oferta de compra e, antes de publicá-la, certifique-se de escolher o endereço externo (clique no pequeno ícone da carteira no canto superior direito da tela de resumo da oferta).  

4. Assim que confirmar sua oferta de compra, aparecerá a mensagem para assinar seu endereço. Copie-a e volte para sua carteira.  

5. Procure a opção “assinar/verificar”\* e cole:  

- seu endereço de recebimento  
- a mensagem da Peach  

6. Clique em assinar e a assinatura aparecerá. Copie-a.  

7. Cole a assinatura na carteira da Peach e confirme.  

8. Sua oferta está publicada.  

_\* Aviso: nem todas as carteiras suportam a opção de assinar/verificar._  
A Peach recomenda Blue Wallet, Sparrow ou Samourai Wallet. Outras opções incluem Ledger e Trezor (Hardware Wallets), Bitcoin Core e Electrum.  

Você também pode encontrar um tutorial passo a passo sobre como assinar uma mensagem usando Blue Wallet em nosso canal do Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Como usar CPFP para acelerar transações travadas?

Siga os passos deste vídeo: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) para acelerar transações travadas usando CPFP dentro do app da Peach.
:::

:::details Como funciona financiar várias ofertas de venda a partir de uma carteira externa?

Quando você quiser financiar várias ofertas de venda de uma só vez, o app gera um endereço intermediário da sua carteira Peach. Assim que os bitcoins chegam a esse endereço, uma nova transação é gerada para cada escrow. Por exemplo, se quiser financiar 5 ofertas de venda, serão enviadas 5 transações para diferentes endereços de escrow.
:::
