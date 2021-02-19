const grid = document.querySelector('#grid');

let width = 16;
let squares = [];

//create board
function createBoard(){
        for(let i=0;i<width*width;i++)
        {
            const square = document.createElement('div');
            square.setAttribute('id',i);
            grid.appendChild(square);
            squares.push(square);
        }     

}


grid.addEventListener('mouseover',function(e){
     e.target.style.background ="grey";
     //console.log(e.target.id);
 })

 grid.addEventListener('mouseout',function(e){
    e.target.style.background ="lightgrey";
    //console.log(e.target.id);
})

createBoard();