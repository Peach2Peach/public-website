# FAQ Prywatności

:::details Jakie informacje zbiera o mnie Peach?

Dążymy do przechowywania absolutnego minimum danych o naszych użytkownikach. Oto krótki przegląd tego, co mamy na naszych serwerach:

- Hash* Twojego unikalnego identyfikatora aplikacji (AdID)
- Hash Twoich danych płatniczych
- Twoje zaszyfrowane czaty
- Dane transakcji, aby upewnić się, że anonimowi użytkownicy nie przekraczają limitu handlowego (jakie metody płatności są używane, ilości kupna i sprzedaży)
- Adresy używane do wysyłania do depozytu i wysyłania z depozytu
- Dane użytkowania (Firebase & Google Analytics), **tylko jeśli się na to zgodziłeś**

Aby uzyskać pełny opis, zapoznaj się z naszą [polityką prywatności](/privacy-policy/).

* Hash to dane, które zostały zrobione nierozpoznawalne, podobne do szyfrowania. Te same dane zawsze prowadzą do tego samego hasha. Oznacza to, że nie wiemy, jakie są dane, ale będziemy w stanie zauważyć, jeśli te same dane zostaną użyte dwukrotnie.
:::

:::details Kto może zobaczyć moje dane płatnicze?

Tylko Twój kontrahent może zobaczyć Twoje dane płatnicze; są one przesyłane przez serwery Peach, ale są w pełni szyfrowane od końca do końca (jak w większości aplikacji do czatowania), więc nie możemy zobaczyć, jakie są.

Kiedy rozpoczynasz spór, Ty i dane płatnicze Twojego kontrahenta oraz Wasza historia czatu będą widoczne dla przydzielonego mediatora Peach.
:::

:::details Jak zweryfikować APK?

Postępuj zgodnie z tymi krokami, aby zweryfikować, czy pobrane APK to prawdziwe APK Peach:

- Pobierz APK, które chcesz zainstalować ze strony internetowej, a także podpis i manifest (wszystko można znaleźć na https://peachbitcoin.com/pl/apk)

- Pobierz klucz PGP Peach https://keys.openpgp.org/vks/v1/by-fingerprint/E970EDB410C8E84198F141584AD3CE3043D8CD1B (można to również znaleźć na naszej stronie)

- Wygeneruj sumę kontrolną pliku APK, który pobrałeś, i porównaj ją z sumą kontrolną w manifeście.

```
sha256sum app-prod-arm64-v8a-release.apk
```

(zastąp app-prod-arm64-v8a-release.apk nazwą swojego pliku). Powinna być taka sama jak w manifeście. W przeciwnym razie skontaktuj się z nami i upewnij się, że nie instalujesz tej aplikacji na swoim urządzeniu. W tym przykładzie powinieneś zobaczyć następujące wyjście:

```
$ sha256sum app-prod-arm64-v8a-release.apk

09e4e2db837b2a2aef3a51527ef24fae22cff2b7e2ecd4ca01502c8a61961584  app-prod-arm64-v8a-release.apk
```

Jeśli porównamy to z tym, co znajduje się w manifest-peach.txt, możemy zobaczyć, że jest to ta sama suma.

- Dodaj klucz Peach do swojego zestawu kluczy

```
gpg --import PGP-peach.asc
```

(upewnij się, że zastąpisz PGP-peach.asc poprawną nazwą pliku, zazwyczaj będzie to E970EDB410C8E84198F141584AD3CE3043D8CD1B.asc)

- Zweryfikuj podpisy, które wcześniej pobrałeś, używając następującego polecenia:

```
gpg --verify manifest-peach.sig manifest-peach.txt
```

W wyniku powinieneś zobaczyć następującą linię:

```
gpg: Good signature from "hello@peachbitcoin.com <hello@peachbitcoin.com>" [unknown]
```

:::

:::details Czy Taproot jest obsługiwany?

- Tak, możesz wysyłać do adresów taproot z portfela Peach.
- Możesz również otrzymywać bezpośrednio z escrow do swojego zewnętrznego adresu taproot.

:::

:::details Jak mogę połączyć się z własnym węzłem?

Łączenie z własnym węzłem zwiększa prywatność, ponieważ wszystkie transakcje są przekazywane do sieci Bitcoin przez własny węzeł, zamiast przez Peach.

Peach obecnie nie obsługuje Tor, więc musisz użyć IPv4, aby połączyć się z własnym węzłem. Jeśli nie jest otwarty na internet, możesz połączyć się z nim tylko przez lokalną sieć lub przez prywatną sieć VPN.

Sprawdź nasz [samouczek wideo](https://www.youtube.com/watch?v=xtvq2i3mIYg), aby dowiedzieć się, jak połączyć się z własnym węzłem.

Jeśli używasz Umbrel, możesz użyć umbrel.{numer portu} zamiast IP swojego węzła.
:::

:::details Jak bezpieczne są moje bitcoiny w portfelu peach?

Portfel peach jest uważany za portfel gorący. Portfele gorące to portfele połączone z internetem i narażone na złośliwe oprogramowanie i próby hackingu. Żaden system nie jest w 100% bezpieczny i portfel peach może być tylko tak bezpieczny, jak system operacyjny, na którym działa.

Można postrzegać portfel gorący jak zwykły portfel w kieszeni, nie nosiłbyś w nim tysięcy dolarów przez długi czas. Możesz go łatwo zgubić lub ktoś może Cię okraść.

Mimo to, robimy co w naszej mocy, aby zachować bezpieczeństwo Twojego portfela, stosując standardowe najlepsze praktyki, takie jak używanie wystarczającej entropii (losowych liczb) do uczynienia Twoich kluczy prywatnych nieodgadnionymi i szyfrowanie pamięci aplikacji, aby zapobiec dostępowi przez inne aplikacje. Losowe liczby są generowane przez system operacyjny, którego używasz i zazwyczaj są pochodne od nieterministycznych wejść, takich jak pomiary temperatury, szumy fazowe itp... Jeśli jesteś zainteresowany szczegółami, zbadaj PRNGs (Pseudolosowe generatory liczb).

Ochrona PIN/hasłem jest również planowana.

W każdym przypadku radzimy przenosić swoje środki do zimnego przechowywania (portfel sprzętowy, tak jak [Bitbox 02](https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc 'https://bitbox.swiss/bitbox02/?ref=DLX6l9ccCc')), który ma znacznie silniejsze gwarancje bezpieczeństwa.

:::

:::details Co to jest kontrola monet?

Portfel Peach obsługuje kontrolę monet lub zarządzanie monetami. Celem kontroli monet jest utrzymanie twoich monet oddzielonych, jeśli sobie tego życzysz, dla zarządzania prywatnością.

Obejrzyj nasz film wyjaśniający kontrolę monet w szczegółach: [Jak wykonać kontrolę monet używając Portfela Peach](https://www.youtube.com/watch?v=zWwIekSv3U8)

:::
