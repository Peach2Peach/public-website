---
title: Referral
template: referral
---

<!--[teaser]-->

![Kupuj i sprzedawaj Bitcoinami bezpośrednio od innych użytkowników](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

# Zostałeś zaproszony do dołączenia do Peach!

Pobierz aplikację za darmo i zacznij handlować od razu! Nie poprosimy Cię o przesłanie swojego dowodu tożsamości ani o zrobienie selfie z prawem jazdy.

### Krok 1: Zainstaluj Aplikację

:::przyciski
[Pobierz na iPhone'a]($iosUrl$)
[Pobierz na Androida]($androidUrl$)
[Pobierz APK na Androida](/apk/)
:::

### Krok 2: Zarejestruj się używając kodu polecającego

Zarejestruj się używając kodu polecającego: <span id="kod-polecający"><span> i otrzymaj bonus za rejestrację.

Lub kliknij ten przycisk z urządzenia mobilnego:

<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Get signup bonus!</a>
  </p>
</div>

<script>
  function getParameterByName(name, url) {
      if (!url) url = window.location.href
      name = name.replace(/[[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }

    var code = getParameterByName('code')

    if (!code) {
      window.location.href = window.location.origin
    } else {
      var $refCode = document.getElementById('referral-code')
      var $button = document.getElementById('referral-code-button')
      $refCode.innerText = code.toUpperCase()
      $button.href = $button.href.replace('REFERRAL', code.toUpperCase())
    }
</script>
