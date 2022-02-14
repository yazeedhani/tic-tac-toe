/*********** GLOBAL VARIABLES **********/
const square = document.querySelectorAll('.square')
const squaresIDs = ['square1','square2','square3','square4','square5','square6','square7','square8','square9',]
const message = document.querySelector('#message')
const reset = document.querySelector('#reset')
const player1Score = document.querySelector('#player1Score')
const player2Score = document.querySelector('#player2Score')
let gameOver = false
const player1 = {
    marking: 'X',
    isTurn: true,
    isWinner: null,
    score: 0
}
const player2 = {
    marking: 'O',
    isTurn: false,
    isWinner: null,
    score: 0
}

/************* FUNCTIONS ************/

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
//     Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
const checkWinner = (playerMarking) => {
    // Winning combos
    const combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < combos.length; i++)
    {
        if((square[combos[i][0]].innerText === playerMarking && square[combos[i][1]].innerText === playerMarking && square[combos[i][2]].innerText === playerMarking))
        {
            return true
        }
    }
}

// Detect draw conditions (ties/cat's game)
const checkTie = () => {
    for(let i = 0; i < square.length; i++)
    {
        if(square[i].innerText !== '')
        {
            continue
        }
        else 
        {
            return false
        }
    }
    return true
}

const play = (event) => {
    //Alternate between player1 and player2
    if(player1.isTurn === true)
    {
        // console.log(event.target.preventDefault())
        event.target.innerText = player1.marking
        player1.isTurn = false
        player2.isTurn = true
        // Display a message to indicate which turn is about to be played.
        message.innerText = `Player-2's Turn`
        // A cell should not be able to be replayed once marked.
        event.target.removeEventListener('click', play)
        if(checkWinner(player1.marking))
        {
            player1.isWinner = true
            gameOver = true
            disableRemainingSquares(event)
            message.innerText = `Player-1 is the winner!`
            player1.score++
            player1Score.innerText = `${player1.score}`
        }
    }
    else if(player2.isTurn === true)
    {
        event.target.innerText = player2.marking
        player2.isTurn = false
        player1.isTurn = true
        // Display a message to indicate which turn is about to be played.
        message.innerText = `Player-1's Turn`
        // A cell should not be able to be replayed once marked.
        event.target.removeEventListener('click', play)
        if(checkWinner(player2.marking))
        {
            player2.isWinner = true
            gameOver = true
            disableRemainingSquares(event)
            message.innerText = `Player-2 is the winner!`
            player2.score++
            player2Score.innerText = `${player2.score}`
        }
    }

    if(checkTie())
    {
        message.innerText = `It's a tie.`
    }
}

// Add a reset button that will clear the contents of the board and reset player turns.
const resetGame = () => {
    // Re-add the play event listener to each square
    for(let i = 0; i < 9; i++)
    {
        square[i].innerText = ''
        document.getElementById(squaresIDs[i]).addEventListener('click', play)
    }
    // Reset player turns
    player1.isTurn = true
    player2.isTurn = false
    gameOver = false
    message.innerText = `Player-1's Turn`
}

// You should not be able to click remaining empty cells after the game is over.
const disableRemainingSquares = () => {
    for(let i = 0; i < 9; i++)
    {
        if(document.getElementById(squaresIDs[i]).innerText == '')
        {
            document.getElementById(squaresIDs[i]).removeEventListener('click', play)
        }
    }
}

/************* EVENT LISTENERS **************/
// Add an event listener to each div in .container div
for(let i = 0; i < squaresIDs.length; i++)
{
    document.getElementById(squaresIDs[i]).addEventListener('click', play)
}

reset.addEventListener('click', resetGame)