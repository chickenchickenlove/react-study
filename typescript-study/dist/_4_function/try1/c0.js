/**
 * - 함수 타입 정의
 * - 화살표 함수 정의
 * - 함수의 매개변수
 */
// 함수 타입 정의
function funcA(a, b) {
    return a + b;
}
let a = funcA(1, 2); // number로 type infer
// 화살표 함수 정의
const add = (a, b) => a + b;
let b = add(1, 2); // number로 type infer
// 함수의 매개변수
// 매개변수 타입을 지정해주지 않아도 기본값을 기준으로 타입을 추론함.
// name : 기본값이 'hello'이므로 string으로 타입 추론.
// tail? : number | undefined가 됨. 왜냐하면 Optional하기 때문임.
function introduce(name = "hello", age, tail) {
    console.log(`name: ${name}, tail: ${tail}`);
}
// 가변 길이의 인수를 받는 함수 타입은?
function getSum(...rest) {
    let val = 0;
    rest.forEach((it) => val += it);
    return val;
}
getSum(1, 2, 3, 4, 5, 6);
getSum(1, 2);
export {};
