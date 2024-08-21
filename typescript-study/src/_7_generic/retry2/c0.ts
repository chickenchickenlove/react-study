/**
 * 여러 타입의 인수를 받고, input type 그대로 돌려주고 싶은 경우에는...?
 * 1. Any type 사용 : 이걸 쓰면 타입스크립트 쓰는 이유가 없음.
 * 2. Generic Type 사용 : 아주 편리함.
 */



function MyFunc<T>(data: T): T {
    return data
}


let a = MyFunc(1); // number를 주니 number 타입으로 추론됨.

// 배열 타입으로도 전송 가능함.
let b = MyFunc<[number, boolean, string]>([1, true, "hello"]);