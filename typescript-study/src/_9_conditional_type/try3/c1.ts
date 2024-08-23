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
 *
 * 과제0. 분산 합집합 기본 (number 타입이면 number, 그 외는 string만 나오는 타입 설정)
 * 과제1. Exclude 구현 (어떤 타입에서 특정 타입만 제거)
 * 과제2. Extract 구현 (어떤 타입에서 특정 타입만 추출)
 * 과제3. 분산 합집합을 막는 방법
 *
 */


// 과제0. 분산 합집합 기본 (number 타입이면 number, 그 외는 string만 나오는 타입 설정)
type StringNumber1<T> = T extends number ? number : string;

// 과제1. Exclude 구현 (어떤 타입에서 특정 타입만 제거) <T, U>
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<string | boolean | number, number>; // string | boolean

// 과제2. Extract 구현 (어떤 타입에서 특정 타입만 추출)
type Extract<T, U> = T extends U ? T : never;
type B = Extract<string, string | boolean | number> // => string

// 과제3. 분산 합집합을 막는 방법
type StringNumber1NotUnion<T> = [T] extends number ? T : never;
type C = StringNumber1NotUnion<string | boolean | number> // => never








