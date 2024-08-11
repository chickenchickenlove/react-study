/**
 * Array Type
 */

let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

// 배열에 다양한 요소가 들어가는 경우
let variousArr1: (number | string)[] = [1, "a"];
let variousArr2: Array<number | string> = [1, "a"];

// Tuple
// - 배열의 일종
// - 길이가 정해진 배열
// - 튜플은 타입 스크립트에만 있고, 컴파일 시, 자바스크립트에서는 배열로 바뀐다.
let tup1: [number, number, number] = [1, 2, 3];

// 튜플을 유용하게 쓰는 경우
// 특정 순서가 정해진 경우에는 이런 타입으로 사용해 볼 수 있음.
// => 그런데 객체 타입이 더 나은 거 같음. 각 위치에 있는 값이 무엇을 뜻하는지 파악하기 더 쉽기 때문이다.
const users: [string, number][] = [
    ['홍길동', 1],
    ['김길동', 2]
    // [3, '장길동'] //
];





