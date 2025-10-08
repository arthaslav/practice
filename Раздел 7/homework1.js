let input = document.querySelector('input');
let button = document.querySelector('button');
let count = document.querySelector('.count');
let timerId;

button.addEventListener('click', function () {
  let seconds = parseInt(input.value);
  count.textContent = seconds;
  input.value = '';
  startTimer(1000, seconds);
});

function startTimer(delay, seconds) {
  clearInterval(timerId);
  timerId = setInterval(() => {
    let current = parseInt(count.textContent);
    if (current <= 0) {
      clearInterval(timerId);
    } else {
      count.textContent = current - 1;
    }
  }, delay);
}