
// You should not be able to click remaining empty cells after the game is over.


// Detect draw conditions (ties/cat's game)



const container = document.querySelector('body')
const square = document.querySelectorAll('.square')
const message = document.querySelector('#message')
const reset = document.querySelector('#reset')
const player1 = {
    marking: 'X',
    isTurn: true
}
const player2 = {
    marking: 'O',
    isTurn: false
}

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
//     Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
const checkResult = () => {
    if(square[0].innerText === square[1].innerText && square[1].innerText === square[2].innerText)
    {
        console.log('There is a winner')
    }
    else if(square[3].innerText === square[4].innerText && square[4].innerText === square[5].innerText)
    {
        console.log('There is a winner')
    }
    else if(square[6].innerText === square[7].innerText && square[7].innerText === square[8].innerText)
    {
        console.log('There is a winner')
    }
}

// Add a reset button that will clear the contents of the board.
const resetGame = () => {
    for(let i = 0; i < 9; i++)
    {
        square[i].innerText = ''
    }
}
reset.addEventListener('click', resetGame)

/***** STILL IN PROGRESS ******/
// A cell should not be able to be replayed once marked. 
const disableSquare = () => {
    for(let i = 0; i < 9; i++)
    {
        if(square[i].innerText !== '')
        {
            square[i].preventDefault()
        }
    }
}

// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
container.addEventListener('click', (event) => {
    //Alternate between player1 and player2
    if(event.target.tagName === 'DIV' && player1.isTurn === true)
    {
        event.target.innerText = player1.marking
        player1.isTurn = false
        player2.isTurn = true
        // Display a message to indicate which turn is about to be played.
        message.innerText = `Player2's Turn`
        // event.preventDefault()
        checkResult()
    }
    else if(event.target.tagName === 'DIV' && player2.isTurn === true)
    {
        event.target.innerText = player2.marking
        player2.isTurn = false
        player1.isTurn = true
        // Display a message to indicate which turn is about to be played.
        message.innerText = `Player1's Turn`
        // event.preventDefault()
        checkResult()
    }
})