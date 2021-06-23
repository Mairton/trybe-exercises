// let nome = "Mairton";
// let bithCity = "Teresina";
// let birthYear = "10/04/1987";

// console.log(bithCity);
// console.log(birthYear);
// console.log(nome);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);

// let base = 5;
// let altura = 8;
// let area = base * altura;
// console.log( area );

// let perimetro = (2*base)+(2*altura);
// console.log( perimetro );

// let nota = 50;

// if(nota >= 80){
//   console.log("Parabens, voce foi aprovado.");
// }
// else if(nota < 80 && nota >= 60){
//   console.log("Você está na nossa lista de espera.");
// }
// else if(nota < 60){
//   console.log("Voce foi reprovado(a).");
// }

let resultado = "lista";

switch(resultado){
  case "aprovada":
    console.log("Candidata aprovada");
    break;

  case "lista":
    console.log("Candidata na lista");
    break;
  
  case "reprovada":
    console.log("Candidata reprovada");
    break;
  default:
    console.log("condicao nao identificada");
}