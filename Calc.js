export function Calc(a) {
  
  let length = Number(a);
  
  let sum = 1;

  for(let i = 1; i <= length; i++){
      sum *= i;
  }

  return sum;
}

