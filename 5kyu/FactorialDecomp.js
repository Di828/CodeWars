let primeNumbers = [2, 3];

function decomp(n) {  
  primeNumbers = [2, 3];
  formPrimeNumbersArr(n);    
  let digitsIn = [0, 0, 1];
  let currentF = 3;  
  
  while (currentF <= n){      
    addDigits(currentF, digitsIn);
    currentF++;
  }
    
  console.log(formAnswer(digitsIn));
}

function formAnswer(digits){
    let result = '';
    for (let i = 2; i < digits.length; i++){
        if (digits[i] > 1){
            result += `${i}^${digits[i]} * `;
        } else if (digits[i] == 1){
            result += `${i} * `;
        }
    }

    return result.substring(0, result.length - 3);
}

function formPrimeNumbersArr(n){
  for (let i = 5; i <= n; i++){
    if (isPrime(i)){
      primeNumbers.push(i);
    }
  }
}

function isPrime(n){
  let index = 0;
  while (primeNumbers[index] ** 2 <= n){
    if (n % primeNumbers[index++] == 0){
      return false;
    }      
  }
  
  return true;
}

function addDigits(currentF, digitsIn){
  primeNumbers.forEach(x => digitsIn[x] = (digitsIn[x] || 0) + timesIn(currentF, x));
}

function timesIn(n, x){
  let result = 0;
  
  while (n % x == 0){
    result++;
    n /= x;
  }
  
  return result;
}