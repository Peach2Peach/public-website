// Wires up every .video-with-play block on the page: the big play button starts
// the video, then hides itself while it plays and comes back on pause/end.
document.addEventListener('DOMContentLoaded', function () {
  var containers = document.querySelectorAll('.video-with-play')

  Array.prototype.forEach.call(containers, function (container) {
    var video = container.querySelector('video')
    var button = container.querySelector('.video-play-button')
    if (!video || !button) return

    function sync() {
      container.classList.toggle('is-playing', !video.paused && !video.ended)
    }

    button.addEventListener('click', function () {
      var playing = video.play()
      // Safari/iOS reject the promise if playback is blocked; keep the button visible.
      if (playing && typeof playing.catch === 'function') playing.catch(sync)
    })

    video.addEventListener('play', sync)
    video.addEventListener('pause', sync)
    video.addEventListener('ended', sync)
    sync()
  })
})
