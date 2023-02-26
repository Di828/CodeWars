function duplicateCount(text){
    let map = [];
    text = text.toLowerCase();
    
    for (let i = 0; i < text.length ; i++){
      if (map[text.charCodeAt(i)] > 0){
        map[text.charCodeAt(i)]++;
      } else {
        map[text.charCodeAt(i)] = 1;
      }
    }
    
    return map.filter(x => x > 1).length;
  }