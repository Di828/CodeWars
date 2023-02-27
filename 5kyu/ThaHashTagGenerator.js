function generateHashtag (str) {
    let words = str.replace(/\s+/g, ' ').split(' ');
    
    words.forEach((word, i) => words[i] = (word[0] || '').toUpperCase() + word.slice(1));
    let result = '#' + words.join('');  
    
    return ((result.length > 1) && (result.length <= 140)) ? result : false;
  }