# FAQ dotyczące Handlu

:::details Jak mogę być pewien, że otrzymam bitcoiny / pieniądze?

Tworząc ofertę sprzedaży, sprzedawca wysyła bitcoiny na adres, który jest kontrolowany zarówno przez niego, jak i Peach: bitcoiny można przenieść tylko wtedy, gdy obie strony wydadzą na to zgodę. To zapewnia:

- Sprzedawca nie może przenieść bitcoina (z powrotem) samodzielnie.
- Peach nie może ukraść bitcoina.
- Kupujący nie otrzymuje bitcoina, dopóki nie dokona płatności.
- Sprzedawca może odzyskać bitcoina, jeśli kupujący nie odpowiada.

Jeśli handel nie zostanie rozwiązany w normalny sposób, ten adres automatycznie przechodzi pod pełną kontrolę Peach po około 30 dniach (aby być precyzyjnym: po wydobyciu 4320 bloków bitcoina). Zapewnia to:

- Kupujący może odzyskać bitcoina, jeśli udowodni, że dokonał płatności, ale sprzedawca nie odpowiada.
- Bitcoiny nie zostaną zablokowane, jeśli coś się stanie ze sprzedawcą.

To jest najważniejszy element zabezpieczenia Twojego handlu. Obok tego istnieje także nasz złożony system reputacji, który pomaga zidentyfikować osoby, które używają Peach w sposób godny zaufania przez długi czas.
:::

:::details Dlaczego istnieje ograniczenie handlu?

Regulacje szwajcarskie stanowią, że osoba może kupić do 1000 CHF bitcoina dziennie bez konieczności udostępniania sprzedawcy swojej tożsamości. Ponieważ wolelibyśmy uniknąć więzienia, stosujemy to ograniczenie w aplikacji.

Wszystkie Twoje dane płatności są przechowywane na Twoim telefonie, więc nie możemy ich zobaczyć. To, co możemy zobaczyć, to skrót\* identyfikatora Twojego telefonu i Twoich danych płatności. Pozwala nam to zablokować wszelkie transakcje, które przekraczają limit osobisty.

\* Skrót to dane, które zostały nieczytelne, podobne do ich zaszyfrowania. Te same dane zawsze prowadzą do tego samego skrótu. Oznacza to, że nie wiemy, jakie to dane, ale będziemy w stanie zauważyć, jeśli te same dane zostaną użyte ponownie.
:::

:::details Czy istnieje sposób na kupno/sprzedaż ponad limit handlowy?

