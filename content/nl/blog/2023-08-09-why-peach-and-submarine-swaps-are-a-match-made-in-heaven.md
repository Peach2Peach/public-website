---
keywords:
  - Bitcoin
  - bitcoin kopen
  - bitcoin verkopen
  - Peach-app
  - P2P
  - p2p
  - p2p-uitwisseling
  - hoe bitcoin te kopen
  - hoe bitcoin te verkopen
  - peer-to-peer
tags:
  - Product
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin is geld voor vrije mensen. Wij geloven dat elk individu het recht heeft om te kiezen welk geld hij gebruikt om zijn rijkdom, het resultaat van zijn werk, zijn tijd en energie op te slaan.
  De missie van Peach is om haar steentje bij te dragen aan de adoptie van Bitcoin in handen van mensen.
---

# LN <-> On-Chain Swaps, door @swissnode

## Waarom Peach en Submarine swaps een perfecte match zijn

Ik heb vrij luid mijn steun uitgesproken voor Peach en heb zelfs een paar sats waar mijn mond is geweest nadat ik bijna twee jaar geleden overtuigd was van de genialiteit van wat Peach te bieden heeft aan de Bitcoin-gemeenschap: een eenvoudige manier voor de eenvoudige stacker om zijn of haar sats te stapelen zonder de noodzaak zichzelf te identificeren aan een platform om dit te doen.

Het viel me als beheerder van de SwissNode lightning node op dat de valutakoppeling niet beperkt hoeft te zijn tot een fiat-Bitcoin-uitwisseling. Er zijn inderdaad gebruiksscenario's om verder te gaan dan dat. Welkom in de wereld van onchain-offchain submarine swaps.

Een submarine swap is simpelweg een manier om sats die partner A onchain heeft met sats die partner B mogelijk heeft op het Lightning Network (LN) om te zetten. A verwerft dus sats via een LN-factuur en B verwerft onchain sats via een gebruikelijke transactie op de blockchain.

Er zijn twee hoofdredenen om dit te willen doen. Een node-beheerder wil misschien eenvoudigweg meer van zijn liquiditeit aan de lightning-zijde hebben, misschien om de verhouding van sats die worden gehouden in "lokale" kanaalcapaciteit en die worden gehouden in "externe" kanaalcapaciteit in evenwicht te brengen. Ik laat het daarbij, dit is uiteraard een meer technisch aspect van de submarine swap. Een node-beheerder kan daarentegen ook wat van zijn liquiditeit van het lightning-netwerk willen omzetten in "onchain" utxo's. Dit is mij overkomen toen een tegenpartij betaling wilde via de blockchain in plaats van via lightning, bijvoorbeeld.

De tweede reden om zo'n swap te willen, is echter iets waar bijna alle Bitcoiners van kunnen of MOETEN genieten: de mogelijkheid om de traceerbaarheid van de utxo-set die hij of zij bezit te doorbreken, zodat geen enkele entiteit de mogelijkheid heeft om te weten wat er is gebeurd met de sats die eerder onchain werden gehouden. Dit kan niet genoeg worden benadrukt! Zodra de sats in uw utxo zijn doorgegeven, houdt u uw liquiditeit vervolgens in verschillende kanalen die praktisch onmogelijk zijn om in te kijken. De aard van lightning is zodanig dat de bewezen dubbele boekhouding van de gebruikte kanalen betekent dat alleen uw kanaalpartners weten hoeveel sats u bezit aan de andere kant van het kanaal. In theorie zou u die lightning-sats opnieuw kunnen omzetten met een submarine swap en vervolgens in het bezit zijn van een utxo die helemaal niet te herleiden is tot de eigenaar!

