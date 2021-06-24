let soma = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index=0; index < numbers.length; index+=1){
  soma = numbers[index]+soma;
}
if(soma/numbers.length >20 ){
  console.log("Valor maior que 20.")
}
else{
  console.log("Valor menor que 20.")
};