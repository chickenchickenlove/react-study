/**
 * Any && Unknown Type
 * - Any는 치트키 타입. 어떠한 타입 대신에도 사용할 수 있음. 즉, 타입 검사를 무용지물로 만듦.
 * - Unknown는 Java로 치면 Object Type. (모든 타입의 부모 타입) -> 너무 포괄적이기 떄문에 사용하려면 타입 좁히기를 사용해야함.
 */
// 아무 값이나 저장할 수 잇음.
let anyVar = 10;
anyVar = "a";
anyVar = true;
let num = 10;
num = anyVar;
let unknownVar = 10;
unknownVar = "a";
unknownVar = true;
let num10 = 10;
// num10 = unknownVar; // unknownVar는 다운 캐스팅이 안된다.
/**
 * 타입 좁히기
 * - 타입 스크립트 컴파일러가 타입을 추론할 수 있도록 타입힌티를 줘서 좁힌다.
 */
if (typeof unknownVar === "string") {
    let str1 = unknownVar;
}
else if (typeof unknownVar === "number") {
    let num1 = unknownVar;
}
export {};
