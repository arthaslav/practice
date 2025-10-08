let input = document.querySelector('input');
let h2 = document.querySelector('h2');
let timeoutId;

input.addEventListener('input', () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    h2.textContent = input.value;
  }, 300);
});