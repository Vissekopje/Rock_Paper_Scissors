
let playerChoice = ""
let computerChoice = "Rock"
let playerScore = 0
let computerScore = 0

const results = document.querySelector(".results")
const playerScoreDiv = document.querySelector(".playerScore")
const computerScoreDiv = document.querySelector (".computerScore")
const buttonRock = document.querySelector(".Rock")
const buttonPaper = document.querySelector(".Paper")
const buttonScissors = document.querySelector(".Scissors")
const popUpWin = document.querySelector(".popUpWin")
const winMessage = document.querySelector(".winMessage")
const restartButton = document.querySelector(".restartButton")

function getComputerChoice(){
    random = Math.floor(Math.random()*15) + 1
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

function checkWin(){
    if(playerScore == 5){
        popUpWin.classList.add("show")
       winMessage.innerText ="You win!, the world is saved"

    }
    else if(computerScore == 5){
        popUpWin.classList.add("show")
        winMessage.innerText ="The computers win the world is lost"
    }
    else {
        return
    }
}

buttonRock.addEventListener("click", function() {
    playerChoice = "Rock"})
buttonRock.addEventListener("click", playRound)
buttonPaper.addEventListener("click", function() {
    playerChoice = "Paper"})
buttonPaper.addEventListener("click", playRound)
buttonScissors.addEventListener("click", function() {
    playerChoice = "Scissors"})
buttonScissors.addEventListener("click", playRound)

function playRound(){
    let computerChoice = getComputerChoice()
    if ((playerChoice == "Paper" && computerChoice == "Scissors") || 
        (playerChoice == "Scissors" && computerChoice == "Rock") || 
        (playerChoice == "Rock" && computerChoice == "Paper")){
        computerScore++
        results.innerText = `You played ${playerChoice}, the computer player ${computerChoice}, you lose`
    }
    else if (playerChoice == computerChoice){
        results.innerText = `Its a tie, ${playerChoice} does nothing to ${computerChoice}!`
    }
    else { 
        playerScore++
        results.innerText = `You win, ${playerChoice} beats ${computerChoice}!`
    }
    playerScoreDiv.innerText = "Player score: " + playerScore
    computerScoreDiv.innerText = "Computer score: " + computerScore 
    checkWin()
}

restartButton.addEventListener("click", restart)
function restart(){
    playerScore = 0
    computerScore = 0
    popUpWin.classList.remove("show")
    results.innerText = "Fight! Defeat the computers and save the world."
    playerScoreDiv.innerText = "Player score: " + playerScore
    computerScoreDiv.innerText = "Computer score: " + computerScore 
}
