import { placeSoldier } from "../board/initBoard.js"
import readline from "readline-sync"



export function playerRound(board, endGame) {
    console.log("Youn turn to play")
    const soldierToMove = readline.question("please choose a soldier to move (x,y) : ")
    const x = parseInt(soldierToMove[1])
    const y = parseInt(soldierToMove[3])
    endGame = playerMovement(x, y, board, endGame)
    return endGame
}

export function computerRound(board, endGame) {
    console.log("Computer's turn to play")
    let x = Math.floor(Math.random() * board.length)
    let y = Math.floor(Math.random() * board.length)
    while (board[x][y] == 0 || board[x][y].owner !== "computer" || moveSoldierPossibilities(x, y, board).length === 0 || board[x][y].rank === 11) {
        x = Math.floor(Math.random() * board.length)
        y = Math.floor(Math.random() * board.length)
    }
    const possibilites = moveSoldierPossibilities(x, y, board)
    const direction = possibilites[Math.floor(Math.random() * possibilites.length)]
    moveSoldier(x, y, direction, board, endGame)
}

function playerMovement(x, y, board, endGame) {
    if (board[x][y] == 0) {
        console.log("no soldier in this position, please choose another one")
        return false
    }
    if (board[x][y].owner !== "player") {
        console.log("this is not your soldier, please choose another one")
        return false
    }
    console.log(board[x][y])
    const possibilites = moveSoldierPossibilities(x, y, board)
    console.log("you can move your soldier to the following directions: " + possibilites)
    let direction = readline.question("please choose a direction to move your soldier: ")
    if (!possibilites.includes(direction)) {
        console.log("invalid direction, please choose another one")
        return false
    }
    moveSoldier(x, y, direction, board, endGame)
}

function moveSoldierPossibilities(x, y, board) {
    const possibilites = []
    if (y > 0 && (board[x][y - 1].owner !== board[x][y].owner || board[x][y - 1] == 0))
        possibilites.push("left")
    if (y < board.length - 1 && (board[x][y + 1].owner !== board[x][y].owner || board[x][y + 1] == 0))
        possibilites.push("right")
    if (x > 0 && (board[x - 1][y].owner !== board[x][y].owner || board[x - 1][y] == 0))
        possibilites.push("backward")
    if (x < board.length - 1 && (board[x + 1][y].owner !== board[x][y].owner || board[x + 1][y] == 0))
        possibilites.push("forward")
    return possibilites
}

function moveSoldier(x, y, direction, board, endGame) {
    let soldier = board[x][y]
    console.log(board[x][y])
    if (direction === "left")
        if (board[x][y - 1] == 0)
            board[x][y - 1] = soldier
        else
            fight(x, y, x, y - 1, board, endGame)
    if (direction === "right")
        if (board[x][y + 1] == 0)
            board[x][y + 1] = soldier
        else
            fight(x, y, x, y + 1, board, endGame)
    if (direction === "backward")
        if (board[x - 1][y] == 0)
            board[x - 1][y] = soldier
        else
            fight(x, y, x - 1, y, board, endGame)
    if (direction === "forward")
        if (board[x + 1][y] == 0)
            board[x + 1][y] = soldier
        else
            fight(x, y, x + 1, y, board, endGame)
    board[x][y] = 0
}

function fight(x, y, x2, y2, board, endGame) {
    let attacker = board[x][y]
    let defender = board[x2][y2]
    if (defender.rank === 11) {
        console.log("Winn the game! you captured the flag")
        Victory(endGame)
        return
    }
    else if (attacker.rank > defender.rank || attacker.rank == 1 && defender.rank == 10) {
        console.log("attacker rank: " + attacker.rank + " defender rank: " + defender.rank)
        console.log("attacker wins")
        board[x2][y2] = attacker
    }
    else if (attacker.rank < defender.rank || attacker.rank == 10 && defender.rank == 1) {
        console.log("attacker rank: " + attacker.rank + " defender rank: " + defender.rank)
        console.log("defender wins")
    }
    else {
        console.log("attacker rank: " + attacker.rank + " defender rank: " + defender.rank)
        console.log("both soldiers die")
        board[x2][y2] = 0
    }
}

function Victory(endGame) {
    console.log("Congratulations! You have won the game!")
    endGame.end = true
}