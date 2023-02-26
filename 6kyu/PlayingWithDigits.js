function digPow(n, p){
    let digits = n.toString().split('');
    let nPowSum = 0;
    digits.forEach(digit => nPowSum += (+digit) ** p++);
    let result = Math.floor(nPowSum / n);
    
    return result * n == nPowSum ? result : -1;
  }