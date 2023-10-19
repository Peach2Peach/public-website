# Privacy FAQ

:::details What info does Peach collect of me?

We strive to store the absolute minimum amount of data on our users as we can. As a quick overview, this is what we have on our servers:

- A hash\* of your app unique ID (AdID)
- A hash of your payment data
- Your encrypted chats
- The data of the trades to make sure anonymous users do not exceed the trading limit (which type of payment methods are being used, buying and selling amounts)
- Addresses used to send to escrow, and to send from escrow
- Usage data (Firebase & Google Analytics), **only if you agreed to this**

For a full breakdown, please see our [privacy policy](/privacy-policy/).

\* A hash is some data that was made unrecognizable, similar to encrypting it. The same data will always lead to the same hash. This means we don't know what the data is, but we will be able to spot if the same data is used twice.
:::

:::details Who can see my payment details?

Only your counterparty can see your payment details; they are sent via the Peach servers, but are fully end to end encrypted (like with most chat apps) so that we cannot see what they are.

When you start a dispute, you and your counterparty's payment details and your chat history will be visible to the assigned Peach mediator.
:::

:::details How to verify the APK?

Follow this steps to verify that the APK you downloaded is the real Peach APK:

- Download the APK you want to install from the website, as well as the signature and manifest (everything can be found in https://peachbitcoin.com/apk)

- Download Peach PGP key https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (can be found in our website also)

- Generate the checksum of the APK file you’ve downloaded and compare them with the checksum on the manifest.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(substitute app-prod-arm64-v8a-release.apk for the name of your file). It should be the same one than on the manifest. Otherwise contact us and make sure you don’t install that application in your device. In this example, you should see the following output:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
If we compare it to the one found in the manifest-peach.txt we can see it is the same one.

- Add the Peach key to your keyring
```
gpg --import PGP-peach.asc
```
(make sure to substitute PGP-peach.asc for the correct file name, usually it will be 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Verify the signatures that you previously downloaded with the following command:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
In the output you should see the following line:
```
gpg: Good signature from "hello@peachbitcoin.com <hello@peachbitcoin.com>" [unknown]
```
:::

:::details Is Taproot supported?

- It is possible to fund escrows from a taproot address, and withdraw funds from the peach wallet to a taproot address.
- It is NOT possible set a taproot address as a direct payout address (it’s not possible to sign a message with a taproot address).

:::

:::details How can I connect to my own node?

Connecting to your node enhances privacy since all transactions are relayed to the Bitcoin network through your own node, instead of Peach's.

Peach currently does not support Tor, so you need to use an IPv4 to connect to your node. If it's not open to the internet, you can only connect to it via the local network or through a private VPN.

Check out our [video tutorial](https://www.youtube.com/watch?v=xtvq2i3mIYg) to learn how to connect to your own node.

If you're using Umbrel, you can use umbrel.{port number} instead of your node's IP.
:::
