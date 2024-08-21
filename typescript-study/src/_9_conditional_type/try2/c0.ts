/**
 * 조건부 타입
 * - 삼항 연산자를 이용해 타입을 결정함.
 * - 조건부 타입은 제네릭과 함께 사용할 때 매우 유용함.
 * number extends string ? string : number;
 * (number extends string)까지가 한덩어리임.
 *
 *
 * - 주어진 값
 * type ObjA = {
 *     a: number;
 * }
 *
 * type ObjB = {
 *     a: number;
 *     b: number;
 * }
 *
 * - 과제1. type이 number면 string, 아니면 number 타입이 되는 타입을 만들어봐.
 * - 과제2. 위의 타입을 제네릭으로도 확장시켜봐.
 * - 과제3. 객체 타입에서도 조건부 타입을 한번 설정해봐.
 *
 */

// 과제1. type이 number면 string, 아니면 number 타입이 되는 타입을 만들어봐.
type StringNumberSwitch1 = number extends number ? string : number;

// 과제2. 위의 타입을 제네릭으로도 확장시켜봐.
type StringNumberSwitch2<T> = T extends number ? string : number;

// 과제3. 객체 타입에서도 조건부 타입을 한번 설정해봐.
type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type MyType = ObjB extends ObjA ? number : string;
