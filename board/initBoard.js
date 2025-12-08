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
    for (let rank = 1; rank <= 11; rank++) {
        if (rank === 1 || rank === 9 || rank === 10 || rank === 11)
            SoldiersLst.push(creatSoldier(rank, owner))
        if (rank === 8)
            for (let i = 0; i < 3; i++)
                SoldiersLst.push(creatSoldier(rank, owner))
        if (rank === 7)
            for (let i = 0; i < 4; i++)
                SoldiersLst.push(creatSoldier(rank, owner))
        if (rank === 4 || rank === 5 || rank === 6)
            for (let i = 0; i < 5; i++)
                SoldiersLst.push(creatSoldier(rank, owner))
        if (rank === 3)
            for (let i = 0; i < 6; i++)
                SoldiersLst.push(creatSoldier(rank, owner))
        if (rank === 2)
            for (let i = 0; i < 8; i++)
                SoldiersLst.push(creatSoldier(rank, owner))
    }
    return SoldiersLst
}

export function placeSoldier() {
    let board = createBoard(10)
    let computerSoldiersLst = createSoldierList("computer")
    let playerSoldiersLst = createSoldierList("player")
    for (let i = 0; i < 4; i++) { // need to calculate 
        for (let j = 0; j < board.length; j++) {
            const computerSoldier = computerSoldiersLst.splice(Math.floor(Math.random() * computerSoldiersLst.length), 1)[0]
            const playerSoldier = playerSoldiersLst.splice(Math.floor(Math.random() * playerSoldiersLst.length), 1)[0]
            board[i + 6][j] = computerSoldier
            board[i][j] = playerSoldier
        }
    }
    return board
}





