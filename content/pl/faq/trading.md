# FAQ o Handlu

:::details Jak mogę być pewien, że otrzymam bitcoiny / pieniądze?

Przy tworzeniu oferty sprzedaży, sprzedawca wysyła bitcoiny na adres, który jest kontrolowany zarówno przez niego, jak i Peach: bitcoiny mogą być stąd przeniesione tylko wtedy, gdy on i Peach obaj na to się zgodzą. To zapewnia, że:

- Sprzedawca nie może samodzielnie przenieść bitcoinów (z powrotem)
- Peach nie może ukraść bitcoinów
- Kupujący nie otrzyma bitcoinów, dopóki nie dokona płatności
- Sprzedawca może odzyskać bitcoiny, jeśli kupujący nie odpowie

Jeśli transakcja nie zostanie rozwiązana normalnie, ten adres automatycznie przechodzi pod pełną kontrolę Peach po około 30 dniach (dokładniej: kiedy wydobytych zostanie 4320 bloków bitcoin). To zapewnia, że:

- Kupujący może otrzymać bitcoiny, jeśli może udowodnić, że dokonał płatności, a sprzedawca nie odpowiada
- Bitcoiny nie zostają zablokowane, jeśli coś się stanie ze sprzedawcą

To jest najważniejsza część zabezpieczania twojej transakcji. Oprócz tego jest też nasz skomplikowany system reputacji, który pomaga ci zidentyfikować ludzi, którzy korzystali z Peach niezawodnie przez długi czas.
:::

:::details Dlaczego istnieje limit handlu?

Szwajcarskie przepisy stanowią, że osoba może kupić tylko do 1000 CHF bitcoinów dziennie, bez podawania swoich danych identyfikacyjnych sprzedającemu. Ponieważ wolimy unikać więzienia, wprowadzamy ten limit w aplikacji.

Wszystkie twoje dane płatnicze są przechowywane na twoim telefonie, więc nie możemy ich zobaczyć. Co możemy zobaczyć, to hash* identyfikatora twojego telefonu oraz twoje dane płatnicze. To pozwala nam blokować wszelkie transakcje, które przekraczają osobisty limit.

* Hash to dane, które zostały zrobione nierozpoznawalne, podobnie do szyfrowania. Te same dane zawsze prowadzą do tego samego hasha. Oznacza to, że nie wiemy, jakie są dane, ale będziemy w stanie zauważyć, jeśli te same dane zostaną użyte dwukrotnie.
:::

:::details Czy jest jakiś sposób, abym mógł kupić/sprzedać więcej niż limit transakcji?

