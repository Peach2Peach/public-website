---
keywords:
  - entropia Bitcoin
  - frase semente
  - lista de palavras BIP39
  - como são geradas as seed phrases
  - segurança auto-custódia Bitcoin
  - geração de números aleatórios wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  Um guia peachy sobre o que é realmente a entropia, como funcionam as seed phrases, de onde vem mesmo a aleatoriedade e quão seguras são as tuas 12 palavras.
---

# Um guia peachy sobre entropia, seed phrases e como podes estar seguro

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="Um pêssego de desenho animado de fato-macaco azul a correr num deserto de relógios derretidos, cartas de jogar, calculadoras e fórmulas matemáticas a flutuar, perseguido por um dinossauro" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Divulgação: este artigo foi escrito sem IA. A imagem de capa essa sim foi feita com IA.*

## O que é a entropia?

Para começar: a entropia é uma medida de caos.

O objetivo não é dizer que algo tem X quantidade de entropia, mas sim conseguir comparar 2 coisas e dizer que uma tem mais entropia do que a outra.

Por exemplo:

- um ovo partido tem mais entropia do que um ovo perfeito
- um quarto desarrumado tem mais entropia do que um quarto arrumado

E as propriedades interessantes da entropia são:

- é mais fácil aumentar a entropia (criar caos) do que revertê-la (criar ordem)
- o mundo vive numa tendência constante de aumento de entropia

É por isso que é mais fácil encontrar algo num quarto arrumado do que num quarto desarrumado, e porque o quarto fica mais desarrumado com o tempo e tens de gastar energia a limpá-lo.

A maior parte das coisas na nossa vida beneficia de baixa entropia. A auto-custódia de Bitcoin beneficia de alta entropia. Mas podemos dizer que a entropia é subjetiva. Se eu souber a minha seed phrase, a entropia da minha wallet é muito baixa. Só é alta para toda a gente. Se eu disser a toda a gente 1 das minhas palavras, estou a reduzir a entropia para eles, mas continua a ser bastante alta.

## O que é uma seed phrase?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Cinco rebentos em fases crescentes de crescimento a brotar de terra escura" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(uma semente a crescer até virar planta — a mesma ideia por trás da "semente" em seed phrase)*

Primeiro: porquê chamar-lhe uma semente (seed)? Nos computadores, a aleatoriedade vem de algum lado. Se fornecermos uma semente, a aleatoriedade cresce a partir dela, sempre da mesma forma.

Uma seed phrase é uma convenção para memorizar um número entre 0 e 340282366920938463463374607431768211455. Sim, é um número grande, e 12 palavras inglesas ajudam-te a memorizar o teu número especial lá dentro.

O truque é que este número podia ser escrito em binário (algo como 01110010101… mas muito comprido). Por isso a comunidade Bitcoin decidiu criar uma lista de palavras inglesas e, a cada uma, associar uma sequência de 11 bits.

Por exemplo:

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 coisas interessantes:

- existem listas de palavras para inglês, português, chinês, coreano, francês, espanhol, italiano e checo;
- para garantir que as pessoas não se enganam ao introduzir a sua própria seed phrase, há um sistema que te avisa que introduziste uma seed "errada", por isso não podes simplesmente enganar-te numa das tuas palavras, abrir uma wallet vazia e assustar-te.

## 12 palavras chegam?

A quantidade de números que podem ser representados com as 12 palavras é vasta, e é considerada segura. Se quiseres ajudar-te a lembrar das 12 palavras e as escreveres num papel por ordem aleatória lá em casa, continua a ser relativamente seguro fazê-lo: vai demorar a alguém muuuuito tempo até experimentar todas as combinações dessas 12 palavras.

Claro que mais palavras significam mais espaço, e portanto mais difícil de adivinhar. Mas às vezes o suficiente é suficiente.

Só com 12 palavras, um computador rápido precisaria de cerca de 10²² anos — aproximadamente um bilião de vezes a idade do universo — para verificar todos esses números e "roubar" todas as wallets de Bitcoin de 12 palavras. Se juntares todo o poder de mineração do Bitcoin e o redirecionares para adivinhar as seeds, ainda assim demoraria cerca de 11 mil milhões de anos. E isto a ser generoso: os chips de mineração só sabem fazer SHA-256, enquanto verificar uma única seed phrase dá milhares de vezes mais trabalho do que um único hash.

Para mim, isso é viável. Mas acrescentar uma palavra extra aumenta o tempo muuuuito mais. Tu é que sabes!

## Como é que essas seeds são geradas?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Banda desenhada: numa visita à contabilidade apresentam o gerador de números aleatórios, que é um troll a repetir nove, nove, nove, nove. Tens a certeza de que isso é aleatório? É esse o problema com a aleatoriedade: nunca podes ter a certeza." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, de Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Aleatoriamente. No entanto, a aleatoriedade é uma ilusão: nada é verdadeiramente aleatório.

Lembras-te de quando andavas na escola e o professor queria que um aluno aleatório fosse ao quadro? Nunca escolhiam o aluno #1, mas o aluno #7 estava sempre a ser escolhido "aleatoriamente".

Os computadores não conseguem produzir nada aleatório. Mas conseguem gerar pseudoaleatoriedade. Por exemplo, podem usar os valores de temperatura do sistema nos últimos 30 minutos, mais a luz que entra pela webcam, mais a velocidade da internet, mais o comportamento do rato/teclado, etc., como fontes de aleatoriedade. O objetivo é obter aleatoriedade a partir de fontes que são praticamente impossíveis de controlar.

