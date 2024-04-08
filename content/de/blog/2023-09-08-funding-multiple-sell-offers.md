---
keywords:
  - Verkauf von Bitcoin
  - Treuhand
  - gebündelte Transaktion
tags:
  - Wie man
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  Ab Version 0.3.0 führt die Peach App die Möglichkeit ein, mehrere Verkaufsangebote zu erstellen und zu finanzieren. Hier erfahren Sie, wie es funktioniert.
---

# Wie man mehrere Verkaufsangebote finanziert

Ab Version 0.3.0 führt die Peach App die Möglichkeit ein, mehrere Verkaufsangebote zu erstellen und zu finanzieren. Diese Funktion bietet zwei Hauptvorteile:

- **Zeit sparen**, kein wiederholtes Drücken von Knöpfen mehr
- **Gebühren sparen**, alle Treuhände in einer einzigen Transaktion finanzieren: zum Beispiel kann das Bündeln von 5 Zahlungen in einer einzigen Transaktion leicht 60% an Transaktionsgebühren sparen.

## Wie es funktioniert

### Finanzierung aus dem Peach Wallet

Die Finanzierung Ihrer Verkaufsangebote aus Ihrem Peach Wallet ist die einfachste Option. Wenn Sie auf den Button "aus Peach Wallet finanzieren" klicken, kümmert sich die Peach App automatisch um alles. Sie erstellt eine Finanzierungstransaktion, die die notwendigen Mittel automatisch an jede Treuhandadresse sendet.

### Finanzierung aus externem Wallet

Wenn Sie ein externes Wallet bevorzugen, können Sie trotzdem mehrere Verkaufsangebote finanzieren, aber es erfordert einen zweistufigen Prozess:

1. **Sats an eine interne Peach Wallet-Adresse senden**: Die Adresse, die Sie sehen, ist eine speziell für diesen Zweck registrierte interne Peach Wallet-Adresse. Die Peach App behält diese Adresse im Auge, bis Ihre Angebote entweder abgebrochen werden oder die Adresse finanziert wird.
2. **Finanzierung und Verteilung**: Sobald Sats bei dieser internen Adresse ankommen, teilt die Logik der Peach App die Mittel unter den von Ihnen erstellten Verkaufsangeboten auf und sendet sie an die individuellen Treuhandadressen.

## FAQs

Während des Lesens haben Sie sich vielleicht eine dieser Fragen gestellt. Ich habe sie mir auch gestellt, also möchte ich Ihnen gleich eine Antwort geben.

:::details Warum nicht eine einzige Treuhand für viele Verkaufsangebote?
In der Tat haben wir überlegt, wie wir nur eine Treuhand haben können, aus der viele Verkaufsangebote bedient werden können.
Der Grund, warum wir nicht eine einzige Treuhand verwenden, ist, dass dies die Auszahlungen erheblich erschweren würde.
In der aktuellen Einstellung werden Treuhände in einer einzigen Transaktion vollständig ausgezahlt und fertig. Würden wir jedoch eine Treuhand teilweise an Käufer A auszahlen, würde die Natur der Bitcoin-Transaktion uns mit einem Wechselgeld-Output der Sats zurücklassen, die noch nicht ausgegeben wurden. Der Einfachheit halber sagen wir, das Wechselgeld geht zurück an die gleiche Treuhandadresse.
Wir stehen jedoch vor einem weiteren Problem: ausstehende Transaktionen. Stellen Sie sich vor, die erste Freigabetransaktion an Käufer A ist bei 8 Sats / vB ausstehend, aber das Netzwerk verarbeitet derzeit nur Transaktionen mit 21 Sats / vB und höher. Wenn wir eine weitere Freigabetransaktion an Käufer B starten, während sie noch nicht bestätigt ist, muss Käufer B mehr Transaktionsgebühren zahlen, um die Transaktion früher bestätigen zu lassen.
:::

:::details Warum kann ich nicht 2 Verkaufsangebote gleichzeitig erstellen?
Für den zweistufigen Prozess werden Gebühren gespart, indem 3 Treuhände oder mehr finanziert werden. Um mehr Gebühren zu vermeiden, erlauben wir keine gebündelte Finanzierung von zwei Verkaufsangeboten.
:::

:::details Ich kann meine eigenen Transaktionen bündeln, muss ich den zweistufigen Prozess durchführen?
Im Moment ja. Aber wir werden bald ein Update veröffentlichen, um mehrere Verkaufsangebote zu erstellen, ohne dass die Zwischenfinanzierungsadresse angezeigt wird.
:::

## Schlussbemerkungen

Wenn Sie mehr über die Funktionen von Peach erfahren möchten oder einige unserer anderen Artikel lesen möchten, finden Sie sie hier!

[Wie man Bitcoin-Wallets mit einem Seed-Phrase wiederherstellt](https://peachbitcoin.com/de/blog/how-to-restore-peach-wallet/)

[Wie man mehrere Verkaufsangebote finanziert](https://peachbitcoin.com/de/blog/funding-multiple-sell-offers/)

[Wie man Bitcoin mit Bargeld kauft und verkauft, mit Peach](https://peachbitcoin.com/de/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Wie man eine neue Zahlungsmethode in der Peach-App hinzufügt](https://peachbitcoin.com/de/blog/how-to-add-a-payment-method/)

[Peach expandiert in den Globalen Süden!](https://peachbitcoin.com/de/blog/peach-expands-to-the-global-south/)

[Unsere Peach-API öffentlich machen](https://peachbitcoin.com/de/blog/making-our-peach-api-public/)

[Vollständige Wallet-Funktionalität](https://peachbitcoin.com/de/blog/full-wallet-functionality/)

[Was ist GroupHug?](https://peachbitcoin.com/de/blog/group-hug/)

[Warum P2P-Serie? Kapitel 1](https://peachbitcoin.com/de/blog/why-p2p-chapter-1/)

[Warum P2P-Serie? Kapitel 2](https://peachbitcoin.com/de/blog/why-p2p-chapter-2/)

[Warum P2P-Serie? Kapitel 3](https://peachbitcoin.com/de/blog/why-p2p-chapter-3-circular-economies/)

[Warum P2P-Serie? Kapitel 4](https://peachbitcoin.com/de/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x Treffen](https://peachbitcoin.com/de/blog/peach-for-meetups/)

Wenn Sie mehr über uns erfahren möchten, schauen Sie sich unsere sozialen Medien an oder [kontaktieren Sie uns](mailto:hello@peachbitcoin.com) (wenn möglich, verwenden Sie unseren [PGP-Schlüssel](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2)), wir freuen uns, von Ihnen zu hören!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Verbreiten Sie weiterhin das Peach-Wort, wer weiß, wann Sie den Match Ihres Lebens finden werden!
