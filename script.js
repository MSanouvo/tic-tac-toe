function generateGame(){
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    const newGameBoard = () => gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cpuPick = () => Math.floor(Math.random()*9)
    let gameWin = false
    let winner = ''

    //Currently unused
    const printboard = () => {
        console.log('')
        console.log(gameBoard[0],'|', gameBoard[1],'|', gameBoard[2]);
        console.log('---------');
        console.log(gameBoard[3],'|', gameBoard[4],'|', gameBoard[5]);
        console.log('---------');
        console.log(gameBoard[6],'|', gameBoard[7],'|', gameBoard[8]);
    }

    const check = () =>{
        if(gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        else if(gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O'){
            winner = 'Opponent'
            gameWin = true
        }
        //Player win scenario
        if(gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X'){
            winner = 'Player'
            gameWin = true
        }
        console.log(gameWin)
        return gameWin, winner
    }
    
    const input = (x) =>{
        gameBoard[x] = 'X'
    }


    return{gameBoard, newGameBoard, input, cpuPick, check,
        isGameWon: () => gameWin,
        getWinner: () => winner}
}

//currently unused
function createPlayer(name) {
    const player = name;

    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;

    return{player, getScore, increaseScore}
}

// bill = createPlayer('Bill')
// bill.increaseScore()
// console.log(bill.getScore())

function displayBoard(){
    let game = generateGame()

    const restart = document.querySelector('#restart')
    const gameOver = document.querySelector('#game-over')
    const display = document.querySelector('#gameboard')
    const gameTiles = document.querySelectorAll('.tile')
    const message = document.querySelector('.message')
    const tile1 = document.querySelector('#zero')
    const tile2 = document.querySelector('#one')
    const tile3 = document.querySelector('#two')
    const tile4 = document.querySelector('#three')
    const tile5 = document.querySelector('#four')
    const tile6 = document.querySelector('#five')
    const tile7 = document.querySelector('#six')
    const tile8 = document.querySelector('#seven')
    const tile9 = document.querySelector('#eight')

    const displayTiles = () => {
        tile1.textContent = game.gameBoard[0]
        tile2.textContent = game.gameBoard[1]
        tile3.textContent = game.gameBoard[2]
        tile4.textContent = game.gameBoard[3]
        tile5.textContent = game.gameBoard[4]
        tile6.textContent = game.gameBoard[5]
        tile7.textContent = game.gameBoard[6]
        tile8.textContent = game.gameBoard[7]
        tile9.textContent = game.gameBoard[8]
    }
    
    const cpuDisplay = () =>{
        let cpu = game.cpuPick()
        let emptyFilter  = game.gameBoard.filter((n) => n === '')
        chooseTile: {
            if(game.gameBoard[cpu] === ""){
                console.log('running 1')
                game.gameBoard[cpu] = 'O'
                gameTiles[cpu].textContent = "O"
            }
            else if(emptyFilter.length === 0){
                //flawed. Winner could be last tile.
                message.textContent = 'Tie! No winner.'
                gameOver.showModal()
                break chooseTile
            }
            else{
                console.log('running 3')
                cpuDisplay()
            }
        } 
    }

    const displayWin = () => {
        if (game.isGameWon() === true){
            message.textContent = game.getWinner()+' wins!'
            gameOver.showModal()
        }
    }

    const playTurn = (x) =>{
        if(game.gameBoard[x] != ""){
            console.log('Invalid Move') //turn this into a message users can see
        }
        else{
            game.input(x)
            game.gameBoard[x] = 'X'
            cpuDisplay()//CPU inputs after user wins, not bad but awkward
            game.check()
            displayWin()
        }
    }

    display.addEventListener('click', (event) =>{
        let target = event.target
        switch(target.id){
            case 'zero':
                playTurn(0)
                tile1.textContent = game.gameBoard[0]
                break;
            case 'one':
                playTurn(1)
                tile2.textContent = game.gameBoard[1]
                break;
            case 'two':
                playTurn(2)
                tile3.textContent = game.gameBoard[2]
                break;
            case 'three':
                playTurn(3)
                tile4.textContent = game.gameBoard[3]
                break;
            case 'four':
                playTurn(4)
                tile5.textContent = game.gameBoard[4]
                break;
            case 'five':
                playTurn(5)
                tile6.textContent = game.gameBoard[5]
                break;
            case 'six':
                playTurn(6)
                tile7.textContent = game.gameBoard[6]
                break;
            case 'seven':
                playTurn(7)
                tile8.textContent = game.gameBoard[7]
                break;
            case 'eight':
                playTurn(8)
                tile9.textContent = game.gameBoard[8]
                break;
        }
    })

    restart.addEventListener('click', () =>{
        game = generateGame()
        displayTiles()
        gameOver.close()
    })

    return{displayTiles}
}

displayBoard()


