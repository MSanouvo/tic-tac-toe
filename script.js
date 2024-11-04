function generateGame(){
    // const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const newGameBoard = () => gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const cpuPick = () => Math.floor(Math.random()*8)
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
        
        if(gameBoard[cpu] != 'X'){
            gameBoard[cpu] = "O"
        }else{
            console.log(cpu)
            input(x)
        }
        printboard()
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


    return{playGame, cpuPick}
}
newGame = generateGame()
newGame.playGame()




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