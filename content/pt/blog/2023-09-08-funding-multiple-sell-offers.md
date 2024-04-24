---
keywords:
  - venda de bitcoin
  - caução
  - transação agrupada
tags:
  - Como Fazer
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  A partir da versão 0.3.0, o aplicativo Peach introduz a capacidade de criar e financiar várias ofertas de venda. Veja como funciona.
---

# Como Financiar Múltiplas Ofertas de Venda

A partir da versão 0.3.0, o aplicativo Peach introduz a capacidade de criar e financiar várias ofertas de venda. Esta funcionalidade oferece duas vantagens principais:

- **economize tempo**, sem mais toques repetidos em botões
- **economize taxas**, financie todos os depósitos em uma única transação: por exemplo, agrupar 5 pagamentos em uma única transação pode facilmente economizar 60% em taxas de transação.

## Como Funciona

### Financiamento a partir da carteira Peach

Financiar suas ofertas de venda a partir da sua Carteira Peach é a opção mais simples. Quando você clica no botão "financiar da carteira Peach", o aplicativo Peach cuida de tudo para você. Ele cria uma transação de financiamento que envia os fundos necessários para cada endereço de caução automaticamente.

### Financiamento a partir de carteira externa

Se preferir usar uma carteira externa, ainda é possível financiar várias ofertas de venda, mas envolve um processo em duas etapas:

1. **envie sats para um endereço de Carteira Peach Interna**: O endereço que você vê é um endereço interno da Carteira Peach especialmente registrado para esse fim. O aplicativo Peach mantém um olho neste endereço até que suas ofertas sejam canceladas ou o endereço seja financiado.
2. **financiamento e distribuição**: Quando os sats chegam a este endereço interno, a lógica do aplicativo Peach divide os fundos entre as ofertas de venda que você criou e os envia para os endereços de caução individuais.

## Perguntas Frequentes

Ao ler, você pode ter se feito uma dessas perguntas. Eu também me fiz essas perguntas, então gostaria de lhe dar uma resposta imediatamente.

:::details Por que não uma única caução para muitas ofertas de venda?
De fato, estivemos contemplando como podemos ter apenas uma caução da qual muitas ofertas de venda podem ser atendidas.
A razão pela qual não estamos usando uma única caução é que isso tornaria os pagamentos muito mais difíceis de serem feitos.
Na configuração atual, as cauções são pagas integralmente em uma única transação e pronto. No entanto, se fôssemos pagar uma caução parcialmente para o comprador A, a natureza da transação de bitcoin nos deixaria com uma saída de troco dos sats que ainda não foram gastos. Por simplicidade, vamos dizer que o troco volta para o mesmo endereço de caução.
Ainda ficamos com outro problema para resolver: transações pendentes. Imagine que a primeira transação de liberação para o comprador A está pendente a 8 sats / vB, mas a rede atualmente só processa transações com 21 sats / vB ou mais. Se iniciarmos outra transação de liberação para o comprador B enquanto ainda não estiver confirmada, o comprador B terá que gastar mais taxas de transação para que a transação seja confirmada mais rapidamente.
:::

:::details Por que não posso criar 2 ofertas de venda ao mesmo tempo?
Para o processo em 2 etapas, as taxas são economizadas ao financiar 3 ou mais cauções. Para evitar incorrer em mais taxas, não permitimos o financiamento em lote de duas ofertas de venda.
:::

:::details Posso agrupar minhas próprias transações, preciso fazer o processo em 2 etapas?
Atualmente, sim. Mas lançaremos uma atualização em breve para criar várias ofertas de venda sem mostrar o endereço de financiamento intermediário.
:::


## Notas Finais

Se você quiser saber mais sobre os recursos da Peach, ou ler alguns de nossos outros artigos, você pode encontrá-los aqui!

[Como Recuperar Carteiras Bitcoin Usando uma Frase Semente](https://peachbitcoin.com/pt/blog/how-to-restore-peach-wallet/)

[Como Financiar Múltiplas Ofertas de Venda](https://peachbitcoin.com/pt/blog/funding-multiple-sell-offers/)

[Como comprar e vender Bitcoin com dinheiro usando a Peach](https://peachbitcoin.com/pt/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Como adicionar um novo método de pagamento no app Peach](https://peachbitcoin.com/pt/blog/how-to-add-a-payment-method/)

[Peach expande para o Sul Global!](https://peachbitcoin.com/pt/blog/peach-expands-to-the-global-south/)

[Tornando nossa Peach-API Pública](https://peachbitcoin.com/pt/blog/making-our-peach-api-public/)

[Funcionalidade Completa da Carteira](https://peachbitcoin.com/pt/blog/full-wallet-functionality/)

[O que é GroupHug?](https://peachbitcoin.com/pt/blog/group-hug/)

[Por que a série P2P? Capítulo 1](https://peachbitcoin.com/pt/blog/why-p2p-chapter-1/)

[Por que a série P2P? Capítulo 2](https://peachbitcoin.com/pt/blog/why-p2p-chapter-2/)

[Por que a série P2P? Capítulo 3](https://peachbitcoin.com/pt/blog/why-p2p-chapter-3-circular-economies/)

[Por que a série P2P? Capítulo 4](https://peachbitcoin.com/pt/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/pt/blog/peach-for-meetups/)

Se você quiser saber mais sobre nós, confira nossas redes sociais ou simplesmente [entre em contato conosco](mailto:hello@peachbitcoin.com) (use nossa [chave PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) se possível) ficaremos felizes em ouvir você!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continue divulgando a palavra Peach, quem sabe quando você encontrará a combinação de sua vida!
