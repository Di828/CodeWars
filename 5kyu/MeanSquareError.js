var solution = function(firstArray, secondArray) {
    let diffrence = 0;
    
    for (let i = 0; i < firstArray.length; i++){
      diffrence += (firstArray[i] - secondArray[i]) ** 2;
    }
    
    return diffrence / firstArray.length;
  }