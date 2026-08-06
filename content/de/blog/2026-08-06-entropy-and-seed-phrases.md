---
keywords:
  - Bitcoin Entropie
  - Seed Phrase
  - BIP39 Wortliste
  - wie Seed Phrases erzeugt werden
  - Bitcoin Selbstverwahrung Sicherheit
  - Zufallszahlen Wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  Ein peachiger Leitfaden dazu, was Entropie eigentlich ist, wie Seed Phrases funktionieren, woher Zufall wirklich kommt und wie sicher deine 12 Wörter sind.
---

# Ein peachiger Leitfaden zu Entropie, Seed Phrases und wie du sicher bleibst

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="Ein Cartoon-Pfirsich in blauer Latzhose rennt durch eine Wüste aus zerfließenden Uhren, Spielkarten, Taschenrechnern und schwebenden mathematischen Formeln, verfolgt von einem Dinosaurier" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Offenlegung: Dieser Artikel wurde ohne KI geschrieben. Das Titelbild allerdings schon.*

## Was ist Entropie?

Zum Anfang: Entropie ist ein Maß für Chaos.

Der Sinn ist nicht zu sagen, dass etwas X Entropie hat, sondern 2 Dinge vergleichen zu können und zu sagen, dass das eine mehr Entropie hat als das andere.

Zum Beispiel:

- ein zerbrochenes Ei hat mehr Entropie als ein perfektes Ei
- ein unordentliches Zimmer hat mehr Entropie als ein aufgeräumtes Zimmer

Und die interessanten Eigenschaften von Entropie sind:

- es ist leichter, Entropie zu erhöhen (Chaos zu erzeugen), aber schwer, Entropie umzukehren (Ordnung zu schaffen)
- die Welt lebt in einer ständigen Tendenz zur Entropiezunahme

Deshalb ist es leichter, etwas in einem aufgeräumten Zimmer zu finden als in einem unordentlichen, und deshalb wird das Zimmer mit der Zeit unordentlicher und du musst Energie aufwenden, um es zu putzen.

Die meisten Dinge in unserem Leben profitieren von niedriger Entropie. Bitcoin-Selbstverwahrung profitiert von hoher Entropie. Aber man kann sagen, dass Entropie subjektiv ist. Wenn ich meine Seed Phrase kenne, ist die Entropie meiner Wallet sehr niedrig. Sie ist nur für alle anderen hoch. Wenn ich allen 1 meiner Wörter verrate, reduziere ich die Entropie für sie, aber sie ist immer noch ziemlich hoch.

## Was ist eine Seed Phrase?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Fünf Keimlinge in zunehmenden Wachstumsstadien, die aus dunkler Erde sprießen" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(ein Samen, der zu einer Pflanze wird — dieselbe Idee steckt hinter dem "Seed" in Seed Phrase)*

Zuerst: Warum nennt man es einen Seed (Samen)? In Computern kommt der Zufall irgendwoher. Wenn wir einen Seed liefern, wächst der Zufall daraus, immer auf dieselbe Weise.

Eine Seed Phrase ist eine Konvention, um sich eine Zahl zwischen 0 und 340282366920938463463374607431768211455 zu merken. Ja, das ist eine große Zahl, und 12 englische Wörter helfen dir, deine besondere Zahl darin zu merken.

Der Trick ist, dass diese Zahl binär geschrieben werden könnte (etwa 01110010101… aber sehr lang). Also beschloss die Bitcoin-Community, eine Liste englischer Wörter zu erstellen und jedem davon eine Folge von 11 Bits zuzuordnen.

Zum Beispiel:

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 interessante Dinge:

- es gibt Wortlisten für Englisch, Portugiesisch, Chinesisch, Koreanisch, Französisch, Spanisch, Italienisch und Tschechisch;
- damit Leute beim Eingeben ihrer eigenen Seed Phrase keinen Fehler machen, gibt es ein System, das dir mitteilt, dass du einen "falschen" Seed eingegeben hast, sodass du nicht einfach eines deiner Wörter vertauschen, eine leere Wallet öffnen und einen Schreck bekommen kannst.

## Reichen 12 Wörter aus?

