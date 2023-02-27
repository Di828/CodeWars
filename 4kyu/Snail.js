let result = []
snail = function(array) {
  if (!array[0][0]){
    return [];
  }
  result = [];
  
  let end = array.length;
  let start = 0;
  while (end >= start){
    moveOneCircle(array, start, end);
    end--;
    start++;
  }
  
  return result;
}

function moveOneCircle(array, start, end){
  let j = start;
  let i = start;
  
  for (; i < end; i++){
    result.push(array[j][i]);
  }  
  
  i--;
  j++;
  for (; j < end; j++){    
    result.push(array[j][i]);
  }  
  
  j--;
  i--;
  for (; i > start - 1; i--){
    result.push(array[j][i])
  }
  
  j--;
  i++;
  for (; j > start; j--){
    result.push(array[j][i]);
  }
}