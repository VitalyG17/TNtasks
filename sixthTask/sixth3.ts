// Реализуйте функцию JavaScript Array.push.
// Никакого js, только через типы

function customPush<T, U>(arr: T[], itemAdd: U) {
  return [...arr, itemAdd];
}

console.log(customPush([1, '2', true], {}));
