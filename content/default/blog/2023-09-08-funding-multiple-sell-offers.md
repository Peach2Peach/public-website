---
keywords:
  - selling bitcoin
  - escrow
  - batched transaction
tags:
  - How To
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  Starting from version 0.3.0, Peach App introduces the ability to create and fund multiple sell offers. Here is how it works.
---

# How to Fund Multiple Sell Offers

Starting from version 0.3.0, Peach App introduces the ability to create and fund multiple sell offers. This feature offers two primary advantages:
- **save time**, no more repeated tapping in buttons
- **save fees**, fund all escrows in a single transaction: for example batching 5 payments into a single transaction can easily save you 60% in transaction fees.


## How it works
### Funding from peach wallet
Funding your sell offers from your Peach Wallet is the simplest option. When you click on the "fund from peach wallet" button, the Peach App handles everything for you. It creates a funding transaction that sends the necessary funds to each escrow address automatically.

### Funding from external wallet
If you prefer using an external wallet, you can still fund multiple sell offers, but it involves a two-step process:

1. **send sats to an Internal Peach Wallet Address**: The address you see is an internal Peach Wallet address specially registered for this purpose. The Peach App keeps an eye on this address until your offers are either canceled or the address is funded.
2. **funding and Distribution**: Once sats arrive at this internal address, the Peach App's logic divides the funds among the sell offers you've created and sends them to the individual escrow addresses.


## FAQs
While reading you may have asked yourself one of these questions. I have asking them myself too, so I would like to give you an answer straight away.

:::details Why not a single escrow for many sell offers?
Indeed, we have been contemplating how we can have just one escrow out of which many sell offers can be served.
The reason we are not using one single escrow is that it will make payouts much harder to do.
In the current setting escrows are paid out in full in a single transaction and it's done. However, if we were to pay out an escrow partially to buyer A, the nature of bitcoin transaction would leave us with a change output of the sats that have not been spent yet. For simplicity sake, let's say the change goes back to the same escrow address. 
We are still left with another problem to solve: pending transactions. Imagine the first release transaction to buyer A is pending at 8 sats / vB but the network currently only processes transactions with 21 sats / vB and higher. If we start another release transaction to buyer B while it's still not confirmed, buyer B will have to spend more transaction fees to get the transaction confirmed sooner.
:::

:::details Why can't I create 2 sell offers at once?
For the 2-step process, fees are saved for funding 3 escrows or more. To avoid incurring more fees, we don't allow batched funding two sell offers.
:::

:::details I can batch my own transactions, do I need to do the 2-step process?
At the moment, yes. But we will release an update soon to create multiple sell offers without being shown the intermediary funding address.
:::

## Final Notes

If you want to know more about Peach features, or read some of our other articles, you can find them here!

[How to Recover Bitcoin Wallets Using a Seed Phrase](https://peachbitcoin.com/blog/how-to-restore-peach-wallet/ )

[How to Fund Multiple Sell Offers](https://peachbitcoin.com/blog/funding-multiple-sell-offers/ )

[How to buy and sell Bitcoin with cash using Peach](https://peachbitcoin.com/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/ )

[How to add a new payment method on the Peach app](https://peachbitcoin.com/blog/how-to-add-a-payment-method/ )

[Peach expands to the Global South!](https://peachbitcoin.com/blog/peach-expands-to-the-global-south/ )

[Making our Peach-API Public](https://peachbitcoin.com/blog/making-our-peach-api-public/ )

[Full Wallet Functionality](https://peachbitcoin.com/blog/full-wallet-functionality/ )

[What is GroupHug?](https://peachbitcoin.com/blog/group-hug/ )

[Why P2P series? Chapter 1](https://peachbitcoin.com/blog/why-p2p-chapter-1/ )

[Why P2P series? Chapter 2](https://peachbitcoin.com/blog/why-p2p-chapter-2/ )

[Why P2P series? Chapter 3](https://peachbitcoin.com/blog/why-p2p-chapter-3-circular-economies/ )

[Why P2P series? Chapter 4](https://peachbitcoin.com/blog/why-p2p-chapter-4-chains-of-trust/ )

[Peach x meetups](https://peachbitcoin.com/blog/peach-for-meetups/ )



If you want to know more about us, check out or socials, or simply [contact us](mailto:hello@peachbitcoin.com) (use our [PGP key](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) if possible) we'll be happy to hear from you!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Keep spreading the Peach word, who knows when you'll find the match of your life!
