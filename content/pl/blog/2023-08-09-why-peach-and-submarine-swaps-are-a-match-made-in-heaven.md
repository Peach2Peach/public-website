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
