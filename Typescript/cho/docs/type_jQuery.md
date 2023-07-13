# jQuery 타입 분석

- 모듈 분석

```ts
export = jQuery; // module.exports = jQuery;
import $ = require("jquery"); // common.js
import * as $ from "jquery";
import $ from "jquery"; // esModuleInterop : true
```

- 첫번째 매개변수 this

  🚩 여기서의 this 는 암묵적으로 있는 매개변수 this임

```ts
document.querySelector("p")?.addEventListener("click", function () {
  console.log(this);
});

//  addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
```

- method chaining

  🚩 다음과 같은 식에는 removeClass()와 addClass() 메서드가 중첩되어있다.

```ts
// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
$("p").removeClass("myClass noClass").addClass("yourClass");
```

    ❓ 어떻게 이게 가능한지 타입을 보면 return 에 this를 반환하는것을 알수 있음

```ts
removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
```

- function typing 에서

  💨 인수(argument)는 생략할 수 없지만 매개변수(parameter)자리는 안쓰면 생략 가능함

  📍 html은 다음과 같은 타입을 가지지만 parameter를 안써도 오류가 발생되지 않는다

```ts
//    html(htmlString_function: JQuery.htmlString |
//   JQuery.Node |
//   ((this: TElement, index: number, oldhtml: JQuery.htmlString) => JQuery.htmlString | JQuery.Node)): this;

$(tag).html(function () {
  return "<div>hello</div>";
});
```

📍 하지만 다음과 같은 인자값 (argument) 이 들어가야하는 자리에서는 error 가 발생됨

```ts
function add(x: string, y: string): string {
  return x + y;
}
add("1"); //error
```
