---
title: Referral
template: referral
---
<!--[teaser]-->
![Nunua na Uza Bitcoin Kwa Kujitegemea](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Umealikwa kujiunga na Peach!

Pakua programu bure na anza biashara mara moja! Hatutakuuliza kupakia kitambulisho chako au kujipiga picha na leseni ya udereva.

### Hatua 1: Sakinisha Programu
:::buttons
[Pakua kwenye iPhone]($iosUrl$)
[Pakua kwenye Android]($androidUrl$)
[Pakua APK kwenye Android](/apk/)
:::

### Hatua 2: Jiandikishe kwa Kutumia Nambari ya Rufaa
Jisajili kwa kutumia nambari ya rufaa: <span id="referral-code"><span> na upokee bonasi ya usajili.

Au bonyeza kitufe hiki kwenye kifaa chako cha simu:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Pata bonasi ya kujiandikisha!</a>
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