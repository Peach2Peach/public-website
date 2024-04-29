---
keywords:
  - bitcoin verkopen
  - derdenrekening
  - gegroepeerde transactie
tags:
  - Hoe te
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  Vanaf versie 0.3.0 introduceert de Peach App de mogelijkheid om meerdere verkoopaanbiedingen te maken en te financieren. Hier leest u hoe het werkt.
---

# Hoe Meerdere Verkoopaanbiedingen te Financieren

Vanaf versie 0.3.0 introduceert de Peach App de mogelijkheid om meerdere verkoopaanbiedingen te maken en te financieren. Deze functie biedt twee belangrijke voordelen:

- **tijd besparen**, geen herhaaldelijk tikken op knoppen meer
- **kosten besparen**, financier alle derdenrekeningen in één transactie: bijvoorbeeld het groeperen van 5 betalingen in één transactie kan u gemakkelijk 60% aan transactiekosten besparen.

## Hoe het werkt

### Financiering vanuit de Peach-portemonnee

Uw verkoopaanbiedingen financieren vanuit uw Peach-portemonnee is de eenvoudigste optie. Wanneer u op de knop "financieren vanuit Peach-portemonnee" klikt, regelt de Peach App alles voor u. Het maakt een financieringstransactie die automatisch de benodigde fondsen naar elk derdenrekeningadres stuurt.

### Financiering vanuit externe portemonnee

Als u liever een externe portemonnee gebruikt, kunt u nog steeds meerdere verkoopaanbiedingen financieren, maar dit omvat een tweestappenproces:

1. **sats naar een Intern Peach-portemonnee-adres sturen**: Het adres dat u ziet is een intern Peach-portemonnee-adres speciaal geregistreerd voor dit doel. De Peach App houdt dit adres in de gaten totdat uw aanbiedingen zijn geannuleerd of het adres is gefinancierd.
2. **Financiering en Distributie**: Zodra sats op dit interne adres aankomen, verdeelt de logica van de Peach App de fondsen over de door u gemaakte verkoopaanbiedingen en stuurt deze naar de individuele derdenrekeningadressen.

## Veelgestelde vragen

Tijdens het lezen heeft u zich misschien een van deze vragen afgevraagd. Ik heb ze ook aan mezelf gesteld, dus ik wil u graag meteen een antwoord geven.

:::details Waarom geen enkele derdenrekening voor veel verkoopaanbiedingen?
Inderdaad, we hebben overwogen hoe we slechts één derdenrekening kunnen hebben waaruit veel verkoopaanbiedingen kunnen worden bediend.
De reden dat we geen enkele derdenrekening gebruiken, is dat het uitbetalingen veel moeilijker zou maken.
In de huidige opstelling worden derdenrekeningen volledig uitbetaald in één transactie en dat is het. Als we echter een derdenrekening gedeeltelijk zouden uitbetalen aan koper A, zou de aard van de bitcoin-transactie ons achterlaten met een wisselende output van de sats die nog niet zijn uitgegeven. Voor het gemak laten we zeggen dat het wisselgeld terugkeert naar hetzelfde derdenrekeningadres.
We zitten nog steeds met een ander probleem om op te lossen: hangende transacties. Stel je voor dat de eerste vrijgavetransactie aan koper A in behandeling is tegen 8 sats / vB, maar het netwerk verwerkt momenteel alleen transacties met 21 sats / vB en hoger. Als we een andere vrijgavetransactie starten naar koper B terwijl deze nog niet is bevestigd, moet koper B meer transactiekosten betalen om de transactie eerder bevestigd te krijgen.
:::

:::details Waarom kan ik niet 2 verkoopaanbiedingen tegelijk maken?
Voor het tweestappenproces worden kosten bespaard voor het financieren van 3 of meer derdenrekeningen. Om extra kosten te vermijden, staan we geen gegroepeerde financiering van twee verkoopaanbiedingen toe.
:::

:::details Kan ik mijn eigen transacties groeperen, moet ik het tweestappenproces doen?
Op dit moment wel. Maar we zullen binnenkort een update uitbrengen om meerdere verkoopaanbiedingen te maken zonder het tussenliggende financieringsadres te tonen.
:::

---

## Laatste Opmerkingen

Als je meer wilt weten over Peach functies, of enkele van onze andere artikelen wilt lezen, je kunt ze hier vinden!

[Hoe Bitcoin-portefeuilles herstellen met een zaadzin](https://peachbitcoin.com/nl/blog/how-to-restore-peach-wallet/)

[Hoe meerdere verkoopaanbiedingen financieren](https://peachbitcoin.com/nl/blog/funding-multiple-sell-offers/)

[Hoe Bitcoin kopen en verkopen met contant geld met Peach](https://peachbitcoin.com/nl/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Hoe een nieuwe betaalmethode toevoegen op de Peach-app](https://peachbitcoin.com/nl/blog/how-to-add-a-payment-method/)

[Peach breidt uit naar het mondiale zuiden!](https://peachbitcoin.com/nl/blog/peach-expands-to-the-global-south/)

[Onze Peach-API openbaar maken](https://peachbitcoin.com/nl/blog/making-our-peach-api-public/)

[Volledige Portefeuillefunctionaliteit](https://peachbitcoin.com/nl/blog/full-wallet-functionality/)

[Wat is GroupHug?](https://peachbitcoin.com/nl/blog/group-hug/)

[Waarom P2P-serie? Hoofdstuk 1](https://peachbitcoin.com/nl/blog/why-p2p-chapter-1/)

[Waarom P2P-serie? Hoofdstuk 2](https://peachbitcoin.com/nl/blog/why-p2p-chapter-2/)

[Waarom P2P-serie? Hoofdstuk 3](https://peachbitcoin.com/nl/blog/why-p2p-chapter-3-circular-economies/)

[Waarom P2P-serie? Hoofdstuk 4](https://peachbitcoin.com/nl/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/nl/blog/peach-for-meetups/)

Als je meer over ons wilt weten, bekijk dan onze sociale kanalen, of neem gewoon [contact met ons op](mailto:hello@peachbitcoin.com) (gebruik indien mogelijk onze [PGP-sleutel](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2)), we horen graag van je!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Blijf het woord verspreiden over Peach, wie weet wanneer je de match van je leven zult vinden!
