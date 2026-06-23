---
title: Newsletter — May 2026 — Peach Web in a sea of KYC
ogTitle: Peach Web is coming — buy & sell Bitcoin P2P from your browser, no KYC
ogDescription: Peach Web launches soon — P2P Bitcoin trading from your browser, on desktop and mobile, no KYC. Plus DAC8, the Bisq exploit, and the May 2026 Peach marketplace stats.
twitterDescription: Peach Web launches soon — P2P Bitcoin from your browser, no KYC. Plus DAC8, the Bisq exploit, and the May 2026 Peach marketplace stats.
keywords:
  - Peach Web
  - P2P Bitcoin marketplace
  - buy Bitcoin without KYC
  - sell Bitcoin without KYC
  - no KYC Bitcoin exchange
  - DAC8
  - EU Bitcoin surveillance
  - Bisq exploit
  - Bitcoin in the browser
  - Peach Bitcoin newsletter
tags:
  - Newsletter
previewImage: /img/blog/newsletter-may-2026/peach-web-island-of-safety.png
description: |
  Peach Web is coming — buy and sell Bitcoin P2P from your browser, on
  desktop and mobile, without KYC. Plus a hard look at where Bitcoin
  kidnappings really come from, a word on the Bisq exploit, and the
  latest Peach marketplace stats.
---

# Newsletter — May 2026 — Peach Web in a sea of KYC

![Peach Web — an island of safety in a sea of KYC](/img/blog/newsletter-may-2026/peach-web-island-of-safety.png)

Hi Peaches 🍑

Bitcoiners are getting kidnapped because of our governments' incapability. Banning VPNs, pushing age verification, all in a nice "protect-the-children" hypocrite virtue-signaling wrap. Seems like the EU only wishes to turn privacy-cautious people into second-class internet surfers.

More on that below. But first, let's talk about the happy things people are building.

We told you already, but let us re-iterate:

## Peach Web is coming. 🍑

While Europe was busy building surveillance infrastructure, we are building something else. Something to expand the tool-set for people choosing to resist.

**Very soon**, you will be able to use Peach from the comfort of your browser, on desktop and on mobile.

**Peach Web** is a nearly-full browser-based version of the app. **Log in by scanning with the mobile app**, like you would with WhatsApp Web. View the market, establish a strategy, start a trade. Same marketplace. Same 50+ payment methods. Same KYC-free P2P trading.

The only difference with the mobile app: **your bitcoin keys stay on your phone**. **Mobile actions**, which we internally also call pending tasks, route back to mobile because that is where your keys live, and there is no way for the browser to perform those tasks alone.

What will still require confirmation in the mobile app:

- typical wallet activity like sending / receiving sats (ofc)
- funding an escrow (unless you use your own wallet)
- releasing the escrow
- refunding a sell offer
- declaring a payment as done, from the buyer's POV (unless you add a custom payout address)

Everything else works directly in your browser.

More access points means more people can reach the marketplace. Desktop traders. People who just want to browse before they commit to a download. More buyers and sellers means tighter spreads and faster matches for everyone.

**Also, iPhone users will finally have their way out of TestFlight!**

