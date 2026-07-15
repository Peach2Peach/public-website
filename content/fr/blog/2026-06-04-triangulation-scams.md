---
keywords:
  - arnaque Bitcoin P2P
  - arnaque par triangulation
  - paiement par un tiers Bitcoin
  - sécurité Peach Bitcoin
  - acheter du Bitcoin sans KYC en sécurité
  - protection des trades P2P
tags:
  - Security
  - Education
  - Disputes
previewImage: /img/blog/triangulation-scams/cover.jpg
description: |
  Les arnaques par triangulation transforment un tiers innocent en celui qui paie le Bitcoin de quelqu'un d'autre. Voici comment l'arnaque fonctionne, et comment Peach la bloque.
---

# Les arnaques par triangulation sur les marchés P2P

Le trading P2P a ses avantages, mais il signifie que vous payez directement une vraie personne, et les arnaqueurs adorent trouver des moyens d'abuser de ce système. L'une des plus vicieuses (et franchement la plus courante désormais) est l'arnaque par triangulation. Voyons donc comment elle fonctionne, et comment Peach la bloque sans vous demander votre pièce d'identité.

<img src="/img/blog/triangulation-scams/hero.webp" alt="Schéma d'une arnaque par triangulation : un triangle reliant un arnaqueur, une victime innocente et un vendeur honnête, avec du Bitcoin circulant du vendeur vers l'arnaqueur, de l'argent liquide de la victime vers le vendeur et un avertissement de l'arnaqueur vers la victime" style="display:block; margin: auto; width: 70%;">

## Qu'est-ce qu'une arnaque par triangulation

L'astuce, c'est que l'arnaqueur ne paie jamais le Bitcoin lui-même. Il fait en sorte que quelqu'un d'autre le fasse, généralement une personne qui n'a aucune idée qu'elle participe à un trade de Bitcoin.

Le déroulé, étape par étape :

1. L'arnaqueur met quelque chose en vente sur une plateforme totalement différente. Un téléphone, un billet de concert, un meuble sur un site de petites annonces, sur eBay ou Facebook Marketplace. Une vente normale, sans aucun rapport avec le Bitcoin.
2. Un acheteur (la victime) accepte d'acheter cet article et s'apprête à payer.
3. À cet instant précis, l'arnaqueur se rend sur notre marketplace P2P de Bitcoin et prend un trade avec un vrai vendeur.
4. L'arnaqueur transmet les coordonnées bancaires du vendeur à la victime, comme s'il s'agissait de ses propres coordonnées pour l'article en vente.
5. La victime transfère l'argent au vendeur, croyant payer pour un téléphone.
6. Le vendeur voit l'argent arriver, confirme le paiement et libère le Bitcoin à l'arnaqueur.

L'arnaqueur repart avec du Bitcoin qu'il n'a jamais payé. La victime perd son argent et ne reçoit jamais l'article. Le vendeur, agissant en toute bonne foi, est devenu l'outil involontaire au milieu. Trois parties, dont une parfaitement étrangère à toute l'affaire. C'est ça, le triangle.

## Pourquoi c'est si difficile à repérer

Du côté du vendeur, tout paraît normal. Le bon montant arrive, à temps, pour le trade convenu. Il n'y a aucun signal d'alarme évident sur le moment.

La seule chose qui cloche, c'est *d'où vient l'argent*. Le paiement se trouve sur le compte du vendeur, en provenance d'une personne qui croit venir d'acheter un téléphone d'occasion. Si le vendeur n'a aucun moyen de savoir de qui le paiement *était censé* provenir, cette incohérence est invisible.

## Comment Peach la bloque

C'est là qu'interviennent les détails de paiement de l'acheteur, et c'est pourquoi nous les demandons.

Lorsque vous prenez un trade sur Peach en tant qu'acheteur, vous devez saisir les détails du compte *depuis lequel* vous payez. Le vendeur voit alors ces détails dans l'application. Ainsi, lorsque l'argent arrive, le vendeur a de quoi le comparer : le nom et le compte qui ont réellement envoyé les fonds face au nom et au compte qui, selon Peach, sont censés les envoyer.

Dans un trade normal, ils correspondent. L'acheteur a payé depuis son propre compte, exactement comme déclaré. Trade confirmé, Bitcoin libéré, tout le monde est content.

