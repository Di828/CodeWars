function pathFinder(maze){
    let n = Math.floor(Math.sqrt(maze.length));
    let normalMaze = maze.split('\n');
    normalMaze.forEach((e, i) => normalMaze[i] = e.split(''));
    
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let reachedPositions = [[0, 0]];
    normalMaze[0][0] = '0';  
    
    while (reachedPositions.length > 0){
      let currentPosition = reachedPositions.shift();    
      let steps = +normalMaze[currentPosition[0]][currentPosition[1]] || 0;
      for (let direction of directions){        
        if (emptyCell(currentPosition[0] + direction[0], currentPosition[1] + direction[1])){
          reachedPositions.push([currentPosition[0] + direction[0], currentPosition[1] + direction[1]]);        
          normalMaze[currentPosition[0] + direction[0]][currentPosition[1] + direction[1]] = steps + 1;        
        }            
      }        
    }
    
    return normalMaze[n - 1][n - 1] != '.' ? +normalMaze[n - 1][n - 1] : false;
    
    function emptyCell(x, y){
      if (x < 0 || x > n - 1 || y < 0 || y > n - 1){
        return false;
      }
          
      return normalMaze[x][y] == '.';
    }
  }