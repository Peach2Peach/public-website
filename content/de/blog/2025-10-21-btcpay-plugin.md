---
keywords:
  - BTCPay Server
  - Bitcoin payments
  - sell bitcoin
  - P2P exchange
  - self-custodial
  - KYC-free
  - merchant tools
  - Peach Bitcoin
  - BTCPay plugin
tags:
  - BTCPay Server
  - Bitcoin payments
  - Sell bitcoin
  - P2P exchange
  - Self-custodial
  - KYC-free
  - Merchant tools
  - Peach Bitcoin
  - BTCPay plugin
previewImage: /img/blog/btcpay/BTCPay.png
---
# Einführung des Peach Bitcoin Plugins für BTCPay Server: Ermöglichen Sie Händlern, Bitcoin mühelos zu verkaufen

<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/CGx9LYGTKj8?si=kVrF-PgImNrN1wKg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

In der Welt des **Bitcoin**-Handels stehen Händler, die selbst gehostete Zahlungslösungen wie BTCPay Server nutzen, oft vor einer Herausforderung: Was tun mit den Bitcoins, die sie von Kunden erhalten? Obwohl Bitcoin ein hervorragendes Medium für internationale Überweisungen und Wertspeicherung ist, machen geschäftliche Bedürfnisse – wie der Kauf von Waren in Fiat, die Deckung täglicher Ausgaben oder das Absichern gegen Preisvolatilität – das Halten jedes Satoshis unpraktisch. Hier kommt Peach Bitcoin ins Spiel – mit einer innovativen Lösung: einem speziellen Plugin für den BTCPay Server, das Händlern ermöglicht, Verkaufsangebote für alle oder einen Teil ihrer erhaltenen Bitcoins direkt aus ihrer Hot Wallet zu veröffentlichen.

## Was ist Peach Bitcoin?

Peach Bitcoin ist eine selbstverwahrende, verschlüsselte, KYC-freie Peer-to-Peer (P2P) Bitcoin-Börse, die für datenschutzbewusste Nutzer entwickelt wurde. Im Gegensatz zu zentralisierten Börsen, die Identitätsnachweise verlangen und häufig Benutzerdaten gefährden, ermöglicht Peach direkte Transaktionen zwischen Individuen ohne Zwischenhändler. Alle Transaktionen sind verschlüsselt, und die Nutzer behalten jederzeit die volle Kontrolle über ihre Gelder. Dies macht Peach zur idealen Plattform, um Bitcoin sicher und anonym zu kaufen und zu verkaufen. Mit der mobilen App verbindet Peach Käufer und Verkäufer weltweit und unterstützt verschiedene Zahlungsmethoden, wobei die Souveränität der Nutzer im Mittelpunkt steht.

## Die Herausforderung für BTCPay-Händler

BTCPay Server ist ein leistungsstarker, quelloffener Bitcoin-Zahlungsprozessor, der es Händlern ermöglicht, Bitcoin-Zahlungen zu akzeptieren, ohne auf Drittanbieter angewiesen zu sein. Da er selbst gehostet ist, behalten Sie die Kontrolle über Ihre Schlüssel und Daten – im Einklang mit dem dezentralen Ethos von Bitcoin. Sobald Zahlungen jedoch eingehen, müssen Händler oft einen Teil oder alle Bitcoins in Fiat umwandeln. Gründe dafür sind:

- **Wareneinkäufe**: Viele Lieferanten akzeptieren nur Fiat und verlangen traditionelle Währungen.
- **Internationale Überweisungen**: Auch wenn Bitcoin hier glänzt, kann die Umwandlung in lokale Fiatwährungen notwendig sein.
- **Tägliche Ausgaben**: Gehälter, Miete, Strom und Betriebskosten verlangen oft Fiat-Liquidität.

Ohne eine einfache Möglichkeit, Bitcoin zu verkaufen, sind Händler dem Risiko von Preisschwankungen ausgesetzt, die Gewinne schmälern können.

