# FAQ dotyczące Handlu

:::details Skąd mogę mieć pewność, że otrzymam bitcoiny / pieniądze?

Tworząc ofertę sprzedaży lub akceptując ofertę kupna, sprzedawca wysyła bitcoiny na adres kontrolowany przez niego i Peach: bitcoiny mogą zostać przesunięte tylko wtedy, gdy zarówno on, jak i Peach podpiszą transakcję. To zapewnia, że:

- Sprzedawca nie może samodzielnie (z powrotem) przesunąć bitcoinów  
- Peach nie może ukraść bitcoinów  
- Kupujący nie otrzyma bitcoinów, dopóki nie zostanie dokonana płatność  
- Sprzedawca może odzyskać bitcoiny, jeśli kupujący nie odpowiada  

Jeśli transakcja nie zostanie rozliczona normalnie, ten adres automatycznie przechodzi pod pełną kontrolę Peach po około 30 dniach (dokładnie: gdy zostanie wydobytych 4320 bloków bitcoin). To zapewnia, że:

- Kupujący otrzyma bitcoiny, jeśli udowodni, że dokonał płatności, a sprzedawca nie odpowiada  
- Bitcoiny nie zostaną zablokowane, jeśli coś stanie się sprzedawcy  

To najważniejsza część zabezpieczenia Twojej transakcji. Oprócz tego mamy również rozbudowany system reputacji, który pomaga identyfikować osoby od dawna korzystające z Peach w sposób niezawodny.
:::

:::details Dlaczego istnieje limit handlowy?

Szwajcarskie przepisy stanowią, że osoba może kupić maksymalnie 1000 CHF bitcoinów dziennie bez ujawniania swojej tożsamości sprzedawcy. Ponieważ nie chcemy trafić do więzienia, egzekwujemy ten limit w aplikacji.

Wszystkie dane dotyczące płatności są przechowywane na Twoim telefonie, więc nie możemy ich zobaczyć. To, co widzimy, to hash\* identyfikatora Twojego telefonu i danych płatności. Dzięki temu możemy blokować transakcje przekraczające limit osobisty.

\* Hash to dane przekształcone w sposób uniemożliwiający ich rozpoznanie, podobnie jak szyfrowanie. Te same dane zawsze prowadzą do tego samego hash. Oznacza to, że nie wiemy, jakie to dane, ale możemy wykryć, czy zostały użyte dwukrotnie.
:::

:::details Czy jest możliwość kupna/sprzedaży powyżej limitu?

Jeśli jesteś sprzedawcą o dużym wolumenie, wyślij nam e-mail na adres [$contactEmail$](mailto:$contactEmail$)!  
Zostaniesz poproszony o przejście procesu KYC i limity zostaną zniesione.
:::

:::details Jakie są opłaty za handel na Peach?

Peach pobiera od kupującego 2% wartości transakcji jako opłatę. Handlując na Peach, dokonujesz transakcji w sieci blockchain Bitcoin, co wiąże się z opłatami sieciowymi. Pełną strukturę opłat możesz zawsze zobaczyć na końcu transakcji, która może wyglądać np. tak:

