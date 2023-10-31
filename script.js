let countEl = document.getElementById("count");
let paraEl = document.getElementById("para1");

let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let savestr = count + " - ";
  paraEl.textContent += savestr;
  countEl.textContent = 0;
  count = 0;
}
