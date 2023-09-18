---
keywords:
  - Bitcoin
  - buy bitcoin
  - sell bitcoin
  - Peach app
  - P2P
  - p2p
  - p2p exchange
  - how to buy bitcoin
  - how to sell bitcoin
  - peer to peer
tags:
  - Product
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin is money for free people. We believe that every single human being has the right to choose which money he uses to store his 
  wealth, the result of his work, his time and energy.
  Peach’s mission is to do its part to contribute to Bitcoin’s adoption in the hands of the people.
---
# LN <-> On-Chain Swaps, by @swissnode
## Why Peach and Submarine swaps are a match made in heaven

I have been quite vocal in my support for Peach and have even put a few sats where my mouth is after being convinced nearly two years ago about the brilliance of what Peach has to offer the Bitcoin community: a simple way for the simple stacker to stack his or her sats without the need to identify themself to a platform in order to do so.

It came to my notice as a runner of the SwissNode lightning node that the currency pairing need not be limited to a fiat-Bitcoin swap. There are indeed use cases for going beyond that. Welcome to the world of onchain-offchain submarine swaps.

A submarine swap is, simply put, a way of converting sats that partner A has onchain with sats that partner B may have on the Lightning Network (LN). A thus gains sats via a LN invoice and B gains onchain sats via a usual transaction on the Blockchain.

There are two main reasons for wanting to do this. A node runner might simply want more of his liquidity on the lightning side, perhaps to balance the proportion of sats that are held in "local" channel capacity and those held in "remote" channel capacity. I will leave it there, this is obviously a more technical aspect of the submarine swap. A node runner can conversely also want to convert some of his liquidity from the lightning network back into "onchain" utxos. This has happened to me when a counterparty wanted payment only via the blockchain instead of via lightning, for example.

The second reason for wanting such a swap is, however, something that nearly all Bitcoiners can or SHOULD relish: the ability to break the traceability of the utxo set he or she posseses so that no entity has the ability to know what happened to the sats previously held onchain. This cannot be overstated! Once the sats in your utxo have passed on, you then hold your liquidity in various channels which are practically impossible to peer inside. The nature of lightning is such that the tried-and-tested double-entry accounting of the channels used mean only your channel partners are able to know how many sats you own on the other side of the channel. In theory you could submarine swap those lightning sats back again and then be in possession of a utxo that cannot at all be traced to its owner!

Why should Peach want to do this? ... I hear you ask... Well here is the kicker. By offering this service for next to nothing, Peach suddenly becomes EXTREMELY attractive to the thousands of node owners out there needing to swap in and out of onchain/offchain liquidity pools. Currently services exist like the LOOP servicec from Lightning Labs but you will pay quite a lot for the privilege. In this way Peach is sure to gain hundreds if not thousands of new users who need this service. Even by offering it for free, they would onboard many who came for the swaps but then discovered the best way to stack p2 without kyc.

How does this work in practice? Very simply it hardly differs from the usual Peach use case: The seller will create an onchain escrow with Peach for a certain number of sats. The only departure from the normal path is that he must now decide: will he demand the lightning sats via LNURL. It allows the seller to determine a margin ( -21% < x < 21% ). It might be an idea in future releases to also make normal LN invoices a margin-less sale. Once this has been done the usual process kicks in... Once the escrow is set up and confirmed a buyer can indicate his willingness to buy those onchain sats with a "match". If the seller "double matches" the buyer must send the off-chain sats via LNURL. Once confirmed by the seller, the escrow will release the onchain sats to the buyer. Usual processes still apply should the buyer or seller dispute the action of the other. Peach will determine what is what and release the escrow as per the normal tried and tested dispute process.

@swissnode 


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
