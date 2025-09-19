# FAQ sur la confidentialité

:::details Quelles informations Peach collecte-t-il à mon sujet ?

Nous nous efforçons de stocker le minimum absolu de données sur nos utilisateurs. Voici un aperçu rapide des données que nous avons sur nos serveurs :

- Un hash\* de l'identifiant de votre téléphone
- Un hash de vos données de paiement
- Vos discussions chiffrées
- Les données de vos transactions (le type de mode de paiement que vous utilisez, le montant que vous achetez, etc.)
- Les données d'utilisation, si vous y avez consenti

Pour une ventilation complète, veuillez consulter notre [politique de confidentialité](/privacy-policy/).

\* Un hash est une donnée rendue méconnaissable, similaire à son chiffrement. Les mêmes données conduiront toujours au même hash. Cela signifie que nous ne savons pas quelles sont les données, mais nous pourrons détecter si les mêmes données sont utilisées deux fois.
:::

<!--
:::details What info is sent when I share usage data?
Give a list
:::
-->

:::details Qui peut voir mes coordonnées de paiement ?

Seul votre interlocuteur peut voir vos coordonnées de paiement ; elles sont envoyées via les serveurs de Peach, mais sont entièrement chiffrées de bout en bout (comme avec la plupart des applications de messagerie) afin que nous ne puissions pas les voir.

Lorsque vous ouvrez un litige, vos coordonnées de paiement et l'historique de discussion, ainsi que ceux de votre interlocuteur, seront visibles par le médiateur Peach désigné.
:::

:::details Comment vérifier le fichier APK ?

Suivez ces étapes pour vérifier que le fichier APK que vous avez téléchargé est le véritable fichier APK de Peach :

- Téléchargez le fichier APK que vous souhaitez installer à partir du site web, ainsi que la signature et le manifeste (tout peut être trouvé sur https://peachbitcoin.com/apk)

- Téléchargez la clé PGP de Peach à partir de https://keys.openpgp.org/vks/v1/by-fingerprint/E970EDB410C8E84198F141584AD3CE3043D8CD1B (elle peut également être trouvée sur notre site web)

- Générez la somme de contrôle du fichier APK que vous avez téléchargé et comparez-la avec la somme de contrôle figurant dans le manifeste.

```
sha256sum app-prod-arm64-v8a-release.apk
```

(remplacez app-prod-arm64-v8a-release.apk par le nom de votre fichier). Elle devrait être identique à celle du manifeste. Sinon, contactez-nous et assurez-vous de ne pas installer cette application sur votre appareil. Dans cet exemple, vous devriez voir la sortie suivante :

```
$ sha256sum app-prod-arm64-v8a-release.apk

09e4e2db837b2a2aef3a51527ef24fae22cff2b7e2ecd4ca01502c8a61961584  app-prod-arm64-v8a-release.apk
```

Si nous la comparons à celle du manifeste-peach.txt, nous pouvons voir qu'elle est identique.

- Ajoutez la clé Peach à votre trousseau de clés

```
gpg --import PGP-peach.asc
```

(assurez-vous de substituer PGP-peach.asc par le nom correct du fichier, il s'agira généralement de E970EDB410C8E84198F141584AD3CE3043D8CD1B.asc)

- Vérifiez les signatures que vous avez précédemment téléchargées avec la commande suivante :

```
gpg --verify manifest-peach.sig manifest-peach.txt
```

Dans la sortie, vous devriez voir la ligne suivante :

```
gpg: Bonne signature de "hello@peachbitcoin.com <hello@peachbitcoin.com>" [inconnu]
```

:::

:::details Comment signer une adresse externe ?

Suivez ces étapes pour signer l'adresse de réception lors de l'achat de Bitcoin vers un portefeuille externe :

_Remarque : Les 2 premières étapes sont utiles si vous souhaitez **toujours** recevoir vos fonds sur des adresses externes. Si vous voulez le faire une seule fois ou si vous voulez parfois utiliser le portefeuille Peach, commencez à l'étape 3._

1. Accédez aux paramètres

   - Désactivez le portefeuille Peach
   - Accédez à l'adresse de paiement

2. Collez la nouvelle adresse de réception

3. Suivez le processus pour publier votre offre d'achat et, avant de la publier, assurez-vous de choisir de recevoir sur votre adresse de portefeuille externe (cliquez sur l'icône de portefeuille en haut à droite sur l'écran de résumé de l'offre).

4. Une fois que vous avez confirmé votre offre d'achat, le message pour signer votre adresse apparaîtra. Copiez-le et retournez à votre portefeuille.

5. Recherchez l'option "signer/vérifier" et collez :

   - votre adresse de réception
   - le message Peach

6. Cliquez sur "signer" et la signature apparaîtra. Copiez-la.

7. Collez la signature dans le portefeuille Peach et cliquez sur "confirmer".

8. Votre offre est publiée.

_**Remarque** : Tous les portefeuilles ne prennent pas en charge l'option de signature/vérification de votre adresse. Peach recommande d'utiliser Blue Wallet, Sparrow ou Samourai, car ils offrent tous l'option de signature/vérification._
:::

:::details Taproot est-il pris en charge ?

- Oui, tu peux envoyer vers des adresses Taproot depuis le portefeuille Peach.
- Tu peux également recevoir directement de l'entiercement vers ton adresse Taproot externe.
  :::

:::details Comment puis-je me connecter à mon propre nœud ?

Se connecter à votre nœud améliore la confidentialité, car toutes les transactions sont relayées vers le réseau Bitcoin via votre propre nœud, plutôt que celui de Peach.

Peach ne prend actuellement pas en charge Tor, vous devez donc utiliser une IPv4 pour vous connecter à votre nœud. S'il n'est pas ouvert sur Internet, vous ne pourrez vous connecter que via le réseau local ou un VPN privé.

Consultez notre [tutoriel vidéo](https://www.youtube.com/watch?v=xtvq2i3mIYg) pour apprendre comment vous connecter à votre propre nœud.

Si vous utilisez Umbrel, vous pouvez utiliser umbrel.{numéro de port} à la place de l'adresse IP de votre nœud.
:::

:::details Qu'est-ce que la gestion des coins ?

Le portefeuille Peach prend en charge la gestion des coins ou la gestion des cryptomonnaies. L'objectif de la gestion des coins est de garder vos coins séparés si vous le souhaitez, pour gérer votre vie privée.

Regardez notre vidéo expliquant la gestion des coins en détail : [How to do coin control using the Peach Wallet](https://www.youtube.com/watch?v=zWwIekSv3U8)
:::

:::details Quelles sont les implications en matière de confidentialité d’une offre d’échange instantané ?

Par défaut, les informations de paiement sont chiffrées de bout en bout avec PGP entre vous et votre contrepartie.  
Dans le cas d’une offre d’échange instantané, les informations sont également partagées avec Peach, afin que nous puissions les transmettre à la contrepartie dès que la demande d’échange est envoyée.
:::