Jeśli jesteś dużym kupcem lub sprzedawcą, wyślij nam e-mail na adres [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Jakie są opłaty za handel na Peach?

Peach pobiera opłatę w wysokości 2% wolumenu handlowego od kupującego. Przy zawieraniu transakcji na Peach dokonujesz transakcji na blockchainie Bitcoina, co wiąże się z opłatami transakcyjnymi. Zawsze możesz zobaczyć pełną strukturę opłat na końcu swojej transakcji, która może wyglądać mniej więcej tak:

![Podziały transakcji](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Jak mogę anulować ofertę lub transakcję?

Możesz anulować swoje oferty i transakcje, klikając czerwone X na górze ekranu, kiedy jest dostępne:

![Anuluj handel](/img/faq/trading/cancel.png)

To często jednak ma konsekwencje. Zanim dopasujesz kogokolwiek, możesz anulować w dowolnym momencie. Po dopasowaniu, jednak, Twoja reputacja będzie miała negatywny wpływ. Oprócz tego, jako sprzedawca, będziesz musiał poprosić kupującego o zgodę na anulowanie transakcji. Mogli już dokonać płatności!
:::

:::details Dlaczego otrzymałem mniej satsów niż myślałem, że kupuję?

Peach pobiera opłatę handlową w wysokości 2% od kupującego, co oznacza, że otrzymasz mniej satsów niż wynosi wartość transakcji. Oprócz tego będziesz musiał zapłacić opłaty za sieć Bitcoina. Twoja transakcja może wyglądać tak, na przykład:

![Zakup rozłożony](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Co zrobić, jeśli nie chcę używać portfela Peach do wypłaty/zwrotu?

Oczywiście, jesteś wolny, aby używać swojego własnego portfela, jeśli chcesz. Wciąż jednak gorąco zalecamy korzystanie z portfela Peach, ponieważ jest to zdecydowanie najłatwiejszy sposób na dokonanie transakcji. Możesz wtedy przesłać środki na dowolny inny portfel.

Jeśli chcesz dodać swój własny portfel, możesz wyłączyć "wypłatę na portfel Peach" i ustawić niestandardowy adres wypłaty:

![Wyłącz portfel](/img/faq/trading/disablewallet.png)

Podczas zawierania transakcji będziesz musiał podpisać wiadomość, że jesteś w kontrolowany tym portfelem, zgodnie z przepisami szwajcarskimi.

Wkrótce będziemy pracować nad wsparciem xpub, ale teraz musisz ręcznie zmieniać ten adres, jeśli nie chcesz go ponownie używać.
:::

:::details Jak jest obliczana cena Bitcoina na Peach?

Cena BTC, którą pokazujemy na Peach, to agregat cena BTC na giełdach zdecentralizowanych.
:::

:::details Co się dzieje z ceną walut o wysokiej inflacji, takich jak Argentyna, Wenezuela, itp. ?

Waluty o wysokiej inflacji cierpią z powodu dużej zmienności, dlatego cena, którą znajdziesz na różnych giełdach, może się różnić. Peach podaje cenę zgodnie z agregatem ceny BTC z różnych źródeł.
:::

:::details Jak przyspieszyć transakcję utknąć z powodu niskich opłat górniczych?
To zależy od rodzaju transakcji, o której mówimy. Oto lista wszystkich transakcji, które mogą mieć miejsce w Peach, oraz ich rozwiązań w celu przyspieszenia opłat:

1. Transakcja na finansowanie depozytu w celu opublikowania oferty sprzedaży
- Jeśli zasiliłeś depozyt z portfela Peach, możesz zastosować RBF (Replace-By-Fee), aby zwiększyć opłaty
- Jeśli zasiliłeś depozyt zewnętrznego portfela, musisz sprawdzić, czy portfel obsługuje RBF (Replace-By-Fee), aby zwiększyć opłaty sieciowe.

2. Transakcja wydania z depozytu (kupno Bitcoinów)
- Jeśli twój adres odbiorczy pochodzi z portfela Peach, możesz również wykonać technikę CPFP, jeśli jest ona obsługiwana przez twój portfel.
- Jeśli twój adres odbiorczy pochodzi z zewnętrznego portfela, możesz także wykonać technikę CPFP, jeśli jest ona obsługiwana przez twój portfel.

3. Wysyłka transakcji z portfela Peach do innego portfela
- RBF (Replace-By-Fee) z portfela Peach w danych transakcji!
:::

:::details Co to jest GroupHug?
GroupHug to po prostu nazwa, którą nadaliśmy działaniom polegającym na pakowaniu transakcji różnych użytkowników w celu uniknięcia opłat za każdą z nich. Aby uzyskać bardziej szczegółowe wyjaśnienie, sprawdź naszego [bloga](https://peachbitcoin.com/blog/group-hug).
:::

:::details Jeśli mam tylko jedną aktywną ofertę zakupu, czy zostanie ona natychmiast uwolniona?

Nie, Twoja wypłata zostanie dodana do kolejki oczekujących na wypłatę. Wypłata zostanie dokonana, gdy wystarczająco dużo użytkowników weźmie udział w paczce. Liczbę wymaganych uczestników można zobaczyć w informacji o oczekującej wypłacie. Dostęp do tej informacji można uzyskać w szczegółach transakcji.
Tam możesz zobaczyć, ile slotów w bieżącej paczce jest już zajętych. W informacji znajduje się również ETA, która wskaże maksymalny czas oczekiwania, jeśli sloty nie zostaną wypełnione wcześniej.
:::

:::details Jak działa to, jeśli mam wiele ofert zakupu w toku?

Tak, jak wspomniano wcześniej, Twoje wypłaty zostaną dodane do kolejki oczekujących na wypłatę w celu zamknięcia z innymi uczestnikami.
:::

:::details Czy istnieje ograniczenie liczby uczestników, którzy mogą wziąć udział w pakowaniu?

Nie, paczki mogą również przekroczyć maksymalną liczbę uczestników. Nie jest to ograniczenie, ale próg. Oznacza to, że gdy zostanie osiągnięte minimum, po prostu bierzemy wszystkie psbts i łączymy je w celu dokonania transakcji, zmniejszając opłaty, które płaci każdy uczestnik.
:::

:::details Jak podpisać zewnętrzny adres?
Postępuj zgodnie z tymi krokami, aby podpisać adres odbiorczy podczas zakupu Bitcoinów na zewnętrzny portfel:

_Uwaga: Pierwsze 2 kroki są przydatne, jeśli zawsze chcesz otrzymywać środki na zewnętrznych adresach. Jeśli chcesz to zrobić tylko raz lub chcesz czasem korzystać z portfela Peach, zacznij od kroku 3._

1. Przejdź do ustawień
   - wyłącz portfel Peach
   - przejdź do adresu wypłaty

2. Wklej nowy adres odbioru

3. Przejdź przez proces opublikowania swojej oferty zakupu, a przed jej opublikowaniem upewnij się, że wybierasz odbiór na Twój zewnętrzny adres portfela (kliknij na małą ikonę portfela w prawym górnym rogu ekranu podsumowania oferty).

4. Po potwierdzeniu swojej oferty zakupu, pojawi się wiadomość do podpisania Twojego adresu. Skopiuj ją i wróć do swojego portfela.

5. Szukaj opcji "podpisz/zweryfikuj"* i wklej:
   - Twój adres odbioru
   - wiadomość od Peach

6. Kliknij "podpisz" i podpis zostanie wygenerowany. Skopiuj go.

7. Wklej podpis do portfela Peach i kliknij "potwierdź".

8. Twoja oferta zostanie opublikowana.

_*Ostrzeżenie: nie wszystkie portfele obsługują opcję podpisywania/zweryfikowania Twojego adresu._ Peach zaleca korzystanie z Blue Wallet, Sparrow lub Samourai Wallet. Inne opcje to Ledger i Trezor (Portfele sprzętowe), Bitcoin Core i portfel Electrum.

Możesz również znaleźć przewodnik krok po kroku, jak podpisać wiadomość, korzystając z Blue Wallet na naszym kanale YouTube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Jak korzystać z CPFP, aby przyspieszyć zablokowane transakcje?

Postępuj zgodnie z krokami znajdującymi się w tym filmie: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU), aby przyspieszyć zablokowane transakcje przy użyciu CPFP w aplikacji Peach.
:::
