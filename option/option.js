chrome.storage.sync.get('currentTime-easynba', obj => {
  document.getElementById('current-time-input').value = obj['currentTime-easynba'] || 0
})

document.getElementById('save-btn').onclick = () => {
  let currentTime = document.getElementById('current-time-input').value
  chrome.storage.sync.set({'currentTime-easynba': currentTime}, () => {})
}