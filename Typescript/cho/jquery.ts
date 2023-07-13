const $p = $("p");

// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
$("p").removeClass("myClass noClass").addClass("yourClass");

$(["p", "t"]).text("hello");

const tag = $("ul li")
  .addClass("hello")
  .addClass(function (index) {
    return "item-" + index;
  });

$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data("name") + "입니다";
});

$(tag).html(function () {
  return "<div>hello</div>";
});

function add(x: string, y: string): string {
  return x + y;
}
add("1", "2");

export = jQuery; // module.exports = jQuery;
// import $ = require('jquery') // common.js
// import * as $ from 'jquery'
import $ from "jquery"; // esModuleInterop : true
