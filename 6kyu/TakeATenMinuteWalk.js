function isValidWalk(walk) {
    let [xPos, yPos] = [0, 0];
    walk.forEach(x => {
      xPos += x == 'w' ? -1 : x == 'e' ? 1 : 0;
      yPos += x == 's' ? -1 : x == 'n' ? 1 : 0;
    })
    
    return xPos == 0 && yPos == 0 && walk.length == 10;
  }