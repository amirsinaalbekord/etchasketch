let color = 'black'
let click = true;

// deletes previous grid and creates new grid of divs, "squares", then colors them all white
function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size ** 2; i++){
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

// changes size of grid
function changeSize(input) {
    if(input >= 1 || input <= 100) {
        document.querySelector(".error").style.display = "none";
        populateBoard(input);
    }
    else {
        document.querySelector(".error").style.display = "flex";
    }
}

// called anytime a square is hovered to change its color
function colorSquare() {
    if(click) {
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

// colors entire grid white
function reset() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') { // does not change mode on button click
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring";
        }
        else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring";
        }
    }
});