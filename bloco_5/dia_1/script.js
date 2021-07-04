document.querySelector('#header-container').style.backgroundColor = "green";
document.querySelector('body').style.backgroundColor = 'gray';
document.getElementsByTagName('h3')[0].style.backgroundColor = 'purple';
document.getElementsByTagName('h3')[1].style.backgroundColor = 'purple';
document.querySelector('section').style.backgroundColor = 'orange';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for(let index=0; index <noEmergencyTasksHeaders.length; index+=1){
  noEmergencyTasksHeaders[index].style.backgroundColor = "black";
}

document.querySelector('#footer-container').style.backgroundColor = 'black';
// const footer = document.getElementById('footer-container');
// footer.style.backgroundColor = 'rgb(0, 53, 51)';