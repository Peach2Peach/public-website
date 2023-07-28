---
title: Referral
template: referral
---
<!--[teaser]-->
![Buy and Sell Bitcoin Peer-to-Peer](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## You have been invited to join peach!

Download the app for free and start trading right away! We won't ask you to upload your ID or make a selfie with your driver's license

### Step 1: Install the App
:::buttons
[Download on iPhone]($iosUrl$)
[Download on Android]($androidUrl$)
[Download APK on Android](/apk/)
:::


### Step 2: Signup using the referral code
Sign up using referral code: <span id="referral-code"></span> and receive a signup bonus.

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
      $refCode.innerText = code.toUpperCase()
    }
</script>
