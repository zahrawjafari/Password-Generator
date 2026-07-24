import "./style.css";
import { createIcons, Copy } from "lucide";

createIcons({
  icons: {
    Copy,
  },
});
const password = document.querySelector("#password");
const range = document.querySelector("#range");
const span = document.querySelector("#span");
const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
range.addEventListener("input", () => {
  span.textContent = range.value;
});
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const sym = "!@#$%^&*";
function createPassword() {
  let chars = "";

  if (uppercase.checked) {
    chars += upper;
  }

  if (lowercase.checked) {
    chars += lower;
  }

  if (numbers.checked) {
    chars += nums;
  }

  if (symbols.checked) {
    chars += sym;
  }

  let result = "";

  for (let i = 0; i < range.value; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  password.value = result;
}
generate.addEventListener("click", createPassword);
const status = document.querySelector("#status");

const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");
function checkStrength() {
  let score = 0;

  if (uppercase.checked) {
    score++;
  }

  if (lowercase.checked) {
    score++;
  }

  if (numbers.checked) {
    score++;
  }

  if (symbols.checked) {
    score++;
  }

  // خاموش کردن همه نوارها
  bar1.classList.remove("bg-green-400");
  bar2.classList.remove("bg-green-400");
  bar3.classList.remove("bg-green-400");
  bar4.classList.remove("bg-green-400");

  if (score <= 1) {
    status.textContent = "WEAK";
    bar1.classList.add("bg-red-500");
  } else if (score === 2) {
    status.textContent = "MEDIUM";
    bar1.classList.add("bg-yellow-400");
    bar2.classList.add("bg-yellow-400");
  } else if (score === 3) {
    status.textContent = "GOOD";
    bar1.classList.add("bg-green-400");
    bar2.classList.add("bg-green-400");
    bar3.classList.add("bg-green-400");
  } else {
    status.textContent = "STRONG";
    bar1.classList.add("bg-green-400");
    bar2.classList.add("bg-green-400");
    bar3.classList.add("bg-green-400");
    bar4.classList.add("bg-green-400");
  }
}
uppercase.addEventListener("change", checkStrength);
lowercase.addEventListener("change", checkStrength);
numbers.addEventListener("change", checkStrength);
symbols.addEventListener("change", checkStrength);
copy.addEventListener("click", () => {
  if (password.value === "") {
    return;
  }

  navigator.clipboard.writeText(password.value);

  copy.setAttribute("data-lucide", "check");

  lucide.createIcons();

  setTimeout(() => {
    copy.setAttribute("data-lucide", "copy");
    lucide.createIcons();
  }, 1500);
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);
});
copy.addEventListener("click", () => {
  if (password.value === "") return;

  navigator.clipboard.writeText(password.value);

  copy.setAttribute("data-lucide", "check");
  lucide.createIcons();

  setTimeout(() => {
    copy.setAttribute("data-lucide", "copy");
    lucide.createIcons();
  }, 1500);
});