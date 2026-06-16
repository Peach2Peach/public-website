---
title: Peach Web Trading Guide — Create Offers, Buy & Sell, Disputes
description: Trade bitcoin from the Peach web app — create buy and sell offers, fund escrow, complete trades and resolve disputes from your desktop.
---

# Web App Trading Guide

This guide walks through trading on the [Peach web app](https://web.peachbitcoin.com), from creating an offer to completing a buy or sell and handling disputes. Anything that moves bitcoin — like releasing the escrow — is always confirmed on your phone, since your keys never leave it. New to the web app? Start with the [Web App Quick Start](/web-app-quick-start/).

@[toc]

## Creating an offer

From **Create**, you can publish a new buy or sell offer. Choose the amount of BTC you want to trade, the payment method, and your premium or discount.

As you set it up, Peach shows you how your offer compares to the market:

- how many offers compete with yours by sharing at least one payment method;
- the average premium of recently completed offers with the same payment method;
- how many competing offers have a more attractive premium than yours.

If you publish an offer close to the daily **1,000 CHF** limit, a warning lets you know the offer will be withdrawn if the Bitcoin price rises by the shown percentage.

<!-- IMG: Create offer screen with competition stats -->

## Advanced options

The **Advanced options** section lets you fine-tune who can trade with you:

- **Instant trade** — as a seller you pre-fund the escrow; as a buyer you then have 1 hour to send payment instead of 12.
- **No new user** — excludes users with 0 trades from automatically trading with you. They can still send you a trade request.
- **Minimum reputation: 4.5** — excludes users with a lower reputation.
- **Badges** — filter out users who don't have the *Fast trader* and *Super trader* badges.
- **Filter by experience level** — choose *Experienced users only* to exclude users with fewer than 4 completed trades, or *New users only* to target an offer specifically at newcomers.
- **Create multiple offers** — tick this to publish several identical offers at once.

<!-- IMG: Advanced options -->

## Selling bitcoin

### Fund the escrow

When your sell offer is filled out, select **Review sell offer**, double-check everything, and click **Fund escrow**. You then have two ways to fund it:

- **Fund from an external wallet**, or
- **Fund via mobile app** — the offer appears in your Peach mobile app under **Trades > Sell**, where you tap **Fund escrow**. You can also reach it from **Settings > Mobile pending actions > Fund offer escrow**.

If you close the window while waiting, you can still track the funding transaction: go to **Trades > Pending offers**, click the offer, then **Show in explorer** to see in Mempool when it will confirm. You'll get a notification in both the Peach mobile app and Peach Web once it's done.

<!-- IMG: Review sell offer / Fund escrow -->

### Accept a trade request

When a buyer sends a trade request, you'll get a notification. Open it and you'll see **Chat**, **Reject** and **Accept**. You can receive several requests, but accepting one automatically declines the others.

Click **Accept**, then **Confirm**, and the trade contract opens. The buyer then has 12 hours to confirm payment sent for a regular trade, or 1 hour for an instant trade.

<!-- IMG: Trade request dialog -->

### Confirm payment and release bitcoin

When the buyer sends the transfer and marks the payment as done, you'll be notified. If you've genuinely received the payment, drag the **I've received the payment** slider.

You then re-confirm in the Peach mobile app, from **Trades > Sell > Confirm payment** or **Settings > Mobile pending actions > Declare payment confirmed**. After that, drag the **Release Bitcoin** slider to finish the release.

<!-- IMG: Release bitcoin slider -->

### Rate your counterparty

With the trade complete, rate your counterparty positively or negatively, based on how the interaction actually went.

## Buying bitcoin

Go to **Market > Buy BTC**, click the offer you want, and click **Request trade**. From there you can:

- click **Undo request** to withdraw it (this carries a penalty if you do it within the next 12 hours), or
- click **Chat** to talk to the seller.

When the seller accepts, you'll be notified that the trade has started. Send the payment, then drag the **I've sent the payment** slider.

Next, open the Peach mobile app and confirm from **Trades > Buy > Make payment** or **Settings > Mobile pending actions > Declare payment made**, then drag the **I made the payment** slider.

When the seller confirms they received the payment, a **Trade complete** dialog appears asking for a Positive or Negative rating. Once you've rated, you can review the full trade breakdown.

<!-- IMG: Buy flow / trade complete -->

## Disputes

If something goes wrong and you need a mediator, click **Open dispute** from the top-right corner, just above the trade chat. You'll receive notifications for dispute messages from both your counterparty and the mediator.

If you're declared the winner of a dispute, or the trade is canceled and you're refunded, you have two options:

- **Republish the offer** — free, because the escrow already exists.
- **Refund the escrow** — this incurs a transaction fee.

Drag the slider for whichever option you choose.

---

Need to set up payouts, fees or payment methods first? See the [Web App Settings Guide](/web-app-settings/). Got a quick question? Check the [Web App FAQ](/faq/web-app/).
