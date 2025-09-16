# Handels-FAQ

:::details Hoe kan ik er zeker van zijn dat ik de bitcoin / het geld ontvang?

Wanneer je een verkoopaanbod maakt of een koopaanbod accepteert, stuurt de verkoper de bitcoin naar een adres dat wordt gecontroleerd door hem en Peach: de bitcoin kan alleen worden verplaatst als zowel hij als Peach ondertekenen. Dit zorgt ervoor dat:

- De verkoper de bitcoin niet zelfstandig (terug) kan verplaatsen  
- Peach de bitcoin niet kan stelen  
- De koper de bitcoin pas ontvangt nadat de betaling is gedaan  
- De verkoper de bitcoin kan terugkrijgen als de koper niet reageert  

Als de handel niet normaal wordt afgerond, komt dit adres automatisch volledig onder controle van Peach na ongeveer 30 dagen (precies: wanneer 4320 bitcoinblokken zijn gedolven). Dit zorgt ervoor dat:

- De koper de bitcoin kan krijgen als hij kan bewijzen dat hij heeft betaald maar de verkoper niet reageert  
- De bitcoin niet vast komt te zitten als er iets met de verkoper gebeurt  

Dit is het belangrijkste onderdeel van de beveiliging van je handel. Daarnaast is er ook ons uitgebreide reputatiesysteem dat je helpt mensen te identificeren die Peach al lange tijd betrouwbaar gebruiken.
:::

:::details Waarom is er een handelslimiet?

Volgens de Zwitserse regelgeving mag een persoon slechts tot 1000 CHF aan bitcoin per dag kopen zonder zijn identiteit aan de verkoper bekend te maken. Aangezien we liever niet in de gevangenis belanden, handhaven we deze limiet in de app.

Al je betaalgegevens worden op je telefoon opgeslagen, dus wij kunnen ze niet zien. Wat we wél kunnen zien is een hash\* van het ID van je telefoon en je betaalgegevens. Hierdoor kunnen we transacties blokkeren die boven de persoonlijke limiet uitkomen.

\* Een hash zijn gegevens die onherkenbaar zijn gemaakt, vergelijkbaar met encryptie. Dezelfde gegevens leiden altijd tot dezelfde hash. Dit betekent dat wij niet weten wat de gegevens zijn, maar we kunnen herkennen of dezelfde gegevens twee keer worden gebruikt.
:::

:::details Is er een manier om meer te kopen/verkopen dan de limiet?

Als je een verkoper met hoog volume bent, stuur ons een e-mail naar [$contactEmail$](mailto:$contactEmail$)!  
Je wordt gevraagd een KYC-proces te doorlopen en je limieten worden verwijderd.
:::

:::details Wat zijn de kosten voor handelen op Peach?

Peach rekent 2% van het handelsvolume als kosten aan de koper. Wanneer je handelt op Peach, voer je transacties uit op de Bitcoin-blockchain, wat netwerkfees met zich meebrengt. Je kunt altijd de volledige kostenstructuur zien aan het einde van je handel, die er bijvoorbeeld zo uit kan zien:

