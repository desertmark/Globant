var minimum = function(values){
  let min = Infinity;
  for(let i = 0; i<values.length; i++){
    min = values[i] < min ? values[i] : min;
  }
  return min;
}

var maximum = function(values){
  let max = -Infinity;
  for(let i = 0; i<values.length; i++){
    max = values[i] > max ? values[i] : max;
  }
  return max;
}

var fibonacci = function(n){
  if(n===0){
    return 0;
  }else if(n===1){
    return 1;
  }else{
    return fibonacci(n-1) + fibonacci(n-2);
  }  
}