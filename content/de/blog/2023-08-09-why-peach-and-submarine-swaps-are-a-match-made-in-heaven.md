---
keywords:
  - Bitcoin
  - Bitcoin kaufen
  - Bitcoin verkaufen
  - Peach-App
  - P2P
  - p2p
  - p2p-Tausch
  - wie man Bitcoin kauft
  - wie man Bitcoin verkauft
  - Peer-to-Peer
tags:
  - Produkt
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin ist Geld für freie Menschen. Wir glauben, dass jeder Mensch das Recht hat zu wählen, welches Geld er nutzt, um sein
  Vermögen, das Ergebnis seiner Arbeit, seiner Zeit und Energie zu speichern.
  Peachs Mission ist es, seinen Beitrag zur Adoption von Bitcoin in den Händen der Menschen zu leisten.
---

# LN <-> On-Chain Swaps, von @swissnode

## Warum Peach und Submarine Swaps wie füreinander geschaffen sind

Ich habe meine Unterstützung für Peach deutlich zum Ausdruck gebracht und habe sogar ein paar Sats investiert, nachdem ich vor fast zwei Jahren von der Brillanz dessen überzeugt wurde, was Peach der Bitcoin-Gemeinschaft zu bieten hat: eine einfache Möglichkeit für den einfachen Sammler, seine Sats zu stapeln, ohne sich dafür auf einer Plattform identifizieren zu müssen.

Mir wurde als Betreiber des SwissNode Lightning-Knotens klar, dass die Währungspaare nicht nur auf Fiat-Bitcoin-Swaps beschränkt sein müssen. Es gibt tatsächlich Anwendungsfälle, die darüber hinausgehen. Willkommen in der Welt der Onchain-Offchain-Submarine-Swaps.

Ein Submarine Swap ist einfach gesagt eine Methode, Sats, die Partner A Onchain hat, mit Sats, die Partner B möglicherweise im Lightning Network (LN) hat, zu konvertieren. A erhält so Sats über eine LN-Rechnung und B erhält Onchain-Sats über eine übliche Transaktion auf der Blockchain.

Es gibt zwei Hauptgründe, dies zu tun. Ein Knotenbetreiber möchte vielleicht einfach mehr seiner Liquidität auf der Lightning-Seite haben, vielleicht um das Verhältnis von Sats, die in der "lokalen" Kanalkapazität gehalten werden, und denen, die in der "entfernten" Kanalkapazität gehalten werden, auszugleichen. Ich werde es dabei belassen, dies ist offensichtlich ein technischerer Aspekt des Submarine-Swaps. Ein Knotenbetreiber kann umgekehrt auch einige seiner Liquidität vom Lightning-Netzwerk zurück in "Onchain"-Utxos konvertieren wollen. Mir ist das passiert, als ein Geschäftspartner Zahlung nur über die Blockchain statt über Lightning wollte, zum Beispiel.

Der zweite Grund für einen solchen Swap ist jedoch etwas, das fast alle Bitcoiner schätzen können oder SOLLTEN: die Möglichkeit, die Nachverfolgbarkeit des Utxo-Sets, das er oder sie besitzt, zu unterbrechen, so dass keine Entität in der Lage ist zu wissen, was mit den zuvor Onchain gehaltenen Sats geschehen ist. Dies kann nicht genug betont werden! Sobald die Sats in Ihrem Utxo weitergegeben wurden, halten Sie Ihre Liquidität in verschiedenen Kanälen, die praktisch unmöglich von außen einzusehen sind. Die Natur von Lightning ist so, dass die bewährte doppelte Buchführung der verwendeten Kanäle bedeutet, dass nur Ihre Kanalpartner wissen können, wie viele Sats Sie auf der anderen Seite des Kanals besitzen. Theoretisch könnten Sie diese Lightning-Sats wieder zurücktauschen und dann im Besitz eines Utxos sein, der überhaupt nicht zu seinem Besitzer zurückverfolgt werden kann!

Warum sollte Peach dies tun wollen? ... fragen Sie sich vielleicht... Nun, hier ist der Clou. Indem Peach diesen Service für fast nichts anbietet, wird Peach plötzlich EXTREM attraktiv für die Tausenden von Knotenbesitzern da draußen, die einen Wechsel zwischen Onchain-/Offchain-Liquiditätspools benötigen. Derzeit existieren Dienste wie der LOOP-Service von Lightning Labs, aber Sie zahlen ziemlich viel für das Privileg. Auf diese Weise wird Peach sicherlich Hunderte, wenn nicht Tausende neuer Nutzer gewinnen, die diesen Service benötigen. Selbst wenn sie ihn kostenlos anbieten würden, würden sie viele anlocken, die wegen der Swaps kamen, aber dann die beste Methode entdeckten, p2 ohne kyc zu stapeln.

Wie funktioniert das in der Praxis? Sehr einfach, es unterscheidet sich kaum vom üblichen Peach-Anwendungsfall: Der Verkäufer erstellt mit Peach ein Onchain-Escrow für eine bestimmte Anzahl von Sats. Die einzige Abweichung vom normalen Weg ist, dass er jetzt entscheiden muss: wird er die Lightning-Sats über LNURL fordern. Dies ermöglicht dem Verkäufer, eine Marge festzulegen (-21% < x < 21%). Es könnte eine Idee für zukünftige Versionen sein, auch normale LN-Rechnungen als marge-freien Verkauf zu ermöglichen. Sobald dies erledigt ist, setzt der übliche Prozess ein... Sobald das Escrow eingerichtet und bestätigt ist, kann ein Käufer seine Bereitschaft signalisieren, diese Onchain-Sats mit einem "Match" zu kaufen. Wenn der Verkäufer ein "Doppel-Match" durchführt, muss der Käufer die Off-Chain-Sats über LNURL senden. Sobald dies vom Verkäufer bestätigt wurde, wird das Escrow die Onchain-Sats an den Käufer freigeben. Die üblichen Prozesse gelten weiterhin, sollte der Käufer oder Verkäufer die Aktion des anderen bestreiten. Peach wird entscheiden, was Sache ist, und das Escrow gemäß dem bewährten und getesteten Streitbeilegungsprozess freigeben.

@swissnode

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

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Verbreiten Sie weiterhin das Peach-Wort, wer weiß, wann Sie den Match Ihres Lebens finden werden!
