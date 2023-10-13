# Handels-FAQ

:::details Hoe kan ik er zeker van zijn dat ik de bitcoin / het geld krijg?

Bij het maken van een verkoopaanbod stuurt de verkoper de bitcoin naar een adres dat door hem en Peach wordt beheerd: de bitcoin kan alleen van hieruit worden verplaatst als zowel hij als Peach ermee akkoord gaan. Dit zorgt ervoor dat:

- De verkoper de bitcoin niet (terug) zelf kan verplaatsen
- Peach kan de bitcoin niet stelen
- De koper krijgt de bitcoin pas nadat de betaling is gedaan
- De verkoper kan de bitcoin terugkrijgen als de koper niet reageert

Als de transactie niet normaal wordt afgehandeld, komt dit adres automatisch volledig onder controle van Peach na ongeveer 30 dagen (om precies te zijn: wanneer 4320 bitcoin-blokken zijn gedolven). Dit zorgt ervoor dat:

- De koper de bitcoin kan krijgen als hij kan bewijzen dat hij de betaling heeft gedaan maar de verkoper niet reageert
- De bitcoin niet vast komt te zitten als er iets met de verkoper gebeurt

Dit is het belangrijkste onderdeel van de beveiliging van uw transactie. Naast dat is er ons ingewikkelde reputatiesysteem dat u helpt mensen te identificeren die Peach al lange tijd betrouwbaar hebben gebruikt.
:::

:::details Waarom is er een handelslimiet?

Zwitserse regelgeving bepaalt dat een persoon tot 1000 CHF aan bitcoin per dag kan kopen zonder zijn identificatie aan de verkoper te verstrekken. Omdat we liever uit de gevangenis blijven, handhaven we deze limiet in de app.

Al uw betalingsgegevens worden op uw telefoon bewaard, dus wij kunnen ze niet zien. Wat wij kunnen zien, is een hash\* van het ID van uw telefoon en uw betalingsgegevens. Dit stelt ons in staat om elke transactie te blokkeren die het persoonlijke limiet overschrijdt.

\* Een hash is wat gegevens die onherkenbaar zijn gemaakt, vergelijkbaar met versleuteling. Dezelfde gegevens leiden altijd tot dezelfde hash. Dit betekent dat we niet weten wat de gegevens zijn, maar we kunnen zien of dezelfde gegevens twee keer worden gebruikt.
:::

:::details Is er een manier om meer te kopen/verkopen dan de handelslimiet?

