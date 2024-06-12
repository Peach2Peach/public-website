---
keywords:
  - Bitcoin
  - comprar bitcoin
  - vender bitcoin
  - aplicativo Peach
  - P2P
  - troca p2p
  - como comprar bitcoin
  - como vender bitcoin
  - peer to peer
tags:
  - Produto
previewImage: /img/blog/lightning.jpeg
description: |
  O Bitcoin é dinheiro para pessoas livres. Acreditamos que cada ser humano tem o direito de escolher qual dinheiro usar para armazenar sua riqueza, o resultado de seu trabalho, seu tempo e energia.
  A missão da Peach é contribuir para a adoção do Bitcoin nas mãos das pessoas.
---

# Trocas LN <-> On-Chain, por @swissnode

## Por que Peach e as trocas submarinas são uma combinação perfeita

Tenho sido bastante vocal em meu apoio à Peach e até coloquei alguns sats onde está minha boca depois de ser convencido há quase dois anos sobre o brilhantismo do que a Peach tem a oferecer à comunidade Bitcoin: uma maneira simples para o acumulador simples acumular seus sats sem a necessidade de se identificar a uma plataforma para fazê-lo.

Percebi, como operador do nó de lightning SwissNode, que o emparelhamento de moedas não precisa se limitar a uma troca fiat-Bitcoin. Existem de fato casos de uso para ir além disso. Bem-vindo ao mundo das trocas submarinas onchain-offchain.

Uma troca submarina é, simplificadamente, uma forma de converter sats que o parceiro A possui onchain em sats que o parceiro B pode ter na Lightning Network (LN). A obtém sats através de uma fatura LN e B obtém sats onchain através de uma transação usual na Blockchain.

Existem duas razões principais para querer fazer isso. Um operador de nó pode simplesmente querer mais de sua liquidez do lado lightning, talvez para equilibrar a proporção de sats mantidos na capacidade do canal "local" e aqueles mantidos na capacidade do canal "remoto". Deixarei por aqui, esse é obviamente um aspecto mais técnico da troca submarina. Um operador de nó também pode querer converter parte de sua liquidez da rede lightning de volta para utxos "onchain". Isso aconteceu comigo quando uma contraparte queria pagamento apenas através da blockchain em vez de via lightning, por exemplo.

A segunda razão para querer tal troca é, no entanto, algo que quase todos os usuários de Bitcoin podem ou DEVERIAM apreciar: a capacidade de quebrar a rastreabilidade do conjunto de utxos que ele ou ela possui para que nenhuma entidade tenha a capacidade de saber o que aconteceu com os sats anteriormente mantidos onchain. Isso não pode ser exagerado! Uma vez que os sats em seu utxo tenham passado adiante, você então mantém sua liquidez em vários canais que são praticamente impossíveis de serem sondados. A natureza do lightning é tal que a contabilidade de partidas duplas testada e comprovada dos canais usados significa que apenas seus parceiros de canal podem saber quantos sats você possui do outro lado do canal. Em teoria, você poderia trocar esses sats de volta através de uma troca submarina e então estar em posse de um utxo que não pode ser de forma alguma rastreado até seu proprietário!

Por que a Peach gostaria de fazer isso? ... você pergunta... Bem, aqui está o grande lance. Ao oferecer este serviço praticamente de graça, a Peach de repente se torna EXTREMAMENTE atraente para os milhares de proprietários de nós por aí que precisam trocar dentro e fora de pools de liquidez onchain/offchain. Atualmente, existem serviços como o serviço LOOP da Lightning Labs, mas você pagará bastante pelo privilégio. Desta forma, a Peach certamente atrairá centenas, se não milhares, de novos usuários que precisam desse serviço. Mesmo oferecendo-o gratuitamente, eles atraíram muitos que vieram pelas trocas, mas depois descobriram a melhor maneira de acumular p2 sem kyc.

Como isso funciona na prática? Muito simplesmente, difere pouco do caso de uso normal da Peach: O vendedor criará um depósito onchain com a Peach para um certo número de sats. A única diferença do caminho normal é que agora ele deve decidir: exigirá ele os sats da Lightning via LNURL. Isso permite que o vendedor determine uma margem (-21% < x < 21%). Pode ser uma ideia em futuros lançamentos também tornar as faturas LN normais uma venda sem margem. Uma vez feito isso, o processo normal entra em ação... Uma vez que o depósito esteja configurado e confirmado, um comprador pode indicar sua vontade de comprar esses sats onchain com uma "correspondência". Se o vendedor "corresponder duplamente", o comprador deve enviar os sats off-chain via LNURL. Uma vez confirmado pelo vendedor, o depósito liberará os sats onchain para o comprador. Os processos usuais ainda se aplicam caso o comprador ou vendedor contestem a ação do outro. A Peach determinará o que é o que e liberará o depósito conforme o processo de disputa normal e testado.

@swissnode

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

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continue divulgando a palavra Peach, quem sabe quando você encontrará a combinação de sua vida!
