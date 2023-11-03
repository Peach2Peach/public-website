---
title: Referral
template: referral
---
<!--[teaser]-->
![Compra i Venda de Bitcoin Peer-to-Peer](/img/com-funciona/compra-i-venda-de-bitcoin-peer-to-peer.png)

## T'han convidat a unir-te a Peach!

Descarrega l'aplicació gratuïtament i comença a operar immediatament! No et demanarem que pujis la teva identificació ni que facis una selfie amb el teu carnet de conduir.

### Pas 1: Instal·la l'aplicació
:::buttons
[Descarrega a iPhone]($iosUrl$)
[Descarrega a Android]($androidUrl$)
[Descarrega l'APK a Android](/ca/apk/)
:::

### Pas 2: Registra't utilitzant el codi de referència
Registra't utilitzant el codi de referència: <span id="referral-code"><span> i rebràs un benefici al registrar-te.

O fes clic en aquest botó des del teu dispositiu mòbil:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Utilitza el codi!</a>
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
