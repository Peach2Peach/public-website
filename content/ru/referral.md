---
title: Referral
template: referral
lang: ru
---
<!--[teaser]-->
![Покупка и продажа биткоинов между пользователями](/img/how-it-works/pokupka-i-prodazha-bitkoinov-mezhdu-polzovatelyami.png)

## Вас пригласили присоединиться к Peach!

Скачайте приложение бесплатно и начните торговать прямо сейчас! Мы не попросим вас загружать свой идентификационный документ или делать селфи со своим водительским удостоверением.

### Шаг 1: Установите приложение
:::buttons
[Скачать на iPhone]($iosUrl$)
[Скачать на Android]($androidUrl$)
[Скачать APK на Android](/ru/apk/)
:::

### Шаг 2: Регистрация с использованием кода реферала
Зарегистрируйтесь, используя код реферала: <span id="referral-code"><span>, и получите бонус за регистрацию.

Или нажмите эту кнопку с вашего мобильного устройства:
<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Получить бонус за регистрацию!</a>
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