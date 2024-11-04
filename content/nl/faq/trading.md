# Handels-FAQ

:::details Hoe kan ik er zeker van zijn dat ik de bitcoin / het geld krijg?

Bij het doen van een verkoopaanbieding, stuurt de verkoper de bitcoin naar een adres dat door hem en Peach wordt gecontroleerd: de bitcoin kan alleen vanaf hier worden verplaatst als hij en Peach er allebei akkoord mee gaan. Dit zorgt ervoor dat:

- De verkoper de bitcoin niet (terug) alleen kan verplaatsen
- Peach de bitcoin niet kan stelen
- De koper de bitcoin niet krijgt totdat de betaling is gedaan
- De verkoper de bitcoin terug kan krijgen als de koper niet reageert

Als de handel niet normaal wordt afgehandeld, komt dit adres automatisch volledig onder de controle van Peach na ongeveer 30 dagen (om precies te zijn: wanneer 4320 bitcoin-blokken zijn gedolven). Dit zorgt ervoor dat:

- De koper de bitcoin kan krijgen als hij kan bewijzen dat hij de betaling heeft gedaan maar de verkoper niet reageert
- De bitcoin niet vastloopt als er iets met de verkoper gebeurt

Dit is het belangrijkste onderdeel van het beveiligen van uw handel. Daarnaast is er ook ons ingewikkelde reputatiesysteem, dat u helpt mensen te identificeren die Peach al lange tijd betrouwbaar gebruiken.
:::

:::details Waarom is er een handelslimiet?

Zwitserse regelgeving bepaalt dat een persoon slechts tot 1000 CHF aan bitcoin per dag kan kopen, zonder zijn identificatie aan de verkoper te verstrekken. Aangezien we liever uit de gevangenis blijven, handhaven we deze limiet in de app.

Al uw betalingsgegevens worden op uw telefoon opgeslagen, zodat we ze niet kunnen zien. Wat we wel kunnen zien, is een hash* van de ID van uw telefoon en uw betalingsgegevens. Dit stelt ons in staat om alle transacties te blokkeren die de persoonlijke limiet overschrijden.

\* Een hash is wat gegevens die onherkenbaar zijn gemaakt, vergelijkbaar met het versleutelen ervan. Dezelfde gegevens leiden altijd tot dezelfde hash. Dit betekent dat we niet weten wat de gegevens zijn, maar we zullen kunnen zien of dezelfde gegevens twee keer worden gebruikt.
:::

:::details Is er een manier waarop ik meer dan de handelslimiet kan kopen / verkopen?

