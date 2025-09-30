let computer = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM4',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  videoCardModel: 'Nvidia GeForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
  price: 100000,
}

let keys = Object.keys(computer);
let values = Object.values(computer);
let entries = Object.entries(computer);

  console.log('VALUES\n');

for (let value of values) {
  console.log(value);
}

console.log('\n\nKEYS\n');

for (let key of keys) {
  console.log(`${key}: ${computer[key]}`);
}

console.log('\n\nENTRIES\n');

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log('\n\nENTRIES WITH DESTRUCTURING\n');

// Так же, но более читаемо
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}