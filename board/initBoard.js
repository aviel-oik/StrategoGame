export function createBoard(boardSize) {
    let board = new Array(boardSize)
    for (let i = 0; i < boardSize; i++) {
        let boardRow = new Array(boardSize).fill(0)
        board[i] = boardRow
    }
    return board
}

function creatSoldier(rank, owner) {
    let soldier = {}
    return soldier = {
        owner: owner,
        rank: rank
    }
}

function createSoldierList(owner) {
    let SoldiersLst = []
    for (let i = 1; i <= 11; i++) {
        if (i === 1 || i === 9 || i === 10 || i === 11)
            SoldiersLst.push(creatSoldier(i, owner))
        if (i === 8)
            for (let i = 0; i < 2; i++)
                SoldiersLst.push(creatSoldier(i, owner))
        if (i === 7)
            for (let i = 0; i < 3; i++)
                SoldiersLst.push(creatSoldier(i, owner))
        if (i === 4 || i === 5 || i === 6)
            for (let i = 0; i < 4; i++)
                SoldiersLst.push(creatSoldier(i, owner))
        if (i === 3)
            for (let i = 0; i < 5; i++)
                SoldiersLst.push(creatSoldier(i, owner))
        if (i === 2)
            for (let i = 0; i < 8; i++)
                SoldiersLst.push(creatSoldier(i, owner))
    }
    return SoldiersLst
}

export function placeSoldier() {
    let board = createBoard(10)
    let computerSoldiersLst = createSoldierList("computer")
    let playerSoldiersLst = createSoldierList("player")
    for (let i = 0; i < 3; i++) { // need to calculate 
        for (let j = 0; j < board.length; j++) {
            const computerSoldier = computerSoldiersLst.splice(Math.random() * computerSoldiersLst.length)
            const playerSoldier = playerSoldiersLst.splice(Math.random() * playerSoldiersLst.length)
            board[i + 6][j] = computerSoldier
            board[i][j] = playerSoldier
        }
    }
    return board
}





