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
 * 과제0. 분산 합집합 기본
 * 과제1. Exclude 구현 (어떤 타입에서 특정 타입만 제거)
 * 과제2. Extract 구현 (어떤 타입에서 특정 타입만 추출)
 * 과제3. 분산 합집합을 막는 방법
 *
 */


// 분산 합집합 기본
type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<boolean>;
let b: StringNumberSwitch<number>;
let c: StringNumberSwitch<string>;
let d: StringNumberSwitch<boolean | number | string>; // 이 부분이 분산 합집함임. Generic 부분에 합집합으로 표현되면, 그건 하나씩 처리된다.


// 과제1. Exclude 구현 (어떤 타입에서 특정 타입만 제거)
// Exclude 구현
type Exclude<T, U> = T extends U ? never : T;
let a1: Exclude<string | number | boolean, string>; // => number, boolean
let a2: Exclude<string | number | boolean, string | number>; // => boolean


// Extract 구현
// string | number | boolean, string => string
// 과제2. Extract 구현 (어떤 타입에서 특정 타입만 추출)
type Extract<T, U> = T extends U ? T : never;
let b1: Extract<string | number | boolean, string>;


// 분산 합집합을 방지하려면?
// []을 해주면 됨.
let a3: Exclude<[string | number | boolean], string>;




