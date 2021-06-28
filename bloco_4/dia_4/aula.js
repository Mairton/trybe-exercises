let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3, 
  }
};

console.log('A jogadora' + player.nome + ' ' + player.lastName + ' tem ' + player.age +' anos de idade.')
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log( player.medals.golden)
console.log( player.medals.silver)
//---------------------------------------------------------------------------


// -----------------------------------------------------------------------------
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let key in names){
  console.log(names[key])
}
// -----------------------------------------------------------------------------
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car){
  console.log(key, car[key])
}
// -----------------------------------------------------------------------------
//Refatorado o codigo

function player(name,lastName,age){
  return 'A jogadora ' + name + ' ' + lastName + ' tem ' + age +' anos de idade.';

}

let print = player('Maria', 'Silva', 33);
console.log(print)
