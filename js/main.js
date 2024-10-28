/*________________________________________________________________________________________*
*                                                                                         *
*                                Mr Kartik Barman                                         *
*                      Mern Stack|| Web Developer || Full Stack                           *
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
const palindromeResult = document.getElementById("palindromeResult");
const primeResult = document.getElementById("primeResult");
const leapResult = document.getElementById("leapResult");
const evenOddResult = document.getElementById("evenOddResult");


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
  const palindromeResult = document.getElementById("palindromeResult");
  palindromeResult.textContent = "";
  const primeResult = document.getElementById("primeResult");
  primeResult.textContent = "";
  const leapResult = document.getElementById("leapResult");
  leapResult.textContent = "";
  const evenOddResult = document.getElementById("evenOddResult");
  evenOddResult.textContent = ""
  
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
  document.getElementById("palindromeInput").value = ""
};

// Prime Number Check Functtion
const primeNumberCheck = () => {
  const input = parseInt(document.getElementById("primeUserInput").value, 10);
  if (isNaN(input) || input <= 1) {
    palindromeResult.textContent = "Please enter a valid number greater than 1.";
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
  document.getElementById("primeUserInput").value = "";
};

// Check Leap Year Function
const leapYearCheck = () => {
  const year = parseInt(document.getElementById("leapUserInput").value, 10);

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    leapResult.textContent = `${year} is a leap year.`;
    leapResult.classList.add("text-green-700");
    leapResult.classList.remove("text-red-500");
  } else {
    leapResult.textContent = `${year} is not a leap year.`;
    leapResult.classList.remove("text-green-700");
    leapResult.classList.add("text-red-500");
  }
  document.getElementById("leapUserInput").value = "";
};

// Check Even and Odd Number Function
const checkEvenOdd = () => {
  const input = parseInt(document.getElementById("evenOddInput").value, 10);
  const resultDiv = document.getElementById("evenOddResult");
  if (isNaN(input)) {
    evenOddResult.textContent = "Please enter a valid number.";
    evenOddResult.classList.remove("text-green-700");
    evenOddResult.classList.add("text-red-500");
    return;
  }
  if (input % 2 === 0) {
    evenOddResult.textContent = `${input} is an even number.`;
    evenOddResult.classList.add("text-green-700");
    evenOddResult.classList.remove("text-red-500");
  } else {
    evenOddResult.textContent = `${input} is an odd number.`;
    evenOddResult.classList.remove("text-green-700");
    evenOddResult.classList.add("text-red-500");
  }
  document.getElementById("evenOddInput").value = ""
};
