// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

class Appliances {
  constructor(weight, power) {
    this.connectionType = 'sockets',
      this.name = 'Appliances',
      this.weight = weight,
      this.power = power,
      this.isOn = false
  }

  turnOn() {
    this.isOn = true;
    console.log(`${this.model} is switched on`);
  }

  turnOff() {
    this.isOn = false;
    console.log(`${this.model} is switched off`);
  }
}

class Lamp extends Appliances {
  constructor(weight, power, model) {
    super(weight, power);
    this.model = model;
    this.luminousIntensity = 10000;
    this.name = 'Lamp'
  }

  blueLight() {
    this.colorLight = "blue";
    console.log('Blue light on')
  }

  whiteLight() {
    this.colorLight = "white";
    console.log('White light on')
  }
}

const tableLamp = new Lamp(130, 20, "Table lamp");
tableLamp.turnOn();
tableLamp.turnOff();
tableLamp.blueLight();
tableLamp.whiteLight();
console.log(tableLamp)

const chandelierLamp = new Lamp(1240, 100, "Chandelier lamp");
chandelierLamp.turnOn();
chandelierLamp.turnOff();
chandelierLamp.blueLight();
chandelierLamp.whiteLight();
console.log(chandelierLamp)

class WashingMachine extends Appliances {
  constructor(weight, power, model) {
    super(weight, power);
    this.model = model;
    this.speed = 1000;
    this.name = 'Washing machine'
  }

  checkChildProtection() {
    if (this.childProtection === true) {
      console.log(`${this.model}: Child protection is`)
    } else {
      console.log(`${this.model}: No child protection`)
    }
  }
}

const boschWashingMachine = new WashingMachine(23100, 220, "Bosch-7451")
boschWashingMachine.maxLoad = 7000

boschWashingMachine.turnOn();
boschWashingMachine.turnOff();
boschWashingMachine.checkChildProtection();
console.log(boschWashingMachine);

const samsungWashingMachine = new WashingMachine(20200, 180, "Samsung GT-100")
samsungWashingMachine.maxLoad = 6100
samsungWashingMachine.childProtection = true

samsungWashingMachine.turnOn();
samsungWashingMachine.turnOff();
samsungWashingMachine.checkChildProtection();
console.log(samsungWashingMachine);

