# Trading FAQ

:::details How can I be sure I get the bitcoin / the money?

When making a sell offer, the seller sends the bitcoin to an address that is controlled by him and Peach: the bitcoin can only be moved from here, if he and Peach both sign off on it. This makes sure that:

- The seller cannot move the bitcoin (back) on his own
- Peach cannot steal the bitcoin
- The buyer doesn't get the bitcoin until the payment is made
- The seller can get the bitcoin back if the buyer doesn't respond

If the trade doesn't resolve normally, this address automatically comes into full control of Peach after roughly 30 days (to be precise: when 4320 bitcoin blocks have been mined). This makes sure that:

- The buyer can get the bitcoin if he can prove he made the payment but the seller doesn't respond
- The bitcoin doesn't get stuck if something happens to the seller

This is the most important part of securing your trade. Next to that, there's also our intricate reputation system, that helps you identify people who have been using Peach reliably for a long time.
:::

:::details Why is there a trading limit?

Swiss regulations state that a person can only buy up to 1000CHF of bitcoin per day, without providing their identification to the seller. Since we'd prefer staying out of jail, we enforce this limit in the app.

All your payment details are stored on your phone, so we cannot see them. What we can see is a hash\* of your phone's ID and your payment details. This allows us to block any trades that go over the personal limit.

\* A hash is some data that was made unrecognizable, similar to encrypting it. The same data will always lead to the same hash. This means we don't know what the data is, but we will be able to spot if the same data is used twice.
:::

:::details Is there any way I can buy/sell more than the trading limit?

If you're a high volume buyer or seller, send us an email at [$contactEmail$](mailto:$contactEmail$)!
:::

:::details What are the fees for trading on Peach?

Peach charges 2% of the trading volume in fees to the buyer. When making a trade on Peach, you're doing transactions on the Bitcoin blockchain, which will result in transaction fees. You can always see the full fee structure at the end of your trade, which could look something like this:

![Trade Breakdowns](/img/faq/trading/TradeBreakdowns.png)
:::

:::details How can I cancel an offer or a trade?

You can cancel your offers and trades by clicking the red X at the top of the screen, whenever it's available:

![Cancel Trade](/img/faq/trading/cancel.png)

That said, this often does have consequences. Before you match anyone, you can cancel at any time. After you've matched, though, your reputation will be negatively impacted. Next to that, as a seller, you'll need to ask the buyer for permission to cancel the trade. They might already have made the payment!
:::

:::details What does the Peach Score mean?

The Peach score is your reputation on Peach. It is based on the user rating (the thumbs up/down your counterparty gives you after a trade) and on your actions, like disputes, how fast you pay, and more.
:::

:::details Why did I receive less sats than I thought I was buying?

Peach charges 2% trading fees to the buyer, which means that you'll get less sats than the amount the trade is for. Next to that, you'll need to pay bitcoin network fees. Your trade could look like this, for example:

![Buy Breakdown](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details What if I don't want to use the Peach wallet for the payout / refund?

Of course, you're free to use your own wallet if you want to. We still highly recommend using the Peach wallet, as it's by far the easiest way to make a trade. You can then send the funds to any other wallet.

If you want to add your own wallet, you can disable "payout to Peach wallet" and then set a custom payout address:

![Disable Wallet](/img/faq/trading/disablewallet.png)

When making a trade, you'll need to sign a message that you're in control of this wallet, as per Swiss regulations.

We'll be working on xpub support very soon, but for now, you'll need to manually change this address if you don't want to re-use it.
:::
