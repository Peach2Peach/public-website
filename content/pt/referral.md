---
title: Referral
template: referral
---
<!--[teaser]-->
![Comprar e Vender Bitcoin de Pessoa para Pessoa](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Você foi convidado para se juntar à Peach!

Baixe o aplicativo gratuitamente e comece a negociar agora mesmo! Não pediremos que você faça o upload de seus documentos de identidade ou tire uma selfie com sua carteira de motorista.

### Passo 1: Instale o Aplicativo
:::buttons
[Download no iPhone]($iosUrl$)
[Download no Android]($androidUrl$)
[Download do APK no Android](/apk/)
:::

### Passo 2: Cadastre-se usando o código de referência
Cadastre-se usando o código de referência: <span id="referral-code"><span> e receba um bônus de cadastro.

Ou clique neste botão em seu dispositivo móvel:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Receba o bônus de cadastro!</a>
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
