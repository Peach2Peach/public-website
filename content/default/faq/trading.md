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

:::details How is the Bitcoin price calculated on Peach?

The BTC price we show on Peach is an aggregate of the BTC price on centralised exchanges.
:::

:::details What happens with the price of currencies under high inflation such as Argentina, Venezuela, etc. ?

Currencies under high inflation suffer from high volatility, hence the price you find in difference exchanges may differ. Peach gives the price according to an aggregate of the BTC price from different sources.
:::

:::details How to bump a transaction that is stuck because of low mining fees?
It depends what type of transactions we are talking about. Here is a list of all transactions that can happen in Peach and their solutions to bump fees:

1. Transaction for funding the escrow to publish a sell offer

- If you funded the escrow from the Peach wallet, you can RBF (Replace-By-Fee) the transaction and pump the fees
- If you funded the escrow from an external wallet, you need to check if the wallet supports RBF (Replace-By-Fee) to increase the network fees.

2. Release transaction from the escrow (buying Bitcoin)

- If your receiving address is from the Peach wallet, then you can withdraw the total amount to an external wallet of yours with higher fees (Settings > Network fees) - CPFP technique
- If your receiving address is from an external wallet, you can also do the CPFP technique if it’s supported by your wallet

3. Send transaction from the Peach wallet to another wallet

- RBF (Replace-By-Fee) from the Peach Wallet in your transaction details!
  :::

:::details What is GroupHug?
GroupHug is simply the term we’ve given to the action of batching transactions from different users to avoid fees for each one of them. For a more detailed explanation, check out our [blog post](https://peachbitcoin.com/blog/group-hug).
:::

:::details If I have a single buy offer running it will be released immediately?

No, your payout will be added to a queue, waiting for payout. The payout will be made when enough users participate in the batch. The number of needed participants can be seen in the pending payout information. You can access this view through the trade details.
There you can see how many slots of the current batch are takenIn the information you can also see an ETA that will tell you the maximum waiting time if the slots are not filled before.
:::

:::details How does it work, If I have multiple buying offers ongoing?

Just as mentioned before, your payouts will be added to the queue waiting to be batched with other participants.
:::

:::details Is there a limit of participants who can participate in the batching?

No, batches can also go over the maximum number of participants. It’s not a cutoff, but a threshold. Meaning, as soon as the minimum is reached, we just take all psbts and batch them together to make the transaction, and reduce the fees each participant is paying.
:::

:::details How to sign an external address?
Follow this steps to sign the receiving address when buying Bitcoin to an external wallet:

_Note: The first 2 steps are useful if you **always** want to receive your funds in external addresses. If you just want to do it once, or you want to sometimes use peach wallet, start from step 3._

1. Go to settings

- disable peach wallet
- go to payout address

2. Paste the new receiving address

3. Go through the process to publish your buy offer, and before publishing it, make sure you choose to receive to your external wallet address (click on the upper right little wallet icon on the offer summary screen).

4. Once you confirm your buy offer, the message to sign your address will appear. Copy it and go back to your wallet.

5. Search for the "sign/verify" option\* and paste:

- your receiving address
- the peach message

6. Click on sign & the signature will appear. Copy it.

7. Paste the signature on the peach wallet and click on confirm.

8. Your offer is published.

_\*Disclaimer: not all wallets support the option to sign/verify your address._
Peach recommends using Blue Wallet, Sparrow or Samourai Wallet. Other options include Ledger and Trezor (Hardware Wallets), Bitcoin Core, and Electrum wallet.

You can also find a step by step tutorial on how to sign a message using Blue Wallet in our Youtube account: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)

:::

:::details How to use CPFP to accelerate stuck transactions?

Follow the steps found in this video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) to accelerate stuck transactions using CPFP inside the Peach app.
:::
