const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
createGrid();

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
}

reset.addEventListener("click", () => {
    let numRows;
    numRows = Math.round(prompt("Please enter how big you want your grid to be:"));
    clearGrid();
    createGrid(numRows);
})

/* create grid */


function createRows(numRows) {
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }
}

function createCells(numRows) {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        for (let j = 0; j < numRows; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    })
}

function createGrid(numRows) {
    createRows(numRows);
    createCells(numRows);
}




/* color */

container.addEventListener("mouseover", (event) => {
    const cell = event.target;
    cell.style.backgroundColor = "black";
})




