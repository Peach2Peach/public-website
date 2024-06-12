---
keywords:
  - bitcoin eladása
  - letéti számla
  - tömbösített tranzakció
tags:
  - Hogyan csináljuk
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  A 0.3.0 verziótól kezdve a Peach alkalmazás lehetővé teszi több eladási ajánlat létrehozását és finanszírozását. Íme, hogyan működik.
---

# Hogyan Finanszírozzunk Több Eladási Ajánlatot

A 0.3.0 verziótól kezdve a Peach alkalmazás lehetővé teszi több eladási ajánlat létrehozását és finanszírozását. Ez a funkció két fő előnyt kínál:

- **időmegtakarítás**, nincs több ismétlődő gombnyomás
- **díjak megtakarítása**, az összes letétet egyetlen tranzakcióval finanszírozza: például öt kifizetés egyetlen tranzakcióba történő összevonása akár 60%-os megtakarítást is jelenthet a tranzakciós díjak terén.

## Hogyan Működik

### Finanszírozás a Peach pénztárcából

Az eladási ajánlatok finanszírozása a Peach pénztárcádból a legegyszerűbb megoldás. Amikor rákattintasz a "finanszírozás a Peach pénztárcából" gombra, a Peach alkalmazás mindent kezel helyetted. Létrehoz egy finanszírozási tranzakciót, amely automatikusan elküldi a szükséges összegeket minden letéti címre.

### Finanszírozás külső pénztárcából

Ha külső pénztárcát szeretnél használni, akkor is finanszírozhatod több eladási ajánlatodat, de ez egy kétlépéses folyamatot jelent:

1. **sats küldése egy belső Peach Pénztárca címre**: Az általad látott cím egy belső Peach Pénztárca cím, amelyet kifejezetten erre a célra regisztráltak. A Peach alkalmazás figyelemmel kíséri ezt a címet, amíg az ajánlatod vagy törölve nem lesz, vagy a cím finanszírozva lesz.
2. **finanszírozás és elosztás**: Amint a sats megérkezik erre a belső címre, a Peach alkalmazás logikája szétosztja az összeget az általad létrehozott eladási ajánlatok között, és elküldi azokat az egyéni letéti címekre.

## Gyakori kérdések

Olvasás közben felmerülhet benned egyik vagy másik kérdés. Én is feltettem ezeket magamnak, ezért szeretnék azonnal választ adni rájuk.

:::details Miért nem egyetlen letéti számla több eladási ajánlatra?
Valóban, azon gondolkoztunk, hogyan hozhatunk létre egyetlen letéti számlát, amelyből több eladási ajánlatot is kiszolgálhatunk.
Azért nem használunk egyetlen letéti számlát, mert az kifizetéseket sokkal nehezebbé tenné.
A jelenlegi beállításban a letéti számlákat teljes egészében egyetlen tranzakcióban fizetjük ki, és kész is. Azonban ha részlegesen fizetnénk ki egy letéti számlát az A vevőnek, a bitcoin tranzakció természete miatt maradna egy változó kimenet a még ki nem költött sats-okból. A egyszerűség kedvéért mondjuk, hogy a visszajáró összeg visszakerül ugyanarra a letéti számlára.
Még egy problémát kell megoldanunk: függőben lévő tranzakciók. Képzeld el, hogy az első kifizetési tranzakció az A vevőnek 8 sats / vB áron van függőben, de a hálózat jelenleg csak 21 sats / vB és annál magasabb áron feldolgoz tranzakciókat. Ha egy másik kifizetési tranzakciót indítunk el a B vevőnek, miközben az még mindig nincs megerősítve, akkor a B vevőnek több tranzakciós díjat kell fizetnie, hogy a tranzakciót hamarabb megerősítsék.
:::

:::details Miért nem hozhatok létre egyszerre 2 eladási ajánlatot?
A 2 lépéses folyamat esetén az összeg megspórolásra kerül a 3 vagy annál több letét finanszírozásakor. További díjak elkerülése érdekében nem engedélyezzük két eladási ajánlat tömbösített finanszírozását.
:::

:::details Tudom tömbösíteni a saját tranzakcióimat, szükségem van a 2 lépéses folyamatra?
Jelenleg igen. De hamarosan frissítést adunk ki, hogy több eladási ajánlatot lehessen létrehozni anélkül, hogy az átmeneti finanszírozási címet megjelenítenénk.
:::

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

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Továbbra is terjeszd a Peach szót, ki tudja, mikor találod meg az életed meccsét!
