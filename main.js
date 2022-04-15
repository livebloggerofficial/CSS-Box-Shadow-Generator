const box = document.querySelector(".box-shadow-generator .box");
const generateCodeBtn = document.querySelector(
  ".box-shadow-generator .generate-code-btn"
);
const code = document.querySelector(".result .code pre code");
const controls = document.querySelectorAll(".box-shadow-generator .control");

let xValue = 0;
let yValue = 0;
let blurValue = 6;
let opacityValue = 0.3;
let spreadValue = 0;
let colorValue = "rgba(0, 0, 0, 0.3)";
let insetValue = false;

const hexToRGBA = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
};

const generateBoxShadow = () => {
  if (insetValue) {
    box.style.boxShadow = `inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  } else {
    box.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  }
};

const updateValues = () => {
  xValue = document.querySelector("#x-value").value;
  yValue = document.querySelector("#y-value").value;
  blurValue = document.querySelector("#blur").value;
  opacityValue = document.querySelector("#opacity").value;
  spreadValue = document.querySelector("#spread").value;
  colorValue = hexToRGBA(document.querySelector("#color").value);
  insetValue = document.querySelector("#inset").checked;

  generateBoxShadow();
};

controls.forEach((c) => {
  c.addEventListener("input", updateValues);
});

const generateCode = () => {
  if (insetValue) {
    code.innerHTML = `box-shadow: inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  } else {
    code.innerHTML = `box-shadow: ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  }

  hljs.highlightAll();
};

generateCodeBtn.addEventListener("click", generateCode);
