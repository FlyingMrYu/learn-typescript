enum Color {
  Red,
  Green,
  Blue,
}
// let c: Color = Color.Green;
// console.log(c, 23221);
// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100 * i);
//   })(i);
// }
// console.log(i, 15);

// function f(input: boolean) {
//   let a = 100;

//   if (input) {
//     // Still okay to reference 'a'
//     let b = a + 1;
//     return b;
//   }

//   // Error: 'b' doesn't exist here
//   return a;
// }

// 解构数组
// let [a, b] = [1, 2];
// [a, b] = [b, a];
// console.log(a, b);

// 对象解构
// const o = {
//   a: "foo",
//   b: 1,
//   c: 2,
// };
// let { a, b } = o;
// console.log(a, b);
// typescript
// class Animal {
//   current: number;
//   move(distanceInmeters: number = 0) {
//     console.log(`Animation move ${distanceInmeters}`);
//   }
//   changeCurrent(num: number) {
//     this.current = num;
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof Woof");
//   }
// }

// const animation = new Animal();
// const dog = new Dog();
// console.log(animation, dog);

// dog.bark();
// animation.changeCurrent(232);
// animation.move(1200);
// dog.changeCurrent(12);
// console.log(dog.current, 321);
// dog.move(1100);
// dog.bark();
// 函数  剩余参数

// function buildNmae(firstName: string, ...restOfName: string[]) {
//   console.log(restOfName, `23`);

//   return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildNmae("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(123);
// console.log(employeeName, 456);

// 闭包 垃圾回收机制
// function fn() {
//   var num = 0;
//   return function () {
//     num++;
//     console.log(num);
//   };
// }

// var fn1 = fn();
// fn1();
// fn1();
// fn1();

// 泛型
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };

// 枚举
// enum Direction {
//   No = 0,
//   Yes = 1,
// }

// function respond(recipient: string, message: Direction): void {
//   // ...
// }

// respond("Princess Caroline", Direction.Yes);

// symbols

// const sym1 = Symbol();

// const sym2 = Symbol("key");
// console.log(sym1, sym2);

// let sym = Symbol();

// let obj = {
//   [sym]: "value",
// };

// console.log(obj[sym]); // "value"

// class Animal {
//   public name;
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `My name is ${this.name}`;
//   }
// }

// class Cat extends Animal {
//   public age;
//   constructor(name) {
//     super(name);
//     console.log(this.age);
//   }
//   sayHi() {
//     return `Meow,` + super.sayHi();
//   }
// }

// let c = new Cat("yfx");
// console.log(c.sayHi());
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return "Jack";
//   }
//   set name(value) {
//     console.log(`setter: ` + value);
//   }
// }

// let a = new Animal("Kitty"); // setter: Kittya
// a.name = "TOM";
// console.log(a.name);

// class Animal {
//   static isAnimal(a) {
//     console.log(a, 123);

//     return a instanceof Animal;
//   }
// }

// let a = new Animal();
// Animal.isAnimal(a); // true

let a: any;
console.log(a);
