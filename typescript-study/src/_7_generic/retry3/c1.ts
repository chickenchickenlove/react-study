/**
 * 제네릭 : 타입 변수 응용하기
 * - swap 함수 구현 : 서로 다른 타입의 값을 받는 경우도 있음.
 * - getFirstValue() : 다양한 타입의 값이 들어있는 배열을 받아서, 첫번째 값의 타입으로 반환하는 방법
 * - 특정 properties가 있는 경우로 제한하고 싶을 때. length properties가 있는 객체만 사용
 */


// swap 구현
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

let [a1, a2] = swap("hello", 1);


// getFirstValue 구현
function getFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}
let b = getFirstValue(["a", 2, 3, 4, 5, 6,]);

// properties 구현
function getLength<T extends { length: number;}>(data: T) {
    return data.length;
}

getLength("a");
getLength([1, 2, 3, 4, 5]);
getLength({length: 10})




