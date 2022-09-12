// 예제 1. 식별 가능한 유니온타입(union type)

// interface Beverage {
//   name: "tea";
//   ingredients: ["mint", "water", "green"];
//   drink(): void;
// }

// interface Dessert {
//   name: "cake";
//   ingredients: ["flour", "egg", "wipecream"];
//   eat(): void;
// }

// function enjoy(food: Beverage | Dessert) { // 📌 유니온타입 : 두개의 타입중 하나를 포괄하는 '|' 연산자를 사용하였다.
//   console.log(food.ingredients);
//   if (food.name === "tea") {
//     food.drink();
//   }else{
//     food.eat();
//   }
// }

// 예제 2. 교차타입 (Intersection type)

// interface Beverage {
//   name: string;
//   ingredients: string[];
//   drink(): void;
// }

// interface Dessert {
//   name: string;
//   ingredients: string[];
//   eat(): void;
//   price: number;
// }

// const ameal: Beverage & Dessert = { //📌 교차타입: 두개의 타입을 포괄하는 '&' 연산자를 사용하여 지정하였다
//   name: "ameal",
//   ingredients: ["flour", "egg", "wipecream"],
//   drink() {},
//   eat() {},
//   price: 5000,
// };

// 예제 3. Generics

// 3-1

// function order<T>(arr : T[]): number {
//   return SafeArray.length;
// }

// const arr1 = [1, 2, 3];
// order<number>(arr1);

// const arr2 = ["a", "b", "c"];
// order<string>(arr2);

// const arr3 = [true, false, true];
// order(arr3);

// const arr4 = [{}, {}, { name: "yelim" }];
// order(arr4);

// 3-2

// interface Mobile<T> {
//   name: string;
//   price: number;
//   option: T;
// }

// const m1: Mobile<{ color: string; GB: number; coupon: boolean }> = {
//   name: "iphone11pro",
//   price: 1000,
//   option: {
//     color: "green",
//     GB: 256,
//     coupon: true,
//   },
// };

// const m2: Mobile<string> = {
//   name: "iphone11pro",
//   price: 1000,
//   option: "good",
// };

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
  name: string;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "blue" };
const book: Book = { price: 3000, name: 'diary' };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);
showName(book);
