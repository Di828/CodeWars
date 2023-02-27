function balancedParens(n) {
    let leftParens = 0;
    let rightParens = 0;
    let result = [];
  
    function addParens(str, open, close){
      if (open > n || close > n || close > open){
        return;
      }
      
      if (str.length == n * 2 && open == close){
        result.push(str);
      }
      
      addParens(str + '(', open + 1, close);
      addParens(str + ')', open, close + 1);
    }
    
    addParens('', 0, 0);
    
    return result;
  }
  