# Kereskedelmi GYIK

:::details Hogyan lehetek biztos benne, hogy a bitcoint / a pénzt megkapom?

Amikor eladási ajánlatot tesz, a eladó elküldi a bitcoint egy olyan címre, amelyet ő és a Peach is ellenőriz: a bitcoin csak innen mozgatható el, ha mindketten aláírják. Ez biztosítja, hogy:

- Az eladó nem mozgathatja a bitcoint (vissza) saját maga számára.
- A Peach nem lopja el a bitcoint.
- A vevő nem kapja meg a bitcoint, amíg a fizetés meg nem történik.
- Az eladó visszakaphatja a bitcoint, ha a vevő nem válaszol.

Ha az ügylet nem oldódik meg normálisan, ez az cím automatikusan Peach teljes ellenőrzése alá kerül nagyjából 30 nap elteltével (pontosabban, amikor 4320 bitcoin blokkot bányásztak). Ez biztosítja, hogy:

- A vevő megkaphatja a bitcoint, ha bizonyítani tudja, hogy megfizette a vásárlást, de az eladó nem válaszol.
- A bitcoint nem ragadja meg semmi, ha az eladóval valami történik.

Ez az ügyleted biztosításának legfontosabb része. Emellett van egy bonyolult hírnevi rendszerünk is, amely segít azonosítani azokat az embereket, akik hosszú ideje megbízhatóan használják a Peachet.
:::

:::details Miért van kereskedelmi korlátozás?

A svájci rendeletek szerint egy személy csak naponta legfeljebb 1000 svájci frank értékű bitcoint vásárolhat, anélkül, hogy azonosítaná magát az eladónak. Mivel nem szeretnénk börtönbe kerülni, az alkalmazásban érvényesítjük ezt a korlátot.

Az összes fizetési adata a telefonodon van tárolva, így mi nem láthatjuk. Amit láthatunk, az a telefonod azonosítójának és a fizetési adataidnak egy hash\* változata. Ez lehetővé teszi számunkra, hogy megakadályozzuk azokat az ügyleteket, amelyek meghaladják a személyes korlátot.

\* A hash egy adat, amelyet felismerhetetlenné tettek, hasonlóan az átitatáshoz. Az ugyanaz az adat mindig ugyanazt a hash-t fogja eredményezni. Ez azt jelenti, hogy nem tudjuk, mi az az adat, de látni fogjuk, ha ugyanazt az adatot kétszer használják.
:::

:::details Van mód arra, hogy többet vásároljak / adjak el a kereskedelmi korláton túl?

Ha nagy forgalmú vevő vagy eladó vagy, küldj nekünk egy e-mailt a [$contactEmail$](mailto:$contactEmail$) címre!
:::

:::details Mennyi a kereskedési díj a Peachen?

A Peach 2% díjat számít fel a vásárlási volumen után az vevőnek. Amikor egy Peachen keresztül kereskedelmet hozol létre, a Bitcoin blokkláncon történő tranzakciókat hozol létre, amelyek tranzakciós díjakat eredményeznek. Mindig megnézheted a teljes díjszerkezetet a kereskedelem végén, ami valami ilyesmit mutathat be:

