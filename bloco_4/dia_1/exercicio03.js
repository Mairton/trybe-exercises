let a = 10; 
let b = 5;
let c = 20;

if(a>b && a>c){
  console.log("Variavel A maior que  variavel B e C.");
}
else if(b>a && b>c){
  console.log("Variavel B maior que variavel A e C.");
}
else if(c>a && c>b){
  console.log("Variavel C maior que variavel A e B.");
}

else{
  console.log("Valores iguais");
}