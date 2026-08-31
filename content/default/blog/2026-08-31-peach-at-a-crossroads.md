---
keywords:
  - Peach Bitcoin
  - KYC-free Bitcoin marketplace
  - Bitcoin escrow
  - Swiss regulation Bitcoin
  - P2P Bitcoin trading
  - self-custody Bitcoin
  - escrow-free trading
  - Peach compliance
tags:
  - Company
  - Rants and Opinions
previewImage: /img/blog/peach-at-a-crossroads/cover.jpg
description: |
  Peach is at a crossroads. A letter from our founder about how Peach started, how we became a KYC-free marketplace licensed in Switzerland, what the regulator decided this year, and why we are temporarily pausing the escrow.
---

# Peach at a Crossroads

**A letter from our founder.**

Dear Peach users, Peach community,

You have been loving Peach since 2022.

Today, Peach is at a crossroads.

Let me rewind the journey with you.

## How Peach started

I am Bitcoin class of 2018. *(@proofofsteph talking.)*

That year I went down the rabbit hole. 2019 was the maxi year. Bitcoin just blew my mind from so many different perspectives. I felt like I had found my crew and the right catalyst to help improve the state of the world. I was thinking about Bitcoin 24/7, traveled to so many meetups and conferences all over the world. Working in my fiat job wasn't a good use of my time and energy anymore. I had to align my brain power with my economic activity. How could I contribute? I am a builder, a leader and an entrepreneur at heart.

And just like that, Peach started in my head in 2020.

I initially built Peach for myself. How to acquire Bitcoin "the good way", without sacrificing privacy and security, but still through an easy-to-navigate platform?

The space was wide open. On one hand, I saw a bunch of trading platforms... Kraken, Coinbase, etc. It really sounded like it was for the crypto bros and the traders. On the other hand, I saw some smaller brokers, often founder-led. Really cool options, but most still required KYC and were not supported on mobile. And then I saw peer-to-peer marketplaces. Interesting choices to stack sats: KYC-free, decentralized order book meaning no honeypot of data, and many payment methods available including local ones.

And here enters Peach.

## What Peach was built to be

- **A cool and approachable everyday brand.** A brand that is welcoming to your wife, sister and grandma.
- **A mobile-first marketplace** built from scratch.
- **The best peer2peer experience in Bitcoin.** A product thought through in every corner for the user to feel like it's seamless, easy, secure and even fun. In Peach, the product is doing the tough work behind the scenes, the user just gets guided by the flow.
- **A back-end infrastructure for the team to manage dispute resolution,** directly inside the users' app.
- **All in self-custody,** with an embedded wallet built with bdk, encrypted payment data and chat messages with the user's PGP key.
- **And a KYC-free model,** with a company registered in Switzerland!

This is the last point I want to talk about today.

## KYC-free... and legal

KYC-free!!! 🤯 AND legal with regard to the dear fiat government laws!

I absolutely didn't want to open a business where the company would be responsible for the user's funds.

I absolutely didn't want to open a business where compliance would be my full-time job instead of product building.

So, miraculously, I found a way with the Swiss regulators. Back in 2022, I worked on a compliance case where I argued and presented the following:

- **Peach's trades are purely bipartite.** The seller funds the escrow with their own keys and the buyer signs a message confirming that the release address belongs to them. This is done under the hood when using the Peach wallet, and the user does it manually when using an external wallet.
- **The escrow mechanism and role are purely technical,** to ensure the trade's safety. The escrow is not a third economic party in transferring funds. All the outputs of the escrow are predefined before the contract between a buyer and a seller starts, and the output can't be altered. Even in the cases where the seller loses a dispute and the funds have to be sent to the buyer without the seller's signature — which happened at a rate of **0.03%** over the past year — the sats are sent to the buyer one hour after Peach gets a single sig of the escrow (4320 blocks after the escrow creation date).
- **The unique app device ID is hashed and stored,** ensuring one device is one account.
- **The payment data are hashed and stored,** ensuring one person is one account.

Based on those compliance mechanisms, Peach was allowed by a Swiss SRO in 2022 to run a KYC-free marketplace with daily and monthly trading limits.

## What changed this year

Peach got licensed in 2022 and got audited successfully by an independent audit company in 2023, 2024 and 2025.

But this year, the regulator has decided that the rule of yesterday is not the rule of today. You know... 1984 and all. What was true yesterday is not true today.

So, last month I received a letter. Despite a successful independent audit, the regulator — for an unknown reason — is arguing to requalify and reconsider the compliance agreement that they themselves approved some years ago.

I am not gonna lie to you, I knew from day 1 that it would happen one day or another. I often tweet *"Stack sats while you still can"* for a reason.

I am not giving up and complying yet. At least not without answering to the regulator. I will be fully honest too: if I lose the argument, I won't go against it either. Peach has been a legal business since day 1, and I intend to keep it this way.

## What happens now: escrow-free, temporarily

While the assessment of the situation is ongoing, we have decided to **pause the current Peach escrow model.**

Meanwhile, and temporarily until we get the final ruling, we have decided to keep operating... **escrow-free.**

Only the following users will be able to create sell offers:

- KYC'd users
- Special users that we whitelist manually (currently no one is whitelisted)
- Users with **zero lost disputes** AND more than **60 trades as a seller**
- Users with **zero lost disputes** AND more than **30 trades as a seller** AND more than **80 trades in total**

One detail: if a user is **not** KYC'd, they cannot be in more than **1 trade at a time.** This is a protection against one bad seller trying to scam multiple buyers at once.

The in-app dispute system will still be available to help out, but Peach won't have a signature in the escrow anymore.

We will also still take 2% fees out of the release transactions... to pay our bills, you know.

## The crossroads

I don't know what the future holds for Peach. What I know is that Peach is not just a marketplace. Peach is a brand, a reputation, a user base and a community.

Peach is now at a crossroads.

The p2p marketplace may or may not continue as usual with an escrow model.

Maybe the time has come to diversify. Peach is ideally positioned to develop a suite of self-custodial services, to become the Bitcoin companion you'll recommend to your wife, grandma and sister.

Maybe this route will have to continue without me.

The path will unfold over the coming weeks. I will keep you posted.

Thanks.
