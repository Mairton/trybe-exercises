let a = -3; 
let b = 0;
let c = 0;
let soma = a+b+c;

if (a && b && c > 0){
  if(soma == 180){
    console.log("Triangulo");
  }
  else if(soma > 180  || soma < 180){
    console.log("Nao é triangulo");
  }
  else{
    console.log("Nao é triangulo");
  }
}
else{
  console.log("Valor invalido");
}
