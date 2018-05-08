window.onload = function() {
  chrome.storage.sync.get('currentTime-easynba', obj => {
    let currentTime = obj['currentTime-easynba'] || 0

    // 设置播放点
    // 不加 Math.random() 有时会 404
    document.getElementById('tenvideo_video_player_0').currentTime = (+currentTime)

    // auto play
    document.querySelector('.tvp_playpause_button').click()

    // auto fullscreen
    document.querySelector('.tvp_fullscreen_button').click()

    // pause
    document.addEventListener('keydown', e => {
      if (e.which !== 32) return 
      document.querySelector('.tvp_playpause_button').click()
    }, false)
  })
}