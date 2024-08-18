/**
 * 함수 오버로딩
 * - 함수를 매개변수의 개수, 타입에 따라 여러가지 버전으로 정의하는 방법
 * - JS에서는 안되고, TS에서만 된다.
 * - 오버로딩할 함수들의 시그니처만 선언하고, 구현부는 안에다가 직접..
 */

/**
 * 하나의 함수 func -> 함수 오버로딩 예제
 * 1. 모든 매개변수의 타입 : number
 * 2. 매개변수 1개 -> 매개변수에 20을 곱한 값을 출력
 * 3. 매개변수 3개 -> 이 매개변수를 다 더한 값을 출력.
 *
 */

function func(a: number): void;
function func(a: number, b: number, c: number): void;


function func(a: number, b?: number, c?: number): void {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else{
        console.log(a * 20);
    }
}



