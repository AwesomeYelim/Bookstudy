// 예제 1. 식별 가능한 유니온타입(union type)
var user = { name: "a", age: 10 };
var car = { name: "bmw", color: "blue" };
var book = { price: 3000, name: 'diary' };
function showName(data) {
    return data.name;
}
showName(user);
showName(car);
showName(book);
