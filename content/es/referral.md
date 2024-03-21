---
title: Referral
template: referral
---

<!--[teaser]-->

![Compra y Vende Bitcoin Peer-to-Peer](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## ¡Te han invitado a unirte a Peach!

¡Descargate la app y empieza a comprar y vender bitcoin en menos de un minuto! No te pediremos ninguna selfie ni foto de tu DNI ;)

### Paso 1: Instala la App

:::buttons
[Descargar en iPhone]($iosUrl$)
[Descargar en Android]($androidUrl$)
[Descargar APK en Android](/es/apk/)
:::

### Paso 2: Crea tu cuenta con el código de referido

Crea tu cuenta usando el código: <span id="referral-code"><span> y recibe un premio nada más empezar.

O aprieta este botón desde tu dispositivo (android o iOS):

<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">¡Quiero crear mi cuenta!</a>
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
