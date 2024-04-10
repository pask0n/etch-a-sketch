const mainGrid = document.querySelector('#main-grid')

function createNewGrid(gridSize) {
    for (let i = 0; i < (gridSize ** 2); i++) {
        let gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid-cell");
        gridCell.style.width = (100 / gridSize) + '%';
        mainGrid.append(gridCell);
    }
}

function addGridListener() {
    for (let gridCell of mainGrid.children) {
        gridCell.addEventListener("mouseover", paintgrid)
    }
}

createNewGrid(4);
addGridListener();

function paintgrid(e) {
    e.target.style.backgroundColor = "black";
}

let btn = document.querySelector("#new-grid-btn")

btn.addEventListener('click', () => {
    removeAllChildNodes(mainGrid)
    removeGridListener()
    newGridCheck(prompt('New Grid Size?'))
    addGridListener()
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeGridListener() {
    for (let gridCell of mainGrid.children) {
        gridCell.removeEventListener("mouseover", paintgrid)
    }
}

function newGridCheck(newGridSize) {
    if (newGridSize <= 100) {
        createNewGrid(newGridSize)
    } else if (newGridSize > 100) {
        alert('Grid too big! Maximum is 100x100')
        createNewGrid(100)
    } else {
        alert('Invalid Input. Creating a 4x4 grid')
        createNewGrid(4)
    }
}