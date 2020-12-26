const leapInput = document.querySelector(".leap-input");
const leapbtn = document.querySelector(".leap-btn");
const leapOutput = document.querySelector(".leap-output-div");

let pattern = /^[0-9]{4}$/;
leapbtn.addEventListener("click", () => {
  let userBirthYear = leapInput.value;
  if (pattern.test(userBirthYear)) {
    if (
      (0 == userBirthYear % 4 && 0 != userBirthYear % 100) ||
      0 == userBirthYear % 400
    ) {
      leapOutput.innerHTML = `<div>You are lucky your birth year is a leap year 😀</div>`;
    } else {
      leapOutput.innerHTML = `<div>Your BirthYear is not a leap year 🙂</div>`;
    }
  } else {
    leapOutput.innerHTML = `<div>Please Enter a Valid Year 😒</div>`;
  }
});