![Transactieoverzicht](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Hoe kan ik een aanbod of een handel annuleren?

Je kunt je aanbiedingen en transacties annuleren door bovenaan het scherm op de rode X te klikken, wanneer deze beschikbaar is:

![Handel annuleren](/img/faq/trading/cancel.png)

Dat gezegd hebbende, dit heeft vaak gevolgen. Voor je iemand matcht, kun je op elk moment annuleren. Na een match wordt je reputatie echter negatief beïnvloed. Daarnaast moet je als verkoper toestemming vragen aan de koper om de transactie te annuleren. Het kan zijn dat hij al betaald heeft!
:::

:::details Waarom heb ik minder sats ontvangen dan ik dacht?

Peach rekent 2% handelskosten aan de koper, wat betekent dat je minder sats ontvangt dan het bedrag van de transactie. Daarnaast moet je bitcoin-netwerkkosten betalen. Je handel kan er bijvoorbeeld zo uitzien:

![Koopoverzicht](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Wat als ik de Peach-wallet niet wil gebruiken voor uitbetaling / terugbetaling?

Natuurlijk ben je vrij om je eigen wallet te gebruiken als je dat wilt. We raden echter sterk aan de Peach-wallet te gebruiken, omdat dit verreweg de makkelijkste manier is om te handelen. Daarna kun je de fondsen naar elke andere wallet sturen.

Als je je eigen wallet wilt toevoegen, kun je “uitbetaling naar Peach-wallet” uitschakelen en vervolgens een aangepast uitbetalingsadres instellen:

![Wallet uitschakelen](/img/faq/trading/disablewallet.png)

Bij het uitvoeren van een transactie moet je een bericht ondertekenen dat je deze wallet beheert, volgens de Zwitserse regelgeving.

We zullen binnenkort ondersteuning voor xpub toevoegen, maar voorlopig moet je dit adres handmatig wijzigen als je het niet opnieuw wilt gebruiken.
:::

:::details Hoe wordt de Bitcoin-prijs berekend op Peach?

De BTC-prijs die we op Peach tonen is een gemiddelde van de BTC-prijzen op gecentraliseerde beurzen.
:::

:::details Wat gebeurt er met valuta’s onder hoge inflatie zoals Argentinië, Venezuela, enz.?

Valuta’s onder hoge inflatie hebben veel volatiliteit, waardoor de prijzen die je op verschillende beurzen vindt kunnen verschillen. Peach geeft de prijs weer op basis van een gemiddelde van verschillende BTC-prijsbronnen.
:::

:::details Hoe een transactie versnellen die vastzit door lage miningkosten?

Dat hangt af van het type transactie. Hier is een lijst van alle transacties die op Peach kunnen voorkomen en de oplossingen om de kosten te verhogen:

1. Transactie voor het financieren van de escrow om een verkoopaanbod te publiceren of een koopaanbod te accepteren  

- Als je de escrow vanuit de Peach-wallet hebt gefinancierd, kun je de transactie met RBF (Replace-By-Fee) opnieuw versturen met hogere kosten  
- Als je de escrow vanuit een externe wallet hebt gefinancierd, moet je controleren of die wallet RBF ondersteunt  

2. Vrijgave-transactie uit de escrow (Bitcoin kopen)  

- Als je ontvangstadres van de Peach-wallet komt, kun je het volledige bedrag opnemen naar een externe wallet met hogere kosten (Instellingen > Netwerkkosten) – CPFP-techniek  
- Als je ontvangstadres van een externe wallet komt, kun je ook de CPFP-techniek gebruiken als je wallet dit ondersteunt  

3. Verzendtransactie van de Peach-wallet naar een andere wallet  

- RBF (Replace-By-Fee) vanuit de Peach-wallet in je transactiegegevens!
  :::

:::details Wat is GroupHug?
GroupHug is simpelweg de term die we hebben gegeven aan het batchen van transacties van verschillende gebruikers, zodat ze geen individuele kosten hoeven te betalen. Voor een meer gedetailleerde uitleg, bekijk onze [blogpost](https://peachbitcoin.com/blog/group-hug).
:::

:::details Als ik één enkele koopaanbieding heb lopen, wordt die onmiddellijk uitbetaald?

Nee, je uitbetaling wordt toegevoegd aan een wachtrij. De uitbetaling wordt uitgevoerd zodra er genoeg gebruikers deelnemen aan de batch. Het aantal benodigde deelnemers zie je in de informatie over de lopende uitbetaling. Daar zie je ook hoeveel plaatsen van de huidige batch bezet zijn en een ETA die de maximale wachttijd aangeeft.
:::

:::details Hoe werkt het als ik meerdere koopaanbiedingen tegelijk heb?

Zoals eerder vermeld, worden je uitbetalingen toegevoegd aan de wachtrij om samen met andere deelnemers te worden gebundeld.
:::

:::details Is er een limiet aan het aantal deelnemers in een batch?

Nee, batches kunnen ook meer deelnemers hebben dan het vereiste minimum. Het is geen strikte limiet, maar een drempel. Zodra het minimum is bereikt, nemen we alle psbts en bundelen we ze samen om de transactie te doen, en verminderen we de kosten voor elke deelnemer.
:::

:::details Hoe een extern adres ondertekenen?
Volg deze stappen om het ontvangstadres te ondertekenen bij het kopen van Bitcoin naar een externe wallet:

_Opmerking: De eerste 2 stappen zijn nuttig als je **altijd** je fondsen naar externe adressen wilt ontvangen. Als je dit slechts één keer wilt doen, of soms de Peach-wallet wilt gebruiken, begin bij stap 3._

1. Ga naar instellingen  

- schakel Peach-wallet uit  
- ga naar uitbetalingsadres  

2. Plak het nieuwe ontvangstadres  

3. Doorloop het proces om je koopaanbod te publiceren en zorg ervoor dat je vóór publicatie het externe adres kiest (klik rechtsboven op het kleine wallet-icoon in het overzichtsscherm van het aanbod).  

4. Zodra je je koopaanbod bevestigt, verschijnt het bericht om je adres te ondertekenen. Kopieer het en ga terug naar je wallet.  

5. Zoek naar de optie "sign/verify"\* en plak:  

- je ontvangstadres  
- het Peach-bericht  

6. Klik op ondertekenen en de handtekening verschijnt. Kopieer deze.  

7. Plak de handtekening in de Peach-wallet en bevestig.  

8. Je aanbod is gepubliceerd.  

_\* Disclaimer: niet alle wallets ondersteunen de optie sign/verify._  
Peach raadt Blue Wallet, Sparrow of Samourai Wallet aan. Andere opties zijn Ledger en Trezor (hardware wallets), Bitcoin Core en Electrum.  

Je kunt ook een stapsgewijze tutorial vinden over hoe je een bericht ondertekent met Blue Wallet op ons Youtube-kanaal: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Hoe CPFP gebruiken om vastgelopen transacties te versnellen?

Volg de stappen in deze video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) om vastgelopen transacties te versnellen met CPFP in de Peach-app.
:::

:::details Hoe werkt het financieren van meerdere verkoopaanbiedingen vanuit een externe wallet?

Wanneer je meerdere verkoopaanbiedingen tegelijk wilt financieren, genereert de app een tussenadres vanuit je Peach-wallet. Zodra de bitcoins dit adres bereiken, wordt er een nieuwe transactie voor elke escrow gegenereerd. Als je bijvoorbeeld 5 verkoopaanbiedingen wilt financieren, worden er 5 transacties naar verschillende escrow-adressen gestuurd.
:::
