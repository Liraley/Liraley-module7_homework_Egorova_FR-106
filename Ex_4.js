// Задание 4
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Appliances(name, weight, power) {
  this.connectionType = 'sockets',
    this.name = name,
    this.weight = weight,
    this.power = power,
    this.isOn = false
}

Appliances.prototype.turnOn = function () {
  this.isOn = true;
  console.log(`${this.model} is switched on`);
}

Appliances.prototype.turnOff = function () {
  this.isOn = false;
  console.log(`${this.model} is switched off`);
}

const lamp = new Appliances('Lamp', 130, 20)
lamp.luminousIntensity = 10000

lamp.blueLight = function () {
  this.colorLight = "blue";
  console.log('Blue light on')
}

lamp.whiteLight = function () {
  this.colorLight = "white";
  console.log('White light on')
}

const tableLamp = Object.create(lamp)
tableLamp.model = "Table lamp"

const chandelierLamp = Object.create(lamp)
chandelierLamp.model = "Chandelier lamp"

chandelierLamp.turnOff()
tableLamp.turnOn()
tableLamp.whiteLight()
console.log(chandelierLamp, tableLamp)

const washingMachine = new Appliances('Washing machine', 23000, 100)
washingMachine.speed = 1000

washingMachine.checkChildProtection = function () {
  if (this.childProtection === true) {
    console.log(`${this.model}: Child protection is`)
  } else {
    console.log(`${this.model}: No child protection`)
  }
}

const boschWashingMachine = Object.create(washingMachine)
boschWashingMachine.maxLoad = 7000
boschWashingMachine.model = "Bosch-7451"

const samsungWashingMachine = Object.create(washingMachine)
samsungWashingMachine.maxLoad = 6100
samsungWashingMachine.model = "Samsung GT-100"
samsungWashingMachine.childProtection = true

samsungWashingMachine.checkChildProtection()
boschWashingMachine.checkChildProtection()
samsungWashingMachine.turnOn()
console.log(samsungWashingMachine, boschWashingMachine)