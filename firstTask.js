/* 
Задание: необходимо создать класс (RandomService), который будет содержать метод -
generateRandomNumber (он принимает в себя два аргумента - границы генерируемого числа). 
Также создать отдельный класс - ApiRandomService, в нем реализовать метод,
который будет отправлять запрос на апи для генерации числа (https://api.random.org/dashboard),
этот метод необходимо вызвать непосредственно в generateRandomNumber
*/

const API_KEY = "d2fa2b7c-aad7-4609-9115-f3d0f0407a64";
const API_URL = "https://www.random.org";

class RandomService {
  constructor() {
    this.apiRandomService = new ApiRandomService();
  }
  generateRandomNumber(minLimit, maxLimit) {
    return this.apiRandomService.getRandomNumber(minLimit, maxLimit);
  }
}
class ApiRandomService {
  constructor() {
    this.apiKey = API_KEY;
    this.apiUrl = API_URL;
  }
  async getRandomNumber(minLimit, maxLimit) {
    try {
      const url = `${this.apiUrl}/integers/?num=1&min=${minLimit}&max=${maxLimit}&col=1&base=10&format=plain&rnd=new&apiKey=${this.apiKey}`;
      const response = await fetch(url);
      const randomNumber = await response.text();
      return randomNumber;
    } catch (error) {
      return error;
    }
  }
}

//Вызов
const randomService = new RandomService();
randomService
  .generateRandomNumber(1, 10) //ввод границ генерируемого числа
  .then((number) => {
    if (number !== undefined) {
      console.log(number);
    } else {
      throw new Error("При генерации вернулось undefined");
    }
  })
  .catch((error) => console.error(error));