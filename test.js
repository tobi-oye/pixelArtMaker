let submit = document.querySelector('input[type = "submit"]');
let button = document.querySelector('button');
let height = document.querySelector('#inputHeight');
let heightVal = Number(height.value);
let width = document.querySelector('#inputWidth');
let widthVal = Number(width.value);

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

button.addEventListener('click',makeGrid,false);