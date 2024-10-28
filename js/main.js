/*________________________________________________________________________________________*
*                                                                                         *
*                                Mr Kartik Barman                                         *
*                        Web Developer || Mern Stack || Full Stack                        *
*                                                                                         *
*_________________________________________________________________________________________*/ 

const buttonsContainer = document.querySelector("#buttonsContainer");
const primeNumberBtn = document.getElementById("primeNumberBtn");
const leapYearBtn = document.getElementById("leapYearBtn");
const palindromeBtn = document.getElementById("palindromeBtn");
const evenOddBtn = document.getElementById("evenOddBtn");
const primeNumberCard = document.querySelector("#primeNumberCard");
const leapYearCard = document.querySelector("#leapYearCard");
const palindromeCard = document.querySelector("#palindromeCard");
const evenOddCard = document.querySelector("#evenOddCard");

palindromeBtn.addEventListener("click", () => {
  buttonsContainer.classList.add("hidden");
  palindromeCard.classList.remove("hidden");
});

primeNumberBtn.addEventListener("click", () => {
  buttonsContainer.classList.add("hidden");
  primeNumberCard.classList.remove("hidden");
});

leapYearBtn.addEventListener("click", () => {
  buttonsContainer.classList.add("hidden");
  leapYearCard.classList.remove("hidden");
});

evenOddBtn.addEventListener("click", () => {
  buttonsContainer.classList.add("hidden");
  evenOddCard.classList.remove("hidden");
});

// Back button Function

const goBack = () => {
  palindromeCard.classList.add("hidden");
  primeNumberCard.classList.add("hidden");
  leapYearCard.classList.add("hidden");
  evenOddCard.classList.add("hidden");
  buttonsContainer.classList.remove("hidden");
};

// Palindrome Check Function

const checkPalindrome = () => {
  const input = document.getElementById("palindromeInput").value;
  const resultDiv = document.getElementById("palindromeResult");
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
};

// Prime Number Check Functtion
const primeNumberCheck = () => {
  const input = parseInt(document.getElementById("primeUserInput").value, 10);
  const resultDiv = document.getElementById("primeResult");
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
};

// Check Leap Year Function
const leapYearCheck = () => {
  const year = parseInt(document.getElementById("leapUserInput").value, 10);
  const resultDiv = document.getElementById("leapResult");

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    resultDiv.textContent = `${year} is a leap year.`;
    resultDiv.classList.add("text-green-700");
    resultDiv.classList.remove("text-red-500");
  } else {
    resultDiv.textContent = `${year} is not a leap year.`;
    resultDiv.classList.remove("text-green-700");
    resultDiv.classList.add("text-red-500");
  }
};

// Check Even and Odd Number Function
const checkEvenOdd = () => {
  const input = parseInt(document.getElementById("evenOddInput").value, 10);
  const resultDiv = document.getElementById("evenOddResult");
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
};