## Unsere Lösung: Das Peach Bitcoin Plugin für BTCPay Server

Um dieses Problem zu lösen, hat das Peach-Team zusammen mit dem Entwickler Nisaba (@nisaba) ein spezielles Plugin für BTCPay Server entwickelt. Dieses Open-Source-Tool integriert sich direkt in Ihre BTCPay-Instanz und ermöglicht es Ihnen, Verkaufsangebote auf der Peach-Börse mit nur wenigen Klicks zu veröffentlichen – direkt aus Ihrer Hot Wallet.

### Hauptfunktionen
- **Ein-Klick-Verkaufsangebote**: Wählen Sie den zu verkaufenden Bitcoin-Betrag (alle oder einen Teil der erhaltenen Mittel) und veröffentlichen Sie sofort ein Angebot. Kein Transfer auf andere Wallets nötig.
- **Selbstverwahrendes Design**: Gemäß den Prinzipien von Peach behalten Sie die volle Kontrolle über Ihre Schlüssel. Weder Peach noch BTCPay verwahren Ihre Gelder.
- **Premium-/Rabattpreise (relativ zum Standard-KYC-Kurs)**: Legen Sie beim Erstellen eines Angebots eine **Prämie** (z. B. +2 %) oder einen **Rabatt** (z. B. −1 %) im Vergleich zum aktuellen KYC-Kurs fest. So können Sie bei hoher Nachfrage mit einem kleinen Aufschlag verkaufen.
- **Nahtlose Integration**: Das Plugin nutzt die Hot Wallet Ihres BTCPay-Servers und ermöglicht automatische oder manuelle Verkäufe.
- **Open Source und transparent**: Der Code ist vollständig offen unter [https://github.com/Nisaba/btcpayserver-plugins/tree/master/BTCPayServer.Plugins.Peach](https://github.com/Nisaba/btcpayserver-plugins/tree/master/BTCPayServer.Plugins.Peach) einsehbar.

Mit diesem Plugin können Händler ihre BTCPay-Installation in ein vollständiges Bitcoin-Management-Tool verwandeln: Zahlungen annehmen, gewünschte Beträge halten und den Rest gewinnbringend verkaufen – ohne Ihre Umgebung zu verlassen.

## Installation und Verwendung

Installation für BTCPay-Admins:

1. Melden Sie sich im BTCPay-Dashboard an.  
2. Navigieren Sie zu „Plugins“.  
3. Suchen Sie nach „Peach“.  
4. Installieren und konfigurieren Sie das Plugin mit Ihrem Peach-Account.

Nach der Installation:

- Öffnen Sie den Peach-Bereich in BTCPay.  
- Wählen Sie den zu verkaufenden Bitcoin-Betrag.  
- **Legen Sie eine Prämie oder einen Rabatt fest**.  
- Veröffentlichen Sie das Angebot.  
- Überwachen Sie den Handel über die Peach-App oder Weboberfläche.

Weitere Details finden Sie in der [Entwicklerdokumentation](https://github.com/Nisaba/btcpayserver-plugins/blob/master/BTCPayServer.Plugins.Peach/README.md).

## Warum das wichtig ist

Mit zunehmender Bitcoin-Adoption überbrücken Tools wie dieses die Lücke zwischen dem Empfangen von Bitcoin-Zahlungen und dem Finanzmanagement. **Durch das Setzen einer Prämie oder eines Rabatts gegenüber dem KYC-Kurs** können Händler Marktbedingungen zu ihrem Vorteil nutzen und gleichzeitig Selbstverwahrung, Privatsphäre und Dezentralisierung wahren.

Wenn Sie ein BTCPay-Händler sind, probieren Sie das Peach-Plugin aus – ein Schritt hin zu mehr finanzieller Souveränität im Bitcoin-Ökosystem.
