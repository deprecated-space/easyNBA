let mobileUa = 'Mozilla/5.0 (Linux; Android 7.0; PLUS Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36'

let script = document.createElement("script")
script.textContent = 'navigator.__defineGetter__("userAgent", function() {return "' + mobileUa + '"})'
document.documentElement.appendChild(script)


window.onload = function() {
  if (location.href.includes('sports.qq.com/kbsweb/kbsshare/game.htm')) {
    document.querySelector('.tvp_fileszie').click()
    document.querySelector('.tvp_fullscreen_button').click()
  }
}