# FAQ sur le Commerce

:::details Comment puis-je être sûr de recevoir les bitcoins / l’argent ?

Lors de la création d’une offre de vente ou en acceptant une offre d’achat, le vendeur envoie les bitcoins à une adresse contrôlée par lui et par Peach : les bitcoins ne peuvent être déplacés que si lui et Peach signent tous les deux. Cela garantit que :

- Le vendeur ne peut pas déplacer les bitcoins (en arrière) seul
- Peach ne peut pas voler les bitcoins
- L’acheteur ne reçoit pas les bitcoins tant que le paiement n’a pas été effectué
- Le vendeur peut récupérer les bitcoins si l’acheteur ne répond pas

Si la transaction ne se résout pas normalement, cette adresse passe automatiquement sous le contrôle complet de Peach après environ 30 jours (plus précisément : lorsque 4320 blocs de bitcoin ont été minés). Cela garantit que :

- L’acheteur peut obtenir les bitcoins s’il prouve avoir effectué le paiement mais que le vendeur ne répond pas
- Les bitcoins ne restent pas bloqués si quelque chose arrive au vendeur

C’est la partie la plus importante pour sécuriser votre transaction. À côté de cela, nous avons également notre système de réputation complexe, qui vous aide à identifier les personnes qui utilisent Peach de manière fiable depuis longtemps.
:::

:::details Pourquoi y a-t-il une limite de transaction ?

La réglementation suisse stipule qu’une personne ne peut acheter que jusqu’à 1000 CHF de bitcoins par jour sans fournir son identité au vendeur. Comme nous préférons éviter la prison, nous appliquons cette limite dans l’application.

Toutes vos informations de paiement sont stockées sur votre téléphone, donc nous ne pouvons pas les voir. Ce que nous pouvons voir, c’est un hash\* de l’ID de votre téléphone et de vos informations de paiement. Cela nous permet de bloquer les transactions qui dépassent la limite personnelle.

\* Un hash est une donnée rendue méconnaissable, similaire à un chiffrement. Les mêmes données produiront toujours le même hash. Cela signifie que nous ne savons pas quelles sont les données, mais nous pouvons détecter si elles sont utilisées deux fois.
:::

:::details Existe-t-il un moyen d’acheter/vendre au-delà de la limite ?

Si vous êtes un vendeur à gros volume, envoyez-nous un email à [$contactEmail$](mailto:$contactEmail$) !
On vous demandera de suivre une procédure KYC et vos limites seront supprimées.
:::

:::details Quels sont les frais de transaction sur Peach ?

Peach facture 2 % du volume de la transaction à l’acheteur. Lorsque vous effectuez une transaction sur Peach, vous effectuez des opérations sur la blockchain Bitcoin, ce qui entraîne des frais de réseau. Vous pouvez toujours voir la structure complète des frais à la fin de votre transaction, qui pourrait ressembler à ceci :

