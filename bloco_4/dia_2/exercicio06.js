let valorImpar = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index=0; index < numbers.length; index+=1){
  if(numbers[index] % 2 != 0){
    valorImpar+=1;
  }
}
if(valorImpar>0){
  console.log(valorImpar)
}
else{
  console.log("Nenhum valor impar.")
}