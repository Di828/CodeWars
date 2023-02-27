function getMinBase (number) {
    let base = 2;
    while (base < number - 1){
      if (onlyOnesPresentation(number, base)){
        break;
      }
      
      base++;
    }
    
    return base;
}
  
function onlyOnesPresentation(number, base){
    while (number > 0){
      if (number % base != 1){
        return false;
      }
      
      number = (number - 1) / base;    
    }
    
    return true;
}  