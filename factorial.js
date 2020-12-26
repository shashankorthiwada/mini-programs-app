const factorialInput = document.querySelector(".factorial-input");
const factorialbtn = document.querySelector(".factorial-btn");
const factorialOutput = document.querySelector(".factorial-output-div");

factorialbtn.addEventListener("click", () => {
  let number = factorialInput.value;
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  //factorialOutput.innerHTML += `<p>Factorial of ${number} is ${fact}</p>`;
  let res = findFactorial(number);
  factorialOutput.innerHTML = `<p>Factorial of ${number} is ${res} 😊</p>`;
});

function findFactorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}
