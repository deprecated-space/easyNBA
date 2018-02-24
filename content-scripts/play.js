window.onload = function() {
  // auto play
  document.querySelector('.tvp_playpause_button').click()
  
  // auto fullscreen
  document.querySelector('.tvp_fullscreen_button').click()

  // pause
  document.addEventListener('keydown', e => {
    if (e.which !== 32) return 
    document.querySelector('.tvp_playpause_button').click()
  }, false)
}