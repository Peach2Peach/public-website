---
keywords:
  - Bitcoin entropy
  - seed phrase
  - BIP39 wordlist
  - how seed phrases are generated
  - Bitcoin self custody security
  - random number generation wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  A Peachy guide to what entropy actually is, how seed phrases work, where randomness really comes from, and how safe your 12 words are.
---

# A Peachy Guide to Entropy, Seed Phrases, and How You Can Be Safe

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="A cartoon peach in blue overalls running through a desert of melting clocks, playing cards, calculators and floating mathematical formulas, chased by a dinosaur" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Disclosure: this article was written without AI. The cover image was AI though.*

## What is entropy?

To start: entropy is a measure of chaos.

The purpose is not to say that something has X amount of entropy, but to be able to compare 2 things and say that one has more entropy than another.

For instance:

- a cracked egg has more entropy than a perfect egg
- a messy room has more entropy than a clean room

And the interesting properties of entropy are:

- it is easier to increase entropy (create chaos) but hard to reverse entropy (create order)
- the world lives in a constant entropy increase tendency

This is why it is easier to find something in an organized room than in a messy room, and why the room gets messier with time and you need to spend energy cleaning it.

Most things in our lives benefit from low entropy. Bitcoin self-custody benefits from high entropy. But we can say entropy is subjective. If I know my seed phrase, the entropy of my wallet is very low. It's only high for everyone else. If I tell everyone 1 of my words, I am reducing the entropy for them, but it is still quite high.

## What is a seed phrase?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Five seedlings at increasing stages of growth sprouting from dark soil" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(a seed growing into a plant — the same idea behind the "seed" in seed phrase)*

First: why call it a seed? In computers, randomness comes from somewhere. If we provide a seed, the randomness will grow from it, always the same way.

A seed phrase is a convention to memorize a number between 0 and 340282366920938463463374607431768211455. Yes, it's a big number, and 12 English words help you memorize your special number in there.

The trick is that this number could be written in binary (something like 01110010101… but very long). So the Bitcoin community decided to create a list of English words and, for each one, associate a sequence of 11 bits.

For instance:

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 interesting things:

- you have wordlists for English, Portuguese, Chinese, Korean, French, Spanish, Italian and Czech;
- to make sure people don't make a mistake when entering their own seed phrase, there is a system to let you know you inserted a "wrong" seed, so you can't just mistake one of your words, open an empty wallet and get scared.

## Are 12 words enough?

The amount of numbers that can be represented with the 12 words is vast, and it is considered secure. If you want to help yourself remember the 12 words and you write them on a piece of paper in a random order in your house, it's still relatively secure to do so: it will take someone a veeeery long time to try out all the combinations of those 12 words.

Of course, more words mean more space, therefore harder to guess. But sometimes enough is enough.

12 words alone would require a fast computer around 10²² years — about a trillion times the age of the universe — to check all of those numbers and "steal" all the 12-word Bitcoin wallets. If you joined the entire Bitcoin mining power and redirected it at guessing the seeds, it would still take around 11 billion years. And that is being generous: mining chips only know how to do SHA-256, while checking one seed phrase is thousands of times more work than a single hash.

To me, that is viable. But adding an extra word increases the time muuuuch more. Up to you!

## How are those seeds generated?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Comic strip: a tour of accounting introduces the random number generator, which is a troll repeating nine, nine, nine, nine. Are you sure that's random? That's the problem with randomness: you can never be sure." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, by Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Randomly. However, randomness is an illusion: nothing is truly random.

Remember when you were in school and the teacher wanted a random student to come to the board? They never picked student #1, but student #7 was always being "randomly" chosen.

Computers cannot produce anything random. But they can generate pseudorandomness. For instance, they can use the temperature values of the system for the last 30 minutes, plus the light coming in from the webcam, plus the internet speed, plus mouse/keyboard behavior, etc, as sources of randomness. The objective is to get randomness from sources that are practically impossible to control.

