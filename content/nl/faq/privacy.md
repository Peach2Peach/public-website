# Privacy FAQ

:::details Welke informatie verzamelt Peach over mij?

We streven ernaar om de absoluut minimale hoeveelheid gegevens van onze gebruikers op te slaan. Als een snelle samenvatting, dit is wat we op onze servers hebben staan:

- Een hash\* van uw unieke app-ID (AdID)
- Een hash van uw betalingsgegevens
- Uw versleutelde chats
- De gegevens van de transacties om ervoor te zorgen dat anonieme gebruikers de handelslimiet niet overschrijden (welk type betaalmethoden worden gebruikt, koop- en verkoopbedragen)
- Adressen die worden gebruikt om naar escrow te sturen en om van escrow te sturen
- Gebruiksgegevens (Firebase & Google Analytics), **alleen als u hiermee akkoord bent gegaan**

Voor een volledige specificatie, raadpleeg onze [privacybeleid](/privacy-policy/).

\* Een hash is wat gegevens die onherkenbaar is gemaakt, vergelijkbaar met het versleutelen ervan. Dezelfde gegevens leiden altijd tot dezelfde hash. Dit betekent dat we niet weten welke gegevens het zijn, maar we kunnen wel zien of dezelfde gegevens twee keer worden gebruikt.
:::

:::details Wie kan mijn betalingsgegevens zien?

Alleen uw tegenpartij kan uw betalingsgegevens zien; ze worden via de servers van Peach verzonden, maar zijn volledig end-to-end versleuteld (zoals bij de meeste chat-apps), zodat wij niet kunnen zien wat ze zijn.

Wanneer u een geschil start, zullen uw betalingsgegevens en de chatgeschiedenis van u en uw tegenpartij zichtbaar zijn voor de toegewezen Peach-bemiddelaar.
:::

:::details Hoe kan ik de APK verifiëren?

Volg deze stappen om te controleren of de APK die u hebt gedownload de echte Peach APK is:

- Download de APK die u wilt installeren van de website, evenals de handtekening en het manifest (alles is te vinden op https://peachbitcoin.com/apk)

- Download de Peach PGP-sleutel https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (ook te vinden op onze website)

- Genereer de checksum van het APK-bestand dat u hebt gedownload en vergelijk deze met de checksum op het manifest.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(vervang app-prod-arm64-v8a-release.apk door de naam van uw bestand). Het moet dezelfde zijn als op het manifest. Anders kunt u contact met ons opnemen en er zeker van zijn dat u dat programma niet op uw apparaat installeert. In dit voorbeeld zou u het volgende moeten zien:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Als we het vergelijken met wat in manifest-peach.txt staat, zien we dat het hetzelfde is.

- Voeg de Peach-sleutel toe aan uw sleutelring
```
gpg --import PGP-peach.asc
```
(zorg ervoor dat u PGP-peach.asc vervangt door de juiste bestandsnaam, meestal zal dit 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc zijn)

- Verifieer de handtekeningen die u eerder hebt gedownload met de volgende opdracht:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
In de output zou u de volgende regel moeten zien:
```
gpg: Goede handtekening van "hello@peachbitcoin.com <hello@peachbitcoin.com>" [onbekend]
```
:::

:::details Ondersteunt Taproot?

- Het is mogelijk om escrows te financieren vanaf een taproot-adres en geld op te nemen vanuit de Peach-portemonnee naar een taproot-adres.
- Het is NIET mogelijk om een taproot-adres in te stellen als een direct uitbetalingsadres (het is niet mogelijk om een bericht te ondertekenen met een taproot-adres).

:::

:::details Hoe kan ik verbinding maken met mijn eigen knooppunt?

Het verbinden met je eigen knooppunt verbetert de privacy, omdat alle transacties worden doorgestuurd naar het Bitcoin-netwerk via je eigen knooppunt, in plaats van dat van Peach.

Peach ondersteunt momenteel geen Tor, dus je moet een IPv4 gebruiken om verbinding te maken met je knooppunt. Als het niet open is voor internet, kun je alleen verbinding maken via het lokale netwerk of via een privé-VPN.

Bekijk onze [videotutorial](https://www.youtube.com/watch?v=xtvq2i3mIYg) om te leren hoe je verbinding kunt maken met je eigen knooppunt.

Als je Umbrel gebruikt, kun je umbrel.{poortnummer} gebruiken in plaats van het IP-adres van je knooppunt.
:::


