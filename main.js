import { playerRound } from "./gameLogic/game"
import { placeSoldier } from "./board/initBoard.js"

let endGame = { end: false }
const board = placeSoldier()
while (!endGame.end) {
    playerRound(board, endGame)

}