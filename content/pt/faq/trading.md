# Perguntas Frequentes sobre Negociação

:::details Como posso ter certeza de que vou receber o bitcoin / dinheiro?

Ao criar uma oferta de venda, o vendedor envia o bitcoin para um endereço controlado por ele e pelo Peach: o bitcoin só pode ser movido daqui se ambos - ele e o Peach - assinarem. Isso garante que:

- O vendedor não pode mover o bitcoin sozinho (de volta)
- O Peach não pode roubar o bitcoin
- O comprador não recebe o bitcoin até que o pagamento seja feito
- O vendedor pode recuperar o bitcoin se o comprador não responder

Se a negociação não for resolvida normalmente, este endereço automaticamente passa a ser controlado pelo Peach após cerca de 30 dias (para ser preciso: quando 4320 blocos de bitcoin são minerados). Isso garante que:

- O comprador pode recuperar o bitcoin se ele puder provar que fez o pagamento, mas o vendedor não responde
- O bitcoin não fica preso se algo acontecer com o vendedor

Esta é a parte mais importante para garantir sua negociação. Além disso, há também nosso intrincado sistema de reputação, que ajuda você a identificar pessoas que estão usando o Peach de forma confiável há muito tempo.
:::

:::details Por que existe um limite de negociação?

As regulamentações suíças afirmam que uma pessoa só pode comprar até 1000 CHF em bitcoin por dia, sem fornecer sua identificação ao vendedor. Como preferimos evitar problemas legais, aplicamos esse limite no aplicativo.

Todos os seus detalhes de pagamento são armazenados em seu telefone, portanto, não podemos vê-los. O que podemos ver é um hash\* do ID exclusivo do seu telefone e seus detalhes de pagamento. Isso nos permite bloquear quaisquer negociações que ultrapassem o limite pessoal.

\* Um hash é algum dado que foi tornando irreconhecível, semelhante à criptografia. Os mesmos dados sempre levarão ao mesmo hash. Isso significa que não sabemos quais são os dados, mas seremos capazes de identificar se os mesmos dados forem usados duas vezes.
:::

:::details Existe alguma maneira de comprar/vender mais do que o limite de negociação?

Se você for um comprador ou vendedor de alto volume, envie-nos um e-mail para [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Quais são as taxas para negociar na Peach?

A Peach cobra 2% do volume de negociação em taxas do comprador. Ao fazer uma negociação na Peach, você está realizando transações na blockchain do Bitcoin, o que resultará em taxas de transação. Você sempre pode ver a estrutura completa de taxas no final de sua negociação, que pode se parecer com isso:

![Detalhes da Negociação](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Como posso cancelar uma oferta ou uma negociação?

Você pode cancelar suas ofertas e negociações clicando no X vermelho na parte superior da tela, sempre que estiver disponível:

![Cancelar Negociação](/img/faq/trading/cancel.png)

No entanto, isso frequentemente tem consequências. Antes de se corresponder com alguém, você pode cancelar a qualquer momento. Depois de se corresponder, no entanto, sua reputação será afetada negativamente. Além disso, como vendedor, você precisará pedir permissão ao comprador para cancelar a negociação. Eles podem já ter feito o pagamento!
:::

:::details Por que recebi menos sats do que pensei que estava comprando?

A Peach cobra uma taxa de negociação de 2% do comprador, o que significa que você receberá menos sats do que o valor da negociação. Além disso, você precisará pagar taxas de rede de bitcoin. Sua negociação pode parecer algo assim, por exemplo:

![Detalhes da Compra](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details E se eu não quiser usar a carteira Peach para pagamento / reembolso?

Claro, você está livre para usar sua própria carteira, se desejar. Ainda recomendamos o uso da carteira Peach, pois é de longe a maneira mais fácil de fazer uma negociação. Você pode então enviar os fundos para qualquer outra carteira.

Se você deseja adicionar sua própria carteira, pode desativar "pagamento para carteira Peach" e, em seguida, definir um endereço de pagamento personalizado:

![Desativar Carteira](/img/faq/trading/disablewallet.png)

Ao fazer uma negociação, você precisará assinar uma mensagem de que está no controle desta carteira, de acordo com as regulamentações suíças.

Estaremos trabalhando na compatibilidade com xpub em breve, mas, por enquanto, você precisará alterar manualmente este endereço se não quiser reutilizá-lo.
:::

:::details Como o preço do Bitcoin é calculado na Peach?

O preço do BTC que mostramos na Peach é uma agregação do preço do BTC nas bolsas centralizadas.
:::

:::details O que acontece com o preço das moedas com alta inflação, como Argentina, Venezuela, etc.?

Moedas com alta inflação sofrem com alta volatilidade, o que significa que o preço que você encontra em diferentes exchanges pode ser diferente. A Peach fornece o preço de acordo com uma agregação do preço do BTC de diferentes fontes.
:::

:::details Como usar o CPFP para acelerar transações presas?

Siga as etapas encontradas neste vídeo: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) para acelerar transações presas usando o CPFP dentro do aplicativo Peach.
:::

:::details Como funciona financiar várias ofertas?

Quando você deseja financiar várias ofertas ao mesmo tempo, o aplicativo fornece uma lista de endereços de escrow (um para cada oferta), onde você pode depositar em uma única transação com múltiplas saídas para economizar nas taxas da rede.
:::
