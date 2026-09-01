document.addEventListener('DOMContentLoaded', () => {
  const $body = document.body
  const $showMenu = document.querySelector('#show-menu')
  const $headerAnchor = document.querySelector('#header-anchor')
  const $headerLinks = document.querySelectorAll('#header a')
  const $header = document.querySelector('#header')
  const $details = document.querySelectorAll('details[id]')

  // Topbar
  const topbarClass = 'topbar'
  const addTopbar = () => {
    $header.classList.add(topbarClass)
  }
  const removeTopbar = () => {
    $header.classList.remove(topbarClass)
  }

  $headerLinks.forEach($link => {
    $link.addEventListener('click', e => {
      $showMenu.checked = false
    })
  })

  $showMenu.addEventListener('change', e => {
    if ($showMenu.checked) {
      addTopbar()
    } else if ($headerAnchor.getBoundingClientRect().y > 0) {
      window.setTimeout(() => {
        removeTopbar()
      }, 500)
    }
  })

  if ('IntersectionObserver' in window) {
    if ($body) {
      const headerObserver = new IntersectionObserver(entries => {
        const {
          boundingClientRect: { y },
        } = entries[0]
        if (y < 0) {
          addTopbar()
        } else if (!$showMenu.checked) {
          removeTopbar()
        }
      })
      headerObserver.observe($headerAnchor)
    }
  }

  // FAQ
  const itemId = window.location.hash
  const $detail = itemId ? document.querySelector(`details${itemId}`) : null
  if ($detail) {
    $detail.setAttribute('open', true)
    window.scrollTo(0, $detail.offsetTop)
  }

  if ($details) {
    $details.forEach($detail => {
      $detail.addEventListener('click', e => {
        const { currentTarget } = e
        const hash =
          currentTarget.getAttribute('open') === null
            ? `#${currentTarget.id}`
            : ''
        window.history.replaceState({}, '', `${location.pathname}${hash}`)
      })
    })
  }
})

// Trading conditions notice: the strip above the fixed header, and the modal
// it opens. The strip's height feeds --banner-height, which the rest of the
// layout offsets content by, so it has to be measured rather than assumed:
// the text wraps to a different number of lines per viewport and language.
document.addEventListener('DOMContentLoaded', () => {
  const $banner = document.querySelector('#trading-banner')
  const $popup = document.querySelector('#trading-popup')
  if (!$banner || !$popup) return

  const $close = $popup.querySelector('#trading-popup-close')
  const $root = document.documentElement
  const openClass = 'is-open'

  const syncBannerHeight = () => {
    // Drop the previous override first: --banner-height is the strip's own
    // min-height, so measuring with it still applied would never let the
    // banner shrink back down again.
    $root.style.removeProperty('--banner-height')
    const { height } = $banner.getBoundingClientRect()
    if (height) $root.style.setProperty('--banner-height', `${Math.ceil(height)}px`)
  }

  let frame = null
  const scheduleSync = () => {
    if (frame) window.cancelAnimationFrame(frame)
    frame = window.requestAnimationFrame(() => {
      frame = null
      syncBannerHeight()
    })
  }

  syncBannerHeight()
  window.addEventListener('resize', scheduleSync)
  window.addEventListener('load', scheduleSync)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleSync).catch(() => {})
  }

  const openPopup = () => {
    $popup.classList.add(openClass)
    if ($close) $close.focus()
  }
  const closePopup = () => {
    $popup.classList.remove(openClass)
    $banner.focus()
  }

  $banner.addEventListener('click', openPopup)
  if ($close) $close.addEventListener('click', closePopup)
  $popup.addEventListener('click', e => {
    if (e.target === $popup) closePopup()
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $popup.classList.contains(openClass)) closePopup()
  })
})
