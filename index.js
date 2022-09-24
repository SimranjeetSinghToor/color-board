const boardContainer = document.querySelector(".board-container")
const palleteContainer = document.querySelector(".pallete-container")
palleteContainer.addEventListener("click", (e)=> {
  const color = e.target.dataset.color;
  if(color)
    selectionColor = color;
})

boardContainer.addEventListener("click", (e)=>{
  e.target.style.backgroundColor = selectionColor;
})

let selectionColor = "white";
function renderTable() {
  for(let i=0;i<4;i++) {
    for(let j=0;j<4;j++) {
      boardContainer.appendChild(getElement(i+j))
    }
  }
}

function getElement(id) {
  let cell = document.createElement("div")
  cell.id = id;
  cell.classList.add("cell")
  return cell;
}

function renderPallete() {
  for(let i=0; i< 4; i++) {
    let colorCell = getElement("color"+i);
    const colorCode = getRandomColors()
    colorCell.classList.add("cell");
    colorCell.dataset.color = colorCode;
    colorCell.style.backgroundColor = colorCode;
    palleteContainer.appendChild(colorCell);
  }
}

function getRandomColors() {
   return ("#" + Math.floor(Math.random()*16777215).toString(16));
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderTable();
  renderPallete();  
})