Als u een grote koper of verkoper bent, stuur ons dan een e-mail naar [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Wat zijn de kosten voor handel op Peach?

Peach brengt 2% van het handelsvolume in rekening als kosten aan de koper. Wanneer u een transactie op Peach uitvoert, voert u transacties uit op de Bitcoin-blockchain, wat resulteert in transactiekosten. U kunt altijd de volledige kostenstructuur aan het einde van uw transactie zien, die er als volgt uit kan zien:

![Handelsuitsplitsing](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hoe kan ik een aanbod of transactie annuleren?

U kunt uw aanbiedingen en transacties annuleren door op het rode kruisje boven aan het scherm te klikken, wanneer dit beschikbaar is:

![Annuleer transactie](/img/faq/trading/cancel.png)

Dit heeft echter vaak gevolgen. Voordat u met iemand matcht, kunt u op elk moment annuleren. Nadat u gematcht bent, wordt uw reputatie echter negatief beïnvloed. Daarnaast moet u als verkoper toestemming vragen aan de koper om de transactie te annuleren. De koper kan de betaling al hebben gedaan!
:::

:::details Waarom heb ik minder sats ontvangen dan ik dacht te kopen?

Peach brengt 2% handelskosten in rekening aan de koper, wat betekent dat u minder sats ontvangt dan het bedrag van de transactie. Daarnaast moet u de transactiekosten van het Bitcoin-netwerk betalen. Uw transactie kan er bijvoorbeeld als volgt uitzien:

![Aankoopuitsplitsing](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Wat als ik de Peach-wallet niet wil gebruiken voor de uitbetaling/teruggave?

Natuurlijk kunt u uw eigen wallet gebruiken als u dat wilt. We raden echter nog steeds ten zeerste aan om de Peach-wallet te gebruiken, omdat dit verreweg de gemakkelijkste manier is om een transactie uit te voeren. U kunt dan de fondsen naar een andere wallet sturen.

Als u uw eigen wallet wilt toevoegen, kunt u "uitbetaling naar Peach-wallet" uitschakelen en een aangepast uitbetalingsadres instellen:

![Wallet uitschakelen](/img/faq/trading/disablewallet.png)

Bij het uitvoeren van een transactie moet u een bericht ondertekenen waarin staat dat u de controle heeft over deze wallet, volgens de Zwitserse regelgeving.

We zullen binnenkort werken aan xpub-ondersteuning, maar op dit moment moet u dit adres handmatig wijzigen als u het niet opnieuw wilt gebruiken.
:::

:::details Hoe wordt de Bitcoin-prijs berekend op Peach?

De BTC-prijs die we op Peach tonen, is een samenvoeging van de BTC-prijs op gecentraliseerde beurzen.
:::

:::details Wat gebeurt er met de prijs van valuta's met hoge inflatie, zoals Argentinië, Venezuela, enz.?

Valuta's met hoge inflatie vertonen hoge volatiliteit, waardoor de prijs die u op verschillende beurzen vindt kan variëren. Peach geeft de prijs volgens een samenvoeging van de BTC-prijs uit verschillende bronnen.
:::

:::details Hoe kunt u een transactie versnellen die vastzit vanwege lage mijnkosten?
Het hangt af van wat voor soort transacties we bespreken. Hier is een lijst van alle transacties die kunnen plaatsvinden in Peach en hun oplossingen om de kosten te verhogen:

1. Transactie voor financiering van de escrow om een verkoopaanbod te publiceren
- Als u de escrow hebt gefinancierd vanuit de Peach-wallet, kunt u RBF (Replace-By-Fee) gebruiken om de transactie en de kosten te verhogen.
- Als u de escrow hebt gefinancierd vanuit een externe wallet, moet u controleren of de wallet RBF (Replace-By-Fee) ondersteunt om de netwerkkosten te verhogen.

2. Transactie vrijgeven vanuit de escrow (aankoop van Bitcoin)
- Als uw ontvangstadres afkomstig is van de Peach-wallet, kunt u het volledige bedrag overmaken naar uw externe wallet met hogere kosten (Instellingen > Netwerkkosten) - de CPFP-techniek.
- Als uw ontvangstadres afkomstig is van een externe wallet, kunt u ook de CPFP-techniek toepassen als deze wordt ondersteund door uw wallet.

3. Transactie verzenden vanuit de Peach-wallet naar een andere wallet
- RBF (Replace-By-Fee) vanuit de Peach Wallet in uw transactiedetails!
:::

:::details Wat is GroupHug?
GroupHug is eenvoudigweg de term die we hebben gegeven aan de actie om transacties van verschillende gebruikers samen te voegen om kosten voor elk van hen te vermijden. Voor een meer gedetailleerde uitleg, bekijk onze [blogpost](https://peachbitcoin.com/blog/group-hug).
:::

:::details Als ik slechts één koopaanbod heb lopen, wordt het dan onmiddellijk vrijgegeven?

Nee, uw uitbetaling wordt toegevoegd aan een wachtrij en wacht op uitbetaling. De uitbetaling wordt gedaan wanneer er voldoende gebruikers deelnemen aan de batch. Het aantal benodigde deelnemers kan worden gezien in de informatie over de wachtende uitbetaling. U kunt dit weergeven via de handelsgegevens.
Daar kunt u zien hoeveel slots van de huidige batch zijn ingenomen. In de informatie kunt u ook een ETA zien, die u de maximale wachttijd zal vertellen als de slots niet eerder worden gevuld.
:::

:::details Hoe werkt het als ik meerdere lopende koopaanbiedingen heb?

Zoals eerder vermeld, worden uw uitbetalingen toegevoegd aan de wachtrij en wachten ze om te worden samengevoegd met andere deelnemers.
:::

:::details Is er een limiet voor het aantal deelnemers dat kan deelnemen aan het samenvoegen?

Nee, batches kunnen ook boven het maximale aantal deelnemers gaan. Het is geen afkapwaarde, maar een drempel. Dit betekent dat zodra het minimum is bereikt, we gewoon alle PSBT's nemen en ze samenvoegen om de transactie te maken en de kosten te verlagen die elke deelnemer betaalt.
:::

:::details Hoe ondertekent u een extern adres?
Volg deze stappen om het ontvangstadres te ondertekenen bij het kopen van Bitcoin naar een externe wallet:

_Noot: de eerste 2 stappen zijn handig als u **altijd** uw geld op externe adressen wilt ontvangen. Als u dit slechts één keer wilt doen of als u soms de Peach-wallet wilt gebruiken, begin dan bij stap 3._

1. Ga naar instellingen
  - schakel de Peach-wallet uit
  - ga naar uitbetalingsadres

2. Plak het nieuwe ontvangstadres

3. Doorloop het proces om uw koopaanbod te publiceren en voordat u het publiceert, zorg ervoor dat u kiest om naar uw externe wallet-adres te ontvangen (klik op het kleine portefeuille-icoon rechtsboven op het scherm met aanboddetails).

4. Zodra u uw koopaanbod bevestigt, verschijnt het bericht om uw adres te ondertekenen. Kopieer het en ga terug naar uw wallet.

5. Zoek naar de optie "ondertekenen/verifiëren"* en plak:
  - uw ontvangstadres
  - het Peach-bericht

6. Klik op "ondertekenen" en de handtekening zal verschijnen. Kopieer deze.

7. Plak de handtekening in de Peach-wallet en klik op "bevestigen".

_*Disclaimer: niet alle wallets ondersteunen de optie om uw adres te ondertekenen/verifiëren._ Peach raadt aan Blue Wallet, Sparrow of Samourai Wallet te gebruiken. Andere opties zijn Ledger en Trezor (Hardware Wallets), Bitcoin Core en Electrum wallet.

U kunt ook een stapsgewijze handleiding vinden over hoe u een bericht kunt ondertekenen met behulp van Blue Wallet op ons YouTube-account: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Hoe CPFP gebruiken om vastzittende transacties te versnellen?

Volg de stappen in deze video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) om vastzittende transacties te versnellen met behulp van CPFP in de Peach-app.
:::
