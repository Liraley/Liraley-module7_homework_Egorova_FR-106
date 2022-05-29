// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function getObject() {
  const obj = Object.create(null);
  return obj;
}

let a = getObject();
console.log(a);
