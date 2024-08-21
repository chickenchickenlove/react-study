/**
 * 분산적인 조건부 타입
 * - types StringNumberSwitch<T> = T extends number ? string : number
 * - T가 만약 합집합일 경우, iteration을 돌면서 함
 * - [T]인 경우, T가 합집합이라도 하나의 배열로 평가함.
 * - extends쪽에 합집합이 있어도 그것은 iteration하지 않음.
 * - 이 타입이 있을 때, 다음과 같은 선어이 있으면... 아래와 같이 동작함.
 * let var: StringNumberSwitch<boolean | number | string>;
 *
 * # 1단계
 * -> StringNumberSwitch<boolean>
 * -> StringNumberSwitch<number>
 * -> StringNumberSwitch<string>
 *
 * # 2단계
 * -> boolean
 * -> number
 * -> string
 *
 * # 3단계
 * number | string
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>; // => string
let b: StringNumberSwitch<string>; // => nubmer
let c: StringNumberSwitch<number | string | boolean>; // => string | number


/**
 * 실용적인 예제
 * - 분산적인 조건부 타입을 활용한 특정 타입 제거.
 */


// T가 U를 상속할 수 있으면 never(공집합) 반환 => 무시됨.
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>; // => string 타입이 제거됨.



type A1 = Exclude<number | string | boolean, string|boolean>; // => string 타입이 제거됨.
/**
 *
 * 1단계
 * number extends string | boolean => false
 * string extends string | boolean => true
 * boolean extends string | boolean => true
 *
 * 2단계
 * number
 * never
 * never
 *
 * 3단계
 * number
 *
 */



/**
 * Extract라는 타입. 특정 타입만 뽑아오기
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string |boolean, string>; // => string만 남음.


/**
 * 분산 합집합 타입을 막는 방법은.. []를 넣어주면 됨.
 * [T]로 하는 경우, 조건부 타입 평가 시, Union 타입이라고 하더라도 개별적으로 평가하지 않고 전체를 한꺼번에 평가함.
 *
 * # 1단계
 * [boolean | number | string] extends [number] => 거짓임
 *
 * # 2단계
 * number가 됨.
 *
 * # 3단계
 * number가 됨.
 *
 */

type StringNumberSwitchPrevent<T> = [T] extends [number] ? string : number;
let e: StringNumberSwitchPrevent<boolean | number | string>;
// [number | string]는 [number]의 서브 타입이 아니기 때문임.



