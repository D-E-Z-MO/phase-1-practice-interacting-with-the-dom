//DOM Selectors
const counter = document.getElementById("counter");
// console.log(
//   plus.innerText + minus.innerText + heart.innerText + pause.innerText
// );

//Render Functions and buttons
let interval;
let timeSpent = 0;
let isPlaying = true;
function startTimer() {
  interval = setInterval(() => {
    timeSpent++;
    counter.innerText = timeSpent;
  }, 1000);
}

const form = document.querySelector("#comment-form");
form.onsubmit = (e) => {
  e.preventDefault();
  const commentList = document.querySelector("#list");
  const comment = document.getElementById("comment-input");
  const li = document.createElement("li");
  li.innerHTML = comment.value;
  commentList.parentNode.prepend(li);
  comment.value = "";
};

//Event handlers
const plus = document.getElementById("plus").addEventListener("click", () => {
  counter.innerText++;
});
const minus = document.getElementById("minus").addEventListener("click", () => {
  counter.innerText--;
});
const heart = document.getElementById("heart").addEventListener("click", () => {
  const li = document.createElement("li");
  const ul = document.querySelector(".likes");
  li.innerHTML = `${counter.innerText} was liked`;
  ul.prepend(li);
});
const pause = document.getElementById("pause");
pause.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    pause.innerText = "pause";
    startTimer();
    let button = document.getElementById("minus");
    button.disabled = false;
    let button1 = document.getElementById("plus");
    button1.disabled = false;
    let button2 = document.getElementById("heart");
    button2.disabled = false;
    let sumbit = document.getElementById("submit");
    sumbit.disabled = false;
  } else {
    pause.innerText = "resume";
    let button = document.getElementById("minus");
    button.disabled = true;
    let button1 = document.getElementById("plus");
    button1.disabled = true;
    let button2 = document.getElementById("heart");
    button2.disabled = true;
    let sumbit = document.getElementById("submit");
    sumbit.disabled = true;
    clearInterval(interval);
  }
});

const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  isPlaying = true;

  pause.innerText = "pause";
  timeSpent = 0;
  startTimer();

  let button = document.getElementById("minus");
  button.disabled = false;
  let button1 = document.getElementById("plus");
  button1.disabled = false;
  let button2 = document.getElementById("heart");
  button2.disabled = false;
  let sumbit = document.getElementById("submit");
  sumbit.disabled = false;
});
//Initialize
startTimer();
