# Handels-FAQ

:::details Wie kann ich sicher sein, dass ich die Bitcoin / das Geld bekomme?

Wenn du ein Verkaufsangebot erstellst oder ein Kaufangebot annimmst, sendet der Verkäufer die Bitcoin an eine Adresse, die von ihm und Peach kontrolliert wird: Die Bitcoin können nur von hier bewegt werden, wenn sowohl er als auch Peach zustimmen. Das stellt sicher, dass:

- Der Verkäufer die Bitcoin nicht alleine (zurück) bewegen kann
- Peach die Bitcoin nicht stehlen kann
- Der Käufer die Bitcoin erst nach der Zahlung erhält
- Der Verkäufer die Bitcoin zurückbekommen kann, wenn der Käufer nicht reagiert

Wenn der Handel nicht normal abgeschlossen wird, geht diese Adresse nach etwa 30 Tagen automatisch vollständig in die Kontrolle von Peach über (genauer: wenn 4320 Bitcoin-Blöcke gemined wurden). Das stellt sicher, dass:

- Der Käufer die Bitcoin erhält, wenn er beweisen kann, dass er die Zahlung geleistet hat, der Verkäufer aber nicht reagiert
- Die Bitcoin nicht stecken bleiben, falls dem Verkäufer etwas zustößt

Dies ist der wichtigste Teil, um deinen Handel abzusichern. Zusätzlich gibt es unser ausgefeiltes Reputationssystem, das dir hilft, vertrauenswürdige Nutzer zu identifizieren, die Peach schon lange zuverlässig nutzen.
:::

:::details Warum gibt es ein Handelslimit?

Schweizer Vorschriften besagen, dass eine Person pro Tag nur bis zu 1000 CHF Bitcoin kaufen darf, ohne dem Verkäufer ihre Identität nachzuweisen. Da wir ungern ins Gefängnis wollen, setzen wir dieses Limit in der App durch.

Alle deine Zahlungsdetails werden auf deinem Handy gespeichert, sodass wir sie nicht sehen können. Was wir sehen können, ist ein Hash\* deiner Geräte-ID und deiner Zahlungsdetails. Dadurch können wir verhindern, dass Trades über dein persönliches Limit hinausgehen.

\* Ein Hash ist eine unkenntlich gemachte Datenform, ähnlich wie eine Verschlüsselung. Dieselben Daten führen immer zum selben Hash. Das bedeutet, wir wissen nicht, was die Daten sind, können aber erkennen, ob sie zweimal verwendet werden.
:::

:::details Gibt es eine Möglichkeit, mehr als das Handelslimit zu kaufen/verkaufen?

Wenn du ein Verkäufer mit hohem Volumen bist, schicke uns eine E-Mail an [$contactEmail$](mailto:$contactEmail$)!
Du wirst gebeten, einen KYC-Prozess zu durchlaufen und deine Limits werden entfernt.
:::

:::details Welche Gebühren fallen beim Handel auf Peach an?

Peach verlangt vom Käufer eine Gebühr von 2 % des Handelsvolumens. Wenn du auf Peach handelst, führst du Transaktionen auf der Bitcoin-Blockchain durch, wodurch Transaktionsgebühren anfallen. Am Ende deines Handels kannst du immer die vollständige Gebührenstruktur sehen, die etwa so aussehen könnte:

