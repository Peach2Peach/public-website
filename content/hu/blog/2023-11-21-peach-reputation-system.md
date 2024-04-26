---
keywords:
  - P2P
  - p2p
  - P2P csere
  - hírnév
previewImage: /img/blog/reputation-system/5-peaches-preview.jpg
description: |
  Hiszünk abban, hogy egy jó hírnévrendszer nem manipulálható. Ezt az hitünket alátámasztva és önbizalmunkat demonstrálva, nyitottak szeretnénk lenni Önök felé, és részletesen meg kívánjuk magyarázni az alapmechanizmusokat, hogy megérthessék, hogyan befolyásolják tetteik a hírnévpontszámukat.
---

# Az őszibarack hírnévrendszer

Hiszünk abban, hogy egy jó hírnévrendszer nem manipulálható. Ezt az hitünket alátámasztva és önbizalmunkat demonstrálva, nyitottak szeretnénk lenni Önök felé, és részletesen meg kívánjuk magyarázni az alapmechanizmusokat, hogy megérthessék, hogyan befolyásolják tetteik a hírnévpontszámukat.

Amikor valaki másokkal interakcióba lép egy piactéren, nem csak az fontos, hogy megértsük, hogy egy másik féllel lehet-e együttműködni, hanem az is, hogy milyen jól együttműködik. Lehet valaki a világ legkedvesebb embere, de ha nagyon sokáig tart a feladatát teljesíteni, kevesebb kereskedési partnerre talál, akik hajlandóak velük üzletelni.

A legtöbb platformon ilyen információk a felhasználói értékelések és vélemények formájában vannak jelen. Minden felhasználónak van egy pontszáma, ami lehet például egy 5 csillagos rendszer, felfelé/lefelé mutató hüvelykujjak vagy egy %-os érték 0 és 100 között. Néhány platform lehetőséget biztosít arra is, hogy a felhasználók írjanak és kapjanak véleményeket írott formában. Az őszibarackban mi az 5-� rendszert használjuk, és a felhasználók egymásnak felfelé vagy lefelé mutató hüvelykujjakat adnak.

## Nem csak a felhasználói értékelésekről van szó

Az őszibarackban nem csak a felhasználói értékeléseket vesszük figyelembe, hanem azt is nézzük, hogy egy felhasználó összességében hogyan viselkedik. Ezt azért tesszük, mert azt tapasztaltuk, hogy nem minden kereskedés fejeződik be, és a felhasználók nem értékelhetik egymást. További információkért rögzítjük azokat a specifikus felhasználói cselekedeteket, amelyek hatással vannak társaira: gyorsan párosított egy ajánlatot, jutalmat kapsz; sokáig tartott, hogy visszapárosítson, a pontszámod csökken; megszakítasz egy kereskedést figyelmeztetés nélkül, a pontszámod csökken; nagyon gyorsan fizetsz, a pontszámod nő.

Itt van egy átfogó lista azokról a cselekedetekről, amelyek befolyásolhatják a pontszámod:

### Párosítás közben

- **eladó megszakítja az ajánlatot**: nincs hatás
- **eladó megszakítja az ajánlatot párosítással**: enyhe negatív hatás
- **vásárló megszakítja az ajánlatot**: nincs hatás
- **vásárló megszakítja az ajánlatot párosítással**: enyhe negatív hatás
- **vásárló megszakítja a párosítást**: enyhe negatív hatás
- **idő a párosításig**: a #gyorsKereskedő jelvény meghatározásához használva
- **idő a dupla párosításig**: a #gyorsKereskedő jelvény meghatározásához használva

### Kereskedés közben

- **vásárló megszakítja a kereskedést**: negatív hatás
- **eladó kérést indít a megszakításra**: nincs hatás
- **vásárló elutasítja a megszakítási kérést**: nincs hatás
- **eladó megszakítja a kereskedést**: nincs hatás
- **fizetési idő**: a #gyorsKereskedő jelvény meghatározásához használva
- **fizetési megerősítés ideje**: a #gyorsKereskedő jelvény meghatározásához használva
- **vásárló fizetési időkorlátja lejár**: negatív hatás

### Kereskedés után

- **felfelé mutató hüvelykujj a társaságtól**: nagy hatás
- **lefelé mutató hüvelykujj a társaságtól**: nagy negatív hatás

### Viták

- **nyitott vita**: nincs hatás
- **nyert vita**: pozitív hatás
- **vesztett vita**: nagy negatív hatás
- **megoldott vita**: nincs hatás

### Csalási kísérletek

- **alap a tranzakció dupla elköltése**: negatív hatás

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
