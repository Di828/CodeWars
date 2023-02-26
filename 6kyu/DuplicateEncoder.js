function duplicateEncode(word){
    let result = '';
    word = word.toLowerCase();
    
    for (let i = 0; i < word.length; i++){
      result += word.indexOf(word[i]) == word.lastIndexOf(word[i]) ? '(' : ')';
    }
    
    return result;
  }