---
keywords:
  - Bitcoin
  - bitcoin vásárlása
  - bitcoin eladása
  - Peach alkalmazás
  - P2P
  - P2P
  - P2P csere
  - hogyan vásárolhatunk bitcoint
  - hogyan adhatunk el bitcoint
  - egyenlőtársi
tags:  
  - Termék
previewImage: /img/blog/lightning.jpeg
description: |
  A Bitcoin szabad emberek pénze. Mi hisszük, hogy minden egyes embernek joga van választani, melyik pénzt használja vagyoni javainak, munkája eredményének, idejének és energiájának tárolására.
  A Peach küldetése az, hogy hozzájáruljon a Bitcoin elterjedéséhez az emberek kezében.
---

# LN <-> On-Chain Cserék, írta: @swissnode

## Miért Peach és a Búvárcsónak-csere tökéletes párosítás

Elég hangosan támogattam a Peach-et, sőt, már néhány sátrat is beletettem oda, ahol a számomra meggyőződésem lett majdnem két évvel ezelőtt arról, hogy milyen zseniális lehetőségeket kínál a Peach a Bitcoin közösségnek: egy egyszerű módja annak, hogy az egyszerű felhalmozó felhalmozza a sátrát anélkül, hogy azonosítania kellene magát egy platformon ahhoz, hogy megtehesse.

Észrevettem, mint a SwissNode villámló csomó futtatója, hogy a devizapárításnak nem feltétlenül kell korlátozódnia egy fiat-Bitcoin csere lehetőségére. Valójában van túlmutató felhasználási eset is. Üdvözöljük a búvárcsónak-csere világában.

A búvárcsónak-csere egyszerűen egy módja annak, hogy az A partner onchain sátról átváltson olyan sátrakba, amelyeket a B partner találhat a Villámló Hálózaton (LN). Az A így sátrakhoz jut egy LN számla segítségével, míg a B a Blockchainen történő szokásos tranzakcióval jut onchain sátrakhoz.

Két fő ok van ennek akarására. Egy csomó futtató egyszerűen több likviditást akarhat a villámló oldalon, talán azért, hogy kiegyenlítse azoknak a sátraknak a súlyát, amelyek "helyi" csatorna kapacitásban vannak, és azokét, amelyek "távoli" csatornákban vannak. Hagyom ott, ez nyilvánvalóan a búvárcsónak-csere technikai aspektusa. Egy csomó futtató akár azért is akarhat némi likviditást átváltani a villámló hálózatból "onchain" utxókba. Ez velem is megtörtént, amikor egy ellenfél csak a blockchainen keresztül akarta megkapni a fizetést, például a villámló helyett.

Azonban a második ok az, amit szinte minden Bitcoinozó örömmel venni vagy KELL: a képesség, hogy megszakítsák az utxo készlet nyomkövetését, így senki sem képes tudni, mi történt a korábban onchain tartott sátrakkal. Ez nem túlzás! Miután az utxó-ban tárolt sátrak továbbadtak, akkor likviditásodat különböző csatornákban tartod, amelyekbe gyakorlatilag lehetetlen betekinteni. A villámló természete olyan, hogy a csatornákban használt kettős könyvelést alkalmazva csak a csatornapartnereid képesek tudni, hogy mennyi sátrakat birtokolsz a csatorna másik oldalán. Elméletileg újra elvégezheted ezeket a villámló sátrakat búvárcsónak-cserékkel, majd birtokolhatod az utxo-t, amelyet egyáltalán nem lehet visszakövetni tulajdonosáig!

Miért akarna a Peach ezt megtenni? ... Hallom, hogy kérdezitek... Nos, itt van a csavar. Ha ezt a szolgáltatást szinte ingyen kínálja, a Peach hirtelen MEGKÜLÖNBÖZTETŐEN vonzóvá válik azok számára az ezreket futtató tulajdonosok számára is, akiknek szükségük van az onchain/offchain likviditási medencékbe való belépésre és kilépésre. Jelenleg olyan szolgáltatások léteznek, mint a Lightning Labs LOOP szolgáltatása, de ezért elég sokat kell fizetnie. Így a Peach biztosan számos új felhasználót fog szerezni, akiknek szükségük van erre a szolgáltatásra. Még ha ingyen is kínálnák, sokan belépnének a cserék miatt, majd felfedeznék a legjobb módot a p2p nélküli KYC-ban történő sátrahalmozásra.

