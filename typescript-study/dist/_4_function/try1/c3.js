/**
 * 함수 오버로딩
 * - 함수를 매개변수의 개수, 타입에 따라 여러가지 버전으로 정의하는 방법
 * - JS에서는 안되고, TS에서만 된다.
 * - 오버로딩할 함수들의 시그니처만 선언하고, 구현부는 안에다가 직접..
 */
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
export {};
