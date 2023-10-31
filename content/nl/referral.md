---
title: Referral
template: referral
lang: nl
---
<!--[teaser]-->
![Koop en Verkoop Bitcoin Peer-to-Peer](/img/how-it-works/koop-en-verkoop-bitcoin-peer-to-peer.png)

## Je bent uitgenodigd om je bij Peach aan te sluiten!

Download de app gratis en begin meteen met handelen! We vragen je niet om je ID te uploaden of een selfie te maken met je rijbewijs.

### Stap 1: Installeer de App
:::buttons
[Downloaden op iPhone]($iosUrl$)
[Downloaden op Android]($androidUrl$)
[Download APK op Android](/apk/)
:::

### Stap 2: Meld je aan met de verwijzingscode
Meld je aan met de verwijzingscode: <span id="referral-code"><span> en ontvang een aanmeldingsbonus.

Of klik op deze knop vanaf je mobiele apparaat:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Ontvang een aanmeldingsbonus!</a>
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
