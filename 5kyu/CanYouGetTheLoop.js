function loop_size(node){
    let slowHead = node.next;
    let fastHead = node.next.next;  
    
    while (slowHead != fastHead){
      slowHead = slowHead.next;
      fastHead = fastHead.next.next;    
    }  
    
    slowHead = slowHead.next;
    let turns = 1;
    
    while (slowHead != fastHead){
      slowHead = slowHead.next;
      turns++;
    }
    
    return turns;
  }