Dans une arnaque par triangulation, ils ne correspondent pas. L'argent est arrivé du compte d'une victime quelconque, pas de l'acheteur nommé dans le trade. Cette incohérence est le signal du vendeur.

Il est FORTEMENT CONSEILLÉ\*, à ce stade, que le vendeur NE confirme PAS le paiement sur Peach, mais ouvre plutôt un litige. Nos médiateurs interviennent, le Bitcoin retourne au vendeur, et l'argent est remboursé à la victime. L'arnaque échoue. Le trade aussi, mais le vendeur est libre de republier sans transaction on-chain supplémentaire.

\*il y a eu des cas où la victime se plaint aux autorités et accuse/implique le vendeur (honnête). Vous ne voulez pas de ça.

À l'heure actuelle, c'est le seul moyen que nous ayons trouvé pour stopper les paiements par un tiers et les arnaques par triangulation sans compromettre ce qui nous tient vraiment à cœur : pas d'inscription, pas de surveillance, ne livrer son identité à personne. Vous déclarez le compte depuis lequel vous payez, le vendeur vérifie que ça correspond, et c'est tout. Cela fonctionne pour la grande majorité des méthodes de paiement (les espèces et quelques méthodes anonymes peuvent être gérées différemment).

## Pourquoi une référence de paiement ne règle pas le problème

Une question légitime qu'on nous pose : pourquoi ne pas simplement faire en sorte que le vendeur définisse une référence ou un libellé sur le paiement, et dire aux acheteurs de l'inclure ? Si le paiement porte un code secret, seul le vrai acheteur peut payer correctement, non ?

Ça semble bien, mais ça ne ferme pas la faille. L'arnaqueur parle à la victime, donc il peut tout simplement transmettre la référence en même temps que les coordonnées bancaires : "payez ce compte, et mettez ce code dans le champ référence." La victime l'inclut docilement. Le paiement arrive avec une référence parfaite et correspondante, et le vendeur n'a aucune raison de se méfier. L'arnaqueur contrôle le message, donc l'arnaqueur contrôle la référence. Elle ne protège rien.

Vérifier *qui a envoyé l'argent* est fondamentalement différent. L'arnaqueur ne peut pas transmettre sa propre identité bancaire à la victime. La victime paie depuis le compte de la victime, et aucune référence au monde ne change ce nom. C'est pourquoi la vérification des détails de paiement fonctionne là où un libellé échoue.

## À retenir

Quand Peach demande vos détails de paiement, ce n'est pas une étape de KYC, et Peach ne peut pas les voir, sauf en cas de litige. C'est une petite information honnête qui permet au vendeur de confirmer que l'argent venait bien de vous et non de quelqu'un qui n'a aucune idée qu'il finance un trade de Bitcoin. Cela protège le vendeur, cela protège un inconnu innocent, et cela garde la marketplace propre, le tout sans que personne ne téléverse de passeport.

Le P2P bien fait, c'est trader directement sans renoncer à votre vie privée. Stopper les arnaques par triangulation fait partie du fait de bien le faire.

Happy peaching 🍑

---

## Notes finales

Si vous voulez en savoir plus sur les fonctionnalités de Peach, ou lire nos autres articles, vous pouvez les retrouver ici !

[Nouveau sur Peach ? Voici comment construire votre réputation rapidement](https://peachbitcoin.com/fr/blog/new-buyer-reputation/)
[Comment acheter du Bitcoin P2P avec Peach](https://peachbitcoin.com/fr/buy-bitcoin-no-id/)
[Vous avez besoin d'un hardware wallet](https://peachbitcoin.com/fr/blog/you-need-a-hw/)
[Qu'est-ce que GroupHug et comment ça vous fait économiser des frais ?](https://peachbitcoin.com/fr/blog/group-hug/)
[Pourquoi le P2P ? Les bases](https://peachbitcoin.com/fr/blog/why-p2p-chapter-1/)
[Trader du Bitcoin lors de meetups avec Peach](https://peachbitcoin.com/fr/blog/peach-for-meetups/)

Si vous voulez en savoir plus sur nous, consultez nos réseaux sociaux, ou [contactez-nous](mailto:hello@peachbitcoin.com) (utilisez notre [clé PGP](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com) si possible), nous serons ravis de vous lire !

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continuez à propager le mot Peach, qui sait quand vous trouverez le match de votre vie !
