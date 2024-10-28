/*_________________________________________________________________________________________*
 *                                                                                         *
 *                                Mr Kartik Barman                                         *
 *                      Mern Stack|| Web Developer || Full Stack                           *
 *                                                                                         *
 *_________________________________________________________________________________________*/

// All Selectors
const buttonsContainer = document.querySelector("#buttonsContainer");
const primeNumberBtn = document.getElementById("primeNumberBtn");
const leapYearBtn = document.getElementById("leapYearBtn");
const palindromeBtn = document.getElementById("palindromeBtn");
const evenOddBtn = document.getElementById("evenOddBtn");
const primeNumberCard = document.querySelector("#primeNumberCard");
const leapYearCard = document.querySelector("#leapYearCard");
const palindromeCard = document.querySelector("#palindromeCard");
const evenOddCard = document.querySelector("#evenOddCard");
const palindromeResult = document.getElementById("palindromeResult");
const primeResult = document.getElementById("primeResult");
const leapResult = document.getElementById("leapResult");
const evenOddResult = document.getElementById("evenOddResult");
const palindromeInput = document.getElementById("palindromeInput");
const primeUserInput = document.getElementById("primeUserInput");
const leapUserInput = document.getElementById("leapUserInput");
const evenOddInput = document.getElementById("evenOddInput");

// Clear results and input fields
const clearResultsAndInputs = () => {
  palindromeResult.textContent = "";
  primeResult.textContent = "";
  leapResult.textContent = "";
  evenOddResult.textContent = "";

  palindromeInput.value = "";
  primeUserInput.value = "";
  leapUserInput.value = "";
  evenOddInput.value = "";
};

// Event listeners for All buttons
palindromeBtn.addEventListener("click", () => {
  clearResultsAndInputs();
  buttonsContainer.classList.add("hidden");
  palindromeCard.classList.remove("hidden");
});

primeNumberBtn.addEventListener("click", () => {
  clearResultsAndInputs();
  buttonsContainer.classList.add("hidden");
  primeNumberCard.classList.remove("hidden");
});

leapYearBtn.addEventListener("click", () => {
  clearResultsAndInputs();
  buttonsContainer.classList.add("hidden");
  leapYearCard.classList.remove("hidden");
});

evenOddBtn.addEventListener("click", () => {
  clearResultsAndInputs();
  buttonsContainer.classList.add("hidden");
  evenOddCard.classList.remove("hidden");
});

// Back button function
const goBack = () => {
  palindromeCard.classList.add("hidden");
  primeNumberCard.classList.add("hidden");
  leapYearCard.classList.add("hidden");
  evenOddCard.classList.add("hidden");
  buttonsContainer.classList.remove("hidden");
  clearResultsAndInputs();
};

// Palindrome check function
const checkPalindrome = () => {
  const input = palindromeInput.value;
  const resultDiv = palindromeResult;
  const reversed = input.split("").reverse().join("");
  if (input === reversed) {
    resultDiv.textContent = `${input} is a palindrome.`;
    resultDiv.classList.add("text-green-700");
    resultDiv.classList.remove("text-red-500");
  } else {
    resultDiv.textContent = `${input} is not a palindrome.`;
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
  }
  palindromeInput.value = "";
};

// Prime number check function
const primeNumberCheck = () => {
  const input = parseInt(primeUserInput.value, 10);
  const resultDiv = primeResult;

  if (isNaN(input) || input <= 1) {
    resultDiv.textContent = "Please enter a valid number greater than 1.";
    return;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    resultDiv.textContent = `${input} is a prime number.`;
    resultDiv.classList.add("text-green-700");
    resultDiv.classList.remove("text-red-500");
  } else {
    resultDiv.textContent = `${input} is not a prime number.`;
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
  }
  primeUserInput.value = "";
};

// Check leap year function
const leapYearCheck = () => {
  const year = parseInt(leapUserInput.value, 10);
  const resultDiv = leapResult;

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    resultDiv.textContent = `${year} is a leap year.`;
    resultDiv.classList.add("text-green-700");
    resultDiv.classList.remove("text-red-500");
  } else {
    resultDiv.textContent = `${year} is not a leap year.`;
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
  }
  leapUserInput.value = "";
};

// Check even/odd number function
const checkEvenOdd = () => {
  const input = parseInt(evenOddInput.value, 10);
  const resultDiv = evenOddResult;

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
    return;
  }
  if (input % 2 === 0) {
    resultDiv.textContent = `${input} is an even number.`;
    resultDiv.classList.add("text-green-700");
    resultDiv.classList.remove("text-red-500");
  } else {
    resultDiv.textContent = `${input} is an odd number.`;
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
  }
  evenOddInput.value = "";
};

// User clicks Enter, then show result
palindromeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});

primeUserInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    primeNumberCheck();
  }
});

leapUserInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    leapYearCheck();
  }
});

evenOddInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkEvenOdd();
  }
});
