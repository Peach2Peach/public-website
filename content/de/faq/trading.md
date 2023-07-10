# Trading FAQ

:::details Wie kann ich sicher sein, dass ich die Bitcoin oder das Geld erhalte?

Bei einem Verkaufsangebot sendet der Verkäufer die Bitcoin an eine von ihm und Peach kontrollierte Adresse: Von hier aus können die Bitcoin nur verschoben werden wenn beide, Verkäufer und Peach signieren. Dadurch wird sichergestellt dass:

- Der Verkäufer kann die Bitcoin nicht alleine (zurück) bewegen.
- Peach kann die Bitcoin nicht stehlen.
- Der Käufer erhält die Bitcoin erst nach erfolgter Zahlung.
- Der Verkäufer kann die Bitcoin zurückbekommen, wenn der Käufer nicht reagiert.

Wenn der Handel nicht normal abgewickelt wird, gelangt diese Adresse nach etwa 30 Tagen (genauer gesagt, wenn 4320 Bitcoin-Blöcke gemined wurden) automatisch unter Peach's kontrolle. Dadurch wird sichergestellt dass:

- Der Käufer erhält die Bitcoin wenn er nachweisen kann dass er die Zahlung geleistet hat, der Verkäufer jedoch nicht reagiert.
- Die Bitcoin nicht blockiert bleiben, wenn dem Verkäufer etwas zustößt.

Dies ist der wichtigste Teil der sicherung deines Handels. Darüber hinaus gibt es noch unser ausgeklügeltes Reputationssystem, welches dir hilft Personen zu identifizieren die Peach schon seit langem zuverlässig nutzen.
:::

:::details Warum gibt es ein Handelslimit?

Die Gesetze der Schweiz besagen, dass eine Person nur bis zu 1000 CHF Bitcoin pro Tag anonym kaufen kann. Da wir lieber nicht ins Gefängnis gehen würden, erzwingen wir dieses Limit in der App.

Alle deine Zahlungsdaten werden auf deinem Telefon gespeichert sodass wir sie nicht sehen können. Was wir sehen können, ist ein Hash\* deiner Telefon-ID und deiner Zahlungsdetails. Dadurch können wir alle Trades blockieren, welche das persönliche Limit überschreiten.

\* Bei einem Hash handelt es sich um Daten, die unkenntlich gemacht wurden, ähnlich wie bei der Verschlüsselung. Die gleichen Daten führen immer zum gleichen Hash. Das bedeutet, dass wir nicht wissen, um welche Daten es sich handelt, aber wir können erkennen, ob dieselben Daten zweimal verwendet werden.
:::

:::details Gibt es eine Möglichkeit mehr als das Handelslimit zu kaufen/verkaufen?

Wenn du ein Käufer oder Verkäufer mit hohem Volumen bist sende uns eine E-Mail an [$KontaktEmail$](mailto:$contactEmail$)!
:::

:::details Wie hoch sind die Gebühren für den Handel auf Peach?

Peach berechnet dem Käufer 2% des Handelsvolumens an Gebühren. Wenn du auf Peach handelst führst du Transaktionen auf der Bitcoin-Blockchain durch wodurch Transaktionsgebühren anfallen. Am ende des Handels siehst du immer die vollständige Gebührenstruktur, die etwa so aussehen könnte:

![Handelsdetails](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Wie kann ich ein Angebot oder einen Handel stornieren?

Du kannst deine Angebote und Trades stornieren indem du auf das rote X oben auf dem Bildschirm klickst, sofern vorhanden:

![Handel abbrechen](/img/faq/trading/cancel.png)

Allerdings hat dies oft Konsequenzen. Bevor du jemanden matched kannst du jederzeit stornieren. Nachdem jedoch eine Übereinstimmung erzielt wurde, wird dein Ruf negativ beeinflusst. Darüber hinaus musst du als Verkäufer den Käufer um erlaubnis bitten den Handel zu stornieren. Möglicherweise hat er die Zahlung bereits getätigt!
:::

:::details Warum habe ich weniger Sats erhalten als ich gekauft habe?

Peach berechnet dem Käufer 2% Handelsgebühren was bedeutet, dass du weniger Sats erhalten hast als der Handelsbetrag war. Darüber hinaus musst du Bitcoin-Netzwerkgebühren bezahlen. Dein Trade könnte zum Beispiel so aussehen:

![Kaufdetails](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Was wenn ich das Peach-Wallet nicht für die Auszahlung/Rückerstattung nutzen möchte?

Selbstverständlich steht es dir frei dein eigenes Wallet zu verwenden wenn du möchtest. Wir empfehlen die verwendung des Peach-Wallets da dies der einfachste Weg ist einen Handel zu tätigen. Du kannst das Guthaben dann an jede andere Wallet senden.

Wenn du dein eigenes Wallet hinzufügen möchtest, kannst du „Auszahlung an Peach Wallet“ deaktivieren und dann eine benutzerdefinierte Auszahlungsadresse festlegen:

![Wallet deaktivieren](/img/faq/trading/disablewallet.png)

Wenn du einen Handel tätigst musst du gemäss Schweizer Gesezt eine Nachricht signieren, dass du die Kontrolle über dieses Wallet hast.

Wir starten bald an der Xpub-Unterstützung, aber vorerst musst du die Adressen manuell ändern wenn du sie nicht wiederverwenden möchtest.
:::

:::detail Wie wird der Bitcoin-Preis auf Peach berechnet?

Der BTC-Preis den wir auf Peach anzeigen ist der durchschnitt des BTC-Handelspreis an zentralisierten Börsen.
:::
