import { placeSoldier } from "./initBoard.js";

export default function printBoard(board) {
    let columnIndex = "     ||"; 

    for (let i = 0; i < board.length; i++) {
        columnIndex += ` ${i.toString().padStart(2, " ")} |`;
    }

    console.log("\n" + columnIndex);
    console.log("=".repeat(columnIndex.length));

    for (let r = 0; r < board.length; r++) {
        let row = board[r];
        let rowToPrint = `${r.toString().padStart(2, " ")}   ||`;

        for (let i = 0; i < board.length; i++) {
            let cell = row[i];

            if (cell === 0) {
                rowToPrint += "    |";
            } else if (cell.owner === "computer") {
                if (cell.rank === 11)
                    rowToPrint += " F  |";
                else
                    rowToPrint += " X  |";
            } else {
                rowToPrint += ` ${cell.rank.toString().padStart(2, " ")} |`;
            }
        }

        console.log(rowToPrint);
        console.log("-".repeat(columnIndex.length));
    }
    console.log("\n");
}
