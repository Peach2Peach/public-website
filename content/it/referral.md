---
title: Referral
template: referral
---

<!--[teaser]-->

![Compra e Vendi Bitcoin Peer-to-Peer](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Sei stato invitato ad unirti a Peach!

Scarica l'app gratuitamente e inizia a fare scambi subito! Non ti chiederemo mai il tuo documento d'identità o un selfie con la tua patente.

### Passo 1: Installa l'App

:::buttons
[Scarica su iPhone]($iosUrl$)
[Scarica su Android]($androidUrl$)
[Scarica APK su Android](/it/apk/)
:::

### Passo 2: Registrati utilizzando il codice di affiliazione

Registarti utilizzando il codice di affiliazione: <span id="referral-code"><span> e ricevi un bonus di iscrizione.

Oppure clicca su questo pulsante dal tuo smartphone:

<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Fit%2Freferral%3Fcode%3DREFERRAL">Ricevi Bonus Iscrizione!</a>
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
