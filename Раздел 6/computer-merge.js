let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'Nvidia GeForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

let computer = {
  price: 100000,
  ...motherBoard,
  // Св-во socket из объекта motherBoard будет заменено на такое же св-во из CPU
  ...cpu,
  ...videoCard,
  ...ram,
};

let computerWithAssign = Object.assign(
  // Целевой объект, в который будут "замешаны" следующие
  {
    price: 100000
  },
  // Объекты, "подмешиваемые" в первый
  motherBoard, cpu, videoCard, ram
);

console.log(computer);
console.log(computerWithAssign);