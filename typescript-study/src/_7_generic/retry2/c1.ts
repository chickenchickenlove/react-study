/**
 * 제네릭 : 타입 변수 응용하기
 */



// swap 구현
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

let [a, b] = [10, "a"];


// 여러 Args를 받을 수 있는데, 가장 앞에 있는 값만 반환하고 타입.
// [T, ...unknown[]] => 튜플인데, 첫번째는 T, 나머지 뒷쪽은 unknown 타입의 배열이라는 소리
//
function getFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0]
}

let c = getFirstValue([1, 2, 3, 4, 5, 6]);


// 특정 properties가 있는 경우로 제한하고 싶을 때.
// length가 있는 경우만 쓴다고 하자
function getLength<T extends {length: number}>(data: T) {
    return data.length;
}

let a1 = getLength("a");
let a2 = getLength([1, 2, 3, 4, 5]);
let a3 = getLength({length: 10});




