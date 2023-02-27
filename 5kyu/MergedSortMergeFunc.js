function mergesorted(a, b) {
    let indexOfA = 0;
    let indexOfB = 0;
    let result = [];
    
    while(indexOfA < a.length || indexOfB < b.length){
      if (indexOfA == a.length){
          result.push(b.slice(indexOfB));
          break;
      }

      if (indexOfB == b.length){
          result.push(a.slice(indexOfA));
          break;
      }

      let temp = a[indexOfA] > b[indexOfB] ? b[indexOfB++] : a[indexOfA++];
      result.push(temp);
    }
    
    return result.flat();
  }