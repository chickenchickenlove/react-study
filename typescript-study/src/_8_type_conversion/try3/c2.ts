/**
 * 맵드 타입 <-> 인덱스 시그니처
 * - 기존의 객체 타입을 기반으로 새로운 타입(Interface는 아님. )을 만드는 방법임.
 * - 인터페이스에서는 사용할 수 없고, 타입 별칭에서만 쓸 수 있음.
 * - 실무에서 굉장히 많이 쓰인다.
 *
 * 인덱스 시그니처
 * - 객체 타입에서 특정 키 패턴에 대응되는 값의 타입을 정의하는 방법임.
 * type NumberDict = {[key: string]: number}; 이런 느낌임.
 *
 * - 주로 [key in ...] 커맨드를 이용해서 생성함.
 * - 이런 인터페이스가 있을 때, 부분적인 필드를 읽어올 수 있도록 하는 타입을 선언해봐라.
 * - 정보 중 일부만 조회, 정보 중 일부만 업데이트 하는 타입 선언.
 *
 * interface User {
 *     id: number;
 *     name: string;
 *     age: number;
 * }
 *
 * 과제1. 여기서 id, name, age가 모두 optional인 mapped type을 생성해봐. (interface가 아님)
 * 과제2. 과제1에서 동적으로 발전시켜봐
 * 과제3. user의 모든 value 타입을 boolean으로 수정해봐.
 *
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 과제1. 여기서 id, name, age가 모두 optional인 mapped type을 생성해봐. (interface가 아님)
type PartialUser1 = {
    [key in "id" | "name" | "age"]?: User[key]
};

// 과제2. 과제1에서 동적으로 발전시켜봐
type PartialUser2 = {
    [key in keyof User]?: User[key]
};

// 과제3. user의 모든 value 타입을 boolean으로 수정해봐.
type PartialUser3 = {
    [key in keyof User]?: boolean
};