A famous example is Cloudflare's randomness using lava lamps. They own a lot of lava lamps, have a webcam filming them constantly, and the unpredictable patterns of the lava bubbles are used as a source of randomness.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="A wall of dozens of colorful lava lamps arranged on shelves in an office lobby" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Cloudflare's wall of lava lamps in San Francisco, filmed around the clock as a source of randomness)*

## So why did some seeds get discovered?

Regarding the Coldcard incident, there was a mistake in the code that used a bad source of randomness. Once the hackers noticed that the randomness was just a combination of simple factors, it narrowed down the possibilities and it became a matter of searching for those candidates.

Again: entropy is subjective. Once someone has a "clue", the entropy goes down. Another clue, entropy goes down even further.

Example: imagine I have a bookshelf that is very high, and it's filled with books. I told you there is a 5 euro bill hidden in one of the books. It will be very hard to find it. But you start looking around and you notice that I don't have a ladder to climb to those very high places on the shelf. Therefore you believe that the 5 euro bill must be in the books reachable without a ladder. You focus your efforts on the right candidates and you become 5 euros richer 🙂

## How does Peach generate seeds for the Peach Wallet?

Peach is a mobile app, therefore it has access to the mobile phone's secure pseudorandom source. To put it in simple terms: it relies on the mobile phone's randomness, which is also what is being used for many other security aspects of the phone.

But how does the phone get that randomness? It creates a randomness pot with physical values:

- the startup time of all apps/services of the phone + how long it took to start (up to a millionth of a millisecond)
- electric noise in the circuits: highly unpredictable, and very sensitive to temperature
- how your phone is "touched": the timing of the presses, the exact location of the presses, how long they last, etc
- accelerometer values: how much your phone has been shaken, the current inclination, current and past geographic coordinates (including altitude)
- many other things (ex: light intensity on the camera(s), sound from the microphone, etc)
- a bit of the previous randomness pot from before the phone was turned off and on

In other words: your phone would be hacked already if that source of entropy was a bad one.

## Conclusion: am I safe?

Some people roll dice to generate their seeds, which is indeed a good source of entropy (unless you have crooked dice, and someone has access to those crooked dice. Burn them after using them, who knows!?). Some "trust" the digital sources of randomness, by reading the code used to generate them, but not everyone is an engineer. You can ask AI to evaluate if a specific software is good to generate seeds, but at this moment you are trusting the AI.

Hardware wallets don't make your seed harder to guess, they just decrease the exposure of hackers getting access to a file that contains the seeds.

Bitcoin is hard, being the owner of your own money is hard, but it is worth it. Do your own research, don't follow trends, and you will be fine.

One thing I recommend: developing the Memory Palace technique, to save your seed phrase in your head.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Album cover art depicting a giant concrete building shaped like a head, standing in a desert under a pale sun" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(the cover art of the music album "Memory Palace", by the band "Intervals")*

Happy peaching 🍑

---

## Final Notes

If you want to know more about Peach features, or read some of our other articles, you can find them here!

[You need a hardware wallet](https://peachbitcoin.com/blog/you-need-a-hw/)

[How to restore your Peach wallet from a seed phrase](https://peachbitcoin.com/blog/how-to-restore-peach-wallet/)

[How to buy Bitcoin P2P with Peach](https://peachbitcoin.com/buy-bitcoin-no-id/)

[What is GroupHug and how does it save you fees?](https://peachbitcoin.com/blog/group-hug/)

[Why P2P? The basics](https://peachbitcoin.com/blog/why-p2p-chapter-1/)

[Triangulation scams in P2P markets](https://peachbitcoin.com/blog/triangulation-scams/)

If you want to know more about us, check out our socials, or simply [contact us](mailto:hello@peachbitcoin.com) (use our [PGP key](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com) if possible) we'll be happy to hear from you!

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Keep spreading the Peach word, who knows when you'll find the match of your life!
