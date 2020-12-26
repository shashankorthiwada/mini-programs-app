const leapInput = document.querySelector(".leap-input");
const leapbtn = document.querySelector(".leap-btn");
const leapOutput = document.querySelector(".leap-output-div");

let pattern = /^[0-9]{4}$/;
leapbtn.addEventListener("click", () => {
  let userBirthYear = leapInput.value;
  let sortedBirthYear = userBirthYear.split("-");
  let year = Number(sortedBirthYear[0]);
  let month = Number(sortedBirthYear[1]);
  let day = Number(sortedBirthYear[2]);
  if (month > 2 || (month === 2 && day < 30)) {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      leapOutput.innerHTML = `<div>You are lucky your birth year is a leap year 😀</div>`;
    } else {
      leapOutput.innerHTML = `<div>Your BirthYear is not a leap year 🙂</div>`;
    }
  } else {
    leapOutput.innerHTML = `<div>Please Enter a Valid Date 😒</div>`;
  }
});