Hogyan működik ez gyakorlatban? Nagyon egyszerűen alig különbözik a szokásos Peach felhasználási esettől: Az eladó létrehoz egy onchain escrow-t a Peach-en a me

ghatározott sátrak számára. Az egyetlen eltérést a normál úttól az jelenti, hogy most el kell döntenie: követeli-e a villámló sátrakat az LNURL segítségével. Ez lehetővé teszi az eladónak, hogy meghatározza a margin-t (-21% < x < 21%). Lehetne ötlet jövőbeli kiadásokban, hogy a normál LN számlák is margin-mentes értékesítést tegyenek lehetővé. Miután ez megtörtént, a szokásos folyamat indul be... Miután az escrow létrejött és megerősítést nyert, egy vevő jelezheti hajlandóságát az onchain sátrak megvásárlására egy "találat"-tal. Ha az eladó "kettős találat"-ot kap, a vevőnek az off-chain sátrakat az LNURL segítségével kell elküldenie. Miután az eladó megerősítette, az escrow kiadja az onchain sátrakat a vevőnek. A szokásos folyamatok még mindig alkalmazandók, ha a vevő vagy az eladó vitatja a másik tevékenységét. A Peach eldönti, mi a mi, és kiadja az escrow-t a normál megkísérelt és kipróbált vitarendezési folyamatnak megfelelően.

@swissnode

---

## Záró gondolatok

Ha többet szeretnél megtudni a Peach funkcióiról, vagy elolvasnál néhány másik cikkünket, itt megtalálod!

[Hogyan állítsuk vissza a Bitcoin tárcákat egy magvával](https://peachbitcoin.com/hu/blog/how-to-restore-peach-wallet/)

[Hogyan finanszírozzunk több eladási ajánlatot](https://peachbitcoin.com/hu/blog/funding-multiple-sell-offers/)

[Hogyan vásároljunk és adjunk el Bitcoint készpénzért a Peach alkalmazással](https://peachbitcoin.com/hu/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Hogyan adjunk hozzá új fizetési módot a Peach alkalmazáshoz](https://peachbitcoin.com/hu/blog/how-to-add-a-payment-method/)

[A Peach kiterjed a Délre!](https://peachbitcoin.com/hu/blog/peach-expands-to-the-global-south/)

[Peach-API nyilvános tesztelése](https://peachbitcoin.com/hu/blog/making-our-peach-api-public/)

[Teljes tárcaműködés](https://peachbitcoin.com/hu/blog/full-wallet-functionality/)

[Mi az a GroupHug?](https://peachbitcoin.com/hu/blog/group-hug/)

[Miért P2P sorozat? 1. fejezet](https://peachbitcoin.com/hu/blog/why-p2p-chapter-1/)

[Miért P2P sorozat? 2. fejezet](https://peachbitcoin.com/hu/blog/why-p2p-chapter-2/)

[Miért P2P sorozat? 3. fejezet](https://peachbitcoin.com/hu/blog/why-p2p-chapter-3-circular-economies/)

[Miért P2P sorozat? 4. fejezet](https://peachbitcoin.com/hu/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x találkozók](https://peachbitcoin.com/hu/blog/peach-for-meetups/)

Ha még többet szeretnél tudni rólunk, nézz körül közösségi oldalainkon, vagy egyszerűen csak [lépj velünk kapcsolatba](mailto:hello@peachbitcoin.com) (használd a [PGP kulcsunkat](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2), ha lehetséges), örömmel hallunk felőled!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Továbbra is terjeszd a Peach szót, ki tudja, mikor találod meg az életed meccsét!
