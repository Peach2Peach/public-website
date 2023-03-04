document.addEventListener("DOMContentLoaded", () => {
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
        const { boundingClientRect: { y } } = entries[0]
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
  const itemId = window.location.hash;
  const $detail = itemId ? document.querySelector(`details${itemId}`) : null
  if ($detail) {
    $detail.setAttribute('open', true)
    window.scrollTo(0, $detail.offsetTop)
  }

  if ($details) {
    $details.forEach($detail => {
      $detail.addEventListener('click', e => {
        const { currentTarget } = e
        const hash = currentTarget.getAttribute('open') === null ? `#${currentTarget.id}` : ''
        window.history.replaceState({}, '', `${location.pathname}${hash}`)
      })
    })
  }
})
