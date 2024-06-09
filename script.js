const mainContainer = document.querySelector(".mainContainer");

// Function to create random RGB values
function generateRGB (){
    let colorR = Math.floor(Math.random()*255);
    let colorG = Math.floor(Math.random()*255);
    let colorB = Math.floor(Math.random()*255);
    
    return (`${colorR},${colorG},${colorB}`);
}

function colorTheGrid(){
    // Logic to change the backgroundColor of the grid
    const changeColorList = document.querySelectorAll(".innerSquare");
    changeColorList.forEach((element) => element.addEventListener("mouseover", (e) => {if (e.target.className!="innerSquare colorAdded") {
    e.target.style.backgroundColor = "rgb(" + generateRGB() + ")";
    e.target.classList.add("colorAdded");
    console.log("Class value set", e.target.className);
    }
    // console.log(e.target);
    // The below code sets the opacity of the elements and decrements accordingly 
    if (!e.target.style.opacity) {
    e.target.style.opacity = 1; 
    // console.log("initialize",e.target.style.opacity);
    }
    else {
    e.target.style.opacity = incrementOpacity(e.target.style.opacity);
    // console.log("decrement",e.target.style.opacity);
    }
}));
}

// function to decrement the opacity of the grid divS
function incrementOpacity(currentOpacity){
    // console.log("inside incrementOpacity", currentOpacity);
    if(currentOpacity > 0) currentOpacity -= .1;
    return currentOpacity;
}


// Function to change the grid size
function gridLayout(squares=30){
    for (let i=0; i<squares; i++){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("squareList");
        innerDiv.setAttribute("style", "display: flex; flex: 1; flex-direction: column;");
        for (let j=0; j<squares; j++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("innerSquare");
            squareDiv.setAttribute("style","background-color: white; border: 1px solid black; flex: 1");
            innerDiv.appendChild(squareDiv);
        }
        mainContainer.appendChild(innerDiv);
    }
}

// Code to layout the functionality of the 'Change Grid Layout' button, we have implemented a function to remove the already existing child elements of the .mainContainer
const changeGrid = document.querySelector("button");
changeGrid.addEventListener("click", () => {
    const gridValue = prompt("Please enter a valid Grid size between 1 - 100");
    console.log(typeof(gridValue));
    if ((gridValue > 100) || (gridValue < 1) || (typeof(parseInt(gridValue)) !== "number")) {
        alert("Please enter a valid number and try again.");
        return 0;
    }
    const delSquares = document.querySelectorAll(".squareList");
    console.log(delSquares);
    delSquares.forEach((node) => {node.remove();})
    gridLayout(gridValue);
    colorTheGrid();
})

// Initial call to set the grid size and color the grid
gridLayout();
colorTheGrid();