import "./style.css";
import { createIcons, icons } from "lucide";
createIcons({ icons });
const password = document.getElementById("password");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const range = document.getElementById("range");
const span = document.getElementById("span");
const uppercase = document.querySelector("#Uppercase input");
const lowercase = document.querySelector("#\\ Lowercase input");
const numbers = document.querySelector("#Numbers input");
const symbols = document.querySelector("#Symbols input");
const status = document.getElementById("status");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]<>?/";
function updateRange() {
  span.textContent = range.value;

  const percent = ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.background = `linear-gradient(
    to right,
    #A4FFAF 0%,
    #A4FFAF ${percent}%,
    #18171F ${percent}%,
    #18171F 100%
  )`;
}
updateRange();
range.addEventListener("input", updateRange);
generate.addEventListener("click", () => {
  let chars = "";
  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;
  if (chars === "") {
    alert("Select at least one option");
    return;
  }
  let newPassword = "";
  for (let i = 0; i < range.value; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    newPassword += chars[randomIndex];
  }
  password.value = newPassword;
  bar1.style.background = "transparent";
  bar2.style.background = "transparent";
  bar3.style.background = "transparent";
  bar4.style.background = "transparent";
  let score = 0;
  if (uppercase.checked) score++;
  if (lowercase.checked) score++;
  if (numbers.checked) score++;
  if (symbols.checked) score++;
  if (range.value >= 8) score++;
  if (range.value >= 14) score++;
  if (score <= 2) {
    status.textContent = "WEAK";
    bar1.style.background = "#F64A4A";
  } else if (score <= 4) {
    status.textContent = "MEDIUM";
    bar1.style.background = "#FB7C58";
    bar2.style.background = "#FB7C58";
  } else if (score <= 5) {
    status.textContent = "STRONG";
    bar1.style.background = "#F8CD65";
    bar2.style.background = "#F8CD65";
    bar3.style.background = "#F8CD65";
  } else {
    status.textContent = "VERY STRONG";
    bar1.style.background = "#A4FFAF";
    bar2.style.background = "#A4FFAF";
    bar3.style.background = "#A4FFAF";
    bar4.style.background = "#A4FFAF";
  }
});
copy.addEventListener("click", () => {
  if (password.value === "") {
    alert("No Password");
    return;
  }
  navigator.clipboard.writeText(password.value);
  alert("Copied!");
});