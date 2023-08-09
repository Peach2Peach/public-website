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
  - Education
  - How To
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
