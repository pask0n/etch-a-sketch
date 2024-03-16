const grid = document.querySelector('#grid')

function createGrid(squarePerSide) {

    for (let i = 0; i < (squarePerSide ** 2); i++) {
        let gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid-cell");
        gridCell.style.width = (100 / squarePerSide) + '%';
        grid.appendChild(gridCell);
    }
}

createGrid(8);

const gridCell = document.querySelectorAll(".grid-cell")

gridCell.forEach(function (gridCell) {
    gridCell.addEventListener("mouseover", function () {
        paintgrid(gridCell);
    });
});

function paintgrid(gridCell) {
    gridCell.style.backgroundColor = "black";
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}