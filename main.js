import { playerRound, computerRound } from "./gameLogic/game.js"
import { placeSoldier } from "./board/initBoard.js"
import printBoard from "./board/printBoard.js"

let endGame = { end: false }
const board = placeSoldier()
while (!endGame.end) {
    printBoard(board)
    playerRound(board, endGame)
    computerRound(board, endGame)
}