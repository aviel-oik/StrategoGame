import { placeSoldier } from "./initBoard.js";

// export default function printBoard(board) {
//     let columnIndex = `|`

//     for (let i = 0; i < board.length; i++) {
//         columnIndex += ` ${i} |`
//     }

//     console.log(columnIndex);

//     for (const row of board) {
//         let rowToPrint = `|`

//         for (let i = 0; i < board.length; i++) {

//             if (row[i] === 0) {
//                 rowToPrint += ` ${row[i]} |`
//             } else if (row[i].owner === 'computer') {
//                 rowToPrint += ' X |'
//             } else {
//                 rowToPrint += ` ${row[i].rank} |`
//             }
//         }
//         console.log(rowToPrint);
//     }
// }

export default function printBoard(board) {
    // --- Print column indices ---
    let columnIndex = "     ||";   // offset for row numbers

    for (let i = 0; i < board.length; i++) {
        columnIndex += ` ${i.toString().padStart(2, " ")} |`;
    }

    console.log(columnIndex);
    console.log("=".repeat(columnIndex.length));

    // --- Print each row ---
    for (let r = 0; r < board.length; r++) {
        let row = board[r];
        let rowToPrint = `${r.toString().padStart(2, " ")}   ||`; // row index

        for (let i = 0; i < board.length; i++) {
            let cell = row[i];

            if (cell === 0) {
                rowToPrint += "    |";
            } else if (cell.owner === "computer") {
                rowToPrint += " X  |";
            } else {
                rowToPrint += ` ${cell.rank.toString().padStart(2, " ")} |`;
            }
        }

        console.log(rowToPrint);
        console.log("-".repeat(columnIndex.length));
    }
}
