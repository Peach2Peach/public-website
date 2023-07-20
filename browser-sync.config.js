module.exports = {
  open: false,
  notify: false,
  ghostMode: false,
  server: ['./static', './dist'],
  serveStatic: [{
    route: '/.well-known',
    dir: ['./src/.well-known/']
}]
}
