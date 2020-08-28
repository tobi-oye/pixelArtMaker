let submit = document.querySelector('input[type = "submit"]');
let button = document.querySelector('button');
let height = document.querySelector('#inputHeight');
let heightVal = Number(height.value);
let width = document.querySelector('#inputWidth');
let widthVal = Number(width.value);
// function to create tables based on value inside the text field
function makeGrid() {
    for (let i = 0; i < heightVal; i++){
        let row = document.createElement('tr');

        for(u = 0; u < widthVal; u++){
            let col = document.createElement('td');
            row.appendChild(col);
        }
        let tableElement = document.querySelector('#pixelCanvas');
        tableElement.appendChild(row);
    }
}

// button.addEventListener('click',makeGrid);

// click event listener for submit button that will call the makegrid function  above
submit.addEventListener('click',makeGrid);