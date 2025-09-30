function totalSum(cartSum, itemQuantity, promo = null) {
  if (promo === 'ДАРИМ300') {
    cartSum = cartSum >= 300 ? cartSum - 300 : 0;
  }
  if (itemQuantity >= 10) {
    cartSum *= 0.95;
  }
  if (cartSum > 50000) {
    cartSum = (cartSum - 50000) * 0.80 + 50000
  }
  if (promo === 'СКИДКА15') {
    if (cartSum >= 20000) {
      cartSum *= 0.85;
    }
  }


  return cartSum;
}

console.log(totalSum(100000, 10, 'ДАРИМ300'));
console.log(totalSum(100000, 3, 'СКИДКА15'));
console.log(totalSum(170000, 5, 'СКИДКА15'));
console.log(totalSum(300000, 10, 'СКИДКА15'));