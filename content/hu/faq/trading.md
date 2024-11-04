# Kereskedési GYIK

:::details Hogyan lehetek biztos abban, hogy megkapom a bitcoint / a pénzt?

Eladási ajánlat esetén az eladó a bitcoint egy olyan címre küldi, amelyet ő és a Peach egyaránt ellenőriz: a bitcoint csak akkor lehet onnan elmozdítani, ha ő és a Peach is aláírja. Ez biztosítja, hogy:

- Az eladó nem tudja saját maga visszahelyezni a bitcoint
- A Peach nem tudja ellopni a bitcoint
- A vevő addig nem kapja meg a bitcoint, amíg a fizetés meg nem történik
- Az eladó visszakaphatja a bitcoint, ha a vevő nem válaszol

Ha a kereskedés nem normálisan zárul le, ez a cím automatikusan teljesen a Peach ellenőrzése alá kerül körülbelül 30 nap után (pontosabban: amikor 4320 bitcoin blokkot bányásztak). Ez biztosítja, hogy:

- A vevő megkaphatja a bitcoint, ha be tudja bizonyítani, hogy megtette a fizetést, de az eladó nem válaszol
- A bitcoin nem ragad be, ha az eladóval valami történik

Ez a kereskedésed biztonságának legfontosabb része. Ezenkívül van még a részletes hírnévrendszerünk is, amely segít azonosítani azokat az embereket, akik hosszú ideje megbízhatóan használják a Peach-t.
:::

:::details Miért van kereskedelmi limit?

A svájci szabályozások kimondják, hogy egy személy naponta legfeljebb 1000 CHF értékű bitcoint vásárolhat anélkül, hogy azonosítania kellene magát az eladónak. Mivel inkább nem kerülnénk börtönbe, ezért az alkalmazásban érvényesítjük ezt a limitet.

Az összes fizetési adatod a telefonodon van tárolva, így mi nem láthatjuk őket. Amit láthatunk, az a telefonod azonosítójának és a fizetési adataidnak a hash-e\*. Ez lehetővé teszi számunkra, hogy blokkoljuk azokat a kereskedéseket, amelyek túllépik a személyes limitet.

\* A hash olyan adat, amely felismerhetetlenné vált, hasonlóan a titkosításhoz. Ugyanazok az adatok mindig ugyanahhoz a hash-hez vezetnek. Ez azt jelenti, hogy nem tudjuk, mik az adatok, de képesek leszünk észrevenni, ha ugyanazokat az adatokat kétszer használják.
:::

:::details Van-e mód arra, hogy többet vásároljak/eladjak a kereskedelmi limitnél?

Ha nagy mennyiségű vevő vagy eladó vagy, küldj nekünk emailt a [$contactEmail$](mailto:$contactEmail$) címre!
:::

:::details Milyen díjakat számít fel a Peach a kereskedésért?

A Peach a kereskedési volumen 2%-át számítja fel díjként a vevőnek. Amikor kereskedést hajtasz végre a Peach-en, az Bitcoin blokkláncon végzett tranzakciókat eredményez, ami tranzakciós díjakat von maga után. Mindig láthatod a teljes díjstruktúrát a kereskedésed végén, ami így nézhet ki:

