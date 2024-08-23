/**
 * infer
 * - 조건부 타입에 특정 타입을 추론하는 방법임.
 * - inference(추론)의 약자가 된다.
 *
 * - 과제1. 아래 함수가 있을 때, 두 함수의 리턴 타입을 제네릭으로 표현하려면?
 * type funcA = () => string
 * type funcB = () => number
 * - 과제2. Promise<T>에서 T 값만 떼오는 코드를 작성하고 싶음.
 */


// 과제1. 아래 함수가 있을 때, 두 함수의 리턴 타입을 제네릭으로 표현하려면?
type funcA = () => string;
type funcB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type FuncAReturnType = ReturnType<funcA>; // string
type FuncBReturnType = ReturnType<funcB>; // number

// 과제2. Promise<T>에서 T 값만 떼오는 코드를 작성하고 싶음.

type PromiseUnwrapper<T> = T extends Promise<infer R> ? R : never;
type A = PromiseUnwrapper<Promise<number>> // A = number

