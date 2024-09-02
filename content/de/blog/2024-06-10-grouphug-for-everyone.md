---
keywords:
  - Bitcoin
  - Batchverarbeitung
  - Transaktion
  - Gebühren
tags:
  - Code
  - Produkt
previewImage: /img/blog/group-hug/teaser.png
description: |
  Mit GroupHug bündeln wir Treuhandfreigaben für niedrigere Transaktionsgebühren. Opt-in, warte ein wenig, spare mehr. Du hast die Kontrolle, wechsel jederzeit.
---

# GroupHug Für Alle

Nach einiger Zeit und viel Arbeit freuen wir uns, euch eine neue Version mit vielen Verbesserungen der Lebensqualität und einer großen systemischen Veränderung zu präsentieren.
Ich sage es gleich: Diese Änderung soll im Hintergrund ablaufen und subtil sein. Die Benutzer sollten es eigentlich nicht bemerken, und wenn sie es tun, hoffen wir, dass es auf eine angenehme Art und Weise geschieht. Aber lasst uns zuerst ein wenig zurückgehen und ich nehme euch mit auf eine kurze Tour über Peach - die App, aber auch das Geschäft.

Wenn du Bitcoin auf Peach kaufst, gehen 2 % des Handelsbetrags als Servicegebühr an Peach. Auf technischer Ebene funktioniert dies so, dass eine Transaktion erstellt wird, die zwei Ausgaben hat:

- den Betrag, den der Käufer erhält
- die 2 % Peach-Gebühr

![](/img/blog/grouphug-for-everyone/one-input-two-outputs.png)
Wie du vielleicht weißt, gibt es bei Bitcoin-Transaktionen auch eine andere Gebühr, die du zahlen musst: Die Mining-Gebühr.
Diese Mining-Gebühr ist nicht von der _Menge_, die du sendest, abhängig, sondern von der **Größe der Transaktion**. Stell dir vor, es ist wie das Versenden eines Bildes von einem Geldstapel. Es spielt keine Rolle, wie viel Geld auf dem Bild zu sehen ist, es nimmt trotzdem die gleiche Menge an Speicherplatz ein.

Beide dieser Bilder sind 1 MB groß:

![](/img/blog/grouphug-for-everyone/one-mb-dollar.jpg)
![](/img/blog/grouphug-for-everyone/one-mb-million-dollars.jpg)

In gleicher Weise kostet eine einfache Bitcoin-Transaktion, wie in unserem Fall 1 Eingabe und 2 Ausgaben, ungefähr das Gleiche, unabhängig davon, wie viel du kaufst. Aber wenn es einen Weg gäbe, die Anzahl der Ausgaben zu reduzieren, würdest du noch weniger zahlen.

