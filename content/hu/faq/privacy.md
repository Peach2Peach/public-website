# Adatvédelmi GYIK

:::details Milyen információkat gyűjt rólam a Peach?

Igyekszünk a lehető legkevesebb adatot tárolni a felhasználóinkról, amennyire csak lehet. Itt egy gyors áttekintés arról, mi van a szervereinken:

- Az alkalmazásod egyedi azonosítójának (AdID) egy hash* értéke
- A fizetési adataid hash értéke
- A titkosított csevegéseid
- A kereskedelmi adatok annak biztosítására, hogy az anonim felhasználók ne lépjék túl a kereskedelmi limitet (milyen fizetési módszereket használnak, vásárlási és eladási összegek)
- Az escrow-nak küldött és onnan küldött címek
- Használati adatok (Firebase & Google Analytics), **csak ha beleegyeztél**

A teljes lebontásért kérjük, lásd az [adatvédelmi irányelveinket](/privacy-policy/).

\* Egy hash olyan adat, amit felismerhetetlenné tettek, hasonlóan a titkosításhoz. Ugyanazok az adatok mindig ugyanahhoz a hash-hez vezetnek. Ez azt jelenti, hogy nem tudjuk, mi az adat, de képesek leszünk észrevenni, ha ugyanazt az adatot kétszer használják.
:::

:::details Ki láthatja a fizetési adataimat?

Csak a kereskedelmi partnered láthatja a fizetési adataidat; ezeket a Peach szervereken keresztül küldik, de teljes mértékben végponttól végpontig titkosítva vannak (mint a legtöbb csevegőalkalmazás esetében), így mi nem látjuk, mik azok.

Amikor vitát indítasz, te és a kereskedelmi partnered fizetési adatai, valamint a csevegési előzményeid láthatóak lesznek a kijelölt Peach mediátor számára.
:::

:::details Hogyan ellenőrizhetem az APK-t?

Kövesd ezeket a lépéseket, hogy ellenőrizd, valóban az eredeti Peach APK-t töltötted-e le:

- Töltsd le az APK-t, amelyet telepíteni szeretnél a weboldalról, valamint az aláírást és a manifeszt fájlt (mindent megtalálsz itt: https://peachbitcoin.com/apk)

- Töltsd le a Peach PGP kulcsot https://keys.openpgp.org/vks/v1/by-fingerprint/E970EDB410C8E84198F141584AD3CE3043D8CD1B (szintén megtalálható a weboldalunkon)

- Generáld le az APK fájlod ellenőrzőösszegét, amit letöltöttél, és hasonlítsd össze a manifeszt fájlon találhatóval.

```
sha256sum app-prod-arm64-v8a-release.apk
```

(cseréld le az app-prod-arm64-v8a-release.apk részt a fájlod nevére). Azonosnak kell lennie, mint amelyik a manifesztben van. Ellenkező esetben vedd fel velünk a kapcsolatot és győződj meg róla, hogy ne telepítsd azt az alkalmazást a készülékedre. Ebben a példában a következő kimenetet kellene látnod:

```
$ sha256sum app-prod-arm64-v8a-release.apk

09e4e2db837b2a2aef3a51527ef24fae22cff2b7e2ecd4ca01502c8a61961584

  app-prod-arm64-v8a-release.apk
```

Ha összehasonlítjuk a manifeszt-peach.txt-ben találhatóval, láthatjuk, hogy azonos.

- Add hozzá a Peach kulcsot a kulcstartóhoz

```
gpg --import PGP-peach.asc
```

(győződj meg róla, hogy helyesen cseréled le a PGP-peach.asc részt a helyes fájlnévre, általában ez E970EDB410C8E84198F141584AD3CE3043D8CD1B.asc lesz)

- Ellenőrizd az előzőleg letöltött aláírásokat a következő parancs használatával:

```
gpg --verify manifest-peach.sig manifest-peach.txt
```

A kimenetben a következő sort kell látnod:

```
gpg: Good signature from "hello@peachbitcoin.com <hello@peachbitcoin.com>" [unknown]
```

:::

:::details Támogatott a Taproot?

- Igen, a Peach pénztárcából taproot címekre küldhetsz.
- Közvetlenül az escrow-ból a külső taproot címedre is fogadhatsz.

:::

:::details Hogyan csatlakozhatok a saját csomópontomhoz?

A saját csomópontodhoz való csatlakozás növeli a magánéletedet, mivel az összes tranzakció a Bitcoin hálózaton keresztül a saját csomópontodon keresztül kerül közvetítésre, a Peach-é helyett.

A Peach jelenleg nem támogatja a Tor-t, így IPv4-en keresztül kell csatlakoznod a csomópontodhoz. Ha nem nyitották meg az internetre, csak a helyi hálózaton vagy egy privát VPN-en keresztül csatlakozhatsz hozzá.

Nézd meg a [videó oktatónkat](https://www.youtube.com/watch?v=xtvq2i3mIYg) arról, hogyan csatlakozhatsz a saját csomópontodhoz.

Ha Umbrel-t használsz, az umbrel.{port szám} használható a csomópontod IP-címének helyett.
:::

:::details Mennyire biztonságosak a bitcoinjaim a Peach pénztárcában?

A Peach pénztárca egy meleg pénztárca. A meleg pénztárcák olyan pénztárcák, amelyek csatlakoznak az internethez és ki vannak téve a malware-eknek és a hackelési kísérleteknek. Semmilyen rendszer sem 100% biztonságos, és a Peach pénztárca is csak annyira biztonságos, mint az operációs rendszer, amelyen fut.

Egy meleg pénztárcát úgy kell elképzelni, mint egy rendes pénztárcát a zsebedben, nem hordanál benne ezer dollárt hosszú ideig. Gyorsan elveszítheted vagy ellophatják.

Mindazonáltal, mindent megteszünk annak érdekében, hogy a pénztárcádat biztonságban tartsuk, például elegendő entrópiát (véletlenszerű számokat) használunk a privát kulcsaid kitalálhatatlanságának biztosítására és titkosítjuk az alkalmazás tárolóját, hogy más alkalmazások ne férjenek hozzá. A véletlenszerű számokat az általad használt operációs rendszer generálja, általában nem determinisztikus bemenetekből származnak, mint például a fizikai bemenetek, hőmérsékleti mérések, fáziszaj stb... Ha érdekelnek a részlete

k, kutass utána a PRNG-knek (Pseudo random number generators).

PIN/Jelszó védelem is tervezett.

Mindenesetre azt tanácsoljuk, hogy mozgasd át a pénzeszközeidet hideg tárolóba (például egy [Bitbox 02](https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc 'https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc') hardvertárca), amely sokkal erősebb biztonsági garanciákat kínál.

:::

:::details Mi az a coin control?

A Peach pénztárca támogatja a coin controlt vagy coin menedzsmentet. A coin control célja, hogy külön tartsd a coinjaidat, ha szeretnéd, a magánélet kezelése érdekében.

Nézd meg a videónkat, amely részletesen bemutatja a coin controlt: [Hogyan végezzünk coin controlt a Peach Pénztárcával](https://www.youtube.com/watch?v=zWwIekSv3U8)

:::

:::details Milyen adatvédelmi következményei vannak az azonnali kereskedési ajánlatnak?

Alapértelmezés szerint a fizetési adatok PGP-vel vannak titkosítva végponttól végpontig Ön és partnere között.  
Az azonnali kereskedési ajánlat esetében az információkat a Peach is megkapja, hogy azonnal továbbíthassuk azokat a partnernek, amint az ajánlat elküldésre kerül.
:::

