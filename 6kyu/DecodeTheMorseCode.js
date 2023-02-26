decodeMorse = function(morseCode){
    let symbols = morseCode.split(' ');  
    let result = '';
    
    symbols.forEach(symbol => result += symbol.length == 0 ? ' ' : MORSE_CODE[symbol]);
    
    return result.replace(/^\s+/g, '')
                 .replace(/\s+$/g, '')
                 .replace(/\s+/g, ' ');
  }