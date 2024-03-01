let count = 0;
let number = document.getElementById("number");

function increase() {
  count += 1;
  number.innerHTML = count;
}

function reset() {
  count = 0;
  number.innerHTML = count;
}

function decrease() {
  count -= 1;
  number.innerHTML = count;
}