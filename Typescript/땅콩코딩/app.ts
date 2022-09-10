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
  enum GenderType {
    Male,
    Female
  }

interface Aboutme {
  readonly myname: string;
   age: number;
   gender: GenderType
   hobby: string;
   married: boolean;
   thisismethod?(comment: string): string;
   //   thisismethod? : (comment : string) => string;
 }
 
 const who = {
   myname: "yelim",
   age: 28,
   gender: GenderType.Female,
   hobby: "playingguitar",
   married: false,
 };
 
 function aboutyelim(age: number): Aboutme {
   return who;
 }
 
 function aboutyelim2(aboutme: Aboutme): void {
 }
 
 aboutyelim2(who);
 