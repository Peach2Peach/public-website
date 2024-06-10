---
keywords:
  - Bitcoin
  - batching
  - transaction
  - fees
tags:
  - Code
  - Product
previewImage: /img/blog/group-hug/teaser.png
description: |
  With GroupHug, we bundle escrow releases for lower transaction fees. Opt in, wait a tad, save more. You're in control, switch anytime.
---

# GroupHug For Everyone

After some time and a lot of work we are stoked to bring to you a new release with many quality of life improvements and one big systemic change.
I will say right away: This change is intended to be under the hood and subtle. Users should not really feel it, and when they notice it, we hope that it will be in a way that is pleasantly surprising. But let's back up a little bit first and let me take you on a brief tour about Peach - the app but also the business.

When you buy Bitcoin on Peach, 2% of that trade amount goes to Peach as a service fee. The way this works on a technical level is, that a transaction is created which has two outputs:

- the amount that the buyer receives
- the 2% Peach fee

![](/img/blog/new-grouphug-mechanism/one-input-two-outputs.png)
As you might know, Bitcoin transactions also have another fee that you have to pay: The mining fee.
This mining fee is not dependent on the _amount_ you are sending, but the **size of the transaction**. Think of it like sending a picture of a pile of cash. It doesn't really matter how much cash is in the picture, it will still take up the same amount of storage.

Both of these pictures are 1MB in size:

![](/img/blog/new-grouphug-mechanism/one-mb-dollar.jpg)
![](/img/blog/new-grouphug-mechanism/one-mb-million-dollars.jpg)

In the same way, a simple bitcoin transaction, like in our case 1 input and 2 outputs, will cost you more or less the same amount, no matter how much you buy. But if there were some way to reduce the number of outputs, you would pay even less.

