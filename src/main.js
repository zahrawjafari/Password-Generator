import "./style.css";
import { createIcons, icons } from "lucide";

createIcons({ icons });
const password = document.getElementById("password");
const copy = document.getElementById("copy");
const span = document.getElementById("span");
const Uppercase = document.getElementById("Uppercase");
const Lowercase = document.getElementById("Lowercase");
const Numbers = document.getElementById("Numbers");
const Symbols = document.getElementById("Symbols");
const bar5 = document.getElementById("bar5");
const range = document.getElementById("range");
function updateRange() {
  span.textContent = range.value;

  const percent = ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.background = `linear-gradient(
    to right,
    #A4FFAF ${percent}%,
    #18171F ${percent}%
  )`;
}
updateRange();
range.addEventListener("input", updateRange);
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]<>?";
let characters = "";
if (upper.checked) {
  characters += uppercase;
}
if (lower.checked) {
  characters += lowercase;
}
if (number.checked) {
  characters += numbers;
}
if (symbol.checked) {
  characters += symbols;
}
copy.addEventListener("click", () => {});
navigator.clipboard.writeText(password.value);
alert("Password Copied!");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);
  alert("Password Copied!");
});