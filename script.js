const squareDiv = document.createElement("div");

squareDiv.id = 'squareDiv';
squareDiv.style.width = '100px';
squareDiv.style.height = '100px';
squareDiv.style.border = '1px solid black';



const container = document.getElementById('container');

container.appendChild(squareDiv);