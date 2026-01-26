---
keywords:
  - BTCPay Server
  - Bitcoin payments
  - sell bitcoin
  - p2p marketplace
  - self-custodial
  - KYC-free
  - merchant tools
  - Peach Bitcoin
  - BTCPay plugin
tags:
  - BTCPay Server
  - Bitcoin payments
  - Sell bitcoin
  - p2p marketplace
  - Self-custodial
  - KYC-free
  - Merchant tools
  - Peach Bitcoin
  - BTCPay plugin
previewImage: /img/blog/btcpay/BTCPay.png
---
# Introducing the Peach Bitcoin Plugin for BTCPay Server: Empower Merchants to Sell Bitcoin Effortlessly

<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/CGx9LYGTKj8?si=kVrF-PgImNrN1wKg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

In the world of **Bitcoin** commerce, merchants using self-hosted payment solutions like BTCPay Server often face a common challenge: what to do with the bitcoin they receive from customers. While bitcoin is an excellent medium for international transfers and value storage, real-world business needs—such as purchasing stock in fiat currencies, covering daily expenses, or simply hedging against price volatility—can make holding onto every satoshi impractical. That's where Peach Bitcoin steps in with an innovative solution: a dedicated plugin for BTCPay Server that allows merchants to seamlessly publish sell offers for all or part of their received bitcoin directly from their hot wallet.

## What is Peach Bitcoin?

Peach Bitcoin is a self-custodial, encrypted, KYC-free peer-to-peer (P2P) Bitcoin marketplace designed for privacy-conscious users. Unlike centralized exchanges that require identity verification and often compromise user data, Peach enables direct trades between individuals without intermediaries. All transactions are encrypted, and users maintain full control over their funds at all times. This makes it an ideal platform for buying and selling bitcoin in a secure, anonymous manner. With a mobile app, Peach connects buyers and sellers globally, supporting various payment methods while prioritizing user sovereignty.

## The Challenge for BTCPay Merchants

BTCPay Server is a powerful, open-source Bitcoin payment processor that empowers merchants to accept bitcoin payments without relying on third-party services. It's self-hosted, meaning you control your keys and data, aligning perfectly with Bitcoin's ethos of decentralization. However, once payments hit your wallet, merchants often need to convert some or all of that bitcoin back to fiat. Reasons include:

- **Stock Purchases**: Many suppliers still operate in fiat, requiring merchants to buy inventory in traditional currencies.
- **International Transfers**: While bitcoin excels here, converting to local fiat might be necessary for cross-border dealings.
- **Daily Expenses**: Payroll, utilities, rent, and operational costs often demand fiat liquidity.

Without an easy way to offload bitcoin, merchants risk exposure to price fluctuations, which can erode profits in a volatile market.

## Our Solution: The Peach Bitcoin Plugin for BTCPay Server

To address this, the Peach Bitcoin team collaborated with developer Nisaba (@nisaba) to create a custom plugin for BTCPay Server. This open-source tool integrates directly into your BTCPay instance, allowing you to publish sell offers on the Peach exchange with just a few clicks—straight from your hot wallet.

### Key Features
- **One-Click Sell Offers**: Select the amount of bitcoin you want to sell (all received funds or a portion) and publish an offer instantly. No need to transfer funds to another wallet or navigate external platforms.
- **Self-Custodial Design**: True to Peach's principles, the plugin ensures you retain full control of your keys. Funds are never custodied by Peach or BTCPay; trades happen P2P.
- **Premium/Discount Pricing (Relative to Standard KYC Exchange Rate)**: When creating an offer, you choose a **premium** (e.g., +2%) or **discount** (e.g., −1%) **relative to the prevailing KYC exchange price**. A premium means you’re asking above that reference rate; a discount means you’re offering below it. Because Peach often has strong buy-side demand, sellers can frequently set a small premium, helping offset volatility and improve margins.
- **Seamless Integration**: The plugin leverages BTCPay’s hot wallet, making it easy to automate or manually trigger sales based on your business needs.
- **Open-Source and Transparent**: The code is fully open-sourced on GitHub at [https://github.com/Nisaba/btcpayserver-plugins/tree/master/BTCPayServer.Plugins.Peach](https://github.com/Nisaba/btcpayserver-plugins/tree/master/BTCPayServer.Plugins.Peach), allowing anyone to review, contribute, or fork it.

By using this plugin, merchants can transform their BTCPay setup into a complete Bitcoin lifecycle management tool: accept payments, hold what you want, and sell the rest profitably—all without leaving your self-hosted environment.

## How to Install and Use the Plugin

Installation is straightforward for BTCPay Server instance admins:

1. Log in to your BTCPay Server dashboard.
2. Navigate to the "Plugins" section.
3. Search for "Peach" in the plugin list.
4. Install the plugin and follow any on-screen prompts to configure it with your Peach Bitcoin account (if needed).

Once installed:

- Go to your Peach wallet section in BTCPay.
- Select the bitcoin balance you wish to sell.
- **Set a premium or discount as a percentage relative to the standard KYC exchange price** (e.g., +2% to sell above the reference rate or −1% to sell below it).
- Click to publish a sell offer on Peach—the plugin handles the integration, creating an encrypted P2P offer visible to potential buyers.
- Monitor and complete trades directly through Peach’s app or web interface.

For a step by step setup and usage, refer to the [developer documentation](https://github.com/Nisaba/btcpayserver-plugins/blob/master/BTCPayServer.Plugins.Peach/README.md)

## Why This Matters for Bitcoin Merchants

As Bitcoin adoption grows, tools like this plugin bridge the gap between receiving bitcoin payments and managing real-world finances. **By letting you set a premium or discount versus the standard KYC exchange price**, you can turn market conditions into an advantage—selling at a slight premium when demand is strong to protect your bottom line, or using a discount to increase match speed when needed. Plus, staying within self-custodial ecosystems like BTCPay and Peach reinforces the core values of privacy, security, and decentralization.

If you're a BTCPay merchant looking to optimize your bitcoin holdings, give the Peach plugin a try. It's more than just a tool—it's a step toward financial sovereignty in the Bitcoin economy.
