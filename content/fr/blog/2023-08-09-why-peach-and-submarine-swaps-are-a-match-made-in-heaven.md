---
keywords:
  - Bitcoin
  - acheter bitcoin
  - vendre bitcoin
  - application Peach
  - P2P
  - p2p
  - échange p2p
  - comment acheter bitcoin
  - comment vendre bitcoin
  - pair à pair
tags:
  - Produit
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin est l'argent des personnes libres. Nous croyons que chaque être humain a le droit de choisir la monnaie avec laquelle il souhaite conserver sa richesse, le résultat de son travail, de son temps et de son énergie.
  La mission de Peach est de contribuer à l'adoption du Bitcoin entre les mains des gens.
---

# LN <-> Échanges On-Chain, par @swissnode

## Pourquoi Peach et les échanges sous-marins sont un mariage parfait

J'ai été très loquace dans mon soutien à Peach et j'ai même mis quelques sats là où je parle après avoir été convaincu il y a près de deux ans de la brillante pertinence de ce que Peach a à offrir à la communauté Bitcoin : une manière facile pour l'accumulateur simple d'empiler ses sats sans avoir à s'identifier sur une plateforme pour le faire.

Il est apparu, en tant que gestionnaire du nœud Lightning SwissNode, que l'appariement de devises ne doit pas se limiter à un échange fiat-Bitcoin. Il existe en effet des cas d'utilisation pour aller au-delà. Bienvenue dans le monde des échanges sous-marins onchain-offchain.

Un échange sous-marin est, simplement résumé, une manière de convertir des sats que le partenaire A possède onchain (réseau Bitcoin) avec des sats que le partenaire B peut avoir sur le réseau Lightning (LN). A obtient ainsi des sats sur lightning via une facture LN et B obtient des sats onchain via une transaction habituelle sur la Blockchain.

Il y a deux principales raisons pour vouloir faire cela. Un gestionnaire de nœud peut simplement vouloir plus de sa liquidité du côté lightning, peut-être pour équilibrer la proportion de sats qui sont détenus dans la capacité de canal "local" et ceux tenus dans la capacité de canal "distant". Je vais m'arrêter là, c'est évidemment un aspect plus technique de l'échange sous-marin.
Un gestionnaire de nœud peut également vouloir convertir une partie de sa liquidité du réseau lightning en utxos "onchain". Cela m'est arrivé lorsqu'une contrepartie voulait un paiement uniquement via la blockchain au lieu de via lightning, par exemple.

La seconde raison pour un tel échange est cependant quelque chose que presque tous les Bitcoiners peuvent ou DEVRAIENT apprécier : la capacité de briser la traçabilité de l'ensemble des utxos qu'il ou elle possède afin qu'aucune entité ne puisse savoir ce qui est arrivé aux sats précédemment détenus onchain. Cela ne peut pas être trop souligné !
Une fois que les sats dans votre utxo ont été transférés, vous détenez alors votre liquidité dans divers canaux qui sont pratiquement impossibles à examiner de l'intérieur. La nature de lightning est telle que la comptabilité en double entrée éprouvée des canaux utilisés signifie que seuls vos partenaires de canal, peuvent savoir combien de sats vous possédez de l'autre côté du canal. En théorie, vous pourriez échanger à nouveau ces sats lightning et alors être en possession d'un utxo qui ne peut absolument pas être tracé à son propriétaire !

Pourquoi Peach voudrait-elle faire cela ? ... Je vous entends demander... Eh bien voici le point clé. En offrant ce service pour presque rien, Peach devient soudainement EXTRÊMEMENT attrayante pour les milliers de propriétaires de nœuds qui ont besoin d'échanger entre les liquidités onchain/offchain.
Des services existent actuellement comme le service LOOP de Lightning Labs mais vous paierez assez cher pour ce privilège. De cette manière, Peach est sûr de gagner des centaines sinon des milliers de nouveaux utilisateurs qui ont besoin de ce service. Même en offrant ce service gratuitement, ils embarqueraient avec eux beaucoup d'autres qui seraient venus pour les échanges, et qui découvriraient ensuite la meilleure façon d'empiler p2 sans kyc.

Comment cela fonctionne-t-il en pratique ? Très simplement, cela diffère à peine du cas d'utilisation habituel de Peach : Le vendeur créera un escrow onchain avec Peach pour un certain nombre de sats. Le seul changement au cheminement normal est qu'il doit maintenant décider : exigera-t-il les sats lightning via LNURL.
Cela permet au vendeur de déterminer une marge ( -21% < x < 21% ). Il pourrait être une idée, dans les versions futures, de faire également des factures LN normales sans marge. Une fois cela fait, le processus habituel se met en marche... Une fois l'escrow établi et confirmé, un acheteur peut indiquer son désir d'acheter ces sats onchain avec un "match". Si le vendeur "double match" l'acheteur, celui-ci doit envoyer les sats hors chaîne via LNURL. Une fois confirmé par le vendeur, l'escrow libérera les sats onchain à l'acheteur. Les processus habituels s'appliquent toujours en cas de litige de l'acheteur ou du vendeur. Peach déterminera ce qu'il en est et libérera l'escrow selon le processus de litige éprouvé et testé.

@swissnode

## Notes finales

Si vous souhaitez en savoir plus sur les fonctionnalités de Peach, ou lire certains de nos autres articles, vous pouvez les trouver ici !

[Comment récupérer des portefeuilles Bitcoin en utilisant une phrase de récupération](https://peachbitcoin.com/fr/blog/how-to-restore-peach-wallet/)

[Comment financer plusieurs offres de vente](https://peachbitcoin.com/fr/blog/funding-multiple-sell-offers/)

[Comment acheter et vendre du Bitcoin en espèces avec Peach](https://peachbitcoin.com/fr/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Comment ajouter une nouvelle méthode de paiement sur l'application Peach](https://peachbitcoin.com/fr/blog/how-to-add-a-payment-method/)

[Peach s'étend au Sud Global !](https://peachbitcoin.com/fr/blog/peach-expands-to-the-global-south/)

[Publication de notre API-Peach](https://peachbitcoin.com/fr/blog/making-our-peach-api-public/)

[Fonctionnalité complète du portefeuille](https://peachbitcoin.com/fr/blog/full-wallet-functionality/)

[Qu'est-ce que GroupHug ?](https://peachbitcoin.com/fr/blog/group-hug/)

[Pourquoi la série P2P ? Chapitre 1](https://peachbitcoin.com/fr/blog/why-p2p-chapter-1/)

[Pourquoi la série P2P ? Chapitre 2](https://peachbitcoin.com/fr/blog/why-p2p-chapter-2/)

[Pourquoi la série P2P ? Chapitre 3](https://peachbitcoin.com/fr/blog/why-p2p-chapter-3-circular-economies/)

[Pourquoi la série P2P ? Chapitre 4](https://peachbitcoin.com/fr/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/fr/blog/peach-for-meetups/)

Si vous souhaitez en savoir plus sur nous, consultez nos réseaux sociaux, ou simplement [contactez-nous](mailto:hello@peachbitcoin.com) (utilisez notre [clé PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) si possible), nous serons heureux de vous entendre !

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continuez à propager le mot Peach, qui sait quand vous trouverez la rencontre de votre vie !
