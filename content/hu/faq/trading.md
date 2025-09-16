# Kereskedési GYIK

:::details Hogyan lehetek biztos benne, hogy megkapom a bitcoint / a pénzt?

Amikor eladási ajánlatot hozol létre vagy elfogadsz egy vételi ajánlatot, az eladó a bitcoint egy olyan címre küldi, amelyet ő és a Peach közösen ellenőriznek: a bitcoin csak akkor mozdítható el innen, ha mind az eladó, mind a Peach aláírja. Ez biztosítja, hogy:

- Az eladó nem tudja egyedül (vissza)mozgatni a bitcoint  
- A Peach nem tudja ellopni a bitcoint  
- A vevő csak akkor kapja meg a bitcoint, ha a fizetés megtörtént  
- Az eladó visszakaphatja a bitcoint, ha a vevő nem válaszol  

Ha az ügylet nem rendeződik normálisan, ez a cím körülbelül 30 nap után automatikusan teljes mértékben a Peach ellenőrzése alá kerül (pontosabban: amikor 4320 bitcoin blokkot kibányásztak). Ez biztosítja, hogy:

- A vevő megkapja a bitcoint, ha be tudja bizonyítani, hogy fizetett, de az eladó nem válaszol  
- A bitcoin nem ragad be, ha valami történik az eladóval  

Ez a legfontosabb része a kereskedésed biztonságának. Ezen felül van egy bonyolult hírnévrendszerünk is, amely segít azonosítani azokat a felhasználókat, akik már régóta megbízhatóan használják a Peach-et.
:::

:::details Miért van kereskedési limit?

A svájci szabályozás kimondja, hogy egy személy naponta legfeljebb 1000 CHF értékű bitcoint vásárolhat anélkül, hogy igazolná kilétét az eladó számára. Mivel nem szeretnénk börtönbe kerülni, ezt a limitet érvényesítjük az alkalmazásban.

Minden fizetési adatod a telefonodon van tárolva, így mi nem látjuk őket. Amit látunk, az a telefonod azonosítójának és fizetési adatainak egy hash-je\*. Ez lehetővé teszi számunkra, hogy blokkoljunk minden ügyletet, amely túllépi a személyes limitet.

\* A hash olyan adat, amelyet felismerhetetlenné tettek, hasonlóan a titkosításhoz. Ugyanazok az adatok mindig ugyanazt a hash-t adják. Ez azt jelenti, hogy nem tudjuk, mik az adatok, de észre tudjuk venni, ha ugyanazt kétszer használják.
:::

:::details Van lehetőség a limit feletti vásárlásra / eladásra?

Ha nagy volumenű eladó vagy, küldj nekünk emailt a [$contactEmail$](mailto:$contactEmail$) címre!  
Kérni fogjuk, hogy végezz el egy KYC folyamatot, és a limitjeid el lesznek törölve.
:::

:::details Milyen díjak vannak a Peach-en való kereskedésért?

A Peach 2% díjat számít fel a kereskedési volumenből a vevőnek. Amikor a Peach-en kereskedsz, tranzakciókat hajtasz végre a Bitcoin blokkláncon, ami tranzakciós díjakkal jár. A tranzakció végén mindig láthatod a teljes díjstruktúrát, amely például így nézhet ki:

