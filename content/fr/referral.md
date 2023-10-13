---
title: Referral
template: referral
lang: fr
---
<!--[teaser]-->
![Achetez et vendez des Bitcoins en peer-to-peer](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Vous avez été invité à rejoindre Peach !

Téléchargez l'application gratuitement et commencez à trader dès maintenant ! Nous ne vous demanderons pas de télécharger votre pièce d'identité ni de faire un selfie avec votre permis de conduire.

### Étape 1 : Installez l'application
:::buttons
[Télécharger sur iPhone]($iosUrl$)
[Télécharger sur Android]($androidUrl$)
[Télécharger l'APK sur Android](/fr/apk/)
:::

### Étape 2 : Inscrivez-vous en utilisant le code de parrainage
Inscrivez-vous en utilisant le code de parrainage : <span id="referral-code"><span> et recevez un bonus d'inscription.

Ou cliquez sur ce bouton depuis votre appareil mobile :
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Obtenez un bonus d'inscription !</a>
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
