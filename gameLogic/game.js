import { placeSoldier } from "../board/initBoard"
import readline from "readline-sync"

function movement(x, y, board) {
    if (board[x][y] == 0) {
        console.log("no soldier in this position, please choose another one")
        return false
    }
    if (board[x][y].owner !== "player") {
        console.log("this is not your soldier, please choose another one")
        return false
    }
    const possibilites = moveSoldierPossibilities(x, y, board)
    console.log("you can move your soldier to the following directions: " + possibilites)
    let direction = readline.question("please choose a direction to move your soldier: ")
    if (!possibilites.includes(direction)) {
        console.log("invalid direction, please choose another one")
        return false
    }
    moveSoldier(x, y, direction, board)
}

function moveSoldierPossibilities(x, y, board) {
    possibilites = []
    if (y > 0 && board[x][y - 1].owner !== "player")
        possibilites.push("backward")
    if (y < board.length - 1 && board[x][y + 1].owner !== "player")
        possibilites.push("forward")
    if (x > 0 && board[x - 1][y].owner !== "player")
        possibilites.push("left")
    if (x < board.length - 1 && board[x + 1][y].owner !== "player")
        possibilites.push("right")
    return possibilites
}

function moveSoldier(x, y, direction, board) {
    let soldier = board[x][y]
    board[x][y] = 0
    if (direction === "backward")
        if (board[x][y - 1] == 0)
            board[x][y - 1] = soldier
        else
            defender = board[x][y - 1]
    fight(x, y, defender, board)
    if (direction === "forward")
        if (board[x][y + 1] == 0)
            board[x][y + 1] = soldier
        else
            defender = board[x][y + 1]
    fight(x, y, defender, board)
    if (direction === "left")
        if (board[x - 1][y] == 0)
            board[x - 1][y] = soldier
        else
            defender = board[x - 1][y]
    fight(x, y, defender, board)
    if (direction === "right")
        if (board[x + 1][y] == 0)
            board[x + 1][y] = soldier
        else
            defender = board[x + 1][y]
    fight(x, y, defender, board)
}

function fight(x, y, defender, board) {
    let attacker = board[x][y]


}

export function Victory() {

}

export function playRound() {
    board = placeSoldier
    console.log("Youn turn to play")
    soldierToMove = readline.question("please choose a soldier to move (x,y)")
    x = parseInt(soldierToMove[1])
    y = parseInt(soldierToMove[3])
    endGame = movement(x, y, board)
    return endGame
}
