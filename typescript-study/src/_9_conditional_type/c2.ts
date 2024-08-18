/**
 * infer
 * - 조건부 타입에 특정 타입을 추론하는 방법임.
 * - inference(추론)의 약자가 된다.
 */


// 다음 두 함수의 리턴 타입을 표현하려면...?
// string | number로도 할 수 있으나 확장성이 떨어지고, 사용하는 쪽에서 타입 좁히기를 한번 더 사용해야 함.
type funcA = () => string
type funcB = () => number

type ReturnType<T> = T extends () => infer R ? R : never;
// T가 '() => infer R'의 서브 타입이라면, ReturnType<T>의 타입은 R이 됨. 여기서 infer R은 함수 반환 타입을 infer했음.

type A = ReturnType<funcA> // R = string => string
type B = ReturnType<funcB> // R = number => number
type C = ReturnType<number> // never => never


// 예제
// Promise<T>에서 T 값만 떼오는 코드를 작성하고 싶음.

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>; // => number
type PromiseB = PromiseUnpack<Promise<string>>; // => string





