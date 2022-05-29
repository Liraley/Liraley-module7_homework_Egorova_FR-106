// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать значение.

const woman = {
  gender: "female",
}

const Ivanova = Object.create(woman);

Ivanova.name = "Anna";
Ivanova.age = 24;

function ownProp(man) {
  for (let key in man) {
    if (man.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, значение: ${man[key]}`)
    }
  }
}

ownProp(Ivanova);