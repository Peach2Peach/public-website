---
keywords:
  - Bitcoin
  - kup bitcoin
  - sprzedaj bitcoin
  - aplikacja Peach
  - P2P
  - p2p
  - wymiana p2p
  - jak kupić bitcoin
  - jak sprzedać bitcoin
  - od osoby do osoby
tags:
  - Produkt
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin to pieniądz dla wolnych ludzi. Wierzymy, że każdy człowiek ma prawo wybierać, w jaką walutę inwestuje 
  swoje bogactwo, wynik swojej pracy, czas i energię.
  Misją Peach jest przyczynienie się do adopcji Bitcoina w rękach ludzi.
---

# LN <-> On-Chain Swapy, autorstwa @swissnode

## Dlaczego Peach i Submarine Swapy to idealne połączenie

Od dłuższego czasu otwarcie wspieram Peach i nawet zainwestowałem kilka satoshi, kiedy prawie dwa lata temu przekonałem się o genialności tego, co Peach ma do zaoferowania społeczności Bitcoin: prosty sposób dla zwykłego użytkownika na gromadzenie jego satoshi bez konieczności identyfikacji na platformie, aby to zrobić.

Zauważyłem jako operator węzła SwissNode, że parowanie walut nie musi ograniczać się tylko do zamiany fiat-bitcoin. Istnieją przypadki użycia wykraczające poza to. Witaj w świecie onchain-offchain submarine swapów.

Submarine swap to po prostu sposób na zamianę satoshi, które partner A posiada onchain, na satoshi, które partner B może mieć w sieci Lightning (LN). A zyskuje satoshi poprzez fakturę LN, a B zyskuje satoshi onchain poprzez zwykłą transakcję na Blockchainie.

Istnieją dwa główne powody, dla których można tego chcieć. Operator węzła może po prostu chcieć mieć więcej swojej płynności po stronie lightning, aby zrównoważyć proporcje satoshi trzymanych w "lokalnej" pojemności kanału i tych trzymanych w "zdalnej" pojemności kanału. Zostawię to tutaj, to oczywiście bardziej techniczny aspekt submarine swapu. Operator węzła może także chcieć zamienić część swojej płynności z sieci lightning z powrotem na "onchain" utxo. Zdarzyło mi się to, kiedy kontrahent chciał płatności tylko przez blockchain, a nie przez lightning, na przykład.

Drugi powód, dla którego takiej zamiany można by pragnąć, to coś, co niemal wszyscy Bitcoinowcy mogą lub POWINNI docenić: możliwość przerwania śledzenia zestawu utxo, który posiadają, tak aby żadna jednostka nie mogła wiedzieć, co stało się z satoshimi wcześniej trzymanymi onchain. To nie może być przecenione! Gdy Twoje satoshi w utxo zostaną przekazane, posiadasz swoją płynność w różnych kanałach, które są praktycznie niemożliwe do przejrzenia. Charakter sieci lightning polega na tym, że sprawdzone podwójne wpisy księgowe kanałów oznaczają, że tylko Twoi partnerzy kanałowi są w stanie wiedzieć, ile satoshi posiadasz po drugiej stronie kanału. W teorii mógłbyś zamienić te satoshi z lightning z powrotem i wtedy posiadać utxo, które w ogóle nie może być prześledzone do jego właściciela!

Dlaczego Peach miałby tego chcieć? ... zapytasz... Oto sedno. Oferując tę usługę za prawie nic, Peach nagle staje się NIEZWYKLE atrakcyjny dla tysięcy właścicieli węzłów, którzy potrzebują tej usługi zamiany pomiędzy płynnościami onchain/offchain.

 Obecnie istnieją usługi takie jak LOOP od Lightning Labs, ale zapłacisz za to sporo. W ten sposób Peach z pewnością zdobędzie setki, jeśli nie tysiące nowych użytkowników, którzy potrzebują tej usługi. Nawet oferując ją za darmo, przyciągną wielu, którzy przyszli dla swapów, ale potem odkryli najlepszy sposób na zbieranie p2 bez KYC.

Jak to działa w praktyce? Bardzo prosto, prawie nie różni się od zwykłego przypadku użycia Peach: Sprzedawca tworzy z Peach onchain escrow na pewną liczbę satoshi. Jedynym odstępstwem od normalnej ścieżki jest to, że teraz musi zdecydować: czy zażąda satoshi lightning przez LNURL. Pozwala to sprzedawcy ustalić marżę (-21% < x < 21%). Może to być pomysł w przyszłych wydaniach, aby również normalne faktury LN były sprzedażą bez marży. Gdy to zostanie zrobione, zwykły proces wkracza w życie... Gdy escrow jest ustawione i potwierdzone, kupujący może wskazać swoją chęć kupna tych satoshi onchain z "dopasowaniem". Jeśli sprzedawca "podwójnie dopasuje", kupujący musi wysłać satoshi off-chain przez LNURL. Po potwierdzeniu przez sprzedawcę, escrow wypuści satoshi onchain do kupującego. Zwykłe procesy nadal obowiązują, jeśli kupujący lub sprzedawca kwestionuje działanie drugiej strony. Peach ustali, co i jak, i wypuści escrow zgodnie z normalnym, sprawdzonym procesem rozstrzygania sporów.

@swissnode


## Notatki końcowe

Jeśli chcesz dowiedzieć się więcej o funkcjach Peach lub przeczytać inne nasze artykuły, znajdziesz je tutaj!

[Jak odzyskać portfele Bitcoinowe używając frazy seed](https://peachbitcoin.com/pl/blog/how-to-restore-peach-wallet/)

[Jak sfinansować wiele ofert sprzedaży](https://peachbitcoin.com/pl/blog/funding-multiple-sell-offers/)

[Jak kupować i sprzedawać Bitcoin za gotówkę za pomocą Peach](https://peachbitcoin.com/pl/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Jak dodać nową metodę płatności w aplikacji Peach](https://peachbitcoin.com/pl/blog/how-to-add-a-payment-method/)

[Peach rozszerza działalność na Globalny Południe!](https://peachbitcoin.com/pl/blog/peach-expands-to-the-global-south/)

[Publikacja naszego Peach-API](https://peachbitcoin.com/pl/blog/making-our-peach-api-public/)

[Pełna funkcjonalność portfela](https://peachbitcoin.com/pl/blog/full-wallet-functionality/)

[Co to jest GroupHug?](https://peachbitcoin.com/pl/blog/group-hug/)

[Dlaczego seria P2P? Rozdział 1](https://peachbitcoin.com/pl/blog/why-p2p-chapter-1/)

[Dlaczego seria P2P? Rozdział 2](https://peachbitcoin.com/pl/blog/why-p2p-chapter-2/)

[Dlaczego seria P2P? Rozdział 3](https://peachbitcoin.com/pl/blog/why-p2p-chapter-3-circular-economies/)

[Dlaczego seria P2P? Rozdział 4](https://peachbitcoin.com/pl/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x spotkania](https://peachbitcoin.com/pl/blog/peach-for-meetups/)

Jeśli chcesz dowiedzieć się więcej o nas, sprawdź nasze media społecznościowe, albo po prostu [skontaktuj się z nami](mailto:hello@peachbitcoin.com) (jeśli to możliwe użyj naszego [klucza PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2)) będziemy szczęśliwi, gdy od Ciebie usłyszymy!

[Telegram](https://t.me/peachtopeach), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Nie przestawaj rozprzestrzeniać słowa o Peach, kto wie, kiedy znajdziesz partnera swojego życia!