Als u een koper of verkoper met een hoog volume bent, stuur ons dan een e-mail naar [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Wat zijn de kosten voor handelen op Peach?

Peach brengt 2% van het handelsvolume aan kosten in rekening aan de koper. Bij het doen van een transactie op Peach, voert u transacties uit op de Bitcoin-blockchain, wat resulteert in transactiekosten. U kunt altijd de volledige vergoedingenstructuur aan het einde van uw transactie zien, die er als volgt uit kan zien:

![Handelsafsplitsingen](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hoe kan ik een aanbieding of een transactie annuleren?

U kunt uw aanbiedingen en transacties annuleren door op de rode X bovenaan het scherm te klikken, wanneer deze beschikbaar is:

![Handel annuleren](/img/faq/trading/cancel.png)

Dat gezegd hebbende, heeft dit vaak wel gevolgen. Voordat u met iemand matcht, kunt u op elk moment annuleren. Nadat u gematcht bent, wordt uw reputatie echter negatief beïnvloed. Daarnaast moet u als verkoper toestemming vragen aan de koper om de transactie te annuleren. Ze hebben mogelijk al de betaling gedaan!
:::

:::details Waarom heb ik minder sats ontvangen dan ik dacht te kopen?

Peach brengt 2% handelskosten in rekening aan de koper, wat betekent dat u minder sats krijgt dan het bedrag waar de transactie voor is. Daarnaast moet u bitcoin-netwerkkosten betalen. Uw transactie zou er bijvoorbeeld zo uit kunnen zien:

![Koopafsplitsing](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Wat als ik de Peach-portemonnee niet wil gebruiken voor de uitbetaling / terugbetaling?

Natuurlijk bent u vrij om uw eigen portemonnee te gebruiken als u dat wilt. We raden echter ten zeerste aan om de Peach-portemonnee te gebruiken, omdat dit verreweg de gemakkelijkste manier is om een transactie te doen. U kunt dan de fondsen naar elke andere portemonnee sturen.

Als u uw eigen portemonnee wilt toevoegen, kunt u "uitbetaling naar Peach-portemonnee" uitschakelen en vervolgens een aangepast uitbetalingsadres instellen:

![Portemonnee uitschakelen](/img/faq/trading/disablewallet.png)

Bij het doen van een transactie moet u een bericht ondertekenen dat u controle hebt over deze portemonnee, volgens de Zwitserse regelgeving.

We werken binnenkort aan xpub-ondersteuning, maar voor nu moet u dit adres handmatig wijzigen als u het niet opnieuw wilt gebruiken.
:::

:::details Hoe wordt de Bitcoin-prijs berekend op Peach?

De BTC-prijs die we op Peach tonen, is een samenstelling van de BTC-prijs op gecentraliseerde beurzen.
:::

:::details Wat gebeurt er met de prijs van valuta's onder hoge inflatie, zoals Argentinië, Venezuela, enz.?

Valuta's onder hoge inflatie lijden onder hoge volatiliteit, vandaar dat de prijs die u vindt in verschillende beurzen kan verschillen. Peach geeft de prijs volgens een samenstelling van de BTC-prijs uit verschillende bronnen.
:::

:::details Hoe kunt u een transactie versnellen die vastzit vanwege lage mijnkosten?
Het hangt af van het type transacties waarover we praten. Hier is een lijst van alle transacties die in Peach kunnen plaatsvinden en hun oplossingen om kosten te verhogen:

1. Transactie voor het financieren van het escrow om een verkoopaanbieding te publiceren

- Als u het escrow hebt gefinancierd vanuit de Peach-portemonnee, kunt u de transactie RBF (Replace-By-Fee) en de kosten verhogen
- Als u het escrow hebt gefinancierd vanuit een externe portemonnee, moet u controleren of de portemonnee RBF (Replace-By-Fee) ondersteunt om de netwerkkosten te verhogen.

2. Vrijgave transactie uit het escrow (Bitcoin kopen)

- Als uw ontvangstadres van de Peach-portemonnee is, kunt u het totale bedrag terugtrekken naar een externe portemonnee van u met hogere kosten (Instellingen > Netwerkkosten) - CPFP-techniek
- Als uw ontvangstadres afkomstig is van een externe portemonnee, kunt u ook de CPFP-techniek gebruiken als deze wordt ondersteund door uw portemonnee

3. Verzend transactie vanuit de Peach-portemonnee naar een andere portemonnee

- RBF (Replace-By-Fee) vanuit de Peach-portemonnee in uw transactiegegevens!
  :::

:::details Wat is GroupHug?
GroupHug is eenvoudigweg de term die we hebben gegeven aan de actie van het batchen van transacties van verschillende gebruikers om kosten voor elk van hen te vermijden. Voor een meer gedetailleerde uitleg, bekijk onze [blogpost](https://peachbitcoin.com/nl/blog/group-hug).
:::

:::details Als ik een enkel koopaanbod heb lopen, wordt dit dan onmiddellijk vrijgegeven?

Nee, uw uitbetaling wordt toegevoegd aan een wachtrij, wachtend op uitbetaling. De uitbetaling wordt gedaan wanneer voldoende gebruikers deelnemen aan de batch. Het aantal benodigde deelnemers is te zien in de informatie over uitbetalingen in behandeling. U kunt deze weergave openen via de handelsgegevens.
Daar kunt u zien hoeveel slots van de huidige batch zijn ingenomen. In de informatie kunt u ook een geschatte tijd zien die u vertelt wat de maximale wachttijd is als de slots niet vóór die tijd worden gevuld.
:::

:::details Hoe werkt het als ik meerdere lopende koopaanbiedingen heb?

Net zoals eerder vermeld, worden uw uitbetalingen toegevoegd aan de wachtrij om te worden gebundeld met andere deelnemers.
:::

:::details Is er een limiet aan het aantal deelnemers dat kan deelnemen aan het batchen?

Nee, batches kunnen ook over het maximale aantal deelnemers gaan. Het is geen afsnijding, maar een drempel. Dit betekent dat zodra het minimum is bereikt, we gewoon alle psbts nemen en ze samen bundelen om de transactie uit te voeren, en verminderen we de kosten die elke deelnemer betaalt.
:::

:::details Hoe onderteken ik een extern adres?
Volg deze stappen om het ontvangende adres te ondertekenen bij het kopen van Bitcoin naar een externe portemonnee:

_Opmerking: De eerste 2 stappen zijn handig als u **altijd** uw fondsen wilt ontvangen op externe adressen. Als u het slechts één keer wilt doen, of als u soms de Peach-portemonnee wilt gebruiken, begin dan vanaf stap 3._

1. Ga naar instellingen

- schakel Peach-portemonnee uit
- ga naar uitbetalingsadres

2. Plak het nieuwe ontvangstadres

3. Doorloop het proces om uw koopaanbieding te publiceren en voordat u deze publiceert, zorg ervoor dat u ervoor kiest om naar uw externe portemonnee-adres te ontvangen (klik op het kleine portemonnee-icoon rechtsboven op het scherm met de samenvatting van het aanbod).

4. Zodra u uw koopaanbieding bevestigt, verschijnt het bericht om uw adres te ondertekenen. Kopieer het en ga terug naar uw portemonnee.

5. Zoek naar de optie "ondertekenen/verifiëren"\* en plak:

- uw ontvangstadres
- het Peach-bericht

6. Klik op ondertekenen en de handtekening verschijnt. Kopieer het.

7. Plak de handtekening op de Peach-portemonnee en klik op bevestigen.

8. Uw aanbieding is gepubliceerd.

_\*Disclaimer: niet alle portefeuilles ondersteunen de optie om uw adres te ondertekenen/verifiëren._
Peach raadt aan Blue Wallet, Sparrow of Samourai Wallet te gebruiken. Andere opties zijn onder meer Ledger en Trezor (Hardware Wallets), Bitcoin Core en Electrum wallet.

U vindt ook een stapsgewijze tutorial over hoe u een bericht kunt ondertekenen met Blue Wallet op ons YouTube-account: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)

:::

:::details Hoe CPFP te gebruiken om vastzittende transacties te versnellen?

Volg de stappen die u in deze video vindt: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) om vastzittende transacties te versnellen met behulp van CPFP in de Peach-app.
:::

:::details Hoe werkt het financieren van meerdere aanbiedingen?

Wanneer je meerdere aanbiedingen tegelijk wilt financieren, biedt de app een tussenadres dat wordt gegenereerd vanuit je Peach Wallet. Zodra de bitcoins dit adres bereiken, wordt er voor elke escrow een nieuwe transactie gegenereerd. Bijvoorbeeld, als je 5 verkoopaanbiedingen wilt financieren, worden 5 transacties naar verschillende escrow-adressen verzonden.
:::
