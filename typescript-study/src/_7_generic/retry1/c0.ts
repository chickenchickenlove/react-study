
// 어떤 타입을 인수로 받았을 때, 그 인수 타입을 그대로 돌려주고 싶은 경우?
// 1. any => 받는 쪽에서 타입 좁히기 한번 더해야함.
// 2. Generic => 받는 쪽에서 그냥 쓰면 됨.

function funcAny(data: any) {
    return data;
}

/*
// d1, d2는 모든 any 타입으로 추론됨.
const d1 = funcAny("hello");
d1.toUpperCase();
const d2 = funcAny(10);
d2.toFixed();
 */


function funcGeneric<T>(data: T) {
    return data
}

const c1 = funcGeneric("hello");
const c2 = funcGeneric(true);

c1.toUpperCase() // 명확하게 타입 추론됨.

// 배열에도 사용 가능함.
let arr1 = funcGeneric<[number, number, number]>([1, 2, 3]);
let arr2 = funcGeneric<[string, number, boolean]>(["hello", 1, true]);





