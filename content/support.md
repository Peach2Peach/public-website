# Support

We're here to help you. Feel free to let us know your question, concern, or bug report.

We're available to respond to encrypted emails.
Please send your email with your public key attached to [hello@peachbitcoin.com](mailto:hello@peachbitcoin.com).

Our PGP fingerprint: `XXXX XXXX XXXX XXXX XXXX`

## Contact

- [Email](mailto:hello@peachbitcoin.com)
- [Twitter](https://twitter.com/peachbitcoin)
- [Telegram](https://t.me/+GkOW1J-ixBBkZWRk)
- [Discord](https://discord.gg/ypeHz3SW54)
- [Instagram](https://www.instagram.com/peachbitcoin/)

## FAQ

### How do I start?

Peach is meant to be simple, we don't doubt you would get there without our help.
But we DO understand that every exposure to a new tool can
be scary at first. So we sum up here your simple first steps:

1. Download the app on your phone (link iOS - Google Play)
2. Start the app for the first time, and go through the introduction screens.
3. Select "NEW USER"
4. You will be prompted to give in (and repeat) a Password of [at least 8 characters](https://xkcd.com/936/) long. Chose one that you are sure you can remember: We do not save this password on our servers for you! We have no way of recovering this password. Do not lose it!
5. Press "Create account" and the app does everything in the background for you, all you need to do is remember your password!
6. You are ready to go for your first order!
7. You can either go through a buy order or if you have some sats you want to sell already you might opt for your first order as a sell order.
8. Once you make the order the app finds potential matches that correspond with your preferences and will notify you if a match is found
9. You can select which potential match(es) you would like to match with.
10. If both parties (Buyer and Seller) match, you are able to trade between the two of you.

### How does the escrow work?

The escrow is a 2 of 2 multisig, being the seller and Peach the signers.
When a sell offer is created by a seller, and he receives the payment from the buyer, he can directly sign the transaction to send the funds to the buyer.
In case the buyer does not pay, the seller can open a dispute, and funds will be refunded to the seller by Peach.

### What is Escrow?

Escrow refers the service of a neutral third party to hold something of value, until certain conditions are met.
In the case of Peach, the escrow is an on-chain bitcoin address that holds the Sats until the Seller can confirm the payment receives from the buyer.

The escrow is pre-programmed and can only release the Sats to the Buyer or the Seller.
The Buyer will receive the funds if the payment is made correctly.
The Seller will receive the funds if the payment was not made, or there was no trade within 15 days.

### What does the password do?

The password encrypts your account information that is stored on your phone.
We do not save this password on our servers for you!
We have no way of recovering this password.
Do not lose it!

### Is the json file encrypted?

The backup json file is encrypted and your password is the key that can unlock decryption of the file.

### Can Peach see my personal data?

Let's first distinguish between personal and public data.

#### Personal data

- Private Key: Which the app uses to prove it is your account reaching out for any updates such as signing user ratings, authenticating with the
Peach server, etc.
- Encryption Keys: for secure and private communication with your trading partners
- Payment and currency preferences
- Order history
- Chat history

These all are encrypted on your phone, an encryption to which only you hold the key.
This data is yours and only yours.
Peach cannot access this info as long as you don't give us access.
To make an offer and a trade, some information has to be shared, that we would refer to then as

#### Public data

1. Public Key: So Peach and your counterpart will know which offer belongs to which 'account'
2. Public PGP Key: All communication between you and your counterpart is encrypted, to establish that communication a public PGP key is
shared, which is used to verify that a message really comes from that sender.
3. User ratings
4. Number of past orders
5. Age of your account
6. Number of disputes

Keep in mind this data will be shared with Peach and your trading partner.

### Who can see my payment details?

Payment details are encrypted and only your trading partner can read the details for the Payment method you both matched on.
Peach can't see the information unless there is a dispute.

### How do the fees work?

When a trade is done, 2 fees will need to be paid by the buyer.
A 2% fixed Peach fee, and the network fee.

### What are the trading limits?

You can trade up to CHF 1'000/day and CHF 100'000/year without proceeding to a Know-Your-Customer (KYC) registration process.
We keep track of your trading limit and we ensure that you can only create one Peach account on your mobile.

### Why is there a trade limit per day/year?

We are a Swiss-registered company, in order to make sure you can trade KYC free, we have to make sure that the Swiss government agrees with our logic that your trades are all according to the requirements.

To be able to prove that you are still trading under the limit, but without checking who you are, we make sure that each account, can trade not more than the KYC-free limit.

All ongoing trades, all traded concluded in the current day and open buy & sell offers are counted for the daily limit.

You can thus have trades for maximally 1000 CHF per day.
However you divide that is up to you: Sell for 1000 CHF or buy for 1000 CHF or anything in between, as long as the sum is less than 1000 CHF.
H
### How does the Peach reputation score work?

Your Peach reputation score will determine if your offer is shown first or last in the list.
Your final score is calculated with the ratings that you received at the end of each trade, and with your behaviour throughout the trade process.
For example, canceling a trade will get your reputation score negatively impacted while you will be rewarded for confirming a payment fast!

### What are the super tags?

User with a reputation score above 4.3 can unlock badges:

- **FastTrader**: when you match and confirm matches, make payments and confirm payments at the speed of light!
- **SuperTrader**: when you have successfully completed 15 trades
- **EarlyAdopter**: is reserved for trustworthy users who are helping us in any ways: testing the app, promoting. You can also unlock this badge if you have the #SuperTrader badge and have shared your completed trade on twitter at least 3 times.
