// // 003. 예제 - 1
// let a = 10
// // a = '10'

// // 003. 예제 - 2
// let aboutme = {
//     name : 'Yelim',
//     goal : 'Fullstack developer',
//     nation : 'Korean',
//     age : 28,
//     code: function(){
//         console.log('dont know what to do')
//     }
// }
// // aboutme.name = 10

// // 003. 예제 - 3
// function youngeryelim(lostage){
//     return 28 - lostage;
// }

// 004. 예제 - 1

// let myname: string = "yelim";
// let age: number = 28;
// let gender: string = "female";
// let hobby: string = "playingguitar";
// let married: boolean = false;

// 004. 예제 - 2

// function aboutyelim(age: number): {
//   myname: string;
//   age: number;
//   gender: string;
//   hobby: string;
//   married: boolean;
// } {
//   return {
//     myname: "yelim",
//     age: 28,
//     gender: "female",
//     hobby: "playingguitar",
//     married: false,
//   };
// }

// 005. 예제 - 1

// interface Aboutme {
//     myname: string;
//     age?: number;
//     gender: string;
//     hobby: string;
//     married: boolean;
//   }

//   function aboutyelim(age: number): Aboutme {
//     return {
//       myname: "yelim",
//       gender: "female",
//       hobby: "playingguitar",
//       married: false,
//     };
//   }

// 005. 예제 - 2

// interface Aboutme {
//   myname: string;
//   age: number;
//   gender: string;
//   hobby: string;
//   married: boolean;
// }

// function aboutyelim(age: number): Aboutme {
//   return {
//     myname: "yelim",
//     age: 28,
//     gender: "female",
//     hobby: "playingguitar",
//     married: false,
//   };
// }

// const who = {
//     myname: "yelim",
//     age: 28,
//     gender: "female",
//     hobby: "playingguitar",
//     married: false,
//   };

// function aboutyelim2(aboutme: Aboutme): void {}

// aboutyelim2(who);

// 005. 예제 - 3

// interface Aboutme {
//  readonly myname: string;
//   age: number;
//   gender: string;
//   hobby: string;
//   married: boolean;
//   thisismethod?(comment: string): string;
//   //   thisismethod? : (comment : string) => string;
// }

// const who = {
//   myname: "yelim",
//   age: 28,
//   gender: "female",
//   hobby: "playingguitar",
//   married: false,
// };

// function aboutyelim(age: number): Aboutme {
//   return who;
// }

// function aboutyelim2(aboutme: Aboutme): void {
// }

// aboutyelim2(who);

// 006. 예제 - 1

// enum Forfun {
//   Playingguitar = 'playingguitar',
//   Singasong = 'singasong',
//   EnjoyingDesserts = 'enjoyingDesserts',
// }

// const who = {
//   myname: "yelim",
//   age: 28,
//   gender: "female",
//   hobby: Forfun.Playingguitar,
//   married: false,
// };
// interface Aboutme {
//   readonly myname: string;
//   age: number;
//   gender: string;
//   hobby: Forfun;
//   married: boolean;
//   thisismethod?(comment: string): string;
//   //   thisismethod? : (comment : string) => string;
// }

// function aboutyelim(age: number): Aboutme {
//   return who;
// }

// function aboutyelim2(aboutme: Aboutme): void {}

// aboutyelim2(who);

// 006. 예제 - 2

// interface Aboutme {
//   readonly myname: string;
//   age: number;
//   gender: string;
//   hobby: 'playingguitar' | 'singasong' | 'enjoyingDesserts';
//   married: boolean;
// }

// function aboutyelim(age: number): Aboutme {
//   return {
//     myname: "yelim",
//     age: 28,
//     gender: "female",
//     hobby: 'singasong',
//     married: false,
//   };
// }

// 007. 예제 - 1

// type DayType = number | string;

// let day : DayType = 1;

// day = '하루'

// const test1 = (a : DayType, b : DayType) : void => {

// }

// 007. 예제 - 2

// type DayType = number | string;

// let day = 1;

// const test1 = (a: DayType): void => {
//   if (typeof a === "string") {
//     day = 0;
//   } else {
//     day = a;
//   }
// };

// test1(50);

// 008. 예제 - 1

// function test():void {}

// function test(): string[] {
//   return ["a", "b"];
// }

// 008. 예제 - 2

// function test():void {}

// function test(a: string, b?: string, c?: string, d?: string, e?: string): void {
//   console.log(a, b, c, d, e);
// }

// console.log(test("hi"));


// 008. 예제 - 3

// function test(a: string, b = 'yelim'): void { 
//   console.log(a, b);
// }

// test("hi");


function test(a = 'hello', b = 'yelim'): void { 
  console.log(a, b);
}

test();
test('hi');
test('hi','there');
