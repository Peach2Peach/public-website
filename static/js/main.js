document.addEventListener("DOMContentLoaded", () => {
  const $body = document.body
  const $showMenu = document.querySelector('#show-menu')
  const $headerAnchor = document.querySelector('#header-anchor')
  const $headerLinks = document.querySelectorAll('#header a')
  const $header = document.querySelector('#header')

  // Topbar
  const topbarClass = 'topbar'
  const topbarAppearClass = 'topbar--appear'
  const addTopbar = () => {
    $header.classList.add(topbarClass)
    window.setTimeout(() => {
      $header.classList.add(topbarAppearClass)
    }, 25)
  }
  const removeTopbar = () => {
    $header.classList.remove(topbarClass)
    $header.classList.remove(topbarAppearClass)
  }

  $headerLinks.forEach($link => {
    $link.addEventListener('click', e => {
      $showMenu.checked = false
    })
  })

  $showMenu.addEventListener('change', e => {
    if ($showMenu.checked) {
      addTopbar()
    }
  })

  if ('IntersectionObserver' in window) {
    if ($body) {
      const headerObserver = new IntersectionObserver(entries => {
        const { target, boundingClientRect: { y, height } } = entries[0]
        if (Math.abs(y) > height) {
          addTopbar()
        } else if (!$showMenu.checked) {
          removeTopbar()
        }
      })
      headerObserver.observe($headerAnchor)
    }
  }
})
