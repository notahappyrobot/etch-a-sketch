/*
flexbox size; user prompt 

number boxes = user input * user input

//flexbox settings
flex-direction: row
flex-wrap: wrap
flex-content/align-content: space-evenly


*/

// capture user interaction with button
const gridMake = document.querySelector('#gridMakeBtn');

gridMake.addEventListener('click', () =>{
    
    createGrid(320);
}
);

// select container
const container = document.querySelector('#container');

// pixelDiv creation
function createGrid(size){
    for(let i=0;i<=size;i++){
        //create div
        const pixelDiv = document.createElement('div');
        // add & set #pixelDiv css
        pixelDiv.classList.add('pixelDiv');
        pixelDiv.setAttribute('style','flex-grow: 1;border: 1px solid black; margin: 2px; background-color: slategrey;padding: 10px;');
        //pixelDiv.textContent = i;

        // push into container
        container.appendChild(pixelDiv);
    }

}