![Kereskedési lebontások](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hog

yan mondhatom le az ajánlatot vagy a kereskedést?

Le tudod mondani az ajánlataidat és kereskedéseidet a képernyő tetején lévő piros X-re kattintva, amikor ez elérhető:

![Kereskedés lemondása](/img/faq/trading/cancel.png)

Ennek ellenére, ez gyakran következményekkel jár. Miután bárkivel összepárosítottál, bármikor lemondhatsz. Miután már összepárosítottál, azonban a hírneved negatívan érintett lesz. Ezenkívül, mint eladó, engedélyt kell kérned a vevőtől a kereskedés lemondásához. Lehet, hogy ő már megtette a fizetést!
:::

:::details Miért kaptam kevesebb satoshit, mint amennyit vásárolni hittem?

A Peach 2% kereskedési díjat számít fel a vevőnek, ami azt jelenti, hogy kevesebb satoshit kapsz, mint amennyiért a kereskedés történt. Ezenkívül fizetned kell a Bitcoin hálózati díjakat is. Például a kereskedésed így nézhet ki:

![Vásárlási lebontás](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Mi van, ha nem akarom a Peach tárcát használni a kifizetéshez / visszatérítéshez?

Természetesen szabadon használhatsz saját tárcát, ha szeretnéd. Mégis, erősen ajánljuk a Peach tárcának használatát, mivel ez messze a legkönnyebb módja a kereskedésnek. Ezután átküldheted a pénzeszközöket bármely másik tárcára.

Ha saját tárcát szeretnél hozzáadni, letilthatod a "kifizetés a Peach tárcára" opciót, majd beállíthatsz egy egyéni kifizetési címet:

![Tárca letiltása](/img/faq/trading/disablewallet.png)

Kereskedés során alá kell írnod egy üzenetet, amely igazolja, hogy irányításod alatt áll ez a tárca, a svájci szabályozások szerint.

Hamarosan dolgozni fogunk az xpub támogatáson, de egyelőre manuálisan kell megváltoztatnod ezt a címet, ha nem szeretnéd újrahasználni.
:::

:::details Hogyan számítódik ki a Bitcoin ára a Peach-en?

A BTC árát, amit a Peach-en mutatunk, a centralizált tőzsdéken található BTC árak aggregátumából számítjuk ki.
:::

:::details Mi történik a valuták árával magas infláció esetén, mint például Argentínában, Venezuelában, stb.?

A magas infláció alatt álló valuták magas volatilitást szenvednek el, ezért az ár, amit különböző tőzsdéken találsz, eltérő lehet. A Peach az árat különböző forrásokból származó BTC árak aggregátumával adja meg.
:::

:::details Hogyan lehet felgyorsítani egy alacsony bányászati díjak miatt megrekedt tranzakciót?

Attól függ, hogy milyen típusú tranzakcióról beszélünk. Íme egy lista minden tranzakcióról, ami a Peach-ben történhet, és a díjak felgyorsításának megoldásai:

1. Tranzakció az escrow finanszírozására, hogy kö

zzétegyünk egy eladási ajánlatot

- Ha a Peach tárcából finanszírozod az escrow-t, RBF (Replace-By-Fee) módszerrel megemelheted a díjakat
- Ha külső tárcából finanszírozod az escrow-t, ellenőrizned kell, hogy a tárca támogatja-e az RBF (Replace-By-Fee) módszert a hálózati díjak növelésére.

2. Kiadási tranzakció az escrow-ból (Bitcoin vásárlása)

- Ha a fogadó címed a Peach tárcából származik, akkor az összes összeget egy magasabb díjjal rendelkező külső tárcádba vonhatod vissza (Beállítások > Hálózati díjak) - CPFP technika
- Ha a fogadó címed külső tárcából származik, akkor szintén alkalmazhatod a CPFP technikát, ha a tárcád támogatja

3. Tranzakció a Peach tárcából egy másik tárcába

- RBF (Replace-By-Fee) a Peach Tárcában a tranzakció részleteinél!
  :::

:::details Mi az a GroupHug?
A GroupHug egyszerűen csak az a kifejezés, amit a tranzakciók különböző felhasználók közötti csoportosításának cselekvésére adtunk, hogy elkerüljük a mindegyikükre vonatkozó díjakat. A részletes magyarázatért nézd meg a [blogbejegyzésünket](https://peachbitcoin.com/blog/group-hug).
:::

:::details Ha egyetlen vételi ajánlatom van, az azonnal felszabadul?

Nem, a kifizetésed egy várakozási sorba kerül, várva a kifizetésre. A kifizetés akkor történik meg, amikor elegendő felhasználó vesz részt a kötegben. Az aktuális kötegben foglalt helyek számát a függőben lévő kifizetési információban láthatod. Ezt a nézetet a kereskedés részletein keresztül érheted el.
Ott láthatod, hány hely van foglalva az aktuális kötegben. Az információban látható egy ETA is, ami megmondja a maximális várakozási időt, ha a helyek nem telnek be előtte.
:::

:::details Hogyan működik, ha több vételi ajánlatom van folyamatban?

Ahogy korábban említettük, a kifizetéseid a sorba kerülnek, várva arra, hogy más résztvevőkkel együtt kötegbe rendeződjenek.
:::

:::details Van-e résztvevők számára limit, akik részt vehetnek a kötegelésben?

Nem, a kötegek átléphetik a résztvevők maximális számát. Ez nem egy határpont, hanem egy küszöb. Ez azt jelenti, hogy amint elérjük a minimális számot, egyszerűen összevesszük az összes psbt-t és együtt hajtjuk végre a tranzakciót, csökkentve minden résztvevő által fizetendő díjat.
:::

:::details Hogyan írhatok alá egy külső címet?
Kövesd ezeket a lépéseket, hogy aláírd a fogadó címet, amikor Bitcoin-t vásárolsz egy külső tárcába:

_Megjegyzés: Az első 2 lépés akkor hasznos, ha **mindig** külső címekre szeretn

éd kapni a pénzeszközeidet. Ha csak egyszer szeretnéd ezt megtenni, vagy néha használni szeretnéd a peach tárcát, kezdd a 3. lépéssel._

1. Menj a beállításokhoz

- tiltsd le a peach tárcát
- menj a kifizetési címhez

2. Illeszd be az új fogadó címet

3. Menj végig a vételi ajánlat közzétételének folyamatán, és mielőtt közzétennéd, győződj meg róla, hogy a külső tárcacímre szeretnéd kapni (kattints a jobb felső sarokban lévő kis tárcára az ajánlat összefoglaló képernyőjén).

4. Miután megerősítetted a vételi ajánlatodat, megjelenik az üzenet a címed aláírásához. Másold ki és menj vissza a tárcádba.

5. Keresd meg a "sign/verify" opciót\* és illeszd be:

- a fogadó címed
- a peach üzenetet

6. Kattints az aláírásra és megjelenik az aláírás. Másold ki.

7. Illeszd be az aláírást a peach tárcába és kattints a megerősítésre.

8. Az ajánlatod közzétételre került.

_\*Megjegyzés: nem minden tárca támogatja a cím aláírás/ellenőrzés opcióját._
A Peach a Blue Wallet, Sparrow vagy Samourai Wallet használatát ajánlja. Egyéb opciók közé tartozik a Ledger és Trezor (Hardver Tárcák), Bitcoin Core és Electrum tárca.

Egy lépésről lépésre útmutatót is találhatsz a Blue Wallet használatával történő üzenet aláírásához a Youtube csatornánkon: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)

:::

:::details Hogyan használhatom a CPFP-t a megrekedt tranzakciók felgyorsítására?

Kövesd a videóban található lépéseket: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) a megrekedt tranzakciók felgyorsítására a CPFP használatával a Peach alkalmazásban.
:::

:::details Hogyan működik a több ajánlat finanszírozása?

Amikor egyszerre szeretne több ajánlatot finanszírozni, az alkalmazás egy köztes címet biztosít, amelyet a Peach Wallet-ból generál. Amint a bitcoinok elérik ezt a címet, minden egyes letéti számlához új tranzakció jön létre. Például, ha 5 eladási ajánlatot szeretne finanszírozni, 5 tranzakció kerül elküldésre különböző letéti címekre.
:::
