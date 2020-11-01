const buttons = document.querySelectorAll('.round');
const newGame = document.querySelector('#new-game');
let firstTry = true;

newGame.addEventListener('click', () => {
    buttons.forEach((button,index) => {
        if(firstTry){
          button.id = "button-" + index;
          button.addEventListener('click', () => {
            buttonClicked(index);
          });
        }
        setRandomColor(index);
    })

    firstTry = false;
    setStatusText("Get the entire board to green!");
})

const setRandomColor = (index) => {
  let num = Math.random();

  if(num < .5) {
    setColorAndText(index, "red", "R");
  } else {
    setColorAndText(index, "green", "G");
  }
}

const buttonClicked = (index) => {
  let top = swapColor(index-3);
  let bottom = swapColor(index + 3);
  let center = swapColor(index);

  if(index % 3 !== 0){
    let left = swapColor(index - 1);
  }
  if((index + 1) % 3 !== 0){
    let right = swapColor(index + 1);
  }

  didWeWin();
}

const swapColor = (index) => {
  if(index < 0 || index > 8)
    return;

  let button = document.querySelector("#button-" + index);
  let currentColor = button.style.background;

  if(currentColor === "red"){
    setColorAndText(index, "green", "G");
  } else{
    setColorAndText(index, "red", "R");
  }
}

const setColorAndText = (index, color, text) => {
  let button = document.querySelector("#button-" + index);
  button.style.background = color;
  button.innerText = text;
}

const setStatusText = (status) => {
  document.querySelector("#status").innerText = status;
}

const didWeWin = () => {
  for(let button of buttons){
    if(button.style.background !== "green"){
      return;
    }
  }

  setStatusText("Congratulations You Won!");
}