![Rozliczenie Transakcji](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Jak mogę anulować ofertę lub transakcję?

Możesz anulować swoje oferty i transakcje, klikając czerwony X u góry ekranu, gdy tylko jest dostępny:

![Anuluj Transakcję](/img/faq/trading/cancel.png)

Należy jednak pamiętać, że często ma to konsekwencje. Przed sparowaniem z kimś możesz anulować w dowolnym momencie. Po sparowaniu Twoja reputacja zostanie jednak negatywnie oceniona. Dodatkowo, jako sprzedawca, musisz poprosić kupującego o zgodę na anulowanie transakcji. Może się zdarzyć, że już dokonał płatności!
:::

:::details Dlaczego otrzymałem mniej satów, niż się spodziewałem?

Peach pobiera od kupującego 2% opłaty handlowej, co oznacza, że otrzymasz mniej satów, niż wynosiła wartość transakcji. Dodatkowo musisz zapłacić opłaty sieci Bitcoin. Twoja transakcja może wyglądać na przykład tak:

![Rozliczenie Zakupu](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details Co jeśli nie chcę używać portfela Peach do wypłaty / zwrotu?

Oczywiście możesz użyć własnego portfela, jeśli chcesz. Nadal jednak zdecydowanie zalecamy korzystanie z portfela Peach, ponieważ jest to zdecydowanie najprostszy sposób na przeprowadzenie transakcji. Następnie możesz przesłać środki do dowolnego innego portfela.

Jeśli chcesz dodać swój własny portfel, możesz wyłączyć „wypłatę do portfela Peach” i ustawić własny adres wypłaty:

![Wyłącz Portfel](/img/faq/trading/disablewallet.png)

Podczas zawierania transakcji musisz podpisać wiadomość potwierdzającą, że kontrolujesz ten portfel, zgodnie z przepisami szwajcarskimi.

Wkrótce dodamy obsługę xpub, ale na razie musisz ręcznie zmienić ten adres, jeśli nie chcesz go ponownie używać.
:::

:::details Jak obliczana jest cena Bitcoina na Peach?

Cena BTC, którą pokazujemy na Peach, to średnia cen BTC z giełd scentralizowanych.
:::

:::details Co dzieje się z walutami w wysokiej inflacji, takimi jak Argentyna, Wenezuela itp.?

Waluty objęte wysoką inflacją charakteryzują się dużą zmiennością, dlatego ceny na różnych giełdach mogą się różnić. Peach pokazuje cenę według średniej z różnych źródeł BTC.
:::

:::details Jak przyspieszyć transakcję, która utknęła z powodu niskich opłat górniczych?

To zależy od rodzaju transakcji. Oto lista transakcji, które mogą wystąpić na Peach, oraz rozwiązania pozwalające zwiększyć opłaty:

1. Transakcja finansowania escrow w celu opublikowania oferty sprzedaży lub zaakceptowania oferty kupna  

- Jeśli sfinansowałeś escrow z portfela Peach, możesz użyć RBF (Replace-By-Fee), aby ponownie wysłać transakcję z wyższą opłatą  
- Jeśli sfinansowałeś escrow z portfela zewnętrznego, sprawdź, czy portfel obsługuje RBF  

2. Transakcja zwolnienia z escrow (kupno Bitcoina)  

- Jeśli Twój adres odbiorczy pochodzi z portfela Peach, możesz wypłacić całość do własnego portfela zewnętrznego z wyższą opłatą (Ustawienia > Opłaty Sieciowe) – technika CPFP  
- Jeśli Twój adres odbiorczy pochodzi z portfela zewnętrznego, możesz również użyć techniki CPFP, jeśli Twój portfel to obsługuje  

3. Transakcja wysyłki z portfela Peach do innego portfela  

- RBF (Replace-By-Fee) z portfela Peach w szczegółach transakcji!
  :::

:::details Czym jest GroupHug?
GroupHug to po prostu termin, który nadaliśmy procesowi łączenia transakcji różnych użytkowników, aby uniknąć płacenia indywidualnych opłat. Bardziej szczegółowe wyjaśnienie znajdziesz w naszym [poście na blogu](https://peachbitcoin.com/blog/group-hug).
:::

:::details Jeśli mam tylko jedną ofertę kupna w toku, czy zostanie ona natychmiast zrealizowana?

Nie, Twoja wypłata zostanie dodana do kolejki. Wypłata zostanie dokonana, gdy wystarczająca liczba użytkowników weźmie udział w batchu. Liczbę wymaganych uczestników można zobaczyć w informacjach o oczekującej wypłacie. Tam też możesz zobaczyć, ile miejsc w bieżącym batchu jest zajętych oraz ETA pokazującą maksymalny czas oczekiwania.
:::

:::details Jak to działa, jeśli mam wiele ofert kupna w toku?

Jak wspomniano wcześniej, Twoje wypłaty zostaną dodane do kolejki, aby połączyć je z innymi uczestnikami.
:::

:::details Czy istnieje limit liczby uczestników batchu?

Nie, batch może obejmować także więcej uczestników niż minimalna wymagana liczba. To nie jest limit, ale próg. Gdy tylko osiągnięte zostanie minimum, bierzemy wszystkie psbt i łączymy je, aby wykonać transakcję i zmniejszyć opłaty dla każdego uczestnika.
:::

:::details Jak podpisać zewnętrzny adres?
Postępuj zgodnie z tymi krokami, aby podpisać adres odbiorczy podczas zakupu Bitcoina na portfel zewnętrzny:

_Uwaga: Pierwsze 2 kroki są przydatne, jeśli chcesz **zawsze** otrzymywać środki na zewnętrzne adresy. Jeśli chcesz zrobić to tylko raz lub czasami korzystać z portfela Peach, zacznij od kroku 3._

1. Przejdź do ustawień  

- wyłącz portfel Peach  
- przejdź do adresu wypłaty  

2. Wklej nowy adres odbiorczy  

3. Przejdź przez proces publikacji oferty kupna i przed jej publikacją upewnij się, że wybrałeś adres zewnętrzny (kliknij w małą ikonę portfela w prawym górnym rogu ekranu podsumowania oferty).  

4. Po potwierdzeniu oferty pojawi się wiadomość do podpisania. Skopiuj ją i wróć do swojego portfela.  

5. Wyszukaj opcję „sign/verify”\* i wklej:  

- swój adres odbiorczy  
- wiadomość Peach  

6. Kliknij podpisz i pojawi się podpis. Skopiuj go.  

7. Wklej podpis w portfelu Peach i potwierdź.  

8. Twoja oferta została opublikowana.  

_\* Zastrzeżenie: nie wszystkie portfele obsługują opcję sign/verify._  
Peach zaleca korzystanie z Blue Wallet, Sparrow lub Samourai Wallet. Inne opcje to Ledger i Trezor (portfele sprzętowe), Bitcoin Core i Electrum.  

Znajdziesz również samouczek krok po kroku dotyczący podpisywania wiadomości w Blue Wallet na naszym kanale Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details Jak użyć CPFP, aby przyspieszyć zablokowane transakcje?

Postępuj zgodnie z krokami przedstawionymi w tym filmie: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU), aby przyspieszyć zablokowane transakcje przy użyciu CPFP w aplikacji Peach.
:::

:::details Jak działa finansowanie wielu ofert sprzedaży z portfela zewnętrznego?

Kiedy chcesz sfinansować wiele ofert sprzedaży naraz, aplikacja generuje adres pośredni z Twojego portfela Peach. Gdy tylko bitcoiny dotrą na ten adres, generowana jest nowa transakcja dla każdego escrow. Na przykład, jeśli chcesz sfinansować 5 ofert sprzedaży, zostanie wysłanych 5 transakcji na różne adresy escrow.
:::
