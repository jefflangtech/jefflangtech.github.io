// Initializing the buttons

const btnControls = document.querySelectorAll('button')
const scoreOne = document.querySelector('#player-score-1')
const scoreTwo = document.querySelector('#player-score-2')
const maxSelect = document.querySelector('#max-score')
const scores = [0, 0]
const maxScore = [6]

function scoreGame() {
    if (scores[0] < maxScore[0] && scores[1] < maxScore[0]) {
        return
    } else { 
        if (scores[0] > scores[1]) {
            scoreOne.classList.add('winner')
            scoreTwo.classList.add('loser')
        } else {
            scoreOne.classList.add('loser')
            scoreTwo.classList.add('winner')
        }
        btnControls.item(0).disabled = true
        btnControls.item(0).classList.add('player-1-disabled')
        btnControls.item(0).classList.remove('player-1')
        btnControls.item(1).disabled = true
        btnControls.item(1).classList.add('player-2-disabled')
        btnControls.item(1).classList.remove('player-2')
        btnControls.item(2).classList.add('reset-border')
    }
}

function resetScoreKeeper() {
    scores[0] = 0
    scores[1] = 0
    maxScore[0] = 6
    scoreOne.innerText = scores[0]
    scoreTwo.innerText = scores[1]
    scoreOne.classList.remove('loser')
    scoreOne.classList.remove('winner')
    scoreTwo.classList.remove('loser')
    scoreTwo.classList.remove('winner')
    btnControls.item(0).disabled = false
    btnControls.item(0).classList.remove('player-1-disabled')
    btnControls.item(0).classList.add('player-1')
    btnControls.item(1).disabled = false
    btnControls.item(1).classList.remove('player-2-disabled')
    btnControls.item(1).classList.add('player-2')
    btnControls.item(2).classList.remove('reset-border')
    maxSelect.value = 'max-6'
}

function updateScores(scoreAction) {

    if (scoreAction === 'reset') {
        resetScoreKeeper()
    } else {
        if (scoreAction === 'up-player-one') {
            scores[0]++
        } else if (scoreAction === 'up-player-two') {
            scores[1]++
        }
        scoreOne.innerText = scores[0]
        scoreTwo.innerText = scores[1]
        scoreGame()
    }
}

maxSelect.addEventListener('change', function(event) {

    switch (event.target.value) {
        case 'max-7':
            maxScore[0] = 7
            break
        case 'max-8':
            maxScore[0] = 8
            break
        case 'max-9':
            maxScore[0] = 9
            break
        case 'max-10':
            maxScore[0] = 10
            break
        case 'max-11':
            maxScore[0] = 11
            break
        default:
            maxScore[0] = 6
    }
})

for (let btn of btnControls) {
    btn.addEventListener('click', function(event) {
        updateScores(event.target.id)
    })
}