function squareX(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    return ['Корней нет.'];
  } else {
    if (d === 0) {
      return [-b / (2 * a)];
    }
    let dRoot = Math.sqrt(d);
    return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
  }
}

console.log(squareX(1, 2, 3));
console.log(squareX(3, 2, 1));
console.log(squareX(2, 3, 1));
console.log(squareX(1, 3, 2));