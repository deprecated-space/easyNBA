// unfold the list
document.querySelector('.op-nbaseason-showmore').click()

// focus team
setTimeout(() => {
  let myFavTeams = ['骑士', '火箭', '森林狼', '雷霆', '勇士']
  let teams = [...document.querySelectorAll('.op-nbaseason-player1'), 
    ...document.querySelectorAll('.op-nbaseason-player2')]

  teams.forEach(item => {
    let teamName = item.querySelector('a').innerHTML.trim()
    if (!myFavTeams.includes(teamName)) return 

    item.style.background = '#ddd'
    item.style.borderRadius = '10px'
  })
}, 1000)