Jeśli jesteś kupującym lub sprzedającym dużej ilości, wyślij do nas e-mail na adres [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Jakie są opłaty za handel na Peach?

Peach pobiera 2% wartości transakcji w opłatach od kupującego. Przy dokonywaniu transakcji na Peach, wykonujesz transakcje na łańcuchu bloków Bitcoin, co skutkuje opłatami transakcyjnymi. Zawsze możesz zobaczyć pełną strukturę opłat na końcu twojej transakcji, która może wyglądać mniej więcej tak:

![Podział Transakcji](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Jak mogę anulować ofertę lub transakcję?

Możesz anulować swoje oferty i transakcje, klikając czerwone X na górze ekranu, kiedykolwiek jest dostępne:

![Anuluj Transakcję](/img/faq/trading/cancel.png)

Mimo to, często ma to konsekwencje. Zanim dopasujesz kogokolwiek, możesz anulować w dowolnym momencie. Po dopasowaniu jednak twoja reputacja zostanie negatywnie dotknięta . Oprócz tego, jako sprzedawca, musisz poprosić kupującego o zgodę na anulowanie transakcji. Mogli już dokonać płatności!
:::

:::details Dlaczego otrzymałem mniej satoshi, niż myślałem, że kupuję?

Peach pobiera 2% opłat transakcyjnych od kupującego, co oznacza, że otrzymasz mniej satoshi niż kwota transakcji. Oprócz tego, musisz zapłacić opłaty sieci bitcoin. Twoja transakcja może wyglądać na przykład tak:

![Podział Zakupu](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Co jeśli nie chcę używać portfela Peach do wypłaty / zwrotu?

Oczywiście, możesz używać własnego portfela, jeśli chcesz. Nadal jednak zdecydowanie polecamy korzystanie z portfela Peach, jako że to zdecydowanie najłatwiejszy sposób na dokonanie transakcji. Następnie możesz przesłać środki do dowolnego innego portfela.

Jeśli chcesz dodać własny portfel, możesz wyłączyć "wypłata do portfela Peach" i następnie ustawić własny adres wypłaty:

![Wyłącz Portfel](/img/faq/trading/disablewallet.png)

Przy dokonywaniu transakcji będziesz musiał podpisać wiadomość, że masz kontrolę nad tym portfelem, zgodnie z przepisami szwajcarskimi.

Będziemy pracować nad wsparciem xpub bardzo wkrótce, ale na razie będziesz musiał ręcznie zmienić ten adres, jeśli nie chcesz go ponownie używać.
:::

:::details Jak jest obliczana cena Bitcoina na Peach?

Cena BTC, którą pokazujemy na Peach, jest agregatem ceny BTC na scentralizowanych giełdach.
:::

:::details Co dzieje się z ceną walut w przypadku wysokiej inflacji, takich jak Argentyna, Wenezuela itp.?

Waluty podlegające wysokiej inflacji cierpią na wysoką zmienność, stąd cena, którą znajdziesz na różnych giełdach, może się różnić. Peach podaje cenę zgodnie z agregatem ceny BTC z różnych źródeł.
:::

:::details Jak przyspieszyć transakcję, która utknęła z powodu niskich opłat za wydobycie?
To zależy, o jakim typie transakcji mówimy. Oto lista wszystkich transakcji, które mogą wystąpić w Peach i ich rozwiązania na zwiększenie opłat:

1. Transakcja finansowania depozytu na opublikowanie oferty sprzedaży

- Jeśli finansowałeś depozyt z portfela Peach, możesz użyć RBF (Replace-By-Fee) do transakcji i zwiększyć opłaty
- Jeśli finansowałeś depozyt z zewnętrznego portfela, musisz sprawdzić, czy portfel obsługuje RBF (Replace-By-Fee) do zwiększenia opłat sieciowych.

2. Transakcja zwolnienia z depozytu (kupowanie Bitcoina)

- Jeśli twój adres odbiorczy pochodzi z portfela Peach, wtedy możesz wypłacić całkowitą kwotę do zewnętrznego portfela z wyższymi opłatami (Ustawienia > Opłaty sieciowe) - technika CPFP
- Jeśli twój adres odbiorczy pochodzi z zewnętrznego portfela, również możesz użyć techniki CPFP, jeśli jest ona obsługiwana przez twój portfel

3. Transakcja wysyłania z portfela Peach do innego portfela

- RBF (Replace-By-Fee) z portfela Peach w szczegółach twojej transakcji!
:::

:::details Co to jest GroupHug?
GroupHug to po prostu termin, który nadaliśmy akcji grupowania transakcji od różnych użytkowników, aby uniknąć opłat dla każdego z nich. Aby uzyskać bardziej szczegółowe wyjaśnienie, sprawdź nasz [wpis na blogu](https://peachbitcoin.com/blog/group-hug).
:::

:::details Czy jeśli mam jedną ofertę kupna, zostanie ona natychmiast zrealizowana?

Nie, twoja wypłata zostanie dodana do kolejki, czekając na wypłatę. Wypłata zostanie dokonana, gdy wystarczająca liczba użytkowników weźmie udział w grupowaniu. Liczbę potrzebnych uczestników można zobaczyć w informacjach o oczekującej wypłacie. Możesz uzyskać dostęp do tego widoku przez szczegóły transakcji.
Tam możesz zobaczyć, ile miejsc w bieżącej partii jest zajętych. W informacjach możesz również zobaczyć ETA, który powie ci maksymalny czas oczekiwania, jeśli miejsca nie zostaną wypełnione wcześniej.
:::

:::details Jak to działa, jeśli mam wiele ofert kupna w toku?

Tak jak wspomniano wcześniej, twoje wypłaty zostaną dodane do kolejki, czekając na grupowanie z innymi uczestnikami.
:::

:::details Czy istnieje limit uczestników, którzy mogą wziąć udział w grupowaniu?

Nie, partia może również przekroczyć maksymalną liczbę uczestników. Nie jest to limit, ale próg. Oznacza to, że jak tylko osiągnięty zostanie minimalny limit, po prostu bierzemy wszystkie psbty i grupujemy je razem, aby dokonać transakcji i zmniejszyć opłaty, które każdy uczestnik płaci.
:::

:::details Jak podpisać zewnętrzny adres?
Postępuj zgodnie z tymi krokami, aby podpisać adres odbiorczy, gdy kupujesz Bitcoiny do zewnętrznego portfela:

_Uwaga: Pierwsze 2 kroki są przydatne, jeśli **zawsze** chcesz otrzymywać swoje środki na zewnętrzne adresy. Jeśli chcesz to zrobić tylko raz, lub czasami chcesz używać portfela Peach, zacznij od kroku 3._

1. Przejdź do ustawień

- wyłącz portfel Peach
- przejdź do adresu wypłaty

2. Wklej nowy adres odbiorczy

3. Przejdź przez proces publikacji oferty kupna i przed jej opublikowaniem, upewnij się, że wybierasz otrzymanie środków na swój zewnętrzny adres portfela (kliknij na małą ikonę portfela w prawym górnym rogu na ekranie podsumowania oferty).

4. Po potwierdzeniu oferty kupna, pojawi się wiadomość do podpisania adresu. Skopiuj ją i wróć do swojego portfela.

5. Znajdź opcję "podpisz/weryfikuj"\* i wklej:

- swój adres odbiorczy
- wiadomość od Peach

6. Kliknij na podpisz, a pojawi się podpis. Skopiuj go.

7. Wklej podpis do portfela Peach i kliknij na potwierdź.

8. Twoja oferta jest opublikowana.

_\*Uwaga: nie wszystkie portfele obsługują opcję podpisania/weryfikacji adresu._
Peach poleca używanie Blue Wallet, Sparrow lub Samourai Wallet. Inne opcje to Ledger i Trezor (portfele sprzętowe), Bitcoin Core i portfel Electrum.

Możesz również znaleźć krok po kroku samouczek, jak podpisać wiadomość za pomocą Blue Wallet na naszym koncie na Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)

:::

:::details Jak użyć CPFP do przyspieszenia zawieszonych transakcji?

Postępuj zgodnie z krokami znalezionymi w tym filmie: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU), aby przyspieszyć zawieszone transakcje przy użyciu CPFP w aplikacji Peach.
:::
