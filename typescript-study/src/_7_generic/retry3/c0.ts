/**
 * 여러 타입의 인수를 받고, input type 그대로 돌려주고 싶은 경우에는...?
 * 1. Any type 사용 : 이걸 쓰면 타입스크립트 쓰는 이유가 없음.
 * 2. Generic Type 사용 : 아주 편리함.
 * - Any Type을 쓰면 쓰는 쪽에서 한번 더 타입 캐스팅을 해야한다는 단점이 있음.
 */


function MyFunc<T>(data: T) {
    return data;
}

let a = MyFunc(10);
let b = MyFunc<[number, string, boolean]>([10, "a", true]);




