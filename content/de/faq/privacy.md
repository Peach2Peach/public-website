# Datenschutz FAQ

:::Details Welche Informationen sammelt Peach über mich?

Wir sind bestrebt so wenige Daten wie möglich über unsere Benutzer zu sammeln. Als kurzer Überblick das speichern wir auf unseren Servern:

- Ein Hash der ID deines Telefons
- Ein Hash deiner Zahlungsdaten
- Deine verschlüsselten Chats
- Die Daten deiner Trades (welche Art von Zahlungsmethode du verwendest, wie viel du kaufst bzw. verkaufst usw.)
- Nutzungsdaten sofern du dem zugestimmt hast.

Eine vollständige Aufschlüsselung findest du in unserer [Datenschutzerklärung](/Datenschutzerklärung/).

\* Bei einem Hash handelt es sich um Daten welche unkenntlich gemacht wurden ähnlich wie bei der Verschlüsselung. Die gleichen Daten führen immer zum gleichen Hash. Wir wissen nicht um welche Daten es sich handelt, aber wir können erkennen ob dieselben Daten zweimal verwendet werden.
:::

<!--
:::Details Welche Informationen werden gesendet, wenn ich Nutzungsdaten teile?
Geben eine Liste
:::
->

:::Details Wer kann meine Zahlungsdaten sehen?

Nur dein Handelspartner kann deine Zahlungsdaten sehen; Sie werden über die Peach-Server gesendet sind jedoch vollständig Ende-zu-Ende-verschlüsselt (wie bei den meisten Chat-Apps), sodass wir nicht sehen können um was es sich handelt.

Wenn du ein Streitfall einleitest sind die Zahlungsdetails von dir und deinem Handelspartner sowie euer Chatverlauf für den zugewiesenen Peach-Vermittler sichtbar.
:::

:::Details Wie verifiziert man die APK?

Befolgen diese Schritte um zu überprüfen ob es sich bei der heruntergeladenen APK um die echte Peach APK handelt:

- Lade die APK welche du installieren möchtest sowie die Signatur und das Manifest (alles findest du unter https://peachbitcoin.com/apk) herunter.

- Lade den Peach PGP-Schlüssel herunter: https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (auch auf unserer Website)

- Generiere die Prüfsumme der heruntergeladenen APK-Datei und vergleiche sie mit der Prüfsumme im Manifest.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(Ersetze den Namen der Datei durch app-prod-arm64-v8a-release.apk.) Er sollte detselbe sein wie im Manifest. Andernfalls kontaktiere uns und stelle sicher dass du diese Anwendung nicht auf Gerät installiererst. In diesem Beispiel solltest du folgende Ausgabe sehen:
„
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c app-prod-arm64-v8a-release.apk
„
Wenn wir sie mit dem im manifest-peach.txt gefundenen vergleichen sehen wir dass es dieselbe ist.

- Füge den Peach-Schlüssel zu deinem Schlüsselbund hinzu
„
gpg --import PGP-peach.asc
„
(Stelle sicher dass du PGP-peach.asc durch den korrekten Dateinamen ersetzt. Normalerweise lautet dieser 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc.)

- Überprüfe die Signaturen welche du zuvor heruntergeladen hast mit dem folgenden Befehl:
„
gpg --verify manifest-peach.sig manifest-peach.txt
„
In der Ausgabe solltest du die folgende Zeile sehen:
„
gpg: Gute Signatur von „hello@peachbitcoin.com <hello@peachbitcoin.com>“ [unbekannt]
„
:::

:::Details Wie signiere ich eine externe Adresse?
Befolge diese Schritte um die Empfangsadresse zu signieren, wenn du Bitcoin kaufst welche direkt auf die externe Wallet gesendet werden sollen:

_Hinweis: Die ersten beiden Schritte sind hilfreich wenn du deine Bitcoin **immer** auf externe Adressen erhalten möchtest. Wenn du dies nur einmal tun möchtest oder gelegentlich das Peach Wallet verwenden möchtest beginne mit Schritt 3._

1. Gehe zu den Einstellungen
   - Peach Wallet deaktivieren
   - Gehe zur Auszahlungsadresse

2. Füge die neue Empfangsadresse ein

3. Führe den Prozess zur Veröffentlichung deines Kaufangebots durch und stelle vor der veröffentlichung sicher das der Empfang an deine externe Wallet-Adresse ausgewählt ist (klicke auf das kleine Wallet-Symbol oben rechts auf dem Bildschirm mit der Angebotsübersicht).

4. Sobald du dein Kaufangebot bestätigt hast wird die Meldung zum signieren deiner Adresse angezeigt. Kopiere sie und kehre zur Wallet zurück.

5. Suche nach der Option „Signieren/Bestätigen“* und füge folgendes ein:
   - Deine Empfangsadresse
   - die Peachmitteilung

6. Klicke „Signieren“ und die Signatur wird angezeigt. Kopiere es.

7. Fügen die Signatur in das Peach Wallet ein und klicke „Bestätigen“.

8. Dein Angebot wird veröffentlicht.

_*Haftungsausschluss: Nicht alle Wallets unterstützen die Option zum Signieren/Verifizieren deiner Adresse. Peach empfiehlt die verwendung von Blue Wallet, Sparrow oder Samourai, da diese alle die Option zum Signieren/Verifizieren bieten._
:::

:::Details Wird Taproot unterstützt?

- Es ist möglich die Escrow von einer Taproot-Adresse aus aufzuladen und Bitcoin von der Peach Wallet an eine Taproot-Adresse senden.
- Es ist NICHT möglich, eine Taproot-Adresse als direkte Auszahlungsadresse festzulegen (es ist nicht möglich Taproot-Adressen zu signieren).

:::