Now some members of our [telegram community](https://t.me/peachtopeach) and other passionate Peaches might say, that this is what we already have, and in fact that is right!
In September 2023, after celebrating the 1 year birthday of Peach, we did release "Grouphug" - a way in which transactions on Peach would be _batched_ in a way that it would allow our users to save _up to 23%_ in mining fees by effectively sharing the peach fee output.

This is what we are rethinking and re-envisioning with this release!
Bitcoin is magic - but it is useless if you let somebody else be in charge of it as opposed to using it yourself. You can read [a rant about that here.](https://peachbitcoin.com/blog/if-bitcoin-goes-to-1-million/)
Peach is built on this realization and with a very clear goal: We want to empower as many people as possible to use this magic in its full glory. We realize that Bitcoin is something fundamentally new and something unfamiliar so one of the most important things we offer is _strong defaults_. Peach makes it easy not to fuck things up.

However there were a couple of problems with the way Peach was operating and the default experience it was giving our users as well as the conceptualization of batching which became especially apparent after the fee storm during the halving.

![](/img/blog/new-grouphug-mechanism/halving-fee-storm.svg)
![](/img/blog/new-grouphug-mechanism/high-fees-meme.jpeg)

As mentioned before, Peach collects 2% per trade, and these fees have to be consolidated at some point. However looking at the mining fees we came to the realization: We were completely fucking ourselves. When we reviewed the impact these consolidations had on the profitability of peach, the mining fee was around 100 sat/vB, something which we have gotten used to seeing.
At that fee rate, any trade with a service fee less than 4100 sats was for sure loosing us money, and at a 2% fee rate this meant that the absolute minimum amount we should allow to be traded on Peach was 205 000 sats (and our minimum was around 1/10th of that).
Again all of this comes from having to pay for consolidation: If we had 10 trades for 20 500 sats that were all grouphugged, giving us a single utxo worth 4100 sats, all would be good again.

We quickly realized the powerful tool we already had in our hands to solve our problems and we dreamt of a world were everyone would be a group-hugger.

The setup we had had before was using 6 buckets for different fee rates and batched them every 12 hours. Very often this lead to 'batched' transactions that weren't really batched at all. Many buckets would just have a single, or very few participants, so you wouldn't really save that much on fees, if at all. Also from a business perspective this meant, that the amount peach would receive as a service fee would be relatively low hence also costly to consolidate.

We reminded ourselves about the goal of Peach: Enabling the masses to experience the magic of Bitcoin by not compromising on any core values and offering strong defaults.
Looking at our statistics for fee preference, we saw that virtually all users had just stuck with the default fee Peach provides, further confirming that this is ultimately what our users also want. Most users stack to save. They just want to receive their sats relatively quickly and relatively cheaply and don't care too much about the details to get there.

On the basis of this we simplified and improved batching to the following model:
1 bucket with as many participants as possible. The batch happens earliest after 24 hours and the minimum fee rate used by the bucket is the half hour fee. We also wait for the peach fee amount to reach a minimum threshold before broadcasting the transaction.
We are also making **batching the default!**
This does mean that payouts will take slightly longer than before, however we believe that again, our users want to stack sats with a low time preference and if we can save them fees by delaying payouts slightly users will be happy.
If this assumption does not fit you, no worries! You can still opt out of batching at any point in time and have your release transaction immediately be broadcast. The only thing that changes here is that we now ask the user to cover the additional costs this implies for peach, meaning specifically the added consolidation cost of the peach fee we collect from that trade. We calculate this using the following formula: 41 \* halfHourFee. At the time of writing, the half hour fee is 10 sat/vB, so this would mean an extra 410 sats paid to Peach.
This is based on the absolute [minimum size per input.](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Consolidation)

Another thing we realized during the fee storm is that we need to have some sort of protection mechanism against fee spikes, where buyers end up paying much more than expected.
Going forward, every trade will have a maximum mining fee, which peach sets at 10% of the trade amount by default. Anything beyond that we assume is the result of fee spikes or user error (for example buying a very small amount without being aware of the mining fees that will have to be paid).
This simply means that if after the match the fees spike, Peach will not go beyond this 10% limit.
If however this 10% limit is already exceeded at the time of match, Peach will simply show a warning on the match card.

If you still decide to proceed with the trade, let's say at a 15% mining fee, this will be set as the new maximum. In other words you will not pay more than 15%, but if the fees drop you will pay even less.

So lets summarize:
Going forward you will save much more on mining fees, because we assume that we will have a lot more transactions in our buckets. If you still want peach to broadcast the transaction instantly we will ask you to pay for the added costs to Peach, so that we don't rek ourselves. Peach will also protect buyers from paying a significant amount of mining fees without being aware of this.
In doing all of this we hope that the default experience for our users will be even smoother and as mentioned in the very beginning, they will notice these changes only as a pleasant surprise when seeing that they paid less in mining fees than expected or when it protects you from spending a huge chunk of your trade on mining fees without realizing it.
If you're interested in the details you can check the FOSS code [here](https://github.com/Peach2Peach/groupHug/tree/6f1cb023c972eec1fc73989e39a53378313d7394).

Oh and by the way:
Free Trades save on peach fees anyway because the peach output doesn't exist and previously we would literally pay for these trades using grouphug. This is now also fixed by simply broadcasting free trades instantly!

HAPPY PEACHING!

## FAQ:

- Can I join GroupHug as an external actor?
  - Yes! The new GroupHug a flat 2% fee for any participants. So compared to the previous model, participating gets more costly by default, **however:** because we assume that by 1. reducing the number of buckets, 2. increasing the minimum wait time and 3. making batching the default for all peach users, the potential 23% on mining fees you save will become much more realistic to reach (the more participants, the more you save).
    Practically this makes batching particularly attractive, if you have a small value transaction that you want to broadcast during fee spikes.
- what’s the minimum threshold that you set before broadcasting the transaction?
  - When Peach the company uses its revenue, we have to do a consolidation and as mentioned, this means extra costs. The threshold that we set is based on the loss, Peach would incur by consolidating at the time of the batch. We have defined our acceptable loss limit at 2% of the transaction.
    So each peach fee utxo produced by the batching server will wait for either the fees to drop or the number of participants to grow so this threshold gets reached.
- Can I follow the batch to see how many participants there are?
  - Yes! For now it is a very minimal display in the peach-app that just shows you the number of participants, but you can think of the batching server as its own little mempool. So with the amount of cool animations you can find for the mempool, it's not hard to imagine similar, more detailed overviews, to be added in the future
- What if the batch is not filled after 24h, do you still release?
  - We check the status of the batch every minute. If after 24h the threshold isn't met, we simply continue waiting for either more participants or lower fees. If for some reason fees just keep going up, or nobody else joins the batch, we will broadcast it after 1 week.
    Remember: If you don't want to wait any longer, you can always opt out!
- How do I know how much mining fees I am going to pay and how much I am going to save?
  - The mining fees used are the half hour fee at the time when the seller confirms the payment. The more participants in a batch, the more you will save, since the peach fee output effectively gets shared among all participants.
- I want my sats asap, How do I opt-out from Batching?
  - Simple: Just go to your settings in the peach app, open the transaction batching section and click on the toggle. You will have to be on the newest version (0.5.0) though, since we want to make sure the user is aware that this means slightly higher costs.

As a final note lets also make one thing clear: This is a new foundation, but it's by no means the final destination. We already have ideas on how to make this model even better, build on top of it and realize the new opportunities it creates.
If you have something you want to share also, we'd love to [hear from you](https://t.me/peachtopeach)!!
