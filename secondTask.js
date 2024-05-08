/* 
Задание: необходимо создать функцию - декоратор на ванильном js которая принимает любой тип переменных,
если это объект, то блокирует на изменение все поля этого объекта
*/

function freezeDecorator(someData) {
  if (typeof someData === "object" && someData != null) {
    Object.freeze(someData);
    Object.getOwnPropertyNames(someData).forEach((key) => {
      freezeDecorator(someData[key]);
    });
  }
  return someData;
}

const mockData = {
  city: "Белгород",
  postCode: 908321,
  street: {
    postCode: 908322,
    name: "Ленина",
    house: {
      entrance: 1,
      floor: 2,
      apartNumber: {
        numRooms: 3,
        totalArea: 90,
      },
    },
  },
};

const obj = freezeDecorator(mockData);
obj.city = "";
console.log(obj.city); // Белгород

obj.postCode = 123809;
console.log(obj.postCode); // 908321

obj.street.name = "Победы";
console.log(obj.street.name); // Ленина

obj.street.house.floor = 4;
console.log(obj.street.house.floor); // 2

obj.street.house.apartNumber.numRooms = 5;
console.log(obj.street.house.apartNumber.numRooms); // 3