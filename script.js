const container = document.getElementById('container');

const numberOfSquareDivs = 16*16;

for (let i = 0; i < numberOfSquareDivs; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.id = 'squareDiv';
      squareDiv.style.width = '100px';
      squareDiv.style.height = '100px';
      squareDiv.style.border = '1px solid black';
      container.appendChild(squareDiv);
}

