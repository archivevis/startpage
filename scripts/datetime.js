document.getElementById("date").innerHTML = updateClock();

// please don't let me work with vanilla javascript ever again

function updateClock() {
  const current = new Date();
  const days = ['日', '月', '火', '水', '木', '金', '土'];

  const date = current.getFullYear()+'年'+(current.getMonth()+1)+'月'+current.getDate()+'日 ('+days[current.getDay()]+')';
  
  let minutes;
  if (current.getMinutes() < 10) {
    minutes = '0' + current.getMinutes().toString();
  } else {
    minutes =  current.getMinutes().toString();
  }

  let seconds = current.getSeconds();
  if (current.getSeconds() < 10) {
    seconds = '0' + current.getSeconds().toString();
  }

  // why does this work
  const time = current.getHours()+':'+minutes+':'+seconds;
  const kyou = date + ' ' + time;

  document.getElementById("date").innerHTML = kyou;
  setTimeout(updateClock, 1000);
}

updateClock();