Die Menge an Zahlen, die mit den 12 Wörtern dargestellt werden kann, ist gewaltig, und sie gilt als sicher. Wenn du dir die 12 Wörter leichter merken willst und sie in zufälliger Reihenfolge auf einem Blatt Papier bei dir zu Hause aufschreibst, ist das immer noch relativ sicher: Es wird jemanden seeeehr lange dauern, alle Kombinationen dieser 12 Wörter durchzuprobieren.

Natürlich bedeuten mehr Wörter mehr Raum, also schwerer zu erraten. Aber manchmal ist genug einfach genug.

12 Wörter allein würden einen schnellen Computer 10 Milliarden Jahre kosten, um all diese Zahlen zu prüfen und alle 12-Wort-Bitcoin-Wallets zu "stehlen". Wenn du die gesamte Bitcoin-Mining-Leistung zusammennimmst und aufs Erraten der Seeds umlenkst, würde sie 11 Tausend Jahre für dasselbe brauchen.

Für mich ist das tragfähig. Aber ein zusätzliches Wort erhöht die Zeit noch viiiiel mehr. Deine Entscheidung!

## Wie werden diese Seeds erzeugt?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Comicstrip: Bei einer Führung durch die Buchhaltung wird der Zufallszahlengenerator vorgestellt, ein Troll, der neun, neun, neun, neun wiederholt. Bist du sicher, dass das zufällig ist? Das ist das Problem mit Zufall: Man kann nie sicher sein." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, von Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Zufällig. Allerdings ist Zufall eine Illusion: Nichts ist wirklich zufällig.

Erinnerst du dich, als du in der Schule warst und die Lehrkraft einen zufälligen Schüler an die Tafel holen wollte? Sie nahmen nie Schüler #1, aber Schüler #7 wurde immer "zufällig" ausgewählt.

Computer können nichts Zufälliges erzeugen. Aber sie können Pseudozufall erzeugen. Zum Beispiel können sie die Temperaturwerte des Systems der letzten 30 Minuten nutzen, plus das Licht, das durch die Webcam hereinkommt, plus die Internetgeschwindigkeit, plus Maus-/Tastaturverhalten usw. als Zufallsquellen. Das Ziel ist, Zufall aus Quellen zu gewinnen, die praktisch unmöglich zu kontrollieren sind.

Ein berühmtes Beispiel ist Cloudflares Zufall mit Lavalampen. Sie besitzen viele Lavalampen, filmen sie ständig mit einer Webcam, und die unvorhersehbaren Muster der Lavablasen werden als Zufallsquelle genutzt.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="Eine Wand mit Dutzenden bunten Lavalampen, aufgereiht auf Regalen in einer Bürolobby" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Cloudflares Wand aus Lavalampen in San Francisco, rund um die Uhr gefilmt als Zufallsquelle)*

## Warum wurden dann manche Seeds entdeckt?

Beim Coldcard-Vorfall gab es einen Fehler im Code, der eine schlechte Zufallsquelle verwendete. Sobald die Hacker bemerkten, dass der Zufall nur eine Kombination einfacher Faktoren war, engte das die Möglichkeiten ein, und es wurde zu einer Frage des Durchsuchens dieser Kandidaten.

Nochmal: Entropie ist subjektiv. Sobald jemand einen "Hinweis" hat, sinkt die Entropie. Noch ein Hinweis, und die Entropie sinkt weiter.

Beispiel: Stell dir vor, ich habe ein sehr hohes Bücherregal, gefüllt mit Büchern. Ich habe dir gesagt, dass in einem der Bücher ein 5-Euro-Schein versteckt ist. Es wird sehr schwer sein, ihn zu finden. Aber du schaust dich um und bemerkst, dass ich keine Leiter habe, um zu den ganz hohen Stellen des Regals zu klettern. Also glaubst du, dass der 5-Euro-Schein in den ohne Leiter erreichbaren Büchern sein muss. Du konzentrierst deine Bemühungen auf die richtigen Kandidaten und wirst 5 Euro reicher 🙂

## Wie erzeugt Peach Seeds für die Peach Wallet?

