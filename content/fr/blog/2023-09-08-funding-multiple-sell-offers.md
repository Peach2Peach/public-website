---
keywords:
  - vente de bitcoin
  - dépôt de garantie
  - transaction groupée
tags:
  - Comment faire
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  À partir de la version 0.3.0, l'application Peach introduit la capacité de créer et financer plusieurs offres de vente. Voici comment cela fonctionne.
---

# Comment financer plusieurs offres de vente

À partir de la version 0.3.0, l'application Peach introduit la capacité de créer et financer plusieurs offres de vente. Cette fonctionnalité offre deux avantages principaux :

- **économiser du temps**, fini les appuis répétés sur les boutons
- **économiser des frais**, financer tous les dépôts de garantie dans une seule transaction : par exemple, grouper 5 paiements dans une seule transaction peut facilement vous faire économiser 60 % sur les frais de transaction.

## Comment ça marche

### Financement depuis le portefeuille Peach

Financer vos offres de vente depuis votre Portefeuille Peach est l'option la plus simple. Lorsque vous cliquez sur le bouton "financer depuis le portefeuille Peach", l'application Peach gère tout pour vous. Elle crée une transaction de financement qui envoie automatiquement les fonds nécessaires à chaque adresse de dépôt de garantie.

### Financement depuis un portefeuille externe

Si vous préférez utiliser un portefeuille externe, vous pouvez toujours financer plusieurs offres de vente, mais cela implique un processus en deux étapes :

1. **envoyer des sats à une adresse interne du portefeuille Peach** : L'adresse que vous voyez est une adresse interne du portefeuille Peach spécialement enregistrée à cet effet. L'application Peach surveille cette adresse jusqu'à ce que vos offres soient annulées ou que l'adresse soit financée.
2. **financement et distribution** : Une fois les sats arrivés à cette adresse interne, la logique de l'application Peach divise les fonds parmi les offres de vente que vous avez créées et les envoie aux adresses de dépôt de garantie individuelles.

## FAQ

En lisant, vous vous êtes peut-être posé une de ces questions. Je me les suis posées également, alors je souhaite vous donner une réponse immédiatement.

:::details Pourquoi pas un seul dépôt de garantie pour de nombreuses offres de vente ?
En effet, nous avons envisagé comment nous pourrions avoir un seul dépôt de garantie à partir duquel de nombreuses offres de vente pourraient être servies.
La raison pour laquelle nous n'utilisons pas un seul dépôt de garantie est que cela rendrait les paiements beaucoup plus difficiles à effectuer.
Dans le cadre actuel, les dépôts de garantie sont payés intégralement en une seule transaction et c'est terminé. Cependant, si nous devions payer un dépôt de garantie partiellement à l'acheteur A, la nature de la transaction bitcoin nous laisserait avec un reste de sats non dépensés. Pour simplifier, disons que le reste retourne à la même adresse de dépôt de garantie.
Nous sommes toujours confrontés à un autre problème à résoudre : les transactions en attente. Imaginez que la première transaction de libération à l'acheteur A soit en attente à 8 sats / vB mais que le réseau ne traite actuellement que les transactions à 21 sats / vB ou plus. Si nous commençons une autre transaction de libération à l'acheteur B alors qu'elle n'est pas encore confirmée, l'acheteur B devra payer des frais de transaction plus élevés pour obtenir la confirmation plus tôt.
:::

:::details Pourquoi ne puis-je pas créer 2 offres de vente en même temps ?
Pour le processus en deux étapes, les frais sont économisés pour le financement de 3 dépôts de garantie ou plus. Afin d'éviter des frais supplémentaires, nous n'autorisons pas le financement groupé de deux offres de vente.
:::

:::details Je peux grouper mes propres transactions, ai-je besoin de faire le processus en deux étapes ?
Pour le moment, oui. Mais nous lancerons bientôt une mise à jour pour créer plusieurs offres de vente sans devoir montrer l'adresse de financement intermédiaire.
:::

---

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

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continuez à propager le mot Peach, qui sait quand vous trouverez la rencontre de votre vie !
