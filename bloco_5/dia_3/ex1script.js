function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
  //Para criar o elemento eu preciso: 
  // 1 - Saber onde ele vai estar(.querySelector(#id ou .classe)), 
  // 2 - o conteudo dele(texto, numero), 
  // 3 - o html dele(<p>, <doby>, <ul>), 
  // 4 - Setar a classe(.className('nome')) ou id
  let getDaysList = document.querySelector('#days'); //seleciona o elemento que possui o id day e abre/cria a lista
  for( let index = 0; index < dezDaysList.length; index +=1){ //percorrer a lista de dezDaysList;
    let day = dezDaysList[index]; //variavel que vai armazenar o dia;
    let dayItem = document.createElement('li'); //cria o list item em html que presenta o dia na lista;
    if (day ===24 || day === 31){ //verificacao do exercicio
      dayItem.className = 'days holiday'; //atribui classe dey e holiday ao elemente li criado anteriormente;
      dayItem.innerHTML = day; //atribui o dia da lista ao dayItem. Que agora tem a classe o o elemento nele;
      getDaysList.appendChild(dayItem); //atribui o filho criado com classes e elementos a lista #day
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'days fryday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem)
    } else if ( day === 25 ){
      dayItem.className = 'days holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else{
      dayItem.className = 'days';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();


