const grid = document.querySelector('#grid')
let gridCell;

function createGrid(squarePerSide) {

    for (let i = 0; i < (squarePerSide ** 2); i++) {
        let gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid-cell");
        gridCell.style.width = (100 / squarePerSide) + '%';
        grid.append(gridCell);
    }
}

createGrid(8);
addCellListener();

function addCellListener() {
    gridCell = document.querySelectorAll(".grid-cell")

    gridCell.forEach(function (gridCell) {
        gridCell.addEventListener("mouseover", function () {
            paintgrid(gridCell);
        }, {once: true});
    });
}

function paintgrid(gridCell) {
    gridCell.style.backgroundColor = "black";

}

let newGridSize = 1;

button.onclick = function() {
    removeAllChildNodes(grid)
    newGridSize = prompt('New Grid Size?')
    if (newGridSize <= 100) {
        createGrid(newGridSize)
    } else if (newGridSize > 100) {
        alert('Grid too big! Maximum is 100x100')
        createGrid(100)
    }
    addCellListener();
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
