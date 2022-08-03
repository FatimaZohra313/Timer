var hrs = document.getElementById("hrs");
var mins = document.getElementById("mins");
var interval;
var sec_count = 60;
var min_count = 60;
var hour_count = 24;

function submit() {
  var hour = document.getElementById("hour").value;
  var min = document.getElementById("min").value;
  hrs.innerHTML = hour;
  mins.innerHTML = min;
  hour_count = hour;
  min_count = min;
}

function timer() {
//   submit();

  sec_count--;
  console.log(sec_count);

  if (sec_count <= 1) {
    sec_count = 60;
    min_count--;
    mins.innerHTML = min_count;
    // console.log(m);

    if (min_count <= 1) {
      min_count = 59;
      hour_count--;
      hrs.innerHTML = hour_count;
    }
  }

  if (sec_count <= 0 && min_count <= 0 && hour_count <= 0) {
    stop();
    alert('Times up!');
  }
}

function reset() {
  document.getElementById("hrs").innerHTML = 0;
  document.getElementById("mins").innerHTML = 0;
//   hour.innerHTML = 0;
//   min.innerHTML = 0;
sec_count = 60;
min_count = 60;
hour_count = 24;
}

function startTimer() {
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
}