Peach ist eine mobile App, hat also Zugriff auf die sichere Pseudozufallsquelle des Mobiltelefons. Einfach gesagt: Sie verlässt sich auf den Zufall des Mobiltelefons, der auch für viele andere Sicherheitsaspekte des Telefons genutzt wird.

Aber wie bekommt das Telefon diesen Zufall? Es erzeugt einen Zufallstopf mit physikalischen Werten:

- die Startzeit aller Apps/Dienste des Telefons + wie lange der Start gedauert hat (bis auf ein Millionstel einer Millisekunde)
- elektrisches Rauschen in den Schaltkreisen: hochgradig unvorhersehbar und sehr temperaturempfindlich
- wie dein Telefon "berührt" wird: das Timing der Berührungen, die genaue Position der Berührungen, wie lange sie dauern usw.
- Beschleunigungssensorwerte: wie sehr dein Telefon geschüttelt wurde, die aktuelle Neigung, aktuelle und vergangene geografische Koordinaten (inklusive Höhe)
- viele weitere Dinge (z. B. Lichtintensität an der/den Kamera(s), Ton vom Mikrofon usw.)
- ein Teil des vorherigen Zufallstopfs von vor dem Aus- und Einschalten des Telefons

Mit anderen Worten: Dein Telefon wäre längst gehackt, wenn diese Entropiequelle schlecht wäre.

## Fazit: Bin ich sicher?

Manche Leute würfeln, um ihre Seeds zu erzeugen, was tatsächlich eine gute Entropiequelle ist (es sei denn, du hast gezinkte Würfel, und jemand hat Zugriff auf diese gezinkten Würfel. Verbrenne sie nach Gebrauch, wer weiß!?). Manche "vertrauen" den digitalen Zufallsquellen, indem sie den Code lesen, der zu ihrer Erzeugung verwendet wird, aber nicht jeder ist Ingenieur. Du kannst eine KI fragen, ob eine bestimmte Software gut zum Erzeugen von Seeds ist, aber in diesem Moment vertraust du der KI.

Hardware-Wallets machen deinen Seed nicht schwerer zu erraten, sie verringern nur die Gefahr, dass Hacker Zugriff auf eine Datei mit den Seeds bekommen.

Bitcoin ist schwer, Eigentümer des eigenen Geldes zu sein ist schwer, aber es lohnt sich. Mach deine eigene Recherche, folge keinen Trends, und alles wird gut.

Eine Sache, die ich empfehle: die Memory-Palace-Technik zu entwickeln, um deine Seed Phrase im Kopf zu speichern.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Albumcover mit einem riesigen Betongebäude in Form eines Kopfes, das unter einer blassen Sonne in der Wüste steht" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(das Cover des Musikalbums "Memory Palace" der Band "Intervals")*

Happy peaching 🍑

---

## Abschließende Hinweise

Wenn du mehr über die Funktionen von Peach erfahren oder unsere anderen Artikel lesen möchtest, findest du sie hier!

[Du brauchst eine Hardware-Wallet](https://peachbitcoin.com/de/blog/you-need-a-hw/)
[Wie du deine Peach Wallet aus einer Seed Phrase wiederherstellst](https://peachbitcoin.com/de/blog/how-to-restore-peach-wallet/)
[Wie man Bitcoin P2P mit Peach kauft](https://peachbitcoin.com/de/buy-bitcoin-no-id/)
[Was ist GroupHug und wie spart es Gebühren?](https://peachbitcoin.com/de/blog/group-hug/)
[Warum P2P? Die Grundlagen](https://peachbitcoin.com/de/blog/why-p2p-chapter-1/)
[Triangulationsbetrug auf P2P-Märkten](https://peachbitcoin.com/de/blog/triangulation-scams/)

Wenn du mehr über uns erfahren möchtest, schau dir unsere Socials an oder [kontaktiere uns](mailto:hello@peachbitcoin.com) einfach (nutze unseren [PGP-Schlüssel](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com), wenn möglich) wir freuen uns von dir zu hören!

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Verbreite das Peach-Wort weiter, wer weiß, wann du das Match deines Lebens findest!
