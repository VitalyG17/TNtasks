/* 
Задание: необходимо создать класс (RandomService), который будет содержать метод -
generateRandomNumber (он принимает в себя два аргумента - границы генерируемого числа). 
Также создать отдельный класс - ApiRandomService, в нем реализовать метод,
который будет отправлять запрос на апи для генерации числа (https://api.random.org/dashboard),
этот метод необходимо вызвать непосредственно в generateRandomNumber
*/

class ApiRandomService {
  #API_KEY = "d2fa2b7c-aad7-4609-9115-f3d0f0407a64";
  #API_URL = "https://www.random.org";

  async getRandomNumber(minLimit, maxLimit) {
    const url = `${this.#API_URL}/integers/?num=1&min=${minLimit}&max=${maxLimit}&col=1&base=10&format=plain&rnd=new&apiKey=${this.#API_KEY}`;
    const response = await fetch(url);
    return response.text();
  }
}

class RandomService {
  apiRandomService = new ApiRandomService();

  async generateRandomNumber(minLimit, maxLimit) {
    try {
      return await this.apiRandomService.getRandomNumber(minLimit, maxLimit);
    } catch (error) {
      console.error(error);
      return minLimit;
    }
  }
}

// Вызов
const randomService = new RandomService();
randomService
  .generateRandomNumber(1, 10)
  .then((number) => console.log(number))
  .catch((error) => console.error(error));