Worth noting: the OG mobile app with all its functionalities will _stay_ in TestFlight. We will publish a new, stripped-down version of the app, which we call **Peach Wallet**, on the main app store. That one will have only core wallet functionalities and will pair nicely with the web app. It will need the browser (which can be your phone's browser of course) to function.

We are not flipping the switch yet. But we are close.

Sneak peek bonus:

![Peach Web on desktop preview, light and dark](/img/blog/newsletter-may-2026/peach-web-preview.jpeg)

![Peach Web — mobile](/img/blog/newsletter-may-2026/sneak-peek.png)

Btw, you can already try the web app in test environment — just reach out to us in the [Telegram group](https://t.me/+aFiiS_vfsERjYmJk) and we'll set you up.

Watch this space 🍑

![Surveillance ain't getting lighter](/img/blog/newsletter-may-2026/surveillance.png)

Now let's talk about the world your Bitcoin lives in.

## Surveillance ain't getting lighter

Someone built a [map](https://www.google.com/maps/d/u/0/viewer?mid=1PVCPOWmt3VRp-iVtiiyfOsG3Ht6S2sk) tracking every documented physical attack on Bitcoin holders in France.

These attacks share one thing: attackers knew who to target. They knew someone held Bitcoin. They knew roughly how much. They knew where to find them.

Think about **where that information comes from.**

You know the culprit: **forcing platforms and people to KYC** and report their holdings to centralized honeypots. We're not blaming the government for leaking crucial data (we all know how extremely difficult it is to keep large amounts of precious data safe in the internet world). **We're blaming it for collecting the data in the first place.**

The EU's response to this mess? Build a bigger database. Even more centralized, even more attractive to hackers. It will start seriously growing in June, and will include all data since January. It requires every exchange operating in the EU to automatically share user data and transaction history with tax authorities across all 27 member states. One honeypot. It's coming to life thanks to a directive called **DAC8**.

And while they are at it: the same institutions pushing mandatory age verification for online platforms are failing to have any serious inquiry into the Epstein affair. These are also the people now exploring restrictions on VPNs.

"Protecting the children." **Sure.**

**Nothing to hide. Everything to protect.**

**Selling on Peach is _KYC-free_ and FREE of charge. AND you can sell bitcoin at a price higher than what you would get on centralized exchanges.**

[See our orderbook.](/kycfree-orderbook/)

**Buying on Peach means you are _not_ paying with your data, and putting your entire life at risk (not an exaggeration).**

## A quick word for Bisq

Bisq is the most OG P2P Bitcoin protocol in the space, and a project we genuinely respect and root for. On May 1st, Bisq was exploited. Some BTC was stolen through a protocol-level vulnerability.

Bisq disclosed everything publicly and promptly. They have already patched the vulnerability, are hardening the codebase, and are working on full reimbursement for affected users. That is how open source should work.

There is also a harder lesson buried in their post-mortem. The exploit was likely AI-assisted. AI tools can now scan codebases for vulnerabilities with speed and depth that manual review cannot match. Bisq developers reproduced the full attack path using AI in a fraction of the time it took manual inspection. The attacker almost certainly used a similar approach.

This is the new normal. Security audits have to keep up, as we absolutely intend to do.

_Do not keep more BTC in your hot wallet than you need_ for active trading. That advice applies to any hot wallet on any platform, including ours. Keep only what you need for the trade. Move the rest to cold storage.

![What's new on Peach — May 2026 app improvements](/img/blog/newsletter-may-2026/app-improvements.png)

## App improvements

A summary of what's new on Peach.

We are preparing the field for the web, so lots of changes are not visible to the eye.

- ✅ One key thing we have introduced is the ability to **restore your entire account from seed alone**. The file backup is still practical, so we'll leave it there, but the seed will now get you to the same point as the file backup — IF you created the seed after April 26th.
- ✅ **Premium cap restored at 35%.** We tried to let the market find its limits by itself — no ceiling, no floor — but some silly numbers like 7,988% premium started to pop up. Inattention error at best, scam attempt at worst. So we decided to restore some guardrails, but higher than they were initially, so you can still make high-profit small trades with new users!

We wrote about all of this in detail on the blog:

- [New to Peach? How to Build Your Reputation Fast](/blog/new-buyer-reputation)
- [The Seller's Guide: High-Margin Trades with New Users](/blog/sell-bitcoin-new-user-arbitrage)
- [Premium Cap Removal: Free Market Pricing](/blog/premium-cap-removal)

![Peach market update](/img/blog/newsletter-may-2026/stats-hero.png)

## Peach market update

Some stats from March 19 to May 10.

Below you'll find a recap of the most important stats from the previous months. **Let us know if you'd like to see any chart or metric that doesn't appear here.**

**TL;DR**

- **Volume is consolidating** at an average of **CHF 683k / month**.

| Metric | Value |
| --- | --- |
| Total amount traded | 1,861,732,053 sats — CHF 1,117,929.98 |
| Average BTC price | CHF 60,096 (€65,584) |
| Avg. SELL offers / day | 114 (3,804 sell offers in 34 days) |
| Avg. PREMIUM in April | 8.85% — very high in early April. Now much cooler at **5.1% in May**. |
| Median time to complete a contract | 21 minutes (from offer published to payment made) |
| Number of finished trades | 4,080 |
| Average trade amount | 455,876 sats — CHF 274 |

Big win — it's fast to complete a trade with Peach, if the trade goes smooth and you use instant payments.

---

Every word of this email has been typed by human hands. No AI.

Want to stay up to date on our journey? Follow us on our socials!

Still don't know how to use our app? Take a look at our [Quick Start Guide](/quick-start-guide).
