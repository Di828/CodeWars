function findOutlier(integers){
    let x = integers.map(i => Math.abs(i % 2));
    return x.indexOf(0) == x.lastIndexOf(0) ? integers[x.indexOf(0)] : integers[x.indexOf(1)];
  }