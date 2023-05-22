# FAQ sur le trading

:::details Comment puis-je être sûr de recevoir le bitcoin / l'argent ?

Lorsque vous effectuez une offre de vente, le vendeur envoie le bitcoin à une adresse contrôlée par lui et par Peach : le bitcoin ne peut être déplacé à partir de là que si le vendeur et Peach donnent tous les deux leur accord. Cela garantit que :

- Le vendeur ne peut pas déplacer le bitcoin de lui-même
- Peach ne peut pas voler le bitcoin
- L'acheteur ne reçoit pas le bitcoin tant que le paiement n'est pas effectué
- Le vendeur peut récupérer le bitcoin si l'acheteur ne répond pas

Si la transaction ne se résout pas normalement, cette adresse passe automatiquement sous le contrôle total de Peach après environ 30 jours (pour être précis : lorsque 4320 blocs Bitcoin ont été minés). Cela garantit que :

- L'acheteur peut récupérer le bitcoin s'il peut prouver qu'il a effectué le paiement mais que le vendeur ne répond pas
- Le bitcoin ne reste pas bloqué si quelque chose arrive au vendeur

Il s'agit de la partie la plus importante pour sécuriser votre transaction. En plus de cela, il y a aussi notre système de réputation complexe qui vous aide à identifier les personnes qui utilisent Peach de manière fiable depuis longtemps.
:::

:::details Pourquoi y a-t-il une limite de trading ?

La réglementation suisse stipule qu'une personne ne peut acheter que jusqu'à 1000 CHF de bitcoin par jour sans fournir son identification au vendeur. Comme nous préférons éviter la prison, nous imposons cette limite dans l'application.

Toutes vos coordonnées de paiement sont stockées sur votre téléphone, nous ne pouvons donc pas les voir. Ce que nous pouvons voir, c'est un hash\* de l'identifiant de votre téléphone et de vos coordonnées de paiement. Cela nous permet de bloquer toutes les transactions qui dépassent la limite personnelle.

\* Un hash est une donnée rendue méconnaissable, similaire à son chiffrement. Les mêmes données conduiront toujours au même hash. Cela signifie que nous ne savons pas quelles sont les données, mais nous pourrons détecter si les mêmes données sont utilisées deux fois.
:::

:::details Existe-t-il un moyen d'acheter/vendre plus que la limite de trading ?

Si vous êtes un acheteur ou un vendeur à volume élevé, envoyez-nous un e-mail à [$contactEmail$](mailto:$contactEmail$) !
:::

:::details Quels sont les frais de trading sur Peach ?

Peach prélève des frais de 2 % sur le volume de trading pour l'acheteur. Lorsque vous effectuez un échange sur Peach, vous effectuez des transactions sur la blockchain Bitcoin, ce qui entraîne des frais de transaction. Vous pouvez toujours consulter la structure complète des frais à la fin de votre échange, qui pourrait ressembler à ceci :

![Détails de l'échange](/img/faq/trading/TradeBreakdowns.png)
:::

# FAQ sur le trading

:::details Comment puis-je annuler une offre ou une transaction ?

Vous pouvez annuler vos offres et transactions en cliquant sur la croix rouge en haut de l'écran, lorsque cela est disponible :

![Annuler la transaction](/img/faq/trading/cancel.png)

Cela dit, cela a souvent des conséquences. Avant de faire correspondre une offre avec quelqu'un, vous pouvez l'annuler à tout moment. Après avoir fait correspondre une offre, en revanche, votre réputation sera impactée négativement. De plus, en tant que vendeur, vous devrez demander la permission de l'acheteur pour annuler la transaction. Il se peut qu'il ait déjà effectué le paiement !
:::

:::details Que signifie le score Peach ?

Le score Peach est votre réputation sur Peach. Il est basé sur l'évaluation des utilisateurs (pouce levé/pouce baissé que votre interlocuteur vous attribue après une transaction) et sur vos actions, telles que les litiges, la rapidité de paiement, etc.
:::

:::details Pourquoi ai-je reçu moins de sats que ce que je pensais acheter ?

Peach prélève des frais de trading de 2 % sur l'acheteur, ce qui signifie que vous recevrez moins de sats que le montant de l'échange. De plus, vous devrez payer des frais de réseau Bitcoin. Votre transaction pourrait ressembler à ceci, par exemple :

![Détails d'achat](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details En tant qu'acheteur, puis-je correspondre avec plusieurs vendeurs ?

Oui ! Vous pouvez correspondre avec autant de vendeurs que vous le souhaitez. Le fait de correspondre avec un vendeur ne garantit pas qu'il correspondra avec vous en retour, il est donc souvent judicieux de correspondre avec autant de vendeurs que possible. Vous effectuerez la transaction avec le premier vendeur qui correspondra avec vous, tandis que les autres devront chercher de nouveaux acheteurs.
:::

:::details Que faire si je ne veux pas utiliser le portefeuille Peach pour le paiement / le remboursement ?

Bien sûr, vous êtes libre d'utiliser votre propre portefeuille si vous le souhaitez. Nous recommandons vivement d'utiliser le portefeuille Peach, car c'est de loin le moyen le plus facile de réaliser une transaction. Vous pouvez ensuite envoyer les fonds vers n'importe quel autre portefeuille.

Si vous souhaitez ajouter votre propre portefeuille, vous pouvez désactiver l'option "paiement vers le portefeuille Peach" et définir une adresse de paiement personnalisée :

![Désactiver le portefeuille](/img/faq/trading/disablewallet.png)

Lorsque vous effectuez une transaction, vous devrez signer un message pour prouver que vous contrôlez ce portefeuille, conformément à la réglementation suisse.

Nous travaillerons prochainement sur la prise en charge de xpub, mais pour le moment, vous devrez modifier manuellement cette adresse si vous ne souhaitez pas la réutiliser.
:::