Nun könnten einige Mitglieder unserer [Telegram-Community](https://t.me/peachtopeach) und andere leidenschaftliche Peaches sagen, dass wir das bereits haben, und in der Tat stimmt das!
Im September 2023, nach dem 1-jährigen Geburtstag von Peach, haben wir "Grouphug" veröffentlicht - eine Möglichkeit, wie Transaktionen auf Peach _gebündelt_ werden, sodass unsere Nutzer _bis zu 23 %_ an Mining-Gebühren sparen können, indem sie effektiv die Peach-Gebühr teilen.

Das überdenken und neu gestalten wir mit dieser Version!
Bitcoin ist magisch - aber es ist nutzlos, wenn du jemand anderem die Kontrolle darüber überlässt, anstatt es selbst zu nutzen. Du kannst [hier einen Rant darüber lesen.](https://peachbitcoin.com/blog/if-bitcoin-goes-to-1-million/)
Peach basiert auf dieser Erkenntnis und hat ein klares Ziel: Wir wollen so vielen Menschen wie möglich ermöglichen, diese Magie in ihrer vollen Pracht zu nutzen. Uns ist bewusst, dass Bitcoin etwas fundamental Neues und Unbekanntes ist, daher ist eines der wichtigsten Dinge, die wir bieten, _starke Voreinstellungen_. Peach macht es einfach, keine Fehler zu machen.

Es gab jedoch ein paar Probleme mit der Art und Weise, wie Peach funktionierte und dem standardmäßigen Erlebnis, das es unseren Nutzern bot, sowie mit der Konzeption der Batchverarbeitung, die insbesondere nach dem Gebührensturm während des Halvings deutlich wurde.

![](/img/blog/grouphug-for-everyone/halving-fee-storm.svg)
![](/img/blog/grouphug-for-everyone/high-fees-meme.jpeg)

Wie bereits erwähnt, sammelt Peach 2 % pro Handel, und diese Gebühren müssen irgendwann konsolidiert werden. Wenn wir uns jedoch die Mining-Gebühren ansehen, kamen wir zu der Erkenntnis: Wir haben uns selbst total verarscht. Als wir den Einfluss dieser Konsolidierungen auf die Rentabilität von Peach überprüften, lag die Mining-Gebühr bei etwa 100 Sat/vB, etwas, an das wir uns gewöhnt hatten.
Bei dieser Gebührenrate verlor jeder Handel mit einer Servicegebühr von weniger als 4100 Sats definitiv Geld, und bei einer Gebühr von 2 % bedeutete dies, dass der absolute Mindestbetrag, den wir auf Peach handeln lassen sollten, 205 000 Sats betrug (und unser Minimum lag bei etwa 1/10 davon).
Wieder einmal kommt all dies von der Notwendigkeit, für Konsolidierungen zu zahlen: Wenn wir 10 Geschäfte für 20 500 Sats hatten, die alle gruppiert wurden und uns eine einzelne UTXO im Wert von 4100 Sats gaben, wäre alles wieder in Ordnung.

Wir erkannten schnell das mächtige Werkzeug, das wir bereits in den Händen hielten, um unsere Probleme zu lösen, und träumten von einer Welt, in der jeder ein Group-Hugger wäre.

Das Setup, das wir zuvor hatten, nutzte 6 Eimer für verschiedene Gebührenraten und bündelte sie alle 12 Stunden. Dies führte sehr oft zu "gebündelten" Transaktionen, die eigentlich gar nicht gebündelt waren. Viele Eimer hatten nur einen oder sehr wenige Teilnehmer, sodass du nicht wirklich viel an Gebühren sparen konntest, wenn überhaupt. Auch aus geschäftlicher Sicht bedeutete dies, dass der Betrag, den Peach als Servicegebühr erhielt, relativ gering und daher auch teuer zu konsolidieren war.

Wir erinnerten uns an das Ziel von Peach: Den Massen zu ermöglichen, die Magie von Bitcoin zu erleben, ohne Kompromisse bei den Kernwerten einzugehen und starke Voreinstellungen anzubieten.
Als wir uns unsere Statistiken zur Gebührenpräferenz ansahen, stellten wir fest, dass praktisch alle Benutzer einfach die Standardgebühr von Peach übernommen hatten, was weiter bestätigte, dass dies letztendlich auch das ist, was unsere Benutzer wollen. Die meisten Nutzer stapeln, um zu sparen. Sie wollen ihre Sats einfach relativ schnell und relativ günstig erhalten und kümmern sich nicht allzu sehr um die Details, um dorthin zu gelangen.

Auf dieser Basis haben wir die Batchverarbeitung nach folgendem Modell vereinfacht und verbessert:
1 Eimer mit so vielen Teilnehmern wie möglich. Das Batch erfolgt frühestens nach 24 Stunden und die minimale Gebührenrate, die vom Eimer verwendet wird, ist die Halbstundengebühr. Wir warten auch, bis der Peach-Gebührenbetrag einen Mindestschwellenwert erreicht, bevor die Transaktion gesendet wird.
Wir machen das **Batching auch zum Standard!**
Das bedeutet, dass Auszahlungen etwas länger dauern werden als zuvor, aber wir glauben, dass unsere Nutzer wieder einmal Sats mit einer niedrigen Zeitpräferenz stapeln möchten, und wenn wir ihnen Gebühren sparen können, indem wir die Auszahlungen leicht verzögern, werden die Nutzer zufrieden sein.
Wenn diese Annahme nicht auf dich zutrifft, keine Sorge! Du kannst jederzeit aus dem Batching aussteigen und deine Transaktion sofort senden lassen. Das einzige, was sich hier ändert, ist, dass wir den Benutzer jetzt bitten, die zusätzlichen Kosten zu übernehmen, die dies für Peach bedeutet, insbesondere die zusätzlichen Konsolidierungskosten der Peach-Gebühr, die wir aus diesem Handel einziehen. Wir berechnen dies anhand der folgenden Formel: 41 \* HalfHourFee. Zum Zeitpunkt des Schreibens beträgt die Halbstundengebühr 10 Sat/vB, was bedeuten würde, dass 410 zusätzliche Sats an Peach gezahlt werden müssten.
Dies basiert auf der absoluten [Minimalgröße pro Eingabe.](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Consolidation)

Eine weitere Erkenntnis während des Gebührensturms war, dass wir eine Art Schutzmechanismus gegen Gebührenspitzen benötigen, bei denen Käufer viel mehr bezahlen als erwartet.
Zukünftig wird jeder Handel eine maximale Mining-Gebühr haben, die Peach standardmäßig auf 10 % des Handelsbetrags festlegt. Alles darüber hinaus nehmen wir an, ist das Ergebnis von Gebührenspitzen oder Benutzerfehlern (zum Beispiel der Kauf eines sehr kleinen Betrags, ohne sich der anfallenden Mining-Gebühren bewusst zu sein).
Das bedeutet einfach, dass Peach nicht über dieses 10%-Limit hinausgehen wird, wenn die Gebühren nach dem Match steigen.
Wenn jedoch dieses 10%-Limit bereits zum Zeitpunkt des Matchings überschritten ist, wird Peach einfach eine Warnung auf der Match-Karte anzeigen.

![](/img/blog/grouphug-for-everyone/fee-warning.png)

Wenn du dich dennoch entscheidest, mit dem Handel fortzufahren, sagen wir mal mit einer Mining-Gebühr von 15 %, wird dies als neues Maximum festgelegt. Mit anderen Worten, du wirst nicht mehr als 15 % zahlen, aber wenn die Gebühren sinken, zahlst du noch weniger.

Fassen wir also zusammen:
In Zukunft wirst du viel mehr an Mining-Gebühren sparen, da wir davon ausgehen, dass wir viel mehr Transaktionen in unseren Eimern haben werden. Wenn du dennoch möchtest, dass Peach die Transaktion sofort sendet, bitten wir dich, die zusätzlichen Kosten für Peach zu übernehmen, damit wir uns nicht selbst ruinieren. Peach wird auch Käufer davor schützen, eine erhebliche Menge an Mining-Gebühren zu zahlen, ohne sich dessen bewusst zu sein.
Wir hoffen, dass das Standarderlebnis für unsere Nutzer dadurch noch reibungsloser wird und sie, wie bereits zu Beginn erwähnt, diese Änderungen nur als angenehme Überraschung bemerken werden, wenn sie feststellen, dass sie weniger Mining-Gebühren als erwartet gezahlt haben, oder wenn sie davor geschützt werden, einen großen Teil ihres Handels für Mining-Gebühren auszugeben, ohne es zu merken.
Wenn du dich für die Details interessierst, kannst du den FOSS-Code [hier](https://github.com/Peach2Peach/groupHug/tree/6f1cb023c972eec1fc73989e39a53378313d7394) einsehen.

FRÖHLICHES PEACHING!

## FAQ:

- Kann ich als externer Teilnehmer dem GroupHug beitreten?
  - Ja! Der neue GroupHug erhebt eine pauschale Gebühr von 2 % für alle Teilnehmer. Im Vergleich zum vorherigen Modell wird die Teilnahme standardmäßig teurer, **aber:** da wir annehmen, dass durch 1. die Reduzierung der Anzahl der Eimer, 2. die Erhöhung der Mindestwartezeit und 3. das Batching zum Standard für alle Peach-Benutzer machen, das Potenzial, 23 % an Mining-Gebühren zu sparen, viel realistischer wird (je mehr Teilnehmer, desto mehr sparst du).
    Praktisch macht dies das Batching besonders attraktiv, wenn du eine Transaktion mit geringem Wert hast, die du während Gebührenspitzen senden möchtest.
- Welches ist der Mindestschwellenwert, den ihr vor dem Senden der Transaktion festlegt?
  - Wenn Peach das Unternehmen seine Einnahmen nutzt, müssen wir eine Konsolidierung durchführen und wie bereits erwähnt bedeutet dies zusätzliche Kosten. Der Schwellenwert, den wir festlegen, basiert auf dem Verlust, den Peach durch die Konsolidierung zum Zeitpunkt des Batching erleiden würde. Wir haben unser akzeptables Verlustlimit auf 2 % der Transaktion festgelegt.
    Jede UTXO der Peach-Gebühr, die vom Batching-Server erstellt wird, wartet also entweder darauf, dass die Gebühren sinken oder die Anzahl der Teilnehmer wächst, damit dieser Schwellenwert erreicht wird.
- Kann ich den Batch verfolgen, um zu sehen, wie viele Teilnehmer es gibt?
  - Ja! Derzeit ist es eine sehr minimale Anzeige in der Peach-App, die dir einfach die Anzahl der Teilnehmer zeigt, aber du kannst dir den Batching-Server wie seinen eigenen kleinen Mempool vorstellen. Mit der Menge an coolen Animationen, die du für den Mempool finden kannst, ist es nicht schwer, sich vorzustellen, dass in Zukunft ähnliche, detailliertere Übersichten hinzugefügt werden könnten.
- Was passiert, wenn der Batch nach 24 Stunden nicht gefüllt ist, wird er trotzdem gesendet?
  - Wir überprüfen den Status des Batchs jede Minute. Wenn nach 24 Stunden der Schwellenwert nicht erreicht ist, warten wir einfach weiter auf entweder mehr Teilnehmer oder niedrigere Gebühren. Wenn die Gebühren aus irgendeinem Grund einfach weiter steigen oder niemand dem Batch beitritt, senden wir ihn nach 1 Woche.
    Denke daran: Wenn du nicht länger warten möchtest, kannst du jederzeit aussteigen!
- Wie weiß ich, wie viel Mining-Gebühren ich zahlen werde und wie viel ich sparen werde?
  - Die verwendeten Mining-Gebühren sind die Halbstundengebühr zu dem Zeitpunkt, an dem der Verkäufer die Zahlung bestätigt. Je mehr Teilnehmer an einem Batch teilnehmen, desto mehr wirst du sparen, da der Peach-Gebührenausgang effektiv unter allen Teilnehmern geteilt wird.
- Ich möchte meine Sats so schnell wie möglich, wie kann ich das Batching deaktivieren?
  - Ganz einfach: Gehe einfach zu deinen Einstellungen in der Peach-App, öffne den Bereich für Transaktionsbatching und klicke auf den Schalter. Du musst jedoch die neueste Version (0.5.0) haben, da wir sicherstellen möchten, dass der Benutzer sich bewusst ist, dass dies etwas höhere Kosten bedeutet.
- Was ist mit kostenlosen Trades?
  - Auszahlungen für kostenlose Trades werden sofort gesendet, da es keinen Peach-Gebührenausgang gibt. Das bedeutet, dass du noch mehr an Mining-Gebühren sparst und den Vorteil von sofortigen Übertragungen hast. Du erhältst auch einen erheblichen Datenschutzvorteil, da der Peach-Gebührenausgang nicht existiert! Dies ist ein ziemlich tiefes Thema, das wir in Zukunft weiter erkunden werden, aber ein kostenloser Trade ist im Wesentlichen um ein Vielfaches privater als ein normaler Trade. Also, empfehle Benutzer an Peach, um Punkte zu sammeln und kostenlose Trades zu erhalten!

Als abschließende Bemerkung wollen wir auch klarstellen: Dies ist ein neues Fundament, aber keineswegs das endgültige Ziel. Wir haben bereits Ideen, wie wir dieses Modell noch besser machen, darauf aufbauen und die neuen Möglichkeiten, die es schafft, nutzen können.
Wenn du auch etwas zu teilen hast, würden wir uns freuen, von dir zu [hören](https://t.me/peachtopeach)!!
