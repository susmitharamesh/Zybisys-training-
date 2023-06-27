let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
document.getElementById("Lap");
let timer = null;
this.laps = [];
var Lap = document.getElementById("Lap");
// var Laps = document.getElementById("clear");
Lap.classList.remove("");
let setCounter = 0;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  console.log(h, m, s);
  displayTime.innerHTML = h + ":" + m + ":" + s;
}
function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 500);
}
function watchStop() {
  clearInterval(timer);
}
function watchRestart() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
function watchLap() {
  let times = this.times;
  let li = document.createElement("li");
  li.innerText = this.format(times);
  this.results.appendChild(li);
}