![Détail de la Transaction](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Comment puis-je annuler une offre ou une transaction ?

Vous pouvez annuler vos offres et transactions en cliquant sur la croix rouge en haut de l’écran, lorsqu’elle est disponible :

![Annuler Transaction](/img/faq/trading/cancel.png)

Cependant, cela a souvent des conséquences. Avant de vous jumeler avec quelqu’un, vous pouvez annuler à tout moment. Après le jumelage, toutefois, votre réputation sera impactée négativement. En plus, en tant que vendeur, vous devrez demander la permission de l’acheteur pour annuler la transaction. Il se peut qu’il ait déjà effectué le paiement !
:::

:::details Pourquoi ai-je reçu moins de sats que prévu ?

Peach facture 2 % de frais à l’acheteur, ce qui signifie que vous recevez moins de sats que le montant prévu. En plus de cela, vous devrez payer les frais du réseau Bitcoin. Votre transaction pourrait ressembler à ceci :

![Détail Achat](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Que faire si je ne veux pas utiliser le portefeuille Peach pour le paiement / remboursement ?

Bien sûr, vous êtes libre d’utiliser votre propre portefeuille si vous le souhaitez. Nous recommandons toutefois fortement d’utiliser le portefeuille Peach, car c’est de loin la façon la plus simple d’effectuer une transaction. Vous pouvez ensuite envoyer les fonds vers tout autre portefeuille.

Si vous souhaitez ajouter votre propre portefeuille, vous pouvez désactiver « paiement vers le portefeuille Peach » et définir une adresse de paiement personnalisée :

![Désactiver Portefeuille](/img/faq/trading/disablewallet.png)

Lors d’une transaction, vous devrez signer un message prouvant que vous contrôlez ce portefeuille, conformément à la réglementation suisse.

Nous travaillerons prochainement sur la prise en charge des xpub, mais pour l’instant vous devez changer manuellement cette adresse si vous ne voulez pas la réutiliser.
:::

:::details Comment est calculé le prix du Bitcoin sur Peach ?

Le prix du BTC affiché sur Peach est une moyenne agrégée des prix du BTC sur les échanges centralisés.
:::

:::details Que se passe-t-il avec les prix des monnaies en forte inflation comme l’Argentine, le Venezuela, etc. ?

Les monnaies en forte inflation subissent une forte volatilité, donc les prix que vous trouvez sur différents échanges peuvent varier. Peach affiche le prix selon une agrégation des prix du BTC provenant de différentes sources.
:::

:::details Comment accélérer une transaction bloquée à cause de faibles frais de minage ?

Cela dépend du type de transaction. Voici une liste des transactions possibles sur Peach et leurs solutions pour augmenter les frais :

1. Transaction de financement de l’escrow pour publier une offre de vente ou accepter une offre d’achat

- Si vous avez financé l’escrow depuis le portefeuille Peach, vous pouvez utiliser RBF (Replace-By-Fee) et augmenter les frais
- Si vous l’avez financé depuis un portefeuille externe, vérifiez s’il supporte RBF

2. Transaction de libération de l’escrow (achat de Bitcoin)

- Si votre adresse de réception est celle du portefeuille Peach, vous pouvez retirer le montant total vers un portefeuille externe à des frais plus élevés (Paramètres > Frais de Réseau) – technique CPFP
- Si votre adresse de réception est externe, vous pouvez aussi utiliser la technique CPFP si votre portefeuille la supporte

3. Transaction d’envoi depuis le portefeuille Peach vers un autre portefeuille

- RBF (Replace-By-Fee) depuis le portefeuille Peach dans les détails de transaction !
  :::

:::details Qu’est-ce que GroupHug ?
GroupHug est simplement le terme que nous avons donné au regroupement des transactions de différents utilisateurs afin d’éviter que chacun paie des frais individuels. Pour une explication plus détaillée, consultez notre [article de blog](https://peachbitcoin.com/blog/group-hug).
:::

:::details Si j’ai une seule offre d’achat active, sera-t-elle réglée immédiatement ?

Non, votre paiement sera ajouté à une file d’attente. Le paiement sera effectué lorsque suffisamment d’utilisateurs participeront au batch. Le nombre de participants nécessaires est visible dans les informations de paiement en attente. Vous pouvez également y voir combien de places du batch actuel sont prises ainsi qu’une estimation du temps d’attente maximum.
:::

:::details Comment cela fonctionne si j’ai plusieurs offres d’achat en cours ?

Comme mentionné, vos paiements seront ajoutés à la file d’attente pour être regroupés avec d’autres participants.
:::

:::details Y a-t-il une limite de participants aux batchs ?

Non, les batchs peuvent inclure plus de participants que le minimum requis. Ce n’est pas une limite stricte, mais un seuil. Dès que le minimum est atteint, nous regroupons tous les psbts pour effectuer la transaction et réduire les frais pour chaque participant.
:::

:::details Comment signer une adresse externe ?
Suivez ces étapes pour signer l’adresse de réception lors de l’achat de Bitcoin vers un portefeuille externe :

_Remarque : Les 2 premiers pas sont utiles si vous voulez **toujours** recevoir vos fonds sur des adresses externes. Si vous voulez juste le faire une fois, ou parfois utiliser le portefeuille Peach, commencez à l’étape 3._

1. Allez dans les paramètres

- désactivez le portefeuille Peach
- allez à l’adresse de paiement

2. Collez la nouvelle adresse de réception

3. Publiez votre offre d’achat et avant de la confirmer, assurez-vous de sélectionner l’adresse externe (cliquez sur la petite icône de portefeuille en haut à droite de l’écran de résumé de l’offre).

4. Une fois l’offre confirmée, un message à signer apparaîtra. Copiez-le et retournez dans votre portefeuille.

5. Recherchez l’option « signer/vérifier »\* et collez :

- votre adresse de réception
- le message Peach

6. Cliquez sur signer et la signature apparaîtra. Copiez-la.

7. Collez la signature dans le portefeuille Peach et confirmez.

8. Votre offre est publiée.

_\* Avertissement : tous les portefeuilles ne supportent pas la fonction signer/vérifier._
Peach recommande Blue Wallet, Sparrow ou Samourai Wallet. D’autres options incluent Ledger et Trezor (portefeuilles matériels), Bitcoin Core et Electrum.

Vous pouvez aussi trouver un tutoriel pas à pas sur comment signer un message avec Blue Wallet sur notre chaîne Youtube : [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Comment utiliser CPFP pour accélérer les transactions bloquées ?

Suivez les étapes de cette vidéo : [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) pour accélérer les transactions bloquées grâce à CPFP dans l’application Peach.
:::

:::details Comment fonctionne le financement de plusieurs offres de vente depuis un portefeuille externe ?

Lorsque vous voulez financer plusieurs offres de vente en même temps, l’application génère une adresse intermédiaire depuis votre portefeuille Peach. Une fois que les bitcoins atteignent cette adresse, une nouvelle transaction est générée pour chaque escrow. Par exemple, si vous voulez financer 5 offres de vente, 5 transactions seront envoyées vers différentes adresses d’escrow.
:::
