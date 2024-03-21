---
title: referral
template: referral
---

<!--[teaser]-->

![Купуйте і продаєте біткоїни пір-на-пір](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Вас запросили приєднатися до Peach!

Завантажте додаток безкоштовно та почніть торгувати прямо зараз! Ми не попросимо вас завантажувати ваші документи або робити селфі з вашим водійським посвідченням.

### Крок 1: Встановіть додаток

:::buttons
[Завантажити на iPhone]($iosUrl$)
[Завантажити на Android]($androidUrl$)
[Завантажити APK на Android](/uk/apk/)
:::

### Крок 2: Зареєструйтеся, використовуючи реферальний код

Зареєструйтеся за допомогою реферального коду: <span id="referral-code"><span> та отримайте бонус за реєстрацію.

Або натисніть на цю кнопку на своєму мобільному пристрої:

<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Отримати бонус за реєстрацію!</a>
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
