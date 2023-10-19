# Preguntes freqüents sobre la privacitat

:::details Quines dades recull Peach de mi?

Ens esforcem al màxim per emmagatzemar la quantitat mínima de dades dels nostres usuaris. Com a resum ràpid, això és el que tenim als nostres servidors:

- Un hash\* de la vostra identificació única de l'aplicació (AdID)
- Un hash de les vostres dades de pagament
- Les vostres converses xifrades
- Les dades de les transaccions per assegurar que els usuaris anònims no superin els límits de transacció (quins tipus de mètodes de pagament s'utilitzen, quantitats de compra i venda)
- Adreces utilitzades per enviar fons a l'escrow i per enviar des de l'escrow
- Dades d'ús (Firebase i Google Analytics), **només si heu donat el vostre consentiment per això**

Per obtenir un desglossament complet, consulteu la nostra [política de privacitat](/privacy-policy/).

\* Un hash és una dada que s'ha fet irreconeixible, similar a la seva encriptació. La mateixa dada sempre portarà al mateix hash. Això significa que no sabem quines són les dades, però podrem veure si les mateixes dades es fan servir dues vegades.
:::

:::details Qui pot veure les meves dades de pagament?

Només la vostra contrapart pot veure les vostres dades de pagament; s'envien a través dels servidors de Peach, però estan totalment xifrades d'extrem a extrem (com amb la majoria de les aplicacions de xat) de manera que no les podem veure.

Quan inicieu una disputa, les vostres dades de pagament i la història del vostre xat seran visibles per al mediador de Peach assignat.
:::

:::details Com verificar l'APK?

Seguiu aquests passos per verificar que l'APK que heu descarregat és l'APK real de Peach:

- Descarregueu l'APK que voleu instal·lar des del lloc web, així com la signatura i el manifest (tot es pot trobar a https://peachbitcoin.com/apk)

- Descarregueu la clau PGP de Peach https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (també es pot trobar al nostre lloc web)

- Genereu el resum de l'APK que heu descarregat i compareu-lo amb el resum del manifest.

```
sha256sum app-prod-arm64-v8a-release.apk
```
(substituïu app-prod-arm64-v8a-release.apk pel nom del vostre fitxer). Ha de ser el mateix que el del manifest. En cas contrari, poseu-vos en contacte amb nosaltres i assegureu-vos que no instal·leu aquesta aplicació al vostre dispositiu. En aquest exemple, heu de veure la següent sortida:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Si el comparem amb el que es troba al manifest-peach.txt, podem veure que és el mateix.

- Afegiu la clau de Peach al vostre anell de claus
```
gpg --import PGP-peach.asc
```
(assegureu-vos de substituir PGP-peach.asc pel nom correcte del fitxer, normalment serà 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Verifiqueu les signatures que heu descarregat anteriorment amb la següent comanda:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
A la sortida haureu de veure la següent línia:
```
gpg: Signatura vàlida de "hello@peachbitcoin.com <hello@peachbitcoin.com>" [desconegut]
```
:::

:::details S'admet Taproot?

- És possible finançar els escrows des d'una adreça de Taproot i retirar fons de la vostra cartera de Peach a una adreça de Taproot.
- NO és possible establir una adreça de Taproot com a adreça de pagament directa (no és possible signar un missatge amb una adreça de Taproot).
:::

:::details Com puc connectar-me al meu propi node?

Connectar-te al teu node millora la privacitat, ja que totes les transaccions es retransmeten a la xarxa de Bitcoin a través del teu propi node, en comptes del de Peach.

Peach encara no suporta Tor, per tant has d'utilitzar una IPv4 per connectar-te al teu node. En cas que no el tinguis obert a Internet, només podràs connectar-t'hi a la xarxa local, o a través d'una VPN privada.

Consulteu el nostre [tutorial en vídeo](https://www.youtube.com/watch?v=xtvq2i3mIYg) per aprendre com connectar-vos al vostre propi node.

En cas que utilitzis Umbrel, pots escriure umbrel.{número de port} en comptes de la IP del teu node.

:::
