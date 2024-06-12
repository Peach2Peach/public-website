---
template: text
---

# Terms & Conditions

No Polish version available.

These Service Terms were last updated on **May 12th, 2023**

## 1. Introduction

This page sets out the service terms for Peach accountholders. By creating a Peach account, you accept all of these terms and conditions.

When we speak of  "Peach",  "we",  "us"  or  "our",  we mean Peach S.A.R.L and its representatives. Peach Sàrl is a company accredited by [SRO PolyReg](https://www.polyreg.ch/en/) and is registered, organized and existing under the laws of Switzerland, under company registration number CHE-158.025.408, whose registered office is at:

Rue des Beaux-Arts 8<br>
c/o LEAX Avocats Sàrl<br>
2000 Neuchâtel<br>
SWITZERLAND

By "Buyer", we mean the party creating an offer on the platform to receive bitcoin from another user in exchange for a transfer of their currency of choice.

By "Seller", we mean the party creating an offer on the platform to send bitcoin to another user in exchange for a transfer of their currency of choice.

By "you", we mean any Peach accountholder and/or user of our services and products.

Peach is a non-custodial peer-to-peer marketplace (native mobile application) that facilitates the connection of two persons in order to purchase and sale bitcoin (BTC). Peach provides the following services:

- a mobile application available to download for free from the App Store and the Google Play Store
- the infrastructure for a safe trade with a 2-out-of-2 multi signature escrow solution between Peach and the Seller
- a customer support and dispute management service with a Peach mediator employee to arbitrate and settle dispute between users

Peach only facilitates a marketplace for people to exchange bitcoin between themselves. Peach is not a bitcoin exchange, and **does not purchase bitcoin from or sell bitcoin to its users**.

The information on our website is solely intended for informational purposes, and should not be relied upon for legal, financial or taxations advice. No financial results are guaranteed and one should always discuss their investments with a trusted financial professional.

Throughout this document (and within the Peach app and website) we may interchangably use sats, satoshis, bitcoin or BTC, which we all take to mean the bitcoin token on the Bitcoin blockchain. This is the only 'cryptocurrency' for which Peach provides a matchmaking service. In this document we differentiate between "bitcoin" meaning the token, and "Bitcoin" meaning the network.

Peach does not:

- process payments - **the Buyer and the Seller assume full responsibility for the fiat transfer and any costs associated**
- purchase bitcoin from or sell bitcoin to its users
- provide a digital currency exchange service
- participate in any transaction
- provide legal or financial advice

## 2. Your Account

When using the Peach application for the first time, you will be asked to choose a password in order to create an account. This account will allow your app to access the Peach platform to make use of the matchmaking services. The password you pick will encrypt your private Peach data, including keys to identify your account to connect to Peach services.

You must maintain the confidentiality of your password and account; **you are responsible for all activities that are conducted through your account**, whether or not you have authorized such use. If you lose your password, you will not be able to access your encrypted communications or private data, and there is no way for Peach to recover access.

It is not allowed to create more than one Peach account. In order to ensure that a user can only create one Peach account from his mobile device, **Peach keeps a _hash_ of the user's unique device ID**, among other measures. More about how your data is used can be read in our [privacy policy](https://peachbitcoin.com/pl/privacy-policy/).

You must be at least 18 years old to sign up for a Peach account. By signing up for an account, you confirm that you are at least 18 years old.

## 3. Generating Peach Keys

When you create an account, a private and public keypair is created on your device which is unique to you. You hold the private key – we do not have a copy.

When a match is made (see sections 4 and 5) the respective keys of the buyer and the seller are used to create a symmetrical key. This symmetrical key is used to encrypt communications between the involved parties for this specific contract/trade. As such, we cannot read your communications with another user, unless you or your counterparty gives us the symmetrical key to decrypt these communications by raising a dispute as described in section 9.

## 4. Creating Offers

Peach users may create offers to buy or sell sats in exchange for a currency of their choice. The Seller can set the conditions of the trade:

- the amount of bitcoin to be sold
- the payment method(s) the Seller is willing to accept (including the respective payment details to be used if a match results in a trade)
- the currencies the Seller is willing to accept
- the premium (in percentage above the market price at the time of making the match - see more in section 6)

The payment details can not change from the time an offer was published and at the time of the contract. The moment the sell offer is published, a hash is created and this is linked to the sell offer.

To make this offer available the Seller will fund the escrow. The escrow needs to be funded within seven (7) days. If there is no (confirmed) transaction to the escrow within that time period, the escrow will be closed, and any transactions done to it will be refunded to the original sending address, should any transactions have been made.

The Seller will be charged a fee by the Bitcoin network to fund an escrow as any standard Bitcoin transaction. Cancelling an offer will again result in the Bitcoin network charging a fee. When a Peach escrow is released (to Buyer or Seller) the fee is calculated automatically based on the mempool dynamics.

The Buyer will post a Buy offer, in which they indicate their preferred conditions to find a matching Sell offer:

- a range of the amount of bitcoin he wishes to buy
- the payment method(s) the Buyer is willing and able to use
- the currencies the Buyer is willing and able to send

The Buyer will provide a Bitcoin address to which they can receive Bitcoin, should this buy offer result in a trade. This address can be automatically provided by the built-in Peach wallet, or the buyer can provide an address from an external wallet.

Sell offers will only be shown to Buyers that placed a Buy offer which is eligible to match; meaning that the amount that the Seller has sent to the escrow lies within the range the buyer has indicated, and there is at least one Currency / Payment Method pair that both users have selected.

The Peach service will offer the Buyer all eligible Sell offers matching their preferences. By accepting (matching) a Seller's offer, the Buyer agrees to be bound by the terms and conditions of that offer (Currency and Payment method). When the offers match with more than one currency and or Payment Method the Buyer can indicate which match they would like to match.

**The price of the trade, the currency and the payment method used for the trade are locked at the moment that the Buyer matches a specific sell offer**, based on market price and premium set in the Sell offer. The matching Buy offer for that specific Sell offer is then communicated to the user that placed that respective Sell offer.

Payment details entered in Peach are only shared to the Buyer in a contract (Offer matched by Buyer and Double matched by Seller). This communication is end-to-end encrypted and for the Buyer only.

In accordance with Swiss law, trades without KYC are regulated to a limit of CHF1000/day and CHF100'000/year. Once this limit has been reached, you will not be able to make any new trades.

As a security measure, the first two trades are limited to CHF 50.

**Peach reserves the right to delete offers at its discretion.** Generally, it will delete offers if they appear to be unlawful, non-genuine, fraudulent, or are otherwise incorrect.

## 5. Trades

Any user can use Peach to create either a buy or sell offer. As described in section 4, the Seller sets the initial criteria for a match. A Buyer can then select which sell offers he wishes to see by creating his own buy offer with the preferred criteria. The Buyer can match as many sell offers as he wishes; a trade is established with the first Seller that matches him back. At that point in time, the fiat amount to be sent to the Seller is determined. Both offers are then taken out of the marketplace, and both parties agree to bring the trade to completion according to its conditions. Should either party not adhere to any of the conditions, a dispute can be raised, as described in section 9.

By matching (as Buyer) and doublematching (as Seller), both parties agree to be bound by the terms and conditions of that offer, which includes dispute resolution as described in section 9.

The Buyer is responsible to assure that the amount and currency requested by the Seller is made available to the Seller via the Payment method specified in the matched offer.

We do not have any bank accounts that hold users' funds, nor do we facilitate or escrow any local currency payments between Buyers and Sellers.

Bitcoin trades are conducted via the Bitcoin network, which we cannot and do not control. When a Seller sends BTC to fund a sell offer, the Seller transfers BTC directly to an escrow script on the public Bitcoin blockchain. The escrow transaction output can only be redeemed by the Buyer or Seller. Peach cannot access BTC held in escrow as per the code of the Bitcoin escrow script.

## 6. Communication between parties

Peach users can communicate over the Peach platform when there is a double match and thus a contract created.

All communication made between Buyers and Sellers on Peach is end-to-end encrypted with a symmetrical key specific to the contract that has been created (as described in section 3). No third parties, including us, have the technical ability to decipher and/or read these messages unless we are given the shared secret to do so by one party by raising a dispute as described in section 9. The history of the chat will be made available for arbitration only. Once a dispute is settled the chat is once again made private between the two parties.

**It is the responsibility of a user to make and keep adequate records of communications, details of transactions and financial history to the extent that they are required to do so in their jurisdiction.**

Once a user loses the shared secret used to encrypt the messages, that conversation inaccessible and considered lost.

You must not be engage in communication with other Peach users which is offensive, abusive, unlawful, defamatory, indecent or inappropriate.

You acknowledge that we are unable to provide you with any other information about the identity of another Peach user other than what is made available to you via the Peach application.

## 7. Terms of the transaction

Once a trader and Seller match their offers, the trade should proceed in accordance with the terms as both Buyer and the Seller matched. This will normally involve the following steps:

- The Buyer makes the payment in the matched currency,
- the Buyer claims the payment is made by pressing the Payment Made button,
- once the payment is received in full, the Seller confirms this by clicking the confirm payment button,
- the bitcoin is then automatically released from the escrow and sent to the Bitcoin address that the Buyer indicated in their Buy Offer,
- both users rate their counterparty

If the Buyer does not claim that the payment is made within the defined time period, the escrow may be cancelled by the Seller. The Buyer may cancel the escrow at any time.

Sales between Buyers and Sellers are subject to:

- the payment of Peach' fee
- the process for resolving disputes
- the terms of the match, which constitute an agreement between the Buyer and the Seller in regards to: amount of bitcoin, price, payment method and currency

## 8. Security

You must comply with all reasonable security requirements prescribed from time to time by Peach.

## 9. Disputes

The contract of sale is between the Seller and the Buyer. Accordingly, the parties are required to first try their best efforts to resolve the dispute between themselves. If the parties can not agree on a resolution, either party may raise a dispute and thus involve a Peach arbitrator.

Raising a dispute and the outcome of a dispute will impact the users Peach reputation, as an incentive to 'play fair' and not harassing other users by raising disputes lightly.

A Buyer can raise a dispute for many reasons, including, but not limited to:

- **Escrow not released by the Seller** - the Buyer has made the payment, but the Seller claims they didn't receive the payment or that there are issues with the payment and refuses to release the escrow
- **Unresponsive Seller** – the Seller does not respond to the Buyer's messages
- **Inappropriate behavior** - the Seller is rude, abusive or shows signs of being a malicious actor

A Seller can raise a dispute for many reasons, including, but not limited to:

- **No payment received** – The Buyer claims the payment is made, but the Seller has not received the payment
- **Received wrong payment amount** – the Buyer sent a payment, but not the agreed upon amount
- **Other payment errors** – the Buyer sent a payment, but not with the agreed upon details, on the correct payment method or in the proper timeframe
- **Buyer is unresponsive** – the Buyer does not respond to the Seller's messages
- **Inappropriate behavior** – the Buyer is rude, abusive or shows signs of being a malicious actor

The party that opens a dispute will share their digital signature with Peach, allowing the mediator to decrypt the communication between the Buyer and the Seller.

By using the Peach application, you agree that, in case a dispute is raised, Peach gains access to your conversation and all other information required, including the payment details for the disputed contract by Peach to resolve the dispute for as long as the Dispute takes. You agree to provide any evidence of payment or proof that payment has not been received correctly by showing the overview for the matched Payment method, for the period in which the payment was claimed to be made.

Peach will determine a winner of the dispute at its own discretion, based on the evidence provided by both parties. The escrow will be released to this party after at most 30 days.

Parties must respond to Peach' requests for information promptly, **at most within 24 hours**. If a party does not respond to a request within this timeframe, Peach may decide at any point to resolve the dispute in favor of the other party.

The parties agree that, except in cases of gross negligence or fraud, **Peach' decision is conclusive, final and binding** on both parties and there is no appeal from such decision. Peach will have no liability to either a Buyer or a Seller in connection with its decisions.

Once a dispute is logged, a hash of the IP and other data will temporarily be stored for as long as the dispute is open. When an arbitrator regards the behavior of one of both parties as an attempt to defraud the counterparty, or as showing unwanted behavior, the dispute might result in a ban for the offending user. To this end a hash of the data will be stored, in order to avoid the possibility of the banned user to create another account.

This process for resolving disputes is incorporated in all contracts between buyers and sellers arranged through Peach.

## 10. Peach fees

Any contract successfully finished through the Peach platform will be subject to a fee; 2% of the total amount sent out of the escrow will be sent to a bitcoin address controlled by Peach. The remaining funds will be sent to the address indicated by the Buyer, minus any bitcoin transaction fees.

## 11. Taxes

Peach does not assume responsibility for any taxes due. Buyers and Sellers are fully responsible for determining which taxes apply to the transaction and paying them.

Peach must be reimbursed for any claim, loss or damage arising from your failure to pay applicable taxes.

## 12. Account suspension

We may deny any user access to our services for any reason, including but not limited to:

- You are using the Peach platform to scam other users, or for any other unlawful purpose
- You are sending offensive, abusive, unlawful, defamatory, indecent or otherwise inappropriate messages to other users
- Any change in law that adversely affects Peach' operating model or would make it unlawful to continue the service

If a user is suspended as a result of losing a dispute raised by another user, Peach will keep encoded references (hashes) of the suspended user's data. These hashes will be used to deny any account that is using the same data access to the Peach app.

The hashed data includes all of the user's payment data and their device ID. This hash is a reference to the data, but not the data itself. It allows the system to flag users using the same data, without knowing the actual data itself.

After suspension of your account, you are entitled to access to the local data on your phone, however you may not use the Peach platform to interact with any other user.

## 13. Compliance with laws

Although our website and services may be accessed outside of Switzerland, we make no claim that our services comply with the laws of any other country. All users of our services from outside Switzerland, are solely responsible for ensuring compliance with their local laws.

By using any of our services or products, the user warrants that this use is in compliance with all applicable laws and regulations of both Switzerland and the jurisdiction that he is in.

## 14. Risks associated with dealing with other users

Bitcoin transfers are irreversible. If a user sends bitcoin to an incorrect address or otherwise makes a mistake in transfering funds over the bitcoin network, they, nor Peach, can reverse the transaction, and the funds will be lost. As such, **the user assumes full responsibility for any transfers made via the Peach platform**.

## 15. Disclaimer of warranties

Peach is only a matchmaking service, and, to the maximum extent permissible by law, is not responsible for any actions of its users. This includes, without limitation, representations by any users regarding funds (bitcoin or local currency) having been transferred or any claims of ownership of funds.

To the maximum extent permitted by law, Peach does not guarantee the quality or fitness for purpose of its services. Our services and products are provided on an "as is" and "as available" basis and their use is at the user's sole risk. Although we strive to make our services available at all times, we do not make any claims as to the availability of the services.

To the maximum extent permitted by law, we make no guarantees to the safety, reliability, availability or longevity of any of the data we store. The user's private data will be stored locally on their own phone, while the publically available data (e.g. buy or sell offers) will be stored on the Peach servers. The user is solely responsible for their own data.

## 16. Third party integrations

The Peach may incorporate, reference or provide access to third-party services. Peach is not the owner, operator or licensor of these third-party services, and Peach shall not be responsible for any consequences stemming from the use of a third-party service.

The use of any third-party service is subject to separate terms and conditions issued by the respective third-party service provider. It is each users' responsibility to review the terms and policies of a third-party service provider before deciding to use such a service.

Third parties used by Peach:

- Cloudflare
- ProtonMail
- Brevo (only for mailing list subscribers)
- Firebase & Google Analytics (opt-in)

## 17. Limitation of liability and indemnity

You indemnify Peach and hold Peach unaccountable for all loss, claims, actions, liability, damage, costs, expenses and penalties resulting directly or indirectly from:

- any actions performed not following these terms of service
- any unauthorized use of your Peach account
- act or omission (including any negligence, unlawful conduct, willful misconduct or fraud) by you in relation to your use of any products or services provided by Peach
- any third party claim against us in relation to your use of any products or services provided by Peach
- any action taken by Peach as a result of a request made by you, in respect of your account, trade or dispute
- any lack of action or delay on your part in respect of any dispute, including not responding to a request for information by us within the timeframe laid out in clause 9 (Disputes)
- any failure by you to comply with any reasonable recommendation made by Peach
- any actions or inactions of third party service providers

## 18. Applicable law and language

These Service Terms are governed by the laws of **Neuchâtel, Switzerland**. These Service Terms may be translated into other languages, however the official language of these terms is English. Translations may not accurately represent the information communicated in the English language. The English version of these terms takes precedent over any translations.

## 19. Changes to these terms

We reserve the right to update, replace or otherwise change any part of these Service Terms at our sole discretion, by posting updates and changes to our website. If you do not agree to the changes, your only remedy is to discontinue the use of our products and services.

While we will strive to notify our users of any changes, it is your sole responsibility to check our website periodically for changes. Your continued use of the services following the posting of any changes to these Service Terms constitutes acceptance of those changes.

## 20. Entire understanding

These Service Terms contain the entire understanding between the parties as to the subject matter of this terms.

## 21. Contact

If you have any questions, comments, concerns or other correspondence, Peach can be contacted via email on [$contactEmail$](mailto:$contactEmail$)
