# Account FAQ

:::details What is a Peach account?

A Peach account is not like a normal account you would have with other services, like an email address and a password. Your Peach account is a file that lives on your phone, which makes it so that we don't need to store your data and don't have to know who you are: you are in control. This file holds all your data: from your bitcoin wallet keys to your payment details

This means more privacy for you, but it also comes with responsibility. You will need to back up this file, because otherwise, losing your phone will mean you no longer have access to your Peach account or the funds in your Peach wallet.

This file is also encrypted with a password you set yourself. Since the file is stored digitally, you should make sure that this password is strong.
:::

:::details How do I make a safe password?

A safe password is long and random. Humans are very bad at randomness, so we recommend using a password manager to generate passwords for you, to make sure that you get both. A passphrase is generally safer than a password, since it's longer. This could look something like this:

Confider+Thrift9+Elves+Straining+Distant

![Choose a strong password](/img/faq/account/StrongPassword.png)

Since the Peach account is a file, we cannot limit how many times someone gets to try a different password. This could lead to someone using a computer to "brute force" (guess many times) your Peach file open and access your Peach wallet funds & personal data.

![Time it takes a hacker to brute force your password](/img/faq/account/PWBruteForce.png)
:::

:::details How can I recover my password?

Since we don't store your password, you cannot recover it if you don't have the phone on which the Peach app is installed anymore.

If you're still logged in to Peach, no need to panic if you forgot your password. You can simply create a new backup with a new password through the settings:

![Backups](/img/faq/account/backups.png)
:::

:::details How should I store my backup?

You should always store your backup file away from your phone, like on an SD card, on your PC or an external hard drive. Otherwise you're still screwed when you lose your phone. You can also store it in cloud storage, but it's extra critical that you have a long and secure password if you do.
:::

:::details What's the difference between the file backup and the seed backup?

The file backup can recover your entire Peach account, so that you won't need to re-add all your payment methods etc. when you lose your phone. When you recover your account with the seed backup, you'll regain access to your account & funds, but you'll lose your:

- Chat history
- Payment data
- Counterparty's payment data in the trade history
  :::

:::details How does the Peach referral system work?

When you make a Peach account, you'll automatically get a referral code. When others use this, you'll get one Peach point for every 10 000 sats that your referees trade on Peach. Peach points can be traded in for cool rewards, that change over time. Right now, you can get:

- A custom referral code (100 points)
- 5x trading without paying any Peach fees (200 points)
- Convert your points into sats (starting at 300 point, 10.5 sats per point)

When someone uses your referral code, that person starts off with a gift of 100 Peach points themselves!
:::

:::details What does the Peach Score mean?

The Peach score is your reputation on Peach. It is based on the user rating (the thumbs up/down your counterparty gives you after a trade) and on your actions, like disputes, how fast you pay, and more. 
:::

:::details Why did my transaction disappear from my wallet?

Unconfirmed transactions that have fees set too low or are too old can be forgotten by nodes in the bitcoin network.
If this happened to you after buying bitcoin on peach, you can use the in-app contact form to get assistance. Make sure to mention the associated trade id.

To avoid this situation, make sure to set your fees at a sufficient rate. If you are not sure, you can choose an automatic fee rate that will adjust to the current fee situation.
If you fear a transaction will get purged, you can bump it's fees by using RBF or CPFP depending on the situation.

To know more about how to accelerate transactions, take a look at our Youtube video to learn how to do a CPFP from Peach: https://www.youtube.com/watch?v=24OtQkL0CxU
:::

:::details Why can I buy legally without KYC?

Peach is a 100% compliant company. We are an affiliated Swiss financial intermediary and our compliance framework allows for KYC-less money exchange transactions under certain thresholds.
:::

:::details How do I restore my Bitcoin wallet from another client?

Peach is a **self-custodial Bitcoin wallet** which means that the user is in control of their private keys (seed phrase) #notyourkeysnotyourcoins.
You should always make sure that your seed phrase (12 words) is safely stored offline. Go to Settings > Backup.
With your seed phrase, you will be able to access your sats from another wallet, like [Sparrow wallet](https://www.sparrowwallet.com/) on desktop, check out this [Video Tutorial](https://youtu.be/_kTYegiDK2Q)
:::

:::How does the referral reward system work?

We pay you 21% of the fee generated by the first 5 trades done by your referred user (note that our fee for the first trade will be 0% and then 2%). Every 40 points you get 1 sat.  
You have to request it manually via a ticket or by mail, since the automatic payout is not implemented yet.  
We can payout on lightning network or onchain.
:::