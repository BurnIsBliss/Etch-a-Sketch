const mainContainer = document.querySelector(".mainContainer");


// Function to change the grid size
function gridLayout(squares=5){
    for (let i=0; i<squares; i++){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("squareList");
        for (let j=0; j<squares; j++){
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("style","height: 16px; width: 16px; background-color: white; border: 2px solid grey");
            innerDiv.appendChild(squareDiv);
        }
        mainContainer.appendChild(innerDiv);
    }
}


// Function to add functionality to the 'Change Grid Layout Button', we have implemented a function to remove the already existing child elements of the .mainContainer
const changeGrid = document.querySelector("button");
changeGrid.addEventListener("click", () => {
    const gridValue = prompt("Please enter a valid Grid size between 1 - 100", 5); 
    const delSquares = document.querySelectorAll(".squareList");
    console.log(delSquares);
    delSquares.forEach((node) => {node.remove();})
    gridLayout(gridValue);
})


// Initial call to set the grid size
gridLayout();