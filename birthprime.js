const userBirthMonth = document.querySelector(".prime-month");
const userBirthDay = document.querySelector(".prime-day");
const birthPrimebtn = document.querySelector(".prime-btn");
const birthPrimeOut = document.querySelector(".prime-output-div");

let primePattern = /^[0-9]{0,2}$/;

birthPrimebtn.addEventListener("click", () => {
  let userMonth = userBirthMonth.value;
  let userDay = userBirthDay.value;
  if (Number(userMonth) <= 12 && primePattern.test(Number(userMonth))) {
    if (
      ((Number(userMonth) > 2 && Number(userDay) <= 31) ||
        (Number(userMonth) === 2 && Number(userDay) < 30)) &&
      primePattern.test(userDay)
    ) {
      let output = userBirthMonth.value + userBirthDay.value;
      checkPrime(output);
    } else {
      birthPrimeOut.innerHTML = `<div>Please Enter a Valid two digit Number For the Day 🤨</div`;
    }
  } else {
    birthPrimeOut.innerHTML = `<div>Please Enter a Valid two digit Number For the Month 😏</div`;
  }
});

function checkPrime(output) {
  let i = 2,
    flag = 0;
  while (i < output) {
    if (output % i == 0) {
      flag = 1;
      break;
    }
    i++;
  }

  if (flag == 0) {
    birthPrimeOut.innerHTML = `<div>You are Different 😉  Your BirthDay is a Prime Number </div`;
  } else {
    birthPrimeOut.innerHTML = `<div>Your BirthDay is not a Prime number 😐</div`;
  }
}
