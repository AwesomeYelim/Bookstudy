// // 003. 예제 - 1
// let a = 10
// // a = '10'

// // 003. 예제 - 2
// let human = {
//     name : 'Yelim',
//     goal : 'Fullstack developer',
//     nation : 'Korean',
//     age : 28,
//     code: function(){
//         console.log('dont know what to do')
//     }
// }
// // human.name = 10

// // 003. 예제 - 3
// function youngeryelim(lostage){
//     return 28 - lostage;
// }

// 004. 예제 - 1

let myname: string = "yelim";
let age: number = 28;
let gender: string = "female";
let hobby: string = "playingguitar";
let married: boolean = false;

// 004. 예제 - 2

function aboutyelim(age: number): {
    myname: string;
    age: number;
    gender: string;
    hobby: string;
    married: boolean;
} {
    return { myname, age, gender, hobby, married }
} 


