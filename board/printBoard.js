import { placeSoldier } from "./initBoard.js";

export default function printBoard(board) {
    let columnIndex = `|`

    for (let i = 1; i < board.length; i++) {
        columnIndex += ` ${i} |`
    }
    console.log(columnIndex);

    for (const row of board) {
        let rowToPrint = `|`

        for (let i = 0; i < board.length; i++) {
        
            if (row[i] === 0) {
                rowToPrint += ` ${row[i]} |`
            } else if (row[i].owner === 'computer') {
                rowToPrint += ' X |' 
            } else {
                rowToPrint += ` ${row[i].rank} |`
            }
        }
        console.log(rowToPrint);
    }
}

const board = placeSoldier()

// console.log(board);

printBoard(board)