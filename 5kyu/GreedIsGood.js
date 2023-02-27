function score( dice ) {
    let diceNumbers = [];
    let result = 0;
    dice.forEach(x => {diceNumbers[x] = (diceNumbers[x] || 0) + 1;
                      if (diceNumbers[x] == 3){
                        result += x == 1 ? 1000 : x * 100;
                        diceNumbers[x] -= 3;
                      }
                });
    
    return result + (diceNumbers[1] || 0) * 100 + (diceNumbers[5] || 0) * 50;
  }