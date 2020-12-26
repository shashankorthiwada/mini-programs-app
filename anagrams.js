const anagramInput1 = document.querySelector(".anagram-input1");
const anagramInput2 = document.querySelector(".anagram-input2");
const anagramsbtn = document.querySelector(".anagram-btn");
const anagramOutDiv = document.querySelector(".anagram-output-div");

anagramsbtn.addEventListener("click", () => {
  let firstString = anagramInput1.value;
  let secondString = anagramInput2.value;

  //   let sortedFirstString = firstString
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("")
  //     .trim();
  //   let sortedSecondString = secondString
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("")
  //     .trim();

  let sortedFirstString = sort(firstString.toLowerCase());
  let sortedSecondString = sort(secondString.toLowerCase());

  if (sortedFirstString === sortedSecondString) {
    anagramOutDiv.innerHTML = `<div>${firstString} and ${secondString} are Anagrams 😃</div>`;
    //console.log("Anagrams");
  } else {
    anagramOutDiv.innerHTML = `<div>${firstString} and ${secondString} are not Anagrams 🙃</div>`;
  }
});

function sort(string) {
  let charArray = string.split("");

  for (let i = 0; i < charArray.length - 1; i++) {
    if (charArray[i] > charArray[i + 1]) {
      let temp = charArray[i];
      charArray[i] = charArray[i + 1];
      charArray[i + 1] = temp;

      i = -1;
    }
  }

  return charArray.join("").trim().toString();
}