![Tranzakciós bontás](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hogyan tudok törölni egy ajánlatot vagy ügyletet?

Az ajánlataidat és ügyleteidet a képernyő tetején lévő piros X-re kattintva törölheted, amikor az elérhető:

![Ügylet törlése](/img/faq/trading/cancel.png)

Ennek azonban gyakran következményei vannak. Mielőtt bárkivel párosodnál, bármikor törölheted. Azonban párosítás után a hírneved negatívan fog változni. Emellett eladóként engedélyt kell kérned a vevőtől az ügylet törléséhez. Lehet, hogy már fizetett is!
:::

:::details Miért kaptam kevesebb satot, mint amennyire számítottam?

A Peach 2% díjat számít fel a vevőnek, ami azt jelenti, hogy kevesebb satot kapsz, mint amennyit az ügylet tartalmaz. Emellett fizetned kell a Bitcoin hálózati díjakat is. Az ügylet például így nézhet ki:

![Vásárlás bontása](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Mi van akkor, ha nem akarom a Peach pénztárcát használni a kifizetéshez / visszatérítéshez?

Természetesen használhatod a saját pénztárcádat, ha szeretnéd. Mi azonban erősen ajánljuk a Peach pénztárcát, mivel messze ez a legegyszerűbb módja a kereskedésnek. Ezután bármely más pénztárcába küldheted a pénzt.

Ha hozzá akarod adni a saját pénztárcádat, kikapcsolhatod a „kifizetés a Peach pénztárcába” lehetőséget, és beállíthatsz egy egyéni kifizetési címet:

![Pénztárca kikapcsolása](/img/faq/trading/disablewallet.png)

Ügyletkötéskor alá kell írnod egy üzenetet, amely igazolja, hogy te irányítod ezt a pénztárcát, a svájci szabályozások szerint.

Hamarosan hozzáadjuk az xpub támogatást, de egyelőre manuálisan kell módosítanod ezt a címet, ha nem akarod újra felhasználni.
:::

:::details Hogyan számítják ki a Bitcoin árát a Peach-en?

A Peach-en megjelenő BTC ár a centralizált tőzsdék árainak átlaga.
:::

:::details Mi történik a magas inflációjú valutákkal, mint például Argentína, Venezuela stb.?

A magas inflációjú valuták nagy volatilitással rendelkeznek, ezért az árak különböző tőzsdéken eltérhetnek. A Peach a BTC árát több forrás átlagaként mutatja.
:::

:::details Hogyan lehet felgyorsítani egy elakadt tranzakciót az alacsony bányászati díjak miatt?

Ez attól függ, milyen tranzakcióról van szó. Íme a Peach-en előforduló tranzakciók és megoldásaik a díjak növelésére:

1. Tranzakció az escrow finanszírozására egy eladási ajánlat közzétételéhez vagy egy vételi ajánlat elfogadásához  

- Ha a Peach pénztárcából finanszíroztad az escrow-t, RBF-fel (Replace-By-Fee) újraküldheted magasabb díjjal  
- Ha külső pénztárcából finanszíroztad, ellenőrizd, hogy támogatja-e az RBF-et  

2. Felszabadítási tranzakció az escrow-ból (Bitcoin vásárlása)  

- Ha a fogadó címed Peach pénztárcából származik, kiutalhatod a teljes összeget egy külső pénztárcádba magasabb díjjal (Beállítások > Hálózati díjak) – CPFP technika  
- Ha a fogadó címed külső pénztárca, szintén használhatod a CPFP technikát, ha a pénztárcád támogatja  

3. Küldési tranzakció a Peach pénztárcából egy másik pénztárcába  

- RBF (Replace-By-Fee) a Peach pénztárcából a tranzakció részleteiben!
  :::

:::details Mi az a GroupHug?
A GroupHug egyszerűen az a kifejezés, amelyet arra használunk, hogy több felhasználó tranzakcióit összevonjuk, így elkerülhetik az egyedi díjakat. Részletesebb magyarázatért nézd meg a [blogbejegyzésünket](https://peachbitcoin.com/blog/group-hug).
:::

:::details Ha egyetlen vételi ajánlatom van futásban, azonnal kifizetésre kerül?

Nem, a kifizetésed egy várólistára kerül. A kifizetés akkor történik meg, amikor elegendő felhasználó vesz részt a batch-ben. A szükséges résztvevők száma látható a függőben lévő kifizetés információjában. Ott láthatod azt is, hány hely van betöltve az aktuális batch-ben, és egy ETA-t, amely mutatja a maximális várakozási időt.
:::

:::details Hogyan működik, ha több vételi ajánlatom van egyszerre?

Ahogy már említettük, a kifizetéseid a várólistára kerülnek, hogy más résztvevőkkel együtt összevonják őket.
:::

:::details Van-e korlát a batch résztvevőinek számára?

Nincs, a batch-ek a minimumnál több résztvevőt is tartalmazhatnak. Ez nem vágási határ, hanem küszöb. Amint elérjük a minimumot, egyszerűen összegyűjtjük az összes psbt-t és összevonjuk őket, hogy létrejöjjön a tranzakció, és csökkentsük a díjakat minden résztvevő számára.
:::

:::details Hogyan írjak alá egy külső címet?
Kövesd ezeket a lépéseket, hogy aláírd a fogadó címet, amikor Bitcoint vásárolsz egy külső pénztárcába:

_Megjegyzés: Az első 2 lépés hasznos, ha **mindig** külső címekre akarod fogadni a pénzed. Ha csak egyszer akarod megtenni, vagy néha a Peach pénztárcát használod, kezdd a 3. lépéstől._

1. Menj a beállításokhoz  

- kapcsold ki a Peach pénztárcát  
- menj a kifizetési címhez  

2. Illeszd be az új fogadó címet  

3. Menj végig a folyamaton, hogy közzétegyél egy vételi ajánlatot, és a közzététel előtt válaszd ki az externális címet (kattints a jobb felső sarokban lévő kis pénztárca ikonra az ajánlat összefoglaló képernyőjén).  

4. Miután megerősítetted az ajánlatot, megjelenik az üzenet, amelyet alá kell írnod. Másold ki, és menj vissza a pénztárcádhoz.  

5. Keresd meg az „aláírás/ellenőrzés” opciót\* és illeszd be:  

- a fogadó címed  
- a Peach üzenetet  

6. Kattints az aláírásra, és megjelenik az aláírás. Másold ki.  

7. Illeszd be az aláírást a Peach pénztárcába, és erősítsd meg.  

8. Az ajánlatod közzétéve.  

_\* Figyelmeztetés: nem minden pénztárca támogatja az aláírás/ellenőrzés opciót._  
A Peach a Blue Wallet, Sparrow vagy Samourai Wallet használatát javasolja. Más opciók közé tartozik a Ledger és Trezor (hardveres pénztárcák), Bitcoin Core és Electrum.  

Találsz egy lépésről-lépésre útmutatót is a Blue Wallet üzenetaláírás funkciójáról Youtube csatornánkon: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Hogyan lehet CPFP-vel felgyorsítani az elakadt tranzakciókat?

Kövesd a lépéseket ebben a videóban: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU), hogy CPFP-vel felgyorsítsd az elakadt tranzakciókat a Peach alkalmazásban.
:::

:::details Hogyan működik több eladási ajánlat finanszírozása külső pénztárcából?

Amikor több eladási ajánlatot akarsz egyszerre finanszírozni, az alkalmazás létrehoz egy köztes címet a Peach pénztárcádból. Amint a bitcoinok elérik ezt a címet, minden escrow-hoz létrejön egy új tranzakció. Például, ha 5 eladási ajánlatot akarsz finanszírozni, 5 tranzakció kerül elküldésre különböző escrow címekre.
:::
