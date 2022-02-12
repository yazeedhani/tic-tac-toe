
// You should not be able to click remaining empty cells after the game is over.


// Detect draw conditions (ties/cat's game)



const container = document.querySelector('body')
const square = document.querySelectorAll('.square')
const message = document.querySelector('#message')
const reset = document.querySelector('#reset')
const player1 = {
    marking: 'X',
    isTurn: true,
    isWinner: null
}
const player2 = {
    marking: 'O',
    isTurn: false,
    isWinner: null
}

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
//     Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
const checkResult = () => {
    // Check columns
    if(square[0].innerText === 'X' && square[1].innerText === 'X' && square[2].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[3].innerText === 'X' && square[4].innerText === 'X' && square[5].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[6].innerText === 'X' && square[7].innerText === 'X' && square[8].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[0].innerText === 'O' && square[1].innerText === 'O' && square[2].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[3].innerText === 'O' && square[4].innerText === 'O' && square[5].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[6].innerText === 'O' && square[7].innerText === 'O' && square[8].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    // Check rows
    else if(square[0].innerText === 'X' && square[3].innerText === 'X' && square[6].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[1].innerText === 'X' && square[4].innerText === 'X' && square[7].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[2].innerText === 'X' && square[5].innerText === 'X' && square[8].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[0].innerText === 'O' && square[3].innerText === 'O' && square[6].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[1].innerText === 'O' && square[4].innerText === 'O' && square[7].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[2].innerText === 'O' && square[5].innerText === 'O' && square[8].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    // Check Diagonals
    else if(square[0].innerText === 'X' && square[4].innerText === 'X' && square[8].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[0].innerText === 'O' && square[4].innerText === 'O' && square[8].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[2].innerText === 'X' && square[4].innerText === 'X' && square[6].innerText === 'X')
    {
        return true
        // console.log('There is a winner')
    }
    else if(square[2].innerText === 'O' && square[4].innerText === 'O' && square[6].innerText === 'O')
    {
        return true
        // console.log('There is a winner')
    }
}

// Add a reset button that will clear the contents of the board.
const resetGame = () => {
    for(let i = 0; i < 9; i++)
    {
        square[i].innerText = ''
    }
    player1.isTurn = true
    player2.isTurn = false
    message.innerText = `Player1's Turn`
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
        if(checkResult())
        {
            player1.isWinner = true
            console.log(`Player1 is the winner!`)
        }
    }
    else if(event.target.tagName === 'DIV' && player2.isTurn === true)
    {
        event.target.innerText = player2.marking
        player2.isTurn = false
        player1.isTurn = true
        // Display a message to indicate which turn is about to be played.
        message.innerText = `Player1's Turn`
        // event.preventDefault()
        if(checkResult())
        {
            player2.isWinner = true
            console.log(`Player2 is the winner!`)
        }
    }
})