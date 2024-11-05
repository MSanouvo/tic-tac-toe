function generateGame(){
    // const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    const newGameBoard = () => gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cpuPick = () => Math.floor(Math.random()*9)
    let gameWin = false

    const printboard = () => {
        console.log('')
        console.log(gameBoard[0],'|', gameBoard[1],'|', gameBoard[2]);
        console.log('---------');
        console.log(gameBoard[3],'|', gameBoard[4],'|', gameBoard[5]);
        console.log('---------');
        console.log(gameBoard[6],'|', gameBoard[7],'|', gameBoard[8]);
    }

    const check = () =>{
        if(gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X'){
            console.log('Player wins')
            //testing gameWin logic
            gameWin = true
        }
        else if(gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        else if(gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins') 
            gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        else if(gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X'){
            console.log('Someone wins')
            gameWin = true
        }
        console.log(gameWin)
        return gameWin
    }
    

    const input = (x) =>{
        cpu = cpuPick()
        gameBoard[x] = 'X'
        //printboard()
        check()
    }


    return{gameBoard, newGameBoard, input, cpuPick, 
        isGameWon: () => gameWin}
}

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
    const tile1 = document.querySelector('#one')
    const tile2 = document.querySelector('#two')
    const tile3 = document.querySelector('#three')
    const tile4 = document.querySelector('#four')
    const tile5 = document.querySelector('#five')
    const tile6 = document.querySelector('#six')
    const tile7 = document.querySelector('#seven')
    const tile8 = document.querySelector('#eight')
    const tile9 = document.querySelector('#nine')

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
            if(gameTiles[cpu].textContent === ""){
                console.log('running 1')
                game.gameBoard[cpu] = 'O'
                gameTiles[cpu].textContent = "O"
            }
            else if(emptyFilter.length === 0){
                console.log('running 2')
                break chooseTile
            }
            else{
                console.log('running 3')
                cpuDisplay()
            }
        } 
        displayWin()
    }
    //make a function to check if the game is won and display a modal when it is
    //Modal will show who won and prompt user to play again
    //button will generate new board
    const displayWin = () => {
        if (game.isGameWon() === true){
            gameOver.showModal()
        }
    }

    //Need to prevent players from choosing occupied tiles
    display.addEventListener('click', (event) =>{
        let target = event.target
        
        switch(target.id){
            case 'one':
                game.input(0)
                game.gameBoard[0] = 'X'
                tile1.textContent = game.gameBoard[0]
                cpuDisplay()
                break;
            case 'two':
                game.input(1)
                game.gameBoard[1] = 'X'
                tile2.textContent = game.gameBoard[1]
                cpuDisplay()
                break;
            case 'three':
                game.input(2)
                game.gameBoard[2] = 'X'
                tile3.textContent = game.gameBoard[2]
                cpuDisplay()
                break;
            case 'four':
                game.input(3)
                game.gameBoard[3] = 'X'
                tile4.textContent = game.gameBoard[3]
                cpuDisplay()
                break;
            case 'five':
                game.input(4)
                game.gameBoard[4] = 'X'
                tile5.textContent = game.gameBoard[4]
                cpuDisplay()
                break;
            case 'six':
                game.input(5)
                game.gameBoard[5] = 'X'
                tile6.textContent = game.gameBoard[5]
                cpuDisplay()
                break;
            case 'seven':
                game.input(6)
                game.gameBoard[6] = 'X'
                tile7.textContent = game.gameBoard[6]
                cpuDisplay()
                break;
            case 'eight':
                game.input(7)
                game.gameBoard[7] = 'X'
                tile8.textContent = game.gameBoard[7]
                cpuDisplay()
                break;
            case 'nine':
                game.input(8)
                game.gameBoard[8] = 'X'
                tile9.textContent = game.gameBoard[8]
                cpuDisplay()
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


