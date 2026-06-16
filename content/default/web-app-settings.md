---
title: Peach Web Settings Guide — Payment Methods, Fees & Payouts
description: Configure the Peach web app from your desktop — payment methods, network fees, transaction batching (Group hug), refund and custom payout addresses.
---

# Web App Settings Guide

Everything you can configure from **Settings** in the [Peach web app](https://web.peachbitcoin.com) is covered here. Your account — and the keys to your bitcoin — always stay on your phone, so changes you make on the desktop sync back to the mobile app. New to the web app? Start with the [Web App Quick Start](/web-app-quick-start/).

@[toc]

## Back up your account

If you have just created your account, make a backup first. Open **Settings > Backup**.

Your Peach wallet private keys live on your mobile device — they are never on the web. Because of that, **backups can only be created and restored from the Peach mobile app**. This is by design, so your bitcoin private keys never leave your phone.

<!-- IMG: Settings > Backup screen -->

## Payment methods

From **Settings > Payment methods** you can create, modify or delete your payment methods. Changes sync to your phone — they become visible in the mobile app the next time you reopen it.

<!-- IMG: Settings > Payment methods -->

## Network fees

From **Settings > Network fees** you choose how the on-chain fee is set when bitcoin moves:

- **Dynamic fees** — Peach calculates the fee based on current blockchain activity.
- **Custom value** — you set the fee yourself. If you do, it's worth checking the current trend on [mempool.space](https://mempool.space) first.

<!-- IMG: Settings > Network fees -->

## Transaction batching (Group hug)

From **Settings > Transaction batching** you can turn **Group hug** on or off.

Group hug combines multiple payouts into a single Bitcoin transaction, which reduces the on-chain fee per payout. When it's disabled, each escrow payout is broadcast immediately as its own transaction.

**When is it worth it?** If you plan to make several purchases in a day and you're not in a hurry to receive the bitcoin the moment each trade completes, batching with Group hug is the cost-efficient choice.

<!-- IMG: Settings > Transaction batching -->

## Refund address

From **Settings > Refund address** you can set a custom address to receive bitcoin refunded from the escrow of a sell offer — for example if the offer gets canceled.

Leave it blank and refunds are handled by the built-in Peach wallet.

<!-- IMG: Settings > Refund address -->

## Custom payout address

From **Settings > Custom payout address** you can set an external Bitcoin wallet to receive your sats after each completed trade. This is for when you'd rather not use the built-in Peach wallet.

- **One address for everything** — if you want every purchase sent to the same address, you only need to configure it once.
- **A fresh address per trade** — if you prefer a new address each time to maximise privacy, update the address and sign a new message after every completed trade.

Ownership of the address must be verified with a **BIP322 signature**. For a full walkthrough, watch our video: [How to set a custom payout address](https://www.youtube.com/watch?v=rwNmPxBWQ6k).

<!-- IMG: Settings > Custom payout address -->

---

Ready to trade? See the [Web App Trading Guide](/web-app-trading/). Got a quick question? Check the [Web App FAQ](/faq/web-app/).
