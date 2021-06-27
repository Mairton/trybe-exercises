// let number = 5;

// for (let index = 1; index <= number; index++) {
//   let line = '';
//   let asterisco = number - index;

//   for (let otherIndex = 0; otherIndex < number; otherIndex++) {
//     if (line.length < asterisco) {
//       line += ' '
//     } else {
//       line += '*'
//     }
//   }
  
//   console.log(line);
// }


// let n;

// n = 5;



// for (let index = (n-1); index >= 0; index -= 1) {
//     linha = '';
//     for(let i = 1; i <= index; i +=1){
//         linha += ' ';
        
//     }
//     for (let i = index; i < n; i += 1 ) {
    
//         linha += '*';
        
//     } 
//     console.log(linha);
// }

let n = 5;
let variavel = "*";
let inputLine = "";
let inputColumn = n;

for(let lineIndex = 0; lineIndex <= n; lineIndex+=1){ 
  for(let columnIndex = 0; columnIndex <=n; columnIndex+=1){
    if(columnIndex < inputColumn){
      inputLine = inputLine + " ";
    }
    else{
      inputLine = inputLine + variavel;
    }
}
console.log(inputLine);
inputLine = "";
inputColumn -=1;
} 
