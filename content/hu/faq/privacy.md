# Gyakori kérdések a magánélettel kapcsolatban

:::details Milyen információkat gyűjt a Peach rólam?

Az igyekvésünk, hogy a lehető legkevesebb adatot tároljuk felhasználóinkról. Rövid áttekintésként, ezeket az adatokat tároljuk szervereinken:

- Az alkalmazás egyedi azonosítójának (AdID) a hash\*-ját
- A fizetési adataid hash-ét
- Az titkosított csevegéseidet
- Az ügyletek adatait annak érdekében, hogy ellenőrizzük, hogy az anonim felhasználók ne lépjék túl a kereskedési limitet (milyen fizetési módokat használnak, vásárlási és eladási összegek)
- Azokat a címeket, amelyeket az escrow részére és az escrow részéről történő küldéshez használtak
- Használati adatok (Firebase és Google Analytics), **csak ha ezzel egyetértettél**

A teljes lebontásért kérlek, nézd meg a [privát szabályzatunkat](/privacy-policy/).

\* A hash olyan adat, amelyet felismerhetetlenné tettek, hasonlóan az adatok titkosításához. Ugyanaz az adat mindig ugyanahhoz a hash-hoz vezet. Ez azt jelenti, hogy nem tudjuk, mi az adat, de felismerjük, ha ugyanazt az adatot kétszer használják.
:::

:::details Ki láthatja a fizetési adataimat?

Csak a pénzügyi partnered láthatja a fizetési adataidat; azokat a Peach szervereken keresztül küldik, de teljesen végponttól-végpontig titkosítva vannak (mint a legtöbb csevegőalkalmazásnál), így mi nem láthatjuk, mi azok.

Amikor vitát indítasz, a Peach hozzárendelt közvetítője számára lesznek láthatók a fizetési adataid és a csevegési előzményeid is.
:::

:::details Hogyan lehet ellenőrizni az APK-t?

Kövesd ezeket a lépéseket annak ellenőrzéséhez, hogy a letöltött APK a valódi Peach APK-e:

- Töltsd le az APK-t, amit telepíteni szeretnél a weboldalról, valamint az aláírást és a manifestet (minden megtalálható itt: https://peachbitcoin.com/apk)

- Töltsd le a Peach PGP kulcsot innen: https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (szintén megtalálható a weboldalunkon)

- Generáld le az APK fájlod összegzését (checksum) és hasonlítsd össze azt a manifestben található összeggel.

```
sha256sum app-prod-arm64-v8a-release.apk
```
(cseréld le a "app-prod-arm64-v8a-release.apk" nevet a saját fájlod nevére). Eznek ugyanaznak kell lennie, mint a manifestben találhatónak. Ellenkező esetben lépj kapcsolatba velünk, és győződj meg róla, hogy ne telepítsd az adott alkalmazást a készülékedre. Ebben a példában az alábbi kimenetet kell látnod:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Ha összehasonlítjuk a manifest-peach.txt fájlban találhatóval, láthatjuk, hogy ugyanaz.

- Add hozzá a Peach kulcsot a kulcsgyűrűdhöz
```
gpg --import PGP-peach.asc
```
(győződj meg róla, hogy a "PGP-peach.asc" fájl nevét helyesen cseréled ki, általában ez lesz a 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Ellenőrizd az előzőleg letöltött aláírásokat a következő paranccsal:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
Az eredményben látnod kell a következő sort:
```
gpg: Jó aláírás a "hello@peachbitcoin.com <hello@peachbitcoin.com>"-től [ismeretlen]
```
:::

:::details Támogatja a Taproot-ot?

- Lehetséges finanszírozni az escrow-t egy taproot címről, és visszavonni a pénzügyi eszközöket a Peach pénztárcából egy taproot címre.
- NEM lehetséges egy taproot címet beállítani közvetlen kifizetési címnek (nem lehetséges üzenetet aláírni egy taproot címmel).
:::


