let roadMines1 = [true, true, true, true, true, true, true, true, true, true];
let damage1 = 0;

for (let i = 0; i < roadMines1.length; i++) {
  console.log(`танк №1 переместился на ${i + 1}`);

  if (roadMines1[i]) {
  damage1++;
  console.log(damage1 === 1 ? 'танк повреждён' : 'танк уничтожен');
  if (damage1 === 2) break;
  }
}



let roadMines2 = [true, false, false, false, false, false, false, false, false, true];
let damage2 = 0;

for (let i = 0; i < roadMines2.length; i++) {
  console.log(`танк №2 переместился на ${i + 1}`);

  if (roadMines2[i]) {
  damage2++;
  console.log(damage2 === 1 ? 'танк повреждён' : 'танк уничтожен');
  if (damage2 === 2) break;
  }
}



let roadMines3 = [false, false, false, true, false, false, false, false, false, false];
let damage3 = 0;

for (let i = 0; i < roadMines3.length; i++) {
  console.log(`танк №3 переместился на ${i + 1}`);

  if (roadMines3[i]) {
  damage3++;
  console.log(damage3 === 1 ? 'танк повреждён' : 'танк уничтожен');
  if (damage3 === 2) break;
  }
}



let roadMines4 = [false, false, false, false, false, false, false, false, false, false];
let damage4 = 0;

for (let i = 0; i < roadMines4.length; i++) {
  console.log(`танк №4 переместился на ${i + 1}`);

  if (roadMines4[i]) {
  damage4++;
  console.log(damage4 === 1 ? 'танк повреждён' : 'танк уничтожен');
  if (damage4 === 2) break;
  }
}