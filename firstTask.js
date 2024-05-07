/* 
Задание: необходимо создать класс (RandomService), который будет содержать метод -
generateRandomNumber (он принимает в себя два аргумента - границы генерируемого числа). 
Также создать отдельный класс - ApiRandomService, в нем реализовать метод,
который будет отправлять запрос на апи для генерации числа (https://api.random.org/dashboard),
этот метод необходимо вызвать непосредственно в generateRandomNumber
*/

const API_KEY = "d2fa2b7c-aad7-4609-9115-f3d0f0407a64";

class RandomService {
  async generateRandomNumber(minLimit, maxLimit) {
    try {
      const apiRandomService = new ApiRandomService();
      return apiRandomService.getRandomNumber(minLimit, maxLimit);
    } catch (error) {
      console.log(`Ошибка ${error}`);
    }
  }
}

class ApiRandomService {
  async getRandomNumber(minLimit, maxLimit) {
    try {
      const API_URL = `https://www.random.org/integers/?num=1&min=${minLimit}&max=${maxLimit}&col=1&base=10&format=plain&rnd=new&apiKey=${API_KEY}`;
      const response = await fetch(API_URL);
      const randomNumber = await response.text();
      return randomNumber;
    } catch (error) {
      console.log(`Ошибка ${error}`);
    }
  }
}

//Вызов
const randomService = new RandomService();
randomService
  .generateRandomNumber(1, 10) //ввод границ генерируемого числа
  .then((number) => console.log(number))
  .catch((error) => console.error(error));