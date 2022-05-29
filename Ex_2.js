// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
// переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const property = "name";
const man = {
  name: "Irina",
  surname: "Egorova"
}


function checkProp(prop, obj) {
  let flag = false;
  for (let key in obj) {
    if (key === prop) {
      flag = true;
      break
    }
  }
  return flag;
}

let check = checkProp(property, man);
console.log(check);