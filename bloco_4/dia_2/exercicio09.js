let numbers = [];
let divisaoNumbers = [];
for(let index=0; index < 26; index+=1){
    numbers.push(index);
}
console.log(numbers);
for(let indexDivisao=0; indexDivisao<=numbers.length; indexDivisao+=1){
  divisaoNumbers = divisaoNumbers.push(numbers[indexDivisao-1]/2);
  
}
console.log(divisaoNumbers);