![Kereskedelem részletei](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hogyan lehetek lemondani egy ajánlatot vagy egy tranzakciót?

Lemondhatod az ajánlataidat és a tranzakcióidat, ha rendelkezésre áll a képernyő tetején lévő piros X gombot megnyomva:

![Tranzakció lemondása](/img/faq/trading/cancel.png)

Azonban ezzel gyakran járnak következmények. Mielőtt bárkivel is párosítanál, bármikor lemondhatsz. Miután párosítottál, azonban a hírneved negatívan befolyásolódik. Ezenkívül eladóként meg kell kérned az vevőtől az engedélyt a tranzakció lemondásához. Elképzelhető, hogy már megfizették!
:::

:::details Miért kaptam kevesebb satoshit, mint amennyit gondoltam vásárolni?

A Peach 2% kereskedelmi díjat számít fel az vevőnek, ami azt jelenti, hogy kevesebb satoshit kapsz, mint amennyi az ügylet összege. Ezenkívül a Bitcoin hálózati díjakat is fizetned kell. Az ügyleted például így nézhet ki:

![Vásárlási lebontás](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Mi a teendő, ha nem szeretném használni a Peach tárcát a kifizetéshez / visszatérítéshez?

Természetesen szabadon használhatod a saját tárcádat, ha szeretnéd. Azonban erősen ajánljuk a Peach tárcának használatát, mivel ez messze a legegyszerűbb módja annak, hogy kereskedelmet hozz létre. Ezt követően az alapokat bármely másik tárca felé is elküldheted.

Ha hozzá akarod adni saját tárcádat, letilthatod a "kifizetést a Peach tárcába" opciót, majd beállíthatsz egyéni kifizetési címet:

![Tárca letiltása](/img/faq/trading/disablewallet.png)

Kereskedelem létrehozásakor a tárca feletti irányításod bizonyításához alá kell írnod egy üzenetet a svájci rendeletek értelmében.

Hamarosan dolgozni fogunk az xpub támogatásán, de egyelőre manuálisan kell megváltoztatnod ezt a címet, ha nem szeretnéd újra használni.
:::

:::details Hogyan számolják ki a Peachen a Bitcoin árát?

A Peachen bemutatott BTC ár egy centralizált tőzsdéken látható BTC ár összegezése.
:::

:::details Mi történik a magas inflációval rendelkező országok, például Argentína, Venezuela stb. valutáinak árával?

A magas inflációval rendelkező valuták erősen szenvednek a nagy volatilitástól, tehát az eltérő tőzsdéken található árak különbözhetnek. A Peach az BTC árat különböző forrásokból összesítve adja meg.
:::

:::details Hogyan lehet meggyorsítani egy alacsony bányászdíjak miatt megrekedt tranzakciót?

Attól függ, milyen típusú tranzakciókról beszélünk. Itt található egy lista az összes Peachben előforduló tranzakcióról és megoldásaikról a díjak növelése érdekében:

1. Tranzakció az escrow finanszírozásához az eladási ajánlat közzétételéhez
- Ha az escrow-t a Peach tárca segítségével finanszíroztad, megteheted az RBF (Csere-a-Díj-miatt) eljárást a tranzakciós díjak növelése érdekében.
- Ha egy külső tárca segítségével finanszíroztad az escrow-t, ellenőrizd, hogy a tárca támogatja-e az RBF (Csere-a-Díj-miatt) lehetőséget a hálózati díjak növelése érdekében.

2. Tranzakció az escrowból való kibocsátáshoz (Bitcoin vásárlása)
- Ha a fogadó címed a Peach tárcából származik, akkor az összeget kiveheted egy másik tárca részére magasabb díjakkal (Beállítások > Hálózati díjak) - CPFP technika
- Ha a fogadó címed egy külső tárcából származik, akkor szintén alkalmazhatod a CPFP technikát, ha a tárca támogatja

3. Tranzakció küldése a Peach tárcából egy másik tárca felé
- RBF (Csere-a-Díj-miatt) a Peach tárca segítségével a tranzakciód adatainál!
:::

:::details Mi az a GroupHug?
A GroupHug egyszerűen az a kifejezés, amit a különböző felhasználók tranzakcióinak összevonására használunk, hogy elkerüljük a díjakat mindegyiküknél. Részletesebb magyarázathoz nézd meg a [blogbejegyzésünket](https://peachbitcoin.com/blog/group-hug).
:::

:::details Ha csak egyetlen vásárlási ajánlatom fut, akkor azt azonnal kibocsátják?

Nem, a kifizetésedet várakozási sorhoz adják, és megvárja a kifizetést. A kifizetést akkor hajtják végre, amikor elegendő felhasználó részt vesz a batchben. A várakozási sor információját a tranzakció részletein keresztül érheted el. Ott láthatod, hány helyet foglal el az aktuális batchban. Az információban megtekintheted azt is, hogy az ETA azt mutatja, hogy mi a maximális várakozási idő, ha a helyek nem telnek be előbb.
:::

:::details Hogyan működik, ha több vásárlási ajánlatom van folyamatban?

Pontosan, ahogy azt már korábban említették, a kifizetéseidet várakozási sorhoz adják, és más résztvevőkkel együtt kerülnek batchbe.
:::

:::details Van korlátozás a résztvevők számára, akik részt vehetnek a batchben?

Nem, a batchek meghaladhatják a résztvevők maximális számát is. Ez nem egy korlátozás, hanem egy küszöb. Azaz, amint a minimumot elérjük, az összes psbts-t egyszerűen együtt veszünk, és batchbe helyezzük a tranzakció elkészítése érdekében, és csökkentjük a résztvevők által fizetendő díjakat.
:::

:::details Hogyan kell aláírni egy külső címet?
Kövesd ezeket a lépéseket annak érdekében, hogy aláírd a vásárlás során egy külső tárca részére történő Bitcoin fogadó címét:

_Megjegyzés: Az első 2 lépés hasznosak, ha **mindig** külső címre szeretnéd megkapni az alapokat. Ha csak egyszer szeretnéd megtenni, vagy időnként használni szeretnéd a Peach tárcát, a 3. lépéstől kezdd el._

1. Menj a beállításokhoz
  - tiltsd le a Peach tárcát
  - menj a kifizetési címhez

2. Illessz be egy új fogadó címet

3. Végig kell menned a vásárlási ajánlat közzétételének folyamatán, és mielőtt közzé tennéd, győződj meg arról, hogy a külső tárca címére szeretnél fogadni (kattints a kínálati összegzés képernyőjén található jobb felső pénztárca ikonra).

4. Amikor megerősíted a vásárlási ajánlatot, megjelenik az üzenet, amely aláírásra kerül az címed érdekében. Másold ki, majd térj vissza a tárcahoz.

5. Keresd meg a "cím aláírás / ellenőrzés" lehetőséget*, és illessz be:
  - a fogadó címed
  - a Peach üzenetet

6. Kattints az aláírásra, és megjelenik az aláírás. Másold ki.

7. Illeszd be az aláírást a Peach tárcába, majd kattints a megerősítésre.

_*Kijelentés: Nem mindegyik tárca támogatja a cím aláírás/ellenőrzés lehetőségét._ A Peach a Blue Wallet, a Sparrow vagy a Samourai Wallet használatát ajánlja. Egyéb lehetőségek közé tartozik a Ledger és a Trezor (Hardvertárcák), a Bitcoin Core és az Electrum tárca.

A cím aláírásának lépésről lépésre történő bemutatását megtalálod a Blue Wallet üzenet aláírásának a használatáról a YouTube csatornánkon: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Hogyan lehet a CPFP-t használni, hogy felgyorsítsa a megrekedt tranzakciókat?

Kövesd a Peach alkalmazásban található CPFP használatáról szóló lépéseket ebben a videóban: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU).
:::
