import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const codeGenerate = document.querySelector("#codeGenerate");
const copyBtn = document.querySelector("#copyBtn");
const range = document.querySelector("#range");
const span = document.querySelector("#span");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generateBtn");
const status = document.querySelector("#status");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numberLetters = "0123456789";
const symbolLetters = "!@#$%^&*";
range.addEventListener("input", () => {
  span.textContent = range.value;
  let value = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `
    linear-gradient(
    to right,
    #A4FFAF ${value}%,
    #18171F ${value}%
    )
    `;
});
generateBtn.addEventListener("click",()=>{
  let characters = "";
  let password = "";
  if(uppercase.checked){
    characters += upperLetters;
  }
  if(lowercase.checked){
    characters += lowerLetters;
  }
  if(numbers.checked){
    characters += numberLetters;
  }
  if(symbols.checked){
    characters += symbolLetters;
  }
  if(characters === ""){
    alert("Please select options");
    return;
  }
  for(let i = 0; i < range.value; i++){
    let random =
    Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  codeGenerate.value = password;
});
copyBtn.addEventListener("click",()=>{
  if(codeGenerate.value === ""){
    return;
  }
  navigator.clipboard.writeText(
    codeGenerate.value
  );
  copyBtn.innerHTML = `
  <i class="fa-solid fa-check text-[#A4FFAF] text-2xl"></i>
  `;
  setTimeout(()=>{
    copyBtn.innerHTML = `
    <i class="fa-regular fa-copy text-[#A4FFAF] text-2xl"></i>
    `;
  },1500);
});