// // 1. 사용자가 음수길이를 입력한경우
// // 정사각형 클래스
// class Square {
//   constructor(length) {
//     this.length = length;
//   }

//   getPerimeter() {
//     return 4 * this.length;
//   }
//   getArea() {
//     return this.length * this.length;
//   }
// }

// // 클래스 사용하기
// const square = new Square(-10); // 길이에 음수를 넣다니.. ㄷㄷ
// console.log(`정사각형의 둘레 : ${square.getPerimeter()}`);
// console.log(`정사각형의 넓이: ${square.getArea()}`);











//   // 2. 길이에 음수가 들어가지 않게 수정하기
//   // 정사각형 클래스
//   class Square {
//     constructor(length) {
//       if (length <= 0) {
//         throw "길이는 0보다 커야 합니다."; // throw 키워드를 통해 강제오류 발생
//       }
//       this.length = length;
//     }

//     getPerimeter() {
//       return 4 * this.length;
//     }
//     getArea() {
//       return this.length * this.length;
//     }
//   }

//   // 클래스 사용하기
//   const square = new Square(-10); // 길이에 음수를 넣다니.. ㄷㄷ
//   console.log(`정사각형의 둘레 : ${square.getPerimeter()}`);
//   console.log(`정사각형의 넓이: ${square.getArea()}`);









// // 3. private 속성 사용하기(1)
// // 사각형 클래스
// class Square {
//   #length //private 속성으로 사용하겠다고 미리선언

//   constructor(length) {
//     if (length <= 0) {
//       throw "길이는 0보다 커야 합니다."; // throw 키워드를 통해 강제오류 발생
//     }
//     this.#length = length;
//   }

//   getPerimeter() {
//     return 4 * this.#length;
//   }
//   getArea() {
//     return this.#length * this.#length;
//   }
// }

// // 클래스 사용하기
// const square = new Square(10);
// console.log(`정사각형의 둘레 : ${square.getPerimeter()}`);
// console.log(`정사각형의 넓이: ${square.getArea()}`);









// // 4. private 속성 사용하기(2)
// // 사각형 클래스
// class Square {
//   #length //private 속성으로 사용하겠다고 미리선언

//   constructor(length) {
//     if (length <= 0) {
//       throw "길이는 0보다 커야 합니다."; // throw 키워드를 통해 강제오류 발생
//     }
//     this.#length = length;
//   }

//   getPerimeter() {
//     return 4 * this.#length;
//   }
//   getArea() {
//     return this.#length * this.#length;
//   }
// }

// // 클래스 사용하기
// const square = new Square(10);
// square.length = -10; //클래스 내부의 length 속성을 사용하여 변경한다면?
// console.log(`정사각형의 둘레 : ${square.getPerimeter()}`);
// console.log(`정사각형의 넓이: ${square.getArea()}`);








// // 5. private 속성 사용하기(3)
// // 사각형 클래스
// class Square {
//   #length; //private 속성으로 사용하겠다고 미리선언

//   constructor(length) {
//     if (length <= 0) {
//       throw "길이는 0보다 커야 합니다."; // throw 키워드를 통해 강제오류 발생
//     }
//     this.#length = length;
//   }

//   getPerimeter() {
//     return 4 * this.#length;
//   }
//   getArea() {
//     return this.#length * this.#length;
//   }
// }

// // 클래스 사용하기
// const square = new Square(10);
// square.#length = -10; //클래스 내부의 #length 속성을 사용하여 변경한다면?
// console.log(`정사각형의 둘레 : ${square.getPerimeter()}`);
// console.log(`정사각형의 넓이: ${square.getArea()}`);










// // 6. 게터(getter)와 세터(setter)메소드
// // 정사각형 클래스
// class Square {
//   #length;

//   constructor(length) {
//     this.setLength(length);
//   }

//   setLength(value) {
//     if(value <= 0){
//       throw '길이는 0보다 커야 합니다.'
//     }
//   this.#length = value
//   }

//   getLength(value) {
//     return this.#length
//   }

//   getPerimeter(){return 4 * this.#length}
//   getArea(){return this.#length * this.#length}
// }

// // 클래스 사용하기
// const square = new Square(10);
// console.log(`한 변의 길이는 ${square.getLength()} 입니다`);

// // 예외 발생시키기
// square.setLength(-10)

// // 한 변의 길이는 10 입니다
// // throw '길이는 0보다 커야 합니다.'




// // 7. get 키워드와 set 키워드 조합하기
// // 정사각형 클래스
// class Square {
//   #length;

//   constructor(length) {
//     this.length = length; //this.length에 값을 지정시 set length(length)메소드 부분이 호출됨
//   }

//   get length() {
//     return this.#length;
//   }

//   get perimeter() {
//     return this.#length * 4
//   }

//   get area() {
//     return this.#length * this.#length
//   }

//   set length(length) {
//     if (length <= 0){
//       throw '길이는 0보다 커야함'
//     }
//     this.#length = length
//   }
// }


// // 클래스 사용하기
// const squareA = new Square(10);
// console.log(`한 변의 길이: ${squareA.length}`);
// console.log(`둘레: ${squareA.perimeter}`);
// console.log(`넓이: ${squareA.area}`);
// // 속성을 사용하는 형태로 사용하면 자동으로 게터와 세터가 호출

// // 예외 발생시키기
// const squareB = new Square(-10)

// // 한 변의 길이: 10
// // 둘레: 40
// // 넓이: 100
// // throw '길이는 0보다 커야함'