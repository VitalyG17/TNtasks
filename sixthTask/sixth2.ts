// Реализуйте дженерик Readonly<T>.
// Создает тип, в котором все свойства T установлены только для чтения,
// что означает, что свойства созданного типа не могут быть переназначены.

type customReadonly<T extends object> = { readonly [k in keyof T]: T[k] };

interface User {
  name: string;
  age: number;
  role: string;
}

type ReadonlyInfoUser = customReadonly<User>

const user: ReadonlyInfoUser = {
  name: 'Vitaly',
  age: 20,
  role: 'Student'
}

// user.name = 'Igor'
// user.age = 222
// user.role = 'Teacher'

// Cannot assign to 'name' because it is a read-only property.
// Cannot assign to 'age' because it is a read-only property.
// Cannot assign to 'role' because it is a read-only property.