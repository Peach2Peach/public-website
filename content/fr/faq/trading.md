# FAQ sur le trading

:::details Comment puis-je être sûr de recevoir le bitcoin/argent ?

Lorsqu'une offre de vente est faite, le vendeur envoie le bitcoin à une adresse qui est contrôlée par lui-même et par Peach : le bitcoin ne peut être déplacé à partir de là que si lui-même et Peach l'autorisent. Cela garantit que :

- Le vendeur ne peut pas déplacer le bitcoin (en arrière) de son propre chef
- Peach ne peut pas voler le bitcoin
- L'acheteur ne reçoit pas le bitcoin tant que le paiement n'a pas été effectué
- Le vendeur peut récupérer le bitcoin si l'acheteur ne répond pas

Si l'échange n'est pas résolu de manière normale, cette adresse passe automatiquement sous le contrôle total de Peach après environ 30 jours (pour être précis : lorsque 4320 blocs de bitcoin ont été minés). Cela garantit que :

- L'acheteur peut recevoir le bitcoin s'il peut prouver qu'il a effectué le paiement mais que le vendeur ne répond pas
- Le bitcoin n'est pas bloqué en cas d'incident impliquant le vendeur

Il s'agit de la partie la plus importante pour sécuriser votre échange. En plus de cela, nous avons également notre système complexe de réputation qui vous aide à identifier les personnes qui ont utilisé Peach de manière fiable pendant longtemps.
:::

:::details Pourquoi y a-t-il une limite de trading ?

Les réglementations suisses stipulent qu'une personne ne peut acheter que jusqu'à 1000 CHF de bitcoin par jour sans fournir d'identification au vendeur. Comme nous préférons rester hors de prison, nous faisons respecter cette limite dans l'application.

Tous les détails de votre paiement sont stockés sur votre téléphone, nous ne pouvons donc pas les voir. Ce que nous pouvons voir, c'est un hash\* de l'identifiant de votre téléphone (non identifiable) et de vos détails de paiement. Cela nous permet de bloquer toute opération dépassant la limite personnelle.

\* Un hash est une donnée qui est rendue méconnaissable, similaire à son cryptage. Les mêmes données conduiront toujours au même hash. Cela signifie que nous ne connaissons pas les données réelles, mais nous pourrons détecter si les mêmes données sont utilisées deux fois.
:::

:::details Y a-t-il un moyen d'acheter/vendre au-delà de la limite de trading ?

Si vous êtes un acheteur ou un vendeur à fort volume, envoyez-nous un e-mail à [$contactEmail$](mailto:$contactEmail$) !
:::

:::details Quels sont les frais pour échanger du bitcoin sur Peach ?

Peach facture une commission de 2 % sur le volume de trading en tant que frais pour l'acheteur. Lorsqu'un échange est effectué sur Peach, des transactions sont effectuées sur la chaîne de blocs de Bitcoin, ce qui entraîne des frais de transaction. Vous pouvez toujours voir la structure complète des frais à la fin de votre transaction, qui peut ressembler à ceci :

![Détails de l'échange](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Comment puis-je annuler une offre ou un échange ?

Vous pouvez annuler vos offres et échanges en cliquant sur la croix rouge en haut de l'écran, lorsque cela est possible :

![Annuler l'échange](/img/faq/trading/cancel.png)

Cependant, cela a souvent des conséquences. Avant d'être associé à quelqu'un, vous pouvez annuler à tout moment. Après avoir été associé, en revanche, votre réputation sera affectée négativement. De plus, en tant que vendeur, vous devrez demander la permission de l'acheteur pour annuler l'échange. Il se peut qu'il ait déjà effectué le paiement !
:::

:::details Pourquoi ai-je reçu moins de sats que ce que je pensais acheter ?

Peach facture une commission commerciale de 2 % à l'acheteur, ce qui signifie que vous recevrez moins de sats que le montant de la transaction. De plus, vous devrez payer les frais de réseau de Bitcoin. Votre transaction pourrait ressembler à ceci, par exemple :

![Détails de l'achat](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Que se passe-t-il si je ne veux pas utiliser le portefeuille Peach pour le paiement/remboursement ?

Bien sûr, vous êtes libre d'utiliser votre propre portefeuille si vous le souhaitez. Cependant, nous recommandons vivement d'utiliser le portefeuille Peach, car c'est la manière la plus facile de réaliser un échange. Vous pouvez ensuite envoyer les fonds vers n'importe quel autre portefeuille.

Si vous souhaitez ajouter votre propre portefeuille, vous pouvez désactiver "Payer vers le portefeuille Peach" puis définir une adresse de paiement personnalisée :

![Désactiver le portefeuille](/img/faq/trading/disablewallet.png)

Lorsque vous effectuez un échange, vous devrez signer un message indiquant que vous êtes en possession de ce portefeuille, conformément aux réglementations suisses.

Nous travaillons actuellement sur la prise en charge du xpub, mais pour l'instant, vous devrez changer cette adresse manuellement si vous ne souhaitez pas la réutiliser.
:::

:::details Comment le prix du bitcoin est-il calculé dans l'application ?

Le prix du bitcoin que nous affichons est une agrégation du prix du bitcoin sur plusieurs plateformes d'échange centralisées.
:::

:::details Comment fonctionne le financement de plusieurs offres?

Lorsque vous souhaitez financer plusieurs offres en même temps, l'application fournit une adresse intermédiaire générée à partir de votre Peach Wallet. Une fois que les bitcoins atteignent cette adresse, une nouvelle transaction est générée pour chaque dépôt fiduciaire. Par exemple, si vous souhaitez financer 5 offres de vente, 5 transactions seront envoyées à différentes adresses de dépôt fiduciaire.
:::
