---
title: Referral
template: referral
lang: de
---
<!--[teaser]-->
![Bitcoins peer-to-peer kaufen und verkaufen](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Du wurdest eingeladen, Peach beizutreten!

Lade die App kostenlos herunter und beginne sofort mit dem Handel! Wir werden dich nicht bitten, deinen Ausweis hochzuladen oder ein Selfie mit deinem Führerschein zu machen.

### Schritt 1: App installieren
:::buttons
[Auf dem iPhone herunterladen]($iosUrl$)
[Auf Android herunterladen]($androidUrl$)
[APK auf Android herunterladen](/de/apk/)
:::

### Schritt 2: Registriere dich mit dem Empfehlungscode
Registriere dich mit dem Empfehlungscode: <span id="referral-code"><span> und erhalte einen Anmeldebonus.

Oder klicke auf diese Schaltfläche auf deinem Mobilgerät:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Anmeldebonus erhalten!</a>
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