![Handelsaufschlüsselung](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Wie kann ich ein Angebot oder einen Handel abbrechen?

Du kannst deine Angebote und Trades abbrechen, indem du auf das rote X oben auf dem Bildschirm klickst, wann immer es verfügbar ist:

![Handel abbrechen](/img/faq/trading/cancel.png)

Allerdings hat das oft Konsequenzen. Bevor du jemanden matchst, kannst du jederzeit abbrechen. Nachdem du jedoch ein Match hast, wirkt sich das negativ auf deine Reputation aus. Außerdem musst du als Verkäufer den Käufer um Erlaubnis bitten, den Handel abzubrechen. Er könnte die Zahlung bereits getätigt haben!
:::

:::details Warum habe ich weniger Sats erhalten, als ich dachte?

Peach berechnet 2 % Handelsgebühr für den Käufer, was bedeutet, dass du weniger Sats erhältst, als der Handel eigentlich umfasst. Zusätzlich musst du Bitcoin-Netzwerkgebühren zahlen. Dein Handel könnte zum Beispiel so aussehen:

![Kaufaufschlüsselung](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Was, wenn ich die Peach-Wallet nicht für Auszahlung / Rückerstattung nutzen möchte?

Natürlich kannst du deine eigene Wallet verwenden, wenn du möchtest. Wir empfehlen trotzdem dringend die Peach-Wallet, da sie bei weitem die einfachste Möglichkeit zum Handeln ist. Du kannst die Gelder dann an jede andere Wallet senden.

Wenn du deine eigene Wallet hinzufügen willst, kannst du „Auszahlung an Peach-Wallet“ deaktivieren und dann eine benutzerdefinierte Auszahlungsadresse festlegen:

![Wallet deaktivieren](/img/faq/trading/disablewallet.png)

Wenn du einen Handel machst, musst du gemäß den Schweizer Vorschriften eine Nachricht signieren, dass du diese Wallet kontrollierst.

Wir arbeiten bald an xpub-Unterstützung, aber vorerst musst du diese Adresse manuell ändern, wenn du sie nicht wiederverwenden willst.
:::

:::details Wie wird der Bitcoin-Preis auf Peach berechnet?

Der auf Peach angezeigte BTC-Preis ist ein Durchschnittswert der BTC-Preise von zentralisierten Börsen.
:::

:::details Was passiert mit den Preisen von Währungen unter hoher Inflation wie Argentinien, Venezuela usw.?

Währungen mit hoher Inflation leiden unter hoher Volatilität, daher können sich die Preise auf verschiedenen Börsen unterscheiden. Peach zeigt den Preis basierend auf einem Durchschnitt der BTC-Preise aus verschiedenen Quellen an.
:::

:::details Wie kann man eine Transaktion beschleunigen, die wegen niedriger Gebühren im Mempool hängt?

Es hängt davon ab, welche Art von Transaktion gemeint ist. Hier eine Liste der möglichen Transaktionen in Peach und die Lösungen zur Erhöhung der Gebühren:

1. Transaktion zur Finanzierung des Escrows für ein Verkaufsangebot oder zum Annehmen eines Kaufangebots

- Wenn du den Escrow aus der Peach-Wallet finanziert hast, kannst du die Transaktion per RBF (Replace-By-Fee) mit höheren Gebühren erneut senden.
- Wenn du den Escrow aus einer externen Wallet finanziert hast, prüfe, ob diese Wallet RBF unterstützt, um die Gebühren zu erhöhen.

2. Freigabetransaktion aus dem Escrow (Kauf von Bitcoin)

- Wenn deine Empfangsadresse aus der Peach-Wallet stammt, kannst du den gesamten Betrag an eine externe Wallet von dir mit höheren Gebühren auszahlen (Einstellungen > Netzwerkgebühren) – CPFP-Technik
- Wenn deine Empfangsadresse aus einer externen Wallet stammt, kannst du ebenfalls die CPFP-Technik nutzen, falls deine Wallet dies unterstützt

3. Sende-Transaktion von der Peach-Wallet zu einer anderen Wallet

- RBF (Replace-By-Fee) in den Transaktionsdetails der Peach-Wallet!
  :::

:::details Was ist GroupHug?
GroupHug ist einfach der Begriff, den wir dem Batching von Transaktionen mehrerer Nutzer gegeben haben, um individuelle Gebühren zu vermeiden. Eine ausführlichere Erklärung findest du in unserem [Blogpost](https://peachbitcoin.com/blog/group-hug).
:::

:::details Wenn ich ein einzelnes Kaufangebot laufen habe, wird es sofort ausgezahlt?

Nein, deine Auszahlung wird in eine Warteschlange aufgenommen. Die Auszahlung erfolgt, wenn genügend Nutzer an einem Batch teilnehmen. Die benötigte Teilnehmerzahl siehst du in den Informationen zur ausstehenden Auszahlung. Dort kannst du auch sehen, wie viele Plätze im aktuellen Batch bereits belegt sind und eine ETA, die dir die maximale Wartezeit angibt.
:::

:::details Wie funktioniert es, wenn ich mehrere Kaufangebote gleichzeitig habe?

Wie bereits erwähnt, werden deine Auszahlungen in die Warteschlange aufgenommen, um mit anderen Teilnehmern gebündelt zu werden.
:::

:::details Gibt es eine Obergrenze für die Teilnehmerzahl beim Batching?

Nein, Batches können auch mehr als die maximale Teilnehmerzahl enthalten. Es ist kein Cutoff, sondern ein Schwellenwert. Sobald das Minimum erreicht ist, nehmen wir einfach alle PSBTs und batchen sie zusammen, um die Transaktion zu erstellen und die Gebühren für alle Teilnehmer zu reduzieren.
:::

:::details Wie signiere ich eine externe Adresse?
Folge diesen Schritten, um die Empfangsadresse beim Kauf von Bitcoin an eine externe Wallet zu signieren:

_Hinweis: Die ersten 2 Schritte sind sinnvoll, wenn du **immer** deine Gelder an externe Adressen erhalten willst. Wenn du es nur einmal machen möchtest oder manchmal auch die Peach-Wallet nutzen willst, beginne bei Schritt 3._

1. Gehe zu den Einstellungen

- Peach-Wallet deaktivieren
- Gehe zur Auszahlungsadresse

2. Füge die neue Empfangsadresse ein

3. Veröffentliche dein Kaufangebot und wähle vor der Veröffentlichung die externe Adresse aus (klicke oben rechts auf das kleine Wallet-Symbol im Angebotsübersichtsbildschirm).

4. Sobald du dein Kaufangebot bestätigst, erscheint die Nachricht, deine Adresse zu signieren. Kopiere sie und gehe zurück zu deiner Wallet.

5. Suche nach der Option „sign/verify“\* und füge ein:

- deine Empfangsadresse
- die Peach-Nachricht

6. Klicke auf Signieren und die Signatur erscheint. Kopiere sie.

7. Füge die Signatur in der Peach-Wallet ein und bestätige.

8. Dein Angebot ist veröffentlicht.

_\* Hinweis: Nicht alle Wallets unterstützen die Funktion „sign/verify“._
Peach empfiehlt Blue Wallet, Sparrow oder Samourai Wallet. Andere Optionen sind Ledger und Trezor (Hardware Wallets), Bitcoin Core und Electrum.

Du findest außerdem ein Schritt-für-Schritt-Tutorial zur Signierung mit Blue Wallet in unserem Youtube-Kanal: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Wie kann man CPFP verwenden, um festhängende Transaktionen zu beschleunigen?

Folge den Schritten in diesem Video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU), um festhängende Transaktionen mithilfe von CPFP in der Peach-App zu beschleunigen.
:::

:::details Wie funktioniert die Finanzierung mehrerer Verkaufsangebote aus einer externen Wallet?

Wenn du mehrere Verkaufsangebote gleichzeitig finanzieren willst, erstellt die App eine Zwischenadresse aus deiner Peach-Wallet. Sobald die Bitcoin diese Adresse erreichen, wird für jedes Escrow eine neue Transaktion generiert. Wenn du z. B. 5 Verkaufsangebote finanzieren willst, werden 5 Transaktionen an verschiedene Escrow-Adressen gesendet.
:::
