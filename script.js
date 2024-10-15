//Create the grid of square divs inside a "container"

const container = document.getElementById("container");

const numberOfSquareDivs = 16*16;

for (let i = 0; i < numberOfSquareDivs; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.id = "squareDiv";
      container.appendChild(squareDiv);
}

//Make the hover effect to the grid squares



