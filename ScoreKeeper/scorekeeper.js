const playerObj = {
    score: null,
    scoreElement: null,
    button: null,
    incrementScore: function() {
        this.score++
    },
    setScoreElement: function(num = this.score) {
        this.scoreElement.innerText = num
    }
}

const scoreKeeperObj = {
    players: [],
    scoreMax: null,
    scoreSelect: null,
    resetButton: null,
    setScoreMax: function() {
        this.scoreMax = parseInt(this.scoreSelect.value)
    },
    scoreGame: function() {
        const score1 = this.players[0].score
        const score2 = this.players[1].score
        if (score1 < this.scoreMax && score2 < this.scoreMax) {
            return false
        } else {
            // Disable and desaturate buttons
            // This could be improved through better CSS
            for (let i = 0; i < this.players.length; i++) {
                this.players[i].button.disabled = true
                this.players[i].button.classList.add(`player-${i + 1}-disabled`)
                this.players[i].button.classList.remove(`player-${i + 1}`)
            }
            if (score1 > score2) {
                this.players[0].scoreElement.classList.add('winner')
                this.players[1].scoreElement.classList.add('loser')
            } else {
                this.players[1].scoreElement.classList.add('winner')
                this.players[0].scoreElement.classList.add('loser')
            }
        }
    },
    reset: function() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].button.disabled = false
            this.players[i].button.classList.remove(`player-${i + 1}-disabled`)
            this.players[i].button.classList.add(`player-${i + 1}`)
            this.players[i].scoreElement.classList.remove('winner', 'loser')
            this.players[i].setScoreElement(this.players[i].score = 0)
        }
    }
}

function initializeGame(game, player, num = 2) {
    const gameObj = Object.create(game)

    // Initialize the properties for each player
    for (i = 0; i < num; i++) {
        gameObj.players[i] = Object.create(player)
        gameObj.players[i].score = 0
        gameObj.players[i].scoreElement = document.querySelector(`#player-score-${i + 1}`)
        gameObj.players[i].button = document.querySelector(`#up-player-${i + 1}`)
        gameObj.players[i].name = `player${i + 1}`
    }

    // Initialize properties for game object
    gameObj.scoreSelect = document.querySelector('#max-score')
    gameObj.setScoreMax()
    gameObj.resetButton = document.querySelector('#reset')

    return gameObj;
}

// Create new game object
const newGame = initializeGame(scoreKeeperObj, playerObj)

// Event Listeners
for (let player of newGame.players) {
    player.button.addEventListener('click', () => {
        player.incrementScore()
        player.setScoreElement()
        newGame.scoreGame()
    })
}

newGame.scoreSelect.addEventListener('change', () => {
    newGame.setScoreMax()
    newGame.reset()
})

newGame.resetButton.addEventListener('click', () => {
    newGame.reset()
})