Waarom zou Peach dit willen doen? ... hoor ik je vragen ... Wel, hier komt de kneep. Door deze service bijna voor niets aan te bieden, wordt Peach plotseling EXTREEM aantrekkelijk voor de duizenden node-eigenaren die behoefte hebben om in en uit onchain/offchain liquiditeitspools te wisselen. Momenteel bestaan er diensten zoals de LOOP-service van Lightning Labs, maar daar betaal je behoorlijk wat voor het voorrecht. Op deze manier zal Peach honderden, zo niet duizenden nieuwe gebruikers aan boord krijgen die deze service nodig hebben. Zelfs door het gratis aan te bieden, zouden ze velen aan boord brengen die kwamen voor de swaps maar vervolgens ontdekten dat de beste manier om p2 te stapelen zonder kyc.

Hoe werkt dit in de praktijk? Heel eenvoudig verschilt het nauwelijks van het gebruikelijke Peach-gebruiksscenario: De verkoper zal een onchain-escrow met Peach creëren voor een bepaald aantal sats. Het enige vertrek van het normale pad is dat hij nu moet beslissen: zal hij de lightning-sats eisen via LNURL. Het stelt de verkoper in staat om een marge te bepalen (-21% < x < 21%). Het zou een idee kunnen zijn in toekomstige releases om ook normale LN-facturen te maken zonder marge. Zodra dit is gebeurd, treedt het gebruikelijke proces in werking ... Zodra de escrow is opgezet en bevestigd, kan een koper zijn bereidheid tonen om die onchain-sats te kopen met een "match". Als de verkoper "double matches", moet de koper de off-chain sats verzenden via LNURL. Zodra bevestigd door de verkoper, zal de escrow de onchain-sats vrijgeven aan de koper. De gebruikelijke procedures zijn nog steeds van toepassing als de koper of verkoper het handelen van de ander betwisten. Peach zal bepalen wat wat is en de escrow vrijgeven volgens het normale beproefde en geteste geschillenproces.

@swissnode

## Laatste Opmerkingen

Als je meer wilt weten over Peach functies, of enkele van onze andere artikelen wilt lezen, je kunt ze hier vinden!

[Hoe Bitcoin-portefeuilles herstellen met een zaadzin](https://peachbitcoin.com/nl/blog/how-to-restore-peach-wallet/)

[Hoe meerdere verkoopaanbiedingen financieren](https://peachbitcoin.com/nl/blog/funding-multiple-sell-offers/)

[Hoe Bitcoin kopen en verkopen met contant geld met Peach](https://peachbitcoin.com/nl/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Hoe een nieuwe betaalmethode toevoegen op de Peach-app](https://peachbitcoin.com/nl/blog/how-to-add-a-payment-method/)

[Peach breidt uit naar het mondiale zuiden!](https://peachbitcoin.com/nl/blog/peach-expands-to-the-global-south/)

[Onze Peach-API openbaar maken](https://peachbitcoin.com/nl/blog/making-our-peach-api-public/)

[Volledige Portefeuillefunctionaliteit](https://peachbitcoin.com/nl/blog/full-wallet-functionality/)

[Wat is GroupHug?](https://peachbitcoin.com/nl/blog/group-hug/)

[Waarom P2P-serie? Hoofdstuk 1](https://peachbitcoin.com/nl/blog/why-p2p-chapter-1/)

[Waarom P2P-serie? Hoofdstuk 2](https://peachbitcoin.com/nl/blog/why-p2p-chapter-2/)

[Waarom P2P-serie? Hoofdstuk 3](https://peachbitcoin.com/nl/blog/why-p2p-chapter-3-circular-economies/)

[Waarom P2P-serie? Hoofdstuk 4](https://peachbitcoin.com/nl/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/nl/blog/peach-for-meetups/)

Als je meer over ons wilt weten, bekijk dan onze sociale kanalen, of neem gewoon [contact met ons op](mailto:hello@peachbitcoin.com) (gebruik indien mogelijk onze [PGP-sleutel](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2)), we horen graag van je!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Blijf het woord verspreiden over Peach, wie weet wanneer je de match van je leven zult vinden!
