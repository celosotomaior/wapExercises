function findMax(a,b,c) {
 
    if (a > b && a > c) {
      return a;
    } else if (b>a && b > c) {
      return b;
    } else {
        return c;
    }
  
  }
  
  console.log("max: " + findMax(100,2000,250));