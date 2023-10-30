
let playerChoice = "RoCK"
let computerChoice = "Rock"
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    random = Math.floor(Math.random()*15) + 1
    console.log(random)
    if (random >= 1 && random <= 5){
       return "Rock"
    }
    else if (random >= 6 && random <= 10){
        return "Paper"
    }

    else if (random >= 11 && random <= 15){
        return "Scissors"
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if(playerScore > computerScore){
            return console.log("You win!, the world is saved")
    }
    else if(computerScore > playerScore){
            return console.log("The computers win the world is lost")
    }
    else { 
        return console.log("Nobody wins, so everyone loses")
    }    
}

function playRound(){
    let computerChoice = getComputerChoice()
    let promptChoice = prompt("Rock, Paper or Scissors?")
    let playerChoice = promptChoice[0].toUpperCase() + promptChoice.slice(1).toLowerCase()
    console.log(playerChoice)
    if (playerChoice == "Rock" && computerChoice == "Paper"){
        computerScore++
        return console.log("You lose, Paper beats Rock") 
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors"){
        computerScore++
        return console.log("You lose, Scissors beat Paper") 
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++
        return console.log("You lose, Rock beats Scissors")
    }
    else if (playerChoice == computerChoice){
        return console.log("Its a tie!")
    }
    else { 
        playerScore++
        return console.log("You win! " + playerChoice + " Beats " + computerChoice)
    }
    
}
playGame()
console.log(playerScore)
console.log(computerScore)
