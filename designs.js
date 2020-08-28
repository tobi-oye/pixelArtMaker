// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// document.addEventListener('DOMContentLoaded',makeGrid);

// store the submit button element as submitButton
const submitButtonElement = document.querySelector('input[type = "submit"]');
const inputHeightElement = document.querySelector('#inputHeight');
// const N = inputHeightElement.value;

const inputWidthElement = document.querySelector('#inputWidth');
const M = inputWidthElement.value;
inputHeightElement.value = inputWidthElement.value;


function makeGrid() {
    console.log("calling the makegrid function")

// Your code goes here!
// define varaibles
// store the value grid height and width in variables gridHeight and gridWidth



//store color to be set in a variable cellColor
const cellColorElement = document.querySelector('#colorPicker');

const cellColor = cellColorElement.value;



// create a tr and td element based on the value in the grid height and the td element should always be nested in the tr element. 

// assumptions canvas must be a square, hence value of N is equal to M
// append td element to the tr element. 

// for loop to create element tr and append td into tr


            let tableElement = document.querySelector('table');
            for (let i=1; i <= M; i++){
                const u = document.createElement('tr');
                let y = document.createElement('td');
                u.appendChild(y);
            for (let o = 1; o <=M; o++){
                let c = document.createElement('td');
                u.appendChild(c);
            }
            tableElement.appendChild(u);
            }

}

submitButtonElement.addEventListener('click',);










// tableElement.addEventListener('click', function(event){
//     if(event.target.style.backgroundColor === 'white'){
//         event.target.style.backgroundColor = 'blue';
//     }
//     else{
//     event.target.style.backgroundColor = 'white';
//     }; });