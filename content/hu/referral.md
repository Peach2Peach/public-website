---
title: Ajánlás
template: referral
---
<!--[teaser]-->
![Bitcoin vásárlás és eladás közvetlenül](/img/hogyan-működik/bitcoin-vásárlás-és-eladás-közvetlenül.png)

## Meghívtak, hogy a Peach-hez csatlakozz!

Töltsd le ingyenesen az alkalmazást, és azonnal kezdd el a kereskedést! NEM kérjük, hogy töltsd fel a személyid vagy egy szelfit, miközben a kezedben tartod a vezetői engedélyed.

### 1. lépés: Az alkalmazás telepítése
:::buttons
[Töltsd le iPhone-ra]($iosUrl$)
[Töltsd le Android-ra]($androidUrl$)
[Töltsd le az APK-t Android-ra](/hu/apk/)
:::

### 2. lépés: Regisztrálj az ajánlói kód használatával
Regisztrálj a következő ajánlói kóddal: <span id="referral-code"><span> és kapj egy regisztrációs bónuszt.

Vagy a mobil eszközödről kattints erre a gombra:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Szerezz regisztrációs bónuszt!</a>
  </p>
</div>

<script>
  function getParameterByName(name, url) {
      if (!url) url = window.location.href
      name = name replace(/[[\]]/g, '\\$&')
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
