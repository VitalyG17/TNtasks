/* 
Задание: необходимо написать рекурсивную функцию для глубокого сравнения двух объектов
*/

function isEqual(obj1, obj2) {
  const isObjects = typeof obj1 === "object" && typeof obj2 === "object";
  if (!isObjects) return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

 return Object.keys(obj1).every(key => isEqual(obj1[key], obj2[key]));
}

const firstObj = {
  name: "Игорь",
  age: 21,
  city: {
    name: "Белгород",
    id: 2,
    postCode: {
      id: 1,
      num: 903014,
    },
  },
};

const secondObj = {
  name: "Игорь",
  age: 21,
  city: {
    name: "Белгород",
    id: 2,
    postCode: {
      id: 1,
      num: 903014,
    }
  },
};

console.log(isEqual(firstObj, secondObj)); // true