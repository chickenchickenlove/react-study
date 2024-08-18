/**
 *
 * - Exclude<T, U> : 타입 T에서 U를 제거
 * - Extract<T, U> : 타입 T에서 U만 추출
 * - ReturnType<T> : 함수의 반환값을 추출하는 타입
 *
 */


// Exclude Utility 타입
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<string | boolean, boolean>;


// Extract Utility 타입
type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

// ReturnType Utility 타입
type ReturnType<T> = T extends (...args: any) => infer R ?
    R :
    never;

function funcAA() {
    return "hello";
}

function funcBB() {
    return 10;
}

type C = ReturnType<typeof funcAA>;
type D = ReturnType<typeof funcBB>;
