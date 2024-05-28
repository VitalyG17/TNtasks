// Реализуйте дженерик Pick<T, K>.
// Конструирует тип, выбирая набор свойств K из T.

type customPick<T extends object, K extends keyof T> = {
  [k in K]: T[k];
};

interface User {
  name: string;
  age: number;
  role: string;
}

interface Admin extends User {
  superRights: true
  adminLevel: number;
}

type UserFullInfo = customPick<User, 'name' | 'age' | 'role'>;
type AdminInfo = customPick<Admin, 'superRights' | 'adminLevel'>