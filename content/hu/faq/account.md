# Fiók GYIK

:::details Mi az a Peach fiók?

A Peach fiók nem olyan, mint a normál fiókok, amelyeket más szolgáltatásoknál használsz, mint például egy e-mail cím és jelszó. A Peach fiók egy olyan fájl, amely a telefonodon él, ami azt jelenti, hogy nekünk nem kell tárolnunk az adataidat és nem kell tudnunk, ki vagy: te irányítasz. Ez a fájl tartalmazza az összes adatodat: a bitcoin tárcád kulcsaitól a fizetési adataidig.

Ez több magánéletet jelent számodra, de ez felelősséggel is jár. Biztonsági mentést kell készítened erről a fájlról, mert különben, ha elveszíted a telefonod, ez azt jelenti, hogy már nem férhetsz hozzá a Peach fiókodhoz vagy a Peach tárcádban lévő pénzeszközökhöz.

Ez a fájl továbbá egy általad beállított jelszóval van titkosítva. Mivel a fájl digitálisan van tárolva, biztosnak kell lenned abban, hogy ez a jelszó erős.
:::

:::details Hogyan készíthetek biztonságos jelszót?

Egy biztonságos jelszó hosszú és véletlenszerű. Az emberek nagyon rosszak a véletlenszerűségben, ezért ajánljuk egy jelszókezelő használatát, amely neked generál jelszavakat, hogy mindkettőt megkapd. Egy jelszómondat általában biztonságosabb, mint egy jelszó, mivel hosszabb. Így nézhet ki ez valahogy:

Confider+Thrift9+Elves+Straining+Distant

![Válassz egy erős jelszót](/img/faq/account/StrongPassword.png)

Mivel a Peach fiók egy fájl, nem tudjuk korlátozni, hogy valaki hányszor próbálkozhat különböző jelszavakkal. Ez lehetővé teheti valakinek, hogy egy számítógépet használva "brute force" módszerrel (sokszor kitalálva) feltörje a Peach fájlt és hozzáférjen a Peach tárcád pénzeszközeihez & személyes adataidhoz.

![Mennyi időbe telik egy hackernek a jelszavad brute force módszerrel történő feltörése](/img/faq/account/PWBruteForce.png)
:::

:::details Hogyan állíthatom vissza a jelszavamat?

Mivel nem tároljuk a jelszavad, nem tudod visszaállítani, ha már nincs meg az a telefon, amelyre a Peach alkalmazás telepítve van.

Ha még be vagy jelentkezve a Peach-be, és elfelejtetted a jelszavad, nincs ok pánikra. Egyszerűen létrehozhatsz egy új biztonsági mentést egy új jelszóval a beállításokon keresztül:

![Biztonsági mentések](/img/faq/account/backups.png)
:::

:::details Hogyan tároljam a biztonsági mentésemet?

Mindig tárold a biztonsági mentési fájlt a telefonodtól távol, mint például egy SD kártyán, a PC-den vagy egy külső merevlemezen. Különben még mindig bajban vagy, ha elveszíted a telefonod. Tárolhatod felhőtárhelyen is, de különösen fontos, hogy hosszú és biztonságos jelszót használj, ha ezt teszed.
:::

:::details Mi a k

ülönbség a fájl biztonsági mentése és a mag biztonsági mentése között?

A fájl biztonsági mentése visszaállíthatja a teljes Peach fiókodat, így nem kell újra hozzáadnod az összes fizetési módot stb., amikor elveszíted a telefonodat. Amikor a mag biztonsági mentésével állítod vissza a fiókodat, újra hozzáférést kapsz a fiókodhoz & pénzeszközeidhez, de elveszíted a:

- Csevegési előzményeid
- Fizetési adataid
- Kereskedési előzményekben szereplő másik fél fizetési adatait
  :::

:::details Hogyan működik a Peach ajánlói rendszere?

Amikor létrehozol egy Peach fiókot, automatikusan kapsz egy ajánlói kódot. Amikor mások ezt használják, minden 10 000 satoshi után, amit az ajánlottak a Peach-en kereskednek, egy Peach pontot kapsz. A Peach pontokat menő jutalmakra lehet beváltani, amelyek idővel változnak. Jelenleg kaphatsz:

- Egyéni ajánlói kód (100 pont)
- 5x kereskedés Peach díjak nélkül (200 pont)
- Pontjaid satsokra váltása (300 ponttól kezdve)

Ha az utolsót választja, az Ön által hivatkozott felhasználó által végrehajtott első 5 kereskedés díjának 21%-át fizetjük Önnek (vegye figyelembe, hogy az első kereskedés díja 0%, majd 2% lesz). Minden 1 pontért 42 sat-ot kapsz.  
Ezt manuálisan kell kérnie jegyen keresztül vagy postai úton, mivel az automatikus kifizetés még nincs megvalósítva.  
Fizethetünk villámhálózaton vagy onchain-en.

Amikor valaki használja az ajánlói kódodat, az illető 100 Peach ponttal kezd!
:::

:::details Mit jelent a Peach pontszám?

A Peach pontszám a reputációd a Peach-en. Ez a felhasználói értékelésen alapul (a kereskedés után a másik féltől kapott lájkok/diszlájkok) és a tevékenységeiden, mint a viták, milyen gyorsan fizetsz, és több.
:::

:::details Miért tűnt el a tranzakcióm a tárcámból?

A megerősítetlen tranzakciók, amelyek túl alacsony díjakat állítottak be vagy túl régiek, elfelejthetőek a bitcoin hálózat csomópontjai által.
Ha ez történt veled miután bitcoint vásároltál peach-en, használhatod az alkalmazásban lévő kapcsolatfelvételi űrlapot segítségért. Ne felejtsd el megemlíteni a kapcsolódó kereskedési azonosítót.

Hogy elkerüld ezt a helyzetet, állítsd be a díjaidat elegendően magasra. Ha nem vagy biztos benne, választhatsz egy automatikus díjat, amely alkalmazkodik az aktuális díjhelyzethez.
Ha attól félsz, hogy egy tranzakció törlődni fog, növelheted a díjait RBF vagy CPFP használatával a helyzettől függően.

Ha többet szeretnél tudni arról, hogyan gyorsíthatod fel a tranzakciókat, nézd meg a Youtube videónkat, hogy megtanuld, hogyan csinálj egy CPFP-t a Peach-ből: https://www.youtube.com/watch?v=24OtQkL0CxU
:::

:::details Miért vásárolhatok legálisan KYC nélkül?

A Peach egy 100%-ban megfelelőségi követelményeknek megfelelő cég. Egy svájci pénzügyi közvetítővel vagyunk társultak és a megfelelőségi keretünk lehetővé teszi a KYC nélküli pénzváltási tranz

akciókat bizonyos küszöbértékek alatt.
:::
