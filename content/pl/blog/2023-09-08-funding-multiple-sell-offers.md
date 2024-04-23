---
keywords:
  - sprzedaż bitcoinów
  - escrow
  - transakcja zbiorcza
tags:
  - Jak to zrobić
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  Począwszy od wersji 0.3.0, aplikacja Peach wprowadza możliwość tworzenia i finansowania wielu ofert sprzedaży. Oto jak to działa.
---

# Jak finansować wiele ofert sprzedaży

Począwszy od wersji 0.3.0, aplikacja Peach wprowadza możliwość tworzenia i finansowania wielu ofert sprzedaży. Ta funkcja oferuje dwie główne zalety:

- **oszczędność czasu**, koniec z powtarzającym się naciskaniem przycisków
- **oszczędność opłat**, finansuj wszystkie escrow w jednej transakcji: na przykład grupowanie 5 płatności w jedną transakcję może łatwo zaoszczędzić 60% opłat transakcyjnych.

## Jak to działa

### Finansowanie z portfela Peach

Finansowanie twoich ofert sprzedaży z Twojego Portfela Peach jest najprostszą opcją. Kiedy klikniesz przycisk "finansuj z portfela Peach", aplikacja Peach załatwia wszystko za Ciebie. Tworzy transakcję finansującą, która automatycznie wysyła potrzebne fundusze do każdego adresu escrow.

### Finansowanie z zewnętrznego portfela

Jeśli wolisz używać zewnętrznego portfela, nadal możesz finansować wiele ofert sprzedaży, ale wymaga to dwuetapowego procesu:

1. **wyślij satsy na wewnętrzny adres Portfela Peach**: Adres, który widzisz, to wewnętrzny adres Portfela Peach specjalnie zarejestrowany w tym celu. Aplikacja Peach śledzi ten adres, dopóki twoje oferty nie zostaną anulowane lub adres zostanie sfinansowany.
2. **finansowanie i dystrybucja**: Gdy satsy dotrą na ten wewnętrzny adres, logika aplikacji Peach dzieli fundusze między stworzone oferty sprzedaży i wysyła je do poszczególnych adresów escrow.

## Najczęściej zadawane pytania

Podczas czytania mogłeś zadać sobie jedno z tych pytań. Sam też się nad nimi zastanawiałem, dlatego chciałbym od razu udzielić odpowiedzi.

:::details Dlaczego nie jeden escrow dla wielu ofert sprzedaży?
Rzeczywiście, zastanawialiśmy się, jak możemy mieć tylko jedno escrow, z którego można obsługiwać wiele ofert sprzedaży.
Powód, dla którego nie używamy jednego escrow, polega na tym, że wypłaty stałyby się znacznie trudniejsze.
W obecnym ustawieniu escrow są wypłacane w pełni w jednej transakcji i to wszystko. Jednakże, gdybyśmy mieli wypłacić escrow częściowo kupującemu A, natura transakcji bitcoinowej pozostawiłaby nas z resztą satsów, które jeszcze nie zostały wydane. Dla uproszczenia, powiedzmy, że reszta wraca na ten sam adres escrow.
Pozostaje nam jeszcze jeden problem do rozwiązania: transakcje oczekujące. Wyobraź sobie, że pierwsza transakcja wypłaty kupującemu A jest oczekująca przy 8 sats / vB, ale sieć obecnie przetwarza tylko transakcje z 21 sats / vB i wyższymi. Jeśli zaczniemy kolejną transakcję wypłaty kupującemu B, gdy ta jeszcze nie została potwierdzona, kupujący B będzie musiał zapłacić więcej opłat trans

akcyjnych, aby transakcja została potwierdzona szybciej.
:::

:::details Dlaczego nie mogę stworzyć 2 ofert sprzedaży naraz?
Dla procesu dwuetapowego, oszczędności na opłatach są możliwe przy finansowaniu 3 escrow lub więcej. Aby uniknąć ponoszenia większych opłat, nie zezwalamy na grupowe finansowanie dwóch ofert sprzedaży.
:::

:::details Mogę grupować własne transakcje, czy muszę stosować proces dwuetapowy?
Na ten moment, tak. Ale wkrótce wydamy aktualizację, która umożliwi tworzenie wielu ofert sprzedaży bez pokazywania pośredniego adresu finansującego.
:::

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

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Nie przestawaj rozprzestrzeniać słowa o Peach, kto wie, kiedy znajdziesz partnera swojego życia!
