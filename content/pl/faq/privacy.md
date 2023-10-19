# FAQ dotyczące prywatności

:::details Jakie informacje zbiera Peach o mnie?

Staramy się przechowywać absolutnie minimalną ilość danych na temat naszych użytkowników. W szybkim przeglądzie oto, co mamy na naszych serwerach:

- Skrót\* unikalnego identyfikatora aplikacji (AdID)
- Skrót danych płatności
- Twoje zaszyfrowane czaty
- Dane transakcji w celu zapewnienia, że anonimowi użytkownicy nie przekraczają limitu transakcji (rodzaj używanych metod płatności, kwoty zakupów i sprzedaży)
- Adresy używane do wysyłki na escrow i od escrow
- Dane używania (Firebase i Google Analytics), **tylko jeśli wyraziłeś na to zgodę**

Dla pełnego rozłożenia, proszę zobaczyć naszą [politykę prywatności](/privacy-policy/).

\* Skrót to pewne dane, które zostały uczynione nie do rozpoznania, podobnie jak przy ich szyfrowaniu. Te same dane zawsze prowadzą do tego samego skrótu. Oznacza to, że nie wiemy, co to za dane, ale będziemy w stanie zauważyć, jeśli te same dane zostaną użyte dwa razy.
:::

:::details Kto może zobaczyć moje dane płatnicze?

Tylko twoja druga strona może zobaczyć twoje dane płatnicze; są one przesyłane za pośrednictwem serwerów Peach, ale są w pełni zaszyfrowane od końca do końca (jak w przypadku większości aplikacji do czatów), dzięki czemu nie możemy zobaczyć, co to jest.

Kiedy rozpoczniesz spór, twoje dane płatnicze i historia czatu z tobą i twoją drugą stroną będą widoczne dla przypisanego mediatora Peach.
:::

:::details Jak zweryfikować plik APK?

Postępuj zgodnie z tymi krokami, aby zweryfikować, czy pobrany przez ciebie plik APK to rzeczywisty plik APK Peach:

- Pobierz plik APK, który chcesz zainstalować ze strony internetowej, a także podpis i manifest (wszystko można znaleźć na https://peachbitcoin.com/apk)

- Pobierz klucz PGP Peach https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (również dostępny na naszej stronie internetowej)

- Wygeneruj sumę kontrolną pliku APK, który pobrałeś, i porównaj ją z sumą kontrolną w manifestcie.
````
sha256sum app-prod-arm64-v8a-release.apk
````
(zamień app-prod-arm64-v8a-release.apk na nazwę swojego pliku). Powinna być taka sama jak w manifestcie. W przeciwnym razie skontaktuj się z nami i upewnij się, że nie instalujesz tego programu na swoim urządzeniu. W tym przykładzie powinieneś zobaczyć następujący wynik:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Jeśli porównamy to z tym, co znajduje się w manifest-peach.txt, zobaczymy, że jest to to samo.

- Dodaj klucz Peach do swojego pierścienia kluczy
```
gpg --import PGP-peach.asc
```
(upewnij się, że zastępujesz PGP-peach.asc właściwą nazwą pliku, zazwyczaj będzie to 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Zweryfikuj podpisy, które wcześniej pobrałeś za pomocą następującej komendy:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
W wynikach powinieneś zobaczyć następujący wiersz:
```
gpg: Dobra sygnatura od "hello@peachbitcoin.com <hello@peachbitcoin.com>" [nieznana]
```
:::

:::details Czy obsługiwany jest Taproot?

- Możliwe jest finansowanie depozytów z adresu taproot i wypłata środków z portfela Peach na adres taproot.
- NIESTETY nie można ustawić adresu taproot jako bezpośredniego adresu wypłaty (niemożliwe jest podpisanie wiadomości adresem taproot).

:::


:::details Jak mogę połączyć się z własnym węzłem?

Chcesz polepszyć prywatność? Połącz się z własnym węzłem, ponieważ wszystkie transakcje są przekazywane do sieci Bitcoin poprzez Twój własny węzeł, a nie przez Peach.

Obecnie Peach nie obsługuje protokołu Tor, dlatego musisz użyć IPv4, aby połączyć się ze swoim węzłem. Jeśli Twój węzeł nie jest dostępny w Internecie, możesz połączyć się tylko poprzez sieć lokalną lub za pomocą prywatnej sieci VPN.

Zapoznaj się z naszym [poradnikiem wideo](https://www.youtube.com/watch?v=xtvq2i3mIYg), aby dowiedzieć się, jak połączyć się ze swoim własnym węzłem.

Jeśli korzystasz z Umbrela, możesz użyć umbrel.{numer portu} zamiast adresu IP Twojego węzła.

:::
