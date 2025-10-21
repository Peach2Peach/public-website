---
keywords:
  - btcpay
  - sell
  - P2P
previewImage: /img/blog/btcpay/BTCPay.png
---
# Introducing the Peach Bitcoin Plugin for BTCPay Server: Empower Merchants to Sell Bitcoin Effortlessly

In the world of cryptocurrency, merchants using self-hosted payment solutions like BTCPay Server often face a common challenge: what to do with the Bitcoin they receive from customers. While Bitcoin is an excellent medium for international transfers and value storage, real-world business needs—such as purchasing stock in fiat currencies, covering daily expenses, or simply hedging against price volatility—can make holding onto every satoshi impractical. That's where Peach Bitcoin steps in with a innovative solution: a dedicated plugin for BTCPay Server that allows merchants to seamlessly publish sell offers for all or part of their received Bitcoin directly from their hot wallet.

## What is Peach Bitcoin?

Peach Bitcoin is a self-custodial, encrypted, KYC-free peer-to-peer (P2P) Bitcoin exchange designed for privacy-conscious users. Unlike centralized exchanges that require identity verification and often compromise user data, Peach enables direct trades between individuals without intermediaries. All transactions are encrypted, and users maintain full control over their funds at all times. This makes it an ideal platform for buying and selling Bitcoin in a secure, anonymous manner. With a mobile app, Peach connects buyers and sellers globally, supporting various payment methods while prioritizing user sovereignty.

## The Challenge for BTCPay Merchants

BTCPay Server is a powerful, open-source Bitcoin payment processor that empowers merchants to accept bitcoin payments without relying on third-party services. It's self-hosted, meaning you control your keys and data, aligning perfectly with Bitcoin's ethos of decentralization. However, once payments hit your wallet, merchants often need to convert some or all of that Bitcoin back to fiat. Reasons include:

- **Stock Purchases**: Many suppliers still operate in fiat, requiring merchants to buy inventory in traditional currencies.
- **International Transfers**: While Bitcoin excels here, converting to local fiat might be necessary for cross-border dealings.
- **Daily Expenses**: Payroll, utilities, rent, and operational costs often demand fiat liquidity.

Without an easy way to offload Bitcoin, merchants risk exposure to price fluctuations, which can erode profits in a volatile market.

## Our Solution: The Peach Bitcoin Plugin for BTCPay Server

To address this, the Peach Bitcoin team collaborated with developer Nisaba (@nisaba) to create a custom plugin for BTCPay Server. This open-source tool integrates directly into your BTCPay instance, allowing you to publish sell offers on the Peach exchange with just a few clicks—straight from your hot wallet.

### Key Features
- **One-Click Sell Offers**: Select the amount of Bitcoin you want to sell (all received funds or a portion) and publish an offer instantly. No need to transfer funds to another wallet or navigate external platforms.
- **Self-Custodial Design**: True to Peach's principles, the plugin ensures you retain full control of your keys. Funds are never custodied by Peach or BTCPay; trades happen P2P.
- **Premium Profit Opportunities**: Currently, Peach Bitcoin experiences higher buy pressure than sell pressure, meaning sellers can often command a premium on their offers. This not only protects against downside risk from Bitcoin's price swings but also generates additional revenue—turning your received payments into a profitable asset.
- **Seamless Integration**: The plugin leverages BTCPay's hot wallet, making it easy to automate or manually trigger sales based on your business needs.
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
- Select the Bitcoin balance you wish to sell.
- Choose a premium or discount to sell to.
- Click to publish a sell offer on Peach—the plugin handles the integration, creating an encrypted P2P offer visible to potential buyers.
- Monitor and complete trades directly through Peach's app or web interface.

For detailed setup guides, check the plugin's GitHub repository or Peach Bitcoin's tutorials section.

## Why This Matters for Bitcoin Merchants

In an era where Bitcoin adoption is growing, tools like this plugin bridge the gap between receiving crypto payments and managing real-world finances. By enabling premium sales, it turns volatility into an advantage: sell high during buy-heavy periods and protect your bottom line. Plus, staying within self-custodial ecosystems like BTCPay and Peach reinforces the core values of privacy, security, and decentralization.

If you're a BTCPay merchant looking to optimize your Bitcoin holdings, give the Peach plugin a try. It's more than just a tool—it's a step toward financial sovereignty in the Bitcoin economy.

For more information on Peach Bitcoin, visit [peachbitcoin.com](https://peachbitcoin.com). Questions or feedback? Reach out to us on social media or through our support channels.