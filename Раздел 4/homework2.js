let hello = 'Привет, мир!';
let one = '1';
let bebra = [];
let debra = [];

for (let i = hello.length - 1; i >= 0; --i) {
  bebra.push(hello[i]);
}

console.log(bebra.join(''));

// ------------------------------------------------

for (let i = one.length - 1; i >= 0; --i) {
  debra.push(one[i]);
}

console.log(debra.join(''));