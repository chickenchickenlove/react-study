

// 어떤 타입(동적)을 인수로 받고, 그 타입을 반환하고 싶은 경우에는?
// 1. Any => 사용하는 쪽에서 타입 좁히기가 필요함.
// 2. Generic => 사용하는 쪽에서 타입 좁히기 필요없음.

function funcAny(val: any): any {
    return val;
}

let A1 = "hello";
let returnA1 = funcAny(A1); // returnA1의 Type은 Any임.

function funcGeneric<T>(val: T) {
    return val;
}

let A2 = "hello";
let returnA2 = funcAny(A2); // returnA2의 Type은 String이 됨.

// 이런 형태의 사용도 가능함.
// [number, number, number]가 Input이니 Return도 [number, number, number]가 됨.
let [n1, n2, n3] = funcGeneric([1, 2, 3]);

