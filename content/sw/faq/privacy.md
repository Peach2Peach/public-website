# Maswali kuhusu Faragha

:::details What info does Peach collect of me?

Tuna jitihada za kuhifadhi kiasi kidogo sana cha data kutoka kwa watumiaji wetu kadri tunavyoweza. Kwa muhtasari wa haraka, hii ndio tunayo kwenye seva zetu:

- Hash\* ya kitambulisho chako cha kipekee cha programu (AdID)
- Hash ya data yako ya malipo
- Mazungumzo yako yaliyofanywa salama
- Data ya biashara zako (aina gani ya njia ya malipo unayotumia, kiasi cha unachonunua, nk.)
- Data ya matumizi (Firebase na Google Analytics), **ikiwa ulikubaliana na hii**

Kwa ufafanuzi kamili, tafadhali angalia [sera yetu ya faragha](/privacy-policy/).

\* Hash ni data fulani ambayo imefanywa isiyoonekana, sawa na kuiweka kwenye mfumo wa kuchapisha. Data ileile itasababisha hash ileile kila wakati. Hii inamaanisha hatujui ni data gani, lakini tutaweza kutambua ikiwa data ileile imeitwa mara mbili.
:::

:::details Who can see my payment details?

Mtu pekee anayeweza kuona maelezo yako ya malipo ni mtu unayefanya naye biashara; yanatumwa kupitia seva za Peach, lakini yamefanywa salama mwisho hadi mwisho (sawa na programu nyingi za mazungumzo) ili kwamba hatuwezi kuona ni nini.

Unapoanzisha mzozo, maelezo ya malipo yako na historia yako ya mazungumzo itaonekana kwa mpatanishi wa Peach aliyeteuliwa.
:::

:::details How to verify the APK?

Fuata hatua hizi kuthibitisha kuwa APK uliyoipakua ni APK halisi ya Peach:

- Pakua APK unayotaka kusakinisha kutoka kwenye wavuti, pamoja na sahihi na mfumo wa maelezo (kila kitu kinaweza kupatikana hapa: https://peachbitcoin.com/apk)

- Pakua funguo ya PGP ya Peach hapa: https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (pia inaweza kupatikana kwenye wavuti yetu)

- Tengeneza hash ya faili ya APK uliyopakua na uilinganishe na hash kwenye mfumo wa maelezo.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(badilisha "app-prod-arm64-v8a-release.apk" na jina la faili yako). Inapaswa kuwa sawa na ile kwenye mfumo wa maelezo. Vinginevyo, wasiliana nasi na hakikisha usisakinishe programu hiyo kwenye kifaa chako. Kwa mfano huu, unapaswa kuona patanisho ifuatayo:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Ikiwa tulinganishe na ile kwenye "manifest-peach.txt" tunaweza kuona kuwa ni ileile.

- Ongeza funguo ya Peach kwenye mkufu wako wa funguo
```
gpg --import PGP-peach.asc
```
(hakikisha kubadilisha "PGP-peach.asc" kwa jina sahihi la faili, kawaida itakuwa "48339A19645E2E53488E0E5479E1B270FACD1BD2.asc")

- Thibitisha sahihi ulizopakua hapo awali kwa kutumia amri ifuatayo:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
Katika patanisho, unapaswa kuona mstari ifuatayo:
```
gpg: Saini nzuri kutoka kwa "hello@peachbitcoin.com <hello@peachbitcoin.com>" [isiojulikana]
```
:::

:::details How to sign an external address?
Fuata hatua hizi kusaini anwani ya kupokelea unaponunua Bitcoin kwenda kwenye mkoba wa nje:

_Nota: Hatua za kwanza 2 zinaweza kutumika ikiwa unataka **daima** kupokea fedha zako kwenye anwani za nje. Ikiwa unataka kufanya hivyo mara moja tu au unataka mara kwa mara kutumia mkoba wa Peach, anza na hatua ya 3._

1. Nenda kwa mipangilio
   - Lemaza mkoba wa Peach
   - Nenda kwa anwani ya malipo

2. Bandika anwani mpya ya kupokelea

3. Fanya mchakato wa kutangaza ununuzi wako, na kabla ya kutangaza, hakikisha unachagua kupokea kwenye anwani yako ya mkoba wa nje (bonyeza kwenye kona ya juu kulia kidogo ya skrini ya muhtasari wa ununuzi).

4. Mara tu unapotathmini ununuzi wako, ujumbe wa kusaini anwani yako utaonekana. Nakili na rudi kwenye mkoba wako.

5. Tafuta chaguo la "kutia saini/thibitisha"* na bandika:
   - anwani yako ya kupokea
   - ujumbe wa Peach

6. Bonyeza kusaini na saini itaonekana. Nakili hiyo.

7. Bandika saini kwenye mkoba wa Peach na bonyeza thibitisha.

8. Ofa yako imechapishwa.

Onyo: Sio mikoba yote inaunga mkono chaguo la kusaini/kuthibitisha anwani yako. Peach inapendekeza kutumia Blue Wallet, Sparrow au Samourai kwani zote hutoa chaguo la kusaini/kuthibitisha.

:::

:::details Is Taproot supported?

Inawezekana kufadhili amana kutoka kwa anwani ya taproot, na kutoa pesa kutoka kwa mkoba wa peach hadi anwani ya taproot.
Haiwezekani kuweka anwani ya taproot kama anwani ya malipo ya moja kwa moja (haiwezekani kusaini ujumbe na anwani ya taproot).
:::

:::details Jinsi naweza kuunganisha kwenye nodi yangu mwenyewe?

Tazama [mafunzo ya video](https://www.youtube.com/watch?v=xtvq2i3mIYg) yetu ili kujifunza jinsi ya kuunganisha kwenye nodi yako mwenyewe.

:::
