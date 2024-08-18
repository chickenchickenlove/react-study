/**
 * Generic : 타입 변수 응용하기
 * - Usage1 : Swap
 * - Usage2 : 특정 Index의 값 반환.
 * - Usage3 : 특정 Property가 있는 경우로만 제한
 */
// Usage1
function swap(a, b) {
    return [b, a];
}
const [q, w] = swap("a", 1);
q.toFixed(); // number로 추론됨
w.toUpperCase(); // string으로 추론됨.
// Usage2
function returnFirstValueWithAny(data) {
    return data[0];
}
const a1 = returnFirstValueWithAny([1, 2, 3]); // a1은 any가 됨 => 타입 좁히기가 필요해짐.
function returnFirstValueWithGeneric(data) {
    return data[0];
}
// 여러가지 타입이 들어있는 경우도 있을 수 있음.
// 가장 앞 부분의 타입 추론만 도와주고, 나머지는 모른다. (unknown은 최상위 타입)
function returnFirstValueWithMoreGeneric(data) {
    return data[0];
}
const a2 = returnFirstValueWithAny([1, 2, 3]); // a2은 number가 됨.
const a3 = returnFirstValueWithMoreGeneric([1, "a", "b"]);
// Usage3 : 특정 Property가 반드시 있는 타입으로 하고 싶음.
// ex1, 반드시 legnth라는 Property가 있도록 하고 싶은 경우
// 여기서 length를 찍어보면 모두 number 타입인 것을 알 수 있음.
function getLength(val) {
    return val.length;
}
let var1 = getLength("hello");
let var2 = getLength([1, 2, 3]);
let var3 = getLength({ length: 10 });
export {};
