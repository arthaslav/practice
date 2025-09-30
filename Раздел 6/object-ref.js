let digit = 20;
let otherDigit = digit;

// Исходное значение не меняется, так как otherDigit копирует значение из digit
otherDigit += 5;

// digit 20, otherDigit 25

let obj = { model: 'VW Polo' };
let otherObj = obj;

// obj и otherObj ссылаются на один и тот же объект, поэтому свойство поменяется и там, и там
otherObj.model = 'Volkswagen Polo';

console.log(digit);
console.log(otherDigit);
console.log(obj);
console.log(otherObj);