---
keywords:
  - BTCPay Server
  - Bitcoin payments
  - sell bitcoin
  - P2P exchange
  - self-custodial
  - KYC-free
  - merchant tools
  - Peach Bitcoin
  - BTCPay plugin
tags:
  - BTCPay Server
  - Bitcoin payments
  - Sell bitcoin
  - P2P exchange
  - Self-custodial
  - KYC-free
  - Merchant tools
  - Peach Bitcoin
  - BTCPay plugin
previewImage: /img/blog/btcpay/BTCPay.png
---
# Présentation du plugin Peach Bitcoin pour BTCPay Server : donnez aux commerçants le pouvoir de vendre du Bitcoin facilement

<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/CGx9LYGTKj8?si=kVrF-PgImNrN1wKg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

Dans le monde du **commerce en Bitcoin**, les commerçants qui utilisent des solutions de paiement auto-hébergées comme **BTCPay Server** sont souvent confrontés à un défi commun : que faire des bitcoins reçus de leurs clients ?  
Bien que le Bitcoin soit un excellent moyen de transfert international et de conservation de valeur, les besoins pratiques — tels que les achats de stock en monnaie fiduciaire, le paiement des dépenses quotidiennes ou la couverture contre la volatilité — rendent difficile de tout conserver en BTC.  
C’est là qu’intervient **Peach Bitcoin**, avec une solution innovante : un plugin dédié à BTCPay Server permettant aux commerçants de publier des offres de vente pour tout ou partie de leurs bitcoins directement depuis leur portefeuille chaud.

## Qu’est-ce que Peach Bitcoin ?

**Peach Bitcoin** est une plateforme d’échange **peer-to-peer (P2P)**, auto-custodiale, chiffrée et sans KYC, conçue pour les utilisateurs soucieux de leur vie privée.  
Contrairement aux plateformes centralisées qui imposent une vérification d’identité et stockent les données des utilisateurs, Peach permet des échanges directs entre particuliers, sans intermédiaires.  
Toutes les transactions sont chiffrées et les utilisateurs gardent un contrôle total sur leurs fonds.  
L’application mobile Peach connecte acheteurs et vendeurs à travers le monde, prend en charge différents moyens de paiement et place la souveraineté de l’utilisateur au premier plan.

## Le défi des commerçants BTCPay

BTCPay Server est un processeur de paiements Bitcoin open-source puissant qui permet aux commerçants d’accepter des paiements sans intermédiaires.  
Comme il est auto-hébergé, vous contrôlez vos clés et vos données — en accord avec la philosophie décentralisée de Bitcoin.  
Cependant, une fois les paiements reçus, de nombreux commerçants ont besoin de convertir une partie de leurs bitcoins en monnaie fiduciaire pour des raisons telles que :

- **Achats de stocks** : de nombreux fournisseurs fonctionnent encore exclusivement en fiat.  
- **Transferts internationaux** : parfois, une conversion locale est nécessaire.  
- **Dépenses quotidiennes** : salaires, loyers, services publics, frais de fonctionnement.

Sans un moyen simple de revendre leurs bitcoins, les commerçants s’exposent à la volatilité du marché, qui peut réduire leurs marges.

## Notre solution : le plugin Peach Bitcoin pour BTCPay Server

Pour résoudre ce problème, l’équipe Peach s’est associée au développeur **Nisaba (@nisaba)** afin de créer un plugin open-source pour BTCPay Server.  
Cet outil s’intègre directement à votre instance BTCPay et vous permet de publier des offres de vente sur Peach en quelques clics — directement depuis votre portefeuille chaud.

### Fonctionnalités clés
- **Offres de vente en un clic** : sélectionnez le montant à vendre et publiez immédiatement une offre.  
- **Conception auto-custodiale** : vous gardez toujours la possession de vos clés et de vos fonds.  
- **Prix avec prime ou remise** (par rapport au taux KYC de référence) : définissez un pourcentage (+2 % ou −1 %) selon les conditions du marché.  
- **Intégration transparente** : le plugin utilise le portefeuille chaud de BTCPay pour automatiser ou déclencher manuellement les ventes.  
- **Code ouvert et transparent** : [disponible sur GitHub](https://github.com/Nisaba/btcpayserver-plugins/tree/master/BTCPayServer.Plugins.Peach)

Avec ce plugin, vous transformez votre installation BTCPay en un véritable outil complet de gestion du cycle de vie Bitcoin : accepter, conserver et vendre — tout en restant souverain.

## Installation et utilisation

Pour les administrateurs de BTCPay :

1. Connectez-vous à votre tableau de bord BTCPay.  
2. Rendez-vous dans la section **Plugins**.  
3. Recherchez **Peach**.  
4. Installez le plugin et configurez-le si nécessaire avec votre compte Peach.

Ensuite :

- Accédez à la section **Peach** dans BTCPay.  
- Choisissez le montant de bitcoin à vendre.  
- **Définissez une prime ou une remise** en pourcentage par rapport au taux de change KYC.  
- Publiez l’offre.  
- Suivez et terminez vos échanges via l’application ou l’interface web de Peach.

Pour plus d’informations, consultez la [documentation du développeur](https://github.com/Nisaba/btcpayserver-plugins/blob/master/BTCPayServer.Plugins.Peach/README.md).

## Pourquoi c’est important

À mesure que l’adoption du Bitcoin progresse, des outils comme ce plugin comblent l’écart entre la réception de paiements en BTC et la gestion financière du monde réel.  
**En fixant une prime ou une remise par rapport au taux de change KYC**, vous pouvez adapter vos ventes aux conditions du marché tout en maintenant la confidentialité, la sécurité et la décentralisation.  

Si vous êtes un commerçant BTCPay souhaitant optimiser la gestion de vos bitcoins, essayez le plugin Peach : un pas de plus vers la souveraineté financière dans l’économie Bitcoin.
