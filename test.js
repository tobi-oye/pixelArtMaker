let submit = document.querySelector('input[type = "submit"]');


// function to create tables based on value inside the text field
function makeGrid(event) {
let height = document.querySelector('#inputHeight');
let heightVal = Number(height.value);
let width = document.querySelector('#inputWidth');
let widthVal = Number(width.value);

    for (let i = 0; i < heightVal; i++){
        let row = document.createElement('tr');

        for(u = 0; u < widthVal; u++){
            let col = document.createElement('td');
            row.appendChild(col);
        }
        let tableElement = document.querySelector('#pixelCanvas');
        tableElement.appendChild(row);
    }
    return  event.preventDefault();  
 
}

   let tableElement = document.querySelector('#pixelCanvas');
//    tableElement.className
   tableElement.addEventListener('click', function (evt){
    // evt.target.className = 'test';
    // document.querySelector('.test').style.backgroundColor = blue;
    if (evt.target.style.backgroundColor === ''){
        evt.target.style.backgroundColor = (document.querySelector('#colorPicker')).value;
    }
    else{
        evt.target.style.backgroundColor = '';
    }

    
    // evt.target.classList.toggle('test');
})


// let button = document.querySelector('button');
// button.addEventListener('click',function(event){
//     tableElement.innerHTML = "";
//     return event.preventDefault();
// });

document.addEventListener('DOMContentLoaded',submit.addEventListener('click',makeGrid));
// click event listener for submit button that will call the makegrid function  above
// submit.addEventListener('click',makeGrid);

