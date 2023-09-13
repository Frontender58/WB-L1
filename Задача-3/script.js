// Функция для вычисления N-го числа в ряду Фибоначчи
function calculateFibonacci() {
  const n = parseInt(document.getElementById("fibonacci-n").value);
  const result = getFibonacci(n);
  document.getElementById(
    "fibonacci-result"
  ).textContent = `Fibonacci(${n}) = ${result}`;
}

// Функция для вычисления всех чисел в ряду Фибоначчи до числа N
function calculateAllFibonacci() {
  const n = parseInt(document.getElementById("fibonacci-all-n").value);
  const result = getAllFibonacci(n);
  document.getElementById(
    "fibonacci-all-result"
  ).textContent = `Fibonacci numbers up to ${n}: ${result.join(", ")}`;
}

// Функция для вычисления всех простых чисел до числа N
function calculatePrimes() {
  const n = parseInt(document.getElementById("prime-n").value);
  const result = getPrimes(n);
  document.getElementById(
    "prime-result"
  ).textContent = `Prime numbers up to ${n}: ${result.join(", ")}`;
}

// Функция для вычисления N-го числа в ряду Фибоначчи
function getFibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    const temp = current;
    current += prev;
    prev = temp;
  }

  return current;
}

// Функция для вычисления всех чисел в ряду Фибоначчи до числа N
function getAllFibonacci(n) {
  const fibonacciNumbers = [];
  for (let i = 0; i <= n; i++) {
    fibonacciNumbers.push(getFibonacci(i));
  }
  return fibonacciNumbers;
}

// Функция для проверки, является ли число простым
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Функция для вычисления всех простых чисел до числа N
function getPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
