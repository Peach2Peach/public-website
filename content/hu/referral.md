---
title: Referral
template: referral
---

<!--[teaser]-->

![Bitcoin vásárlása és eladása Peer-to-Peer módon](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Meghívást kaptál, hogy csatlakozz a peach-hez!

Töltsd le az alkalmazást ingyen és azonnal kezdj el kereskedni! Nem fogjuk kérni, hogy töltsd fel az igazolványodat vagy készíts egy szelfit a jogosítványoddal

### 1. lépés: Telepítsd az alkalmazást

:::gombok
[Töltse le iPhone-ra]($iosUrl$)
[Töltse le Androidra]($androidUrl$)
[Töltse le APK-t Androidra](/apk/)
:::

### 2. lépés: Regisztrálj az ajánlókóddal

Regisztrálj az alábbi ajánlókóddal: <span id="referral-code"><span> és kapj regisztrációs bónuszt.

Vagy kattints erre a gombra a mobilkészülékedről:

<div class="gombok">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Szerezd meg a regisztrációs bónuszt!</a>
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

