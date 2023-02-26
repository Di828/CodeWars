function topThreeWords(text) {
    let wordsArr = text.toLowerCase()             
                   .replace(/\s+/g, ' ')
                   .replace(/[^a-z' ]/g, '')
                   .replace(/\s+$/g, '')
                   .replace(/^\s+/g, '')                 
                   .split(' ');    
    
    let map = {};
    wordsArr.forEach(word => {
      if (!(word.length == 0 || !word.match(/\w+/)))          
      {
        if (map[word]){
          map[word]++;
        } else {
          map[word] = 1;
        }
      }
    });
    
    let sortedArr = Object.entries(map).sort(([,a], [,b]) => b - a);
    let result = [];
    
    for (let i = 0; i < Math.min(3, sortedArr.length); i++){
      result.push(sortedArr[i][0]);
    }
    
    return result;
  }