//Create the grid of square divs inside a "container"

const container = document.getElementById("container");

const numberOfSquareDivs = 16 * 16;

for (let i = 0; i < numberOfSquareDivs; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.className = "squareDiv";
      container.appendChild(squareDiv);
}

//Make the hover effect to the grid squares
const hoverDivs = document.querySelectorAll(".squareDiv");

hoverDivs.forEach(squareDiv => {
      squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "orange";
      });
})

hoverDivs.forEach(squareDiv => {
      squareDiv.addEventListener("mouseout", () => {
            squareDiv.style.backgroundColor = "white";
      });
})