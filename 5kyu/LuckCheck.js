function luckCheck(ticket){
    let result = 0;
    
    for (let i = 0; i < ticket.length / 2; i++){
      if (!ticket[i].match(/\d/) || !(ticket[ticket.length - 1 - i]).match(/\d/)){
        throw new Error("It should throw an error for invalid input");
      }
      
      result += +ticket[i] - ticket[ticket.length - 1 - i];
    }
    
    return result == 0;
  }