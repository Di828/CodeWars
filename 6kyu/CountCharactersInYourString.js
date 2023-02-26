function count (string) {  
    let result = {};
    
    for (let i = 0; i < string.length; i++){
      if (result[string[i]] > 0){
        result[string[i]] ++;
      } else {
        result[string[i]] = 1;
      }
    }
    
     return result;
  }