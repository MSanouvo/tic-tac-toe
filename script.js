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
            return gameWin = true
        }
        else if(gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
        else if(gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins') 
            return gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
        else if(gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
        else if(gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
        else if(gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X'){
            console.log('Someone wins')
            return gameWin = true
        }
    }

    

    const input = (x) =>{
        cpu = cpuPick()
        gameBoard[x] = 'X'
        //need to check if index is occupied
        
        
        printboard()
        check()
    }

    // const playGame = () =>{
    //     while(!gameWin){
    //         newGameBoard()
    //         let userPick = prompt('Please enter a number between 0 & 8', '')
    //         if(9 > userPick < -1){
    //             console.log('Invalid input')
    //             break
    //         }
    //         input(userPick)
    //         check()

    //     }
    // }


    return{gameBoard, newGameBoard, input, cpuPick, gameWin}
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
    const game = generateGame()

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
    tile1.textContent = game.gameBoard[0]
    tile2.textContent = game.gameBoard[1]
    tile3.textContent = game.gameBoard[2]
    tile4.textContent = game.gameBoard[3]
    tile5.textContent = game.gameBoard[4]
    tile6.textContent = game.gameBoard[5]
    tile7.textContent = game.gameBoard[6]
    tile8.textContent = game.gameBoard[7]
    tile9.textContent = game.gameBoard[8]

    //functionality not perfect
    const cpuDisplay = () =>{
        let cpu = game.cpuPick()
        while(gameTiles[cpu].textContent === ""){
            if(gameTiles[cpu].textContent === ""){
                gameTiles[cpu].textContent = "O"
            }
            else{
                console.log(cpu)
                cpuDisplay()
            }
        }
        
    }

    // gameTiles.addEventListener('mouseover', () =>{

    // })
    display.addEventListener('click', (event) =>{
        let target = event.target
        
        switch(target.id){
            case 'one':
                game.input(0)
                tile1.textContent = game.gameBoard[0]
                cpuDisplay()
                break;
            case 'two':
                game.input(1)
                tile2.textContent = game.gameBoard[1]
                break;
            case 'three':
                game.input(2)
                tile3.textContent = game.gameBoard[2]
                break;
            case 'four':
                game.input(3)
                tile4.textContent = game.gameBoard[3]
                break;
            case 'five':
                game.input(4)
                tile5.textContent = game.gameBoard[4]
                break;
            case 'six':
                game.input(5)
                tile6.textContent = game.gameBoard[0]
                break;
            case 'seven':
                game.input(6)
                tile7.textContent = game.gameBoard[6]
                break;
            case 'eight':
                game.input(7)
                tile8.textContent = game.gameBoard[7]
                break;
            case 'nine':
                game.input(8)
                tile9.textContent = game.gameBoard[8]
                break;

        }
    })

    // tile1.addEventListener('click', () =>{
    //     game.input(0)
    //     tile1.textContent = game.gameBoard[0]
    // })
    // tile2.addEventListener('click', () =>{
    //     game.input(1)
    //     tile2.textContent = game.gameBoard[1]
    // })
    // tile3.addEventListener('click', () =>{
    //     game.input(2)
    //     tile3.textContent = game.gameBoard[2]
    // })
}

displayBoard()
