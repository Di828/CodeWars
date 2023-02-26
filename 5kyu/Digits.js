let startArr = [0, 0, 0, 0];
let digitsIn = [];
let result = [];
let digitsFind;
let index = 0;

function game(matches){    
  if (matches == -1){
    setGameStart();
  }
        
  if (digitsFind && (matches < result.length)){
    index++;
    result[result.length - 1] = digitsIn[index];
    if (index == digitsIn.length - 1){
      onDigitsFind();
    }
    
    return result;
  } else if (digitsFind) {
    onDigitsFind();
    return result;
  }  
   
  while (matches > 0 && digitsIn.length < 4){
    digitsIn.push(startArr[0]);
    matches--;
  }
  
  if (digitsIn.length >= 4){
    digitsFind = true;    
    result.push(digitsIn[0]);
    
    return result;
  }
  
  if (startArr[0] == 9){
    while (digitsIn.length < 4){
      digitsIn.push(0);
    }    
    
    digitsFind = true;    
    result.push(digitsIn[0]);
    
    return result;
  }
  
  startArr = startArr.map(x => x + 1);    
  return startArr;
}

  let setGameStart = () => {
    startArr = [0, 0, 0, 0];
    digitsIn = [];
    index = 0;
    calls = 0;
    result = [];
    digitsFind = false;
  }  

  let onDigitsFind = () => {
    digitsIn.splice(index, 1);
    index = 0;
    result.push(digitsIn[index]);    
  }