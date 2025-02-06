let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  if (calculation === "0") calculation = value;
  else calculation += value;
  document.querySelector(".js-calculation").innerHTML = calculation;
  localStorage.setItem("calculation", calculation);
}

function evaluateCalculation() {
  calculation = eval(calculation);
  document.querySelector(".js-calculation").innerHTML = calculation;
  localStorage.setItem("calculation", calculation);
}

function clearCalc() {
  calculation = "0";
  document.querySelector(".js-calculation").innerHTML = calculation;
  // Remember to save the calculation here.
  localStorage.setItem("calculation", calculation);
}
