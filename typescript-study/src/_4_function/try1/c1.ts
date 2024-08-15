/**
 * 함수 타입 표현식, 호출 시그니처.
 */


// 함수 타입 표현식
// 함수 타입을 선언해서, 그걸 그대로 이용할 수 있음.
type Operation = (a: number, b: number) => number

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 : 함수 타입 표현식과 동일한 역할을 함.
// JS에서는 함수도 객체이기 때문에, 객체 타입으로 선언해도 처리할 수 있게 됨.
type Operation2 = {
    (a: number, b: number): number;
};

const add1: Operation2 = (a, b) => a + b;
const sub1: Operation2 = (a, b) => a - b;
const multiply1: Operation2 = (a, b) => a * b;
const divide1: Operation2 = (a, b) => a / b;


