function add(a, b) {
    let num1 = a.split('').reverse();
    let num2 = b.split('').reverse();
    let result = [];
    
    for (let i = 0; i < Math.max(num1.length, num2.length); i++){
      let temp = (+result[i] || 0) + (+num1[i] || 0) + (+num2[i] || 0);
      result[i + 1] = temp > 9 ? 1 : 0;
      result[i] = temp % 10;
    }
    
    return result.reverse().join('').replace(/^0/,'');
  }