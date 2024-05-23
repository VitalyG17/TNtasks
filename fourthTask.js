console.log('*Задание 1*');
// Задание 1: Сделайте так, чтобы вывелось число 5
const func = function() {
  console.log(this)
};

func.call(5)
func.apply(5)

const forBind = func.bind(5)
forBind()

console.log('*Задание 2*');
// Задание 2: Сделайте так, что последовательно вывелось 1,2,3 
function checkFun(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

checkFun.call(null,1,2,3)
checkFun.apply(null,[1,2,3])
const forBindTask2 = checkFun.bind(null,1,2,3)
forBindTask2()

console.log('*Задание 3*');
// Задание 3: Сделайте так, чтобы вывелись Jack Daniel
const person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

const name1 = person.prop.getName.bind(person)
console.log(name1());

const  name2 = person.prop.getName.call(person.prop)
console.log(name2);