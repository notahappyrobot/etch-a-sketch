const grid = document.querySelector('#grid');
// determines how bog grid is
let width = 16; //16
let squareHeight = 0;//40
let squareWidth = 0;//40

let squares = [];



// create board
function createBoard(){

    width = prompt(`How big a grid do you want? (min:16 - max:100)`);
    
    while(width < 16 || width > 100){
        console.log(`${width} is outwith parameters`);
        width = prompt(`Sorry, your grid must be between 16 & 100 in size:
How big a grid do you want? (min:16 - max:100`);
    }
        
    for(let i=0;i<width*width;i++){
            let square = document.createElement('div');
            squareHeight = 640/width;//40
            squareWidth = 640/width;//40
            

            square.setAttribute('id',i);
            square.setAttribute('style',`height: ${squareHeight}px; width:${squareWidth}px;`);

            grid.appendChild(square);
            squares.push(square);
        
            square.setAttribute('id',i);
            square.setAttribute('style',`height: ${squareHeight}px; width:${squareWidth}px;`);

            grid.appendChild(square);
            squares.push(square);  

        } 

    console.log(`New board created with a grid ${width} x ${width}`);

}

// on mouseover turn grey to signify position
grid.addEventListener('mouseover',function(e){
     e.target.style.background ="grey";
     //console.log(e.target.id);

 })
// on mouse off turn light grey to draw
 grid.addEventListener('mouseout',function(e){
    e.target.style.background ="lightgrey";
    //console.log(e.target.id);

})

// calls functions to 
function clearBoard(){
    console.clear() ;
    console.log(`Board Reset
===========`);
    clearGrid();
    createBoard();  

}

// empties grid for new board
function clearGrid(){
    document.getElementById('grid').innerHTML = "";

}

clearBtn.addEventListener('click', clearBoard);

createBoard();