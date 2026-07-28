import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// عناصر

const codeGenerate = document.querySelector("#codeGenerate");
const copyBtn = document.querySelector("#copyBtn");

const range = document.querySelector("#range");
const lengthNumber = document.querySelector("#span");

const generateBtn = document.querySelector("#generateBtn");

const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const status = document.querySelector("#status");

const bars = [
  document.querySelector("#bar1"),
  document.querySelector("#bar2"),
  document.querySelector("#bar3"),
  document.querySelector("#bar4"),
];

// کاراکترها

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*";

// اسلایدر

range.addEventListener("input", () => {
  lengthNumber.textContent = range.value;

  let percent = ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.background = `
  linear-gradient(
    to right,
    #A4FFAF ${percent}%,
    #18171F ${percent}%
  )
  `;
});

// ساخت رمز

generateBtn.addEventListener("click", () => {
  let chars = "";

  let password = "";

  if (uppercase.checked) {
    chars += upperChars;

    password += randomChar(upperChars);
  }

  if (lowercase.checked) {
    chars += lowerChars;

    password += randomChar(lowerChars);
  }

  if (numbers.checked) {
    chars += numberChars;

    password += randomChar(numberChars);
  }

  if (symbols.checked) {
    chars += symbolChars;

    password += randomChar(symbolChars);
  }

  if (chars === "") {
    alert("Select option");

    return;
  }

  while (password.length < range.value) {
    password += randomChar(chars);
  }

  // قاطی کردن رمز

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  codeGenerate.value = password;

  checkStrength();
});

// تولید کاراکتر رندوم

function randomChar(text) {
  return text[Math.floor(Math.random() * text.length)];
}

// قدرت رمز

function checkStrength() {
  let score = 0;

  if (uppercase.checked) score++;

  if (lowercase.checked) score++;

  if (numbers.checked) score++;

  if (symbols.checked) score++;

  if (range.value >= 10) score++;

  if (range.value >= 15) score++;

  // خاموش کردن همه

  bars.forEach((bar) => {
    if (bar) {
      bar.style.background = "#18171F";
    }
  });

  if (score <= 2) {
    status.textContent = "TOO WEAK!";

    bars[0].style.background = "#F64A4A";
  } else if (score <= 4) {
    status.textContent = "WEAK";

    bars[0].style.background = "#FB7C58";

    bars[1].style.background = "#FB7C58";
  } else if (score <= 5) {
    status.textContent = "MEDIUM";

    bars[0].style.background = "#F8CD65";

    bars[1].style.background = "#F8CD65";

    bars[2].style.background = "#F8CD65";
  } else {
    status.textContent = "STRONG";

    bars.forEach((bar) => {
      if (bar) {
        bar.style.background = "#A4FFAF";
      }
    });
  }
}

// کپی کردن رمز

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeGenerate.value);

  copyBtn.innerHTML = `<i class="fa-solid fa-check text-[#A4FFAF] text-2xl"></i>`;

  setTimeout(() => {
    copyBtn.innerHTML = `<i class="fa-regular fa-copy text-[#A4FFAF] text-2xl"></i>`;
  }, 1500);
});
