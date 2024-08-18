// 제네릭 타입 변수 응용하기
// 1. swap 함수
// 2. returnfirstValue 함수
// 3. getLength() 구하기. legnth 함수가 있는 것.
// swap 함수 구현
function swap(a, b) {
    return [b, a];
}
let [q1, q2] = swap('hello', 1);
// returnFirstValue 구현
// 이렇게 하면 Type이 any이기 때문에 쓰는 쪽에서 문제가 된다.
function returnFirstValue(data) {
    return data[0];
}
let a1 = returnFirstValue([1, 2, 3, 4]); // any로 추론됨.
function returnFirstValueWithGeneric(data) {
    return data[0];
}
// 잘 추론됨.
let a2 = returnFirstValueWithGeneric([1, 2, 3, 4]);
// genLength() 함수 구현 => 반드시 length 가 있어야 한다.
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("hello");
let var3 = getLength({ length: 10 });
export {};
// let var4 = getLength(true); // 만약 위처럼 구현하지 않으면 함수가 호출은 되겠지만, 런타임에 호출 장애가 발생할 것이다.
