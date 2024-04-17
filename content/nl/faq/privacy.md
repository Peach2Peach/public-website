# Privacy FAQ

:::details Welke informatie verzamelt Peach van mij?

We streven ernaar om zo min mogelijk gegevens van onze gebruikers op te slaan. Als een snelle samenvatting, dit is wat we op onze servers hebben:

- Een hash* van uw unieke app ID (AdID)
- Een hash van uw betaalgegevens
- Uw versleutelde chats
- De gegevens van de transacties om ervoor te zorgen dat anonieme gebruikers de handelslimiet niet overschrijden (welke soorten betaalmethoden worden gebruikt, koop- en verkoopbedragen)
- Adressen gebruikt om naar de escrow te sturen en om van de escrow te sturen
- Gebruiksgegevens (Firebase & Google Analytics), **alleen als u hiermee hebt ingestemd**

Voor een volledige uitsplitsing, zie alstublieft ons [privacybeleid](/privacy-policy/).

\* Een hash is wat gegevens die onherkenbaar zijn gemaakt, vergelijkbaar met het versleutelen ervan. Dezelfde gegevens leiden altijd tot dezelfde hash. Dit betekent dat we niet weten wat de gegevens zijn, maar we kunnen wel zien of dezelfde gegevens tweemaal worden gebruikt.
:::

:::details Wie kan mijn betaalgegevens zien?

Alleen uw tegenpartij kan uw betaalgegevens zien; ze worden via de Peach-servers verzonden, maar zijn volledig end-to-end versleuteld (zoals bij de meeste chat-apps), zodat we niet kunnen zien wat ze zijn.



Wanneer u een geschil start, zullen uw betaalgegevens en die van uw tegenpartij en uw chatgeschiedenis zichtbaar zijn voor de toegewezen Peach-bemiddelaar.
:::

:::details Hoe kan ik de APK verifiëren?

Volg deze stappen om te controleren of de APK die u hebt gedownload de echte Peach APK is:

- Download de APK die u wilt installeren vanaf de website, evenals de handtekening en het manifest (alles is te vinden op https://peachbitcoin.com/apk)

- Download de Peach PGP-sleutel https://keys.openpgp.org/vks/v1/by-fingerprint/E970EDB410C8E84198F141584AD3CE3043D8CD1B (kan ook op onze website worden gevonden)

- Genereer de checksum van het APK-bestand dat u hebt gedownload en vergelijk deze met de checksum op het manifest.

```
sha256sum app-prod-arm64-v8a-release.apk
```

(vervang app-prod-arm64-v8a-release.apk door de naam van uw bestand). Het moet dezelfde zijn als die op het manifest. Neem anders contact met ons op en zorg ervoor dat u die toepassing niet op uw apparaat installeert. In dit voorbeeld ziet u het volgende uitvoer:

```
$ sha256sum app-prod-arm64-v8a-release.apk

09e4e2db837b2a2aef3a51527ef24fae22cff2b7e2ecd4ca01502c8a61961584  app-prod-arm64-v8a-release.apk
```

Als we het vergelijken met degene die in manifest-peach.txt is gevonden, kunnen we zien dat het dezelfde is.

- Voeg de Peach-sleutel toe aan uw sleutelring

```
gpg --import PGP-peach.asc
```

(zorg ervoor dat u PGP-peach.asc vervangt door de juiste bestandsnaam, meestal zal het E970EDB410C8E84198F141584AD3CE3043D8CD1B.asc zijn)

- Verifieer de handtekeningen die u eerder hebt gedownload met de volgende opdracht:

```
gpg --verify manifest-peach.sig manifest-peach.txt
```

In de uitvoer zou u de volgende regel moeten zien:

```
gpg: Goede handtekening van "hello@peachbitcoin.com <hello@peachbitcoin.com>" [onbekend]
```
:::

:::details Wordt Taproot ondersteund?

- Ja, u kunt naar Taproot-adressen sturen vanuit de Peach-portemonnee.
- U kunt ook rechtstreeks vanuit de escrow naar uw externe Taproot-adres ontvangen.
:::

:::details Hoe kan ik verbinding maken met mijn eigen node?

Het verbinden met uw eigen node verbetert de privacy omdat alle transacties via uw eigen node naar het Bitcoin-netwerk worden doorgestuurd, in plaats van via Peach.

Peach ondersteunt momenteel geen Tor, dus u moet een IPv4 gebruiken om verbinding te maken met uw node. Als het niet open is voor internet, kunt u er alleen verbinding mee maken via het lokale netwerk of via een privé-VPN.

Bekijk onze [videotutorial](https://www.youtube.com/watch?v=xtvq2i3mIYg) om te leren hoe u verbinding kunt maken met uw eigen node.

Als u Umbrel gebruikt, kunt u umbrel.{poortnummer} gebruiken in plaats van het IP-adres van uw node.
:::

:::details Hoe veilig zijn mijn bitcoins in de Peach-portemonnee?

De Peach-portemonnee wordt beschouwd als een hot wallet. Hot wallets zijn portefeuilles die zijn verbonden met internet en blootgesteld aan malware en hackingpogingen. Geen enkel systeem is 100% veilig en de Peach-portemonnee kan ook alleen zo veilig zijn als het besturingssysteem waarop het draait.

U kunt een hot wallet zien als een gewone portemonnee in uw zak, u zou er geen duizenden dollars lang in bewaren. U kunt het snel verliezen of het kan snel gestolen worden.

Dat gezegd hebbende, doen we ons best om uw portemonnee veilig te houden door standaard beste praktijken te gebruiken, zoals het gebruik van voldoende entropie (willekeurige getallen) om uw privésleutels ongrijpbaar te maken en het versleutelen van de opslag van de applicatie om toegang door andere apps te voorkomen. De willekeurige getallen worden gegenereerd door het besturingssysteem dat u gebruikt en zijn meestal afgeleid van niet-deterministische invoeren zoals fysieke invoer zoals temperatuurmetingen, fasegeluid, enzovoort… Als u geïnteresseerd bent in de details, onderzoek dan PRNG's (Pseudo Random Number Generators).

PIN-/wachtwoordbeveiliging is ook gepland.

In ieder geval raden we u aan om uw fondsen naar koude opslag te verplaatsen (een hardware wallet zoals de [Bitbox 02](https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc 'https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc')) die veel sterkere beveiligingsgaranties heeft.
:::

:::details Wat is coin control?

De Peach-portemonnee ondersteunt coin control of coin management. Het doel van coin control is om uw munten gescheiden te houden als u dat wilt, voor privacybeheer.

Bekijk onze video waarin coin control in detail wordt uitgelegd: [Hoe coin control te gebruiken met de Peach-portemonnee](https://www.youtube.com/watch?v=zWwIekSv3U8)
:::