Um exemplo famoso é a aleatoriedade da Cloudflare usando lâmpadas de lava. Eles têm imensas lâmpadas de lava, uma webcam a filmá-las constantemente, e os padrões imprevisíveis das bolhas de lava são usados como fonte de aleatoriedade.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="Uma parede com dezenas de lâmpadas de lava coloridas dispostas em prateleiras no átrio de um escritório" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(a parede de lâmpadas de lava da Cloudflare em San Francisco, filmada 24 horas por dia como fonte de aleatoriedade)*

## Então porque é que algumas seeds foram descobertas?

Em relação ao incidente da Coldcard, houve um erro no código que usava uma má fonte de aleatoriedade. Assim que os hackers repararam que a aleatoriedade era apenas uma combinação de fatores simples, isso reduziu as possibilidades e passou a ser uma questão de procurar entre esses candidatos.

Mais uma vez: a entropia é subjetiva. Assim que alguém tem uma "pista", a entropia baixa. Outra pista, e a entropia baixa ainda mais.

Exemplo: imagina que tenho uma estante muito alta, cheia de livros. Digo-te que há uma nota de 5 euros escondida num dos livros. Vai ser muito difícil encontrá-la. Mas começas a olhar à volta e reparas que não tenho escadote para chegar aos sítios mais altos da estante. Por isso acreditas que a nota de 5 euros tem de estar nos livros alcançáveis sem escadote. Concentras os teus esforços nos candidatos certos e ficas 5 euros mais rico 🙂

## Como é que a Peach gera as seeds para a Peach Wallet?

A Peach é uma app móvel, portanto tem acesso à fonte pseudoaleatória segura do telemóvel. Em termos simples: apoia-se na aleatoriedade do telemóvel, que é também a que está a ser usada para muitos outros aspetos de segurança do telemóvel.

Mas como é que o telemóvel obtém essa aleatoriedade? Cria um caldeirão de aleatoriedade com valores físicos:

- o tempo de arranque de todas as apps/serviços do telemóvel + quanto tempo demoraram a arrancar (até ao milionésimo de milissegundo)
- ruído elétrico nos circuitos: altamente imprevisível e muito sensível à temperatura
- como o teu telemóvel é "tocado": o ritmo dos toques, a localização exata dos toques, quanto tempo duram, etc.
- valores do acelerómetro: o quanto o teu telemóvel foi abanado, a inclinação atual, as coordenadas geográficas atuais e passadas (incluindo altitude)
- muitas outras coisas (ex: intensidade de luz na(s) câmara(s), som do microfone, etc.)
- um bocado do caldeirão de aleatoriedade anterior, de antes de o telemóvel ser desligado e ligado

Por outras palavras: o teu telemóvel já teria sido hackeado se essa fonte de entropia fosse má.

## Conclusão: estou seguro?

Há quem lance dados para gerar as suas seeds, o que é de facto uma boa fonte de entropia (a não ser que tenhas dados viciados, e alguém tenha acesso a esses dados viciados. Queima-os depois de os usar, quem sabe!?). Outros "confiam" nas fontes digitais de aleatoriedade, lendo o código usado para as gerar, mas nem toda a gente é engenheiro. Podes pedir a uma IA que avalie se um software específico é bom para gerar seeds, mas nesse momento estás a confiar na IA.

As hardware wallets não tornam a tua seed mais difícil de adivinhar, apenas diminuem a exposição a que hackers acedam a um ficheiro que contenha as seeds.

O Bitcoin é difícil, ser dono do teu próprio dinheiro é difícil, mas vale a pena. Faz a tua própria pesquisa, não sigas modas, e vais ficar bem.

Uma coisa que recomendo: desenvolver a técnica do Palácio da Memória, para guardares a tua seed phrase na tua cabeça.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Capa de álbum com um edifício gigante de betão em forma de cabeça, de pé num deserto sob um sol pálido" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(a capa do álbum de música "Memory Palace", da banda "Intervals")*

Happy peaching 🍑

---

## Notas Finais

Se quiseres saber mais sobre as funcionalidades da Peach, ou ler alguns dos nossos outros artigos, podes encontrá-los aqui!

[Precisas de uma hardware wallet](https://peachbitcoin.com/pt/blog/you-need-a-hw/)
[Como restaurar a tua Peach wallet a partir de uma seed phrase](https://peachbitcoin.com/pt/blog/how-to-restore-peach-wallet/)
[Como comprar Bitcoin P2P com a Peach](https://peachbitcoin.com/pt/buy-bitcoin-no-id/)
[O que é o GroupHug e como poupa taxas?](https://peachbitcoin.com/pt/blog/group-hug/)
[Porquê P2P? O básico](https://peachbitcoin.com/pt/blog/why-p2p-chapter-1/)
[Golpes de triangulação em mercados P2P](https://peachbitcoin.com/pt/blog/triangulation-scams/)

Se quiseres saber mais sobre nós, consulta as nossas redes sociais, ou simplesmente [contacta-nos](mailto:hello@peachbitcoin.com) (usa a nossa [chave PGP](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com) se possível) teremos todo o gosto em ouvir-te!

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continua a espalhar a palavra da Peach, quem sabe quando encontrarás o match da tua vida!
