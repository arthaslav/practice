let fibo = [];

fibo.push(1);
fibo.push(1);
fibo.push(2); // 1 + 1
fibo.push(3); // 1 + 2
fibo.push(5); // 2 + 3
fibo.push(8); // 3 + 5
fibo.push(13); // 5 + 8

// И т.д.


let fibo1 = [1, 1];

for (let i = 1; i < 49; ++i) {
  fibo1.push(fibo1[i] + fibo1[i - 1]);
}

// 1) let i = 1;
// 2) i < 49 - 1 < 49
// 3) [1, 1, 2]
// 4) ++i; i = 2
// 5) i < 49 - 2 < 49
// 6) [1, 1, 2, 3
// ...
// i < 49 - 49 < 49

console.log(fibo1);