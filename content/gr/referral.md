---
title: Referral
template: referral
---
<!--[teaser]-->
![Αγοράστε και Πουλήστε Bitcoin Peer-to-Peer](/img/how-it-works/buy-and-sell-bitcoin-peer-to-peer.png)

## Έχετε προσκληθεί να συμμετάσχετε στην peach!

Κατεβάστε δωρεάν την εφαρμογή και ξεκινήστε αμέσως τις συναλλαγές! Δεν θα σας ζητήσουμε να ανεβάσετε την ταυτότητά σας ή να βγάλετε μια selfie με το δίπλωμα οδήγησής σας.

### Βήμα 1: Εγκατάσταση της εφαρμογής
:::buttons
[Λήψη για iPhone]($iosUrl$)
[Λήψη για Android]($androidUrl$)
[Κατεβάστε το αρχείο APK για Android](/gr/apk/)
:::

### Βήμα 2: Εγγραφείτε χρησιμοποιώντας τον κωδικό σύστασης (referral code)

Εγγραφείτε χρησιμοποιώντας τον κωδικό σύστασης (referral code): <span id="referral-code"><span> και λάβετε δώρο εγγραφής.

Ή κάντε κλικ σε αυτό το κουμπί από το κινητό σας:

<div class="buttons">
  <p>
    <a id="referral-code-button" href="https://peachbitcoin.page.link/?link=https%3A%2F%2Fpeachbitcoin.com%2Freferral%3Fcode%3DREFERRAL">Get signup bonus!</a>
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
