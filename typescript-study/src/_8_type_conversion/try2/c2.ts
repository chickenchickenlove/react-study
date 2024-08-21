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
 * 과제
 * interface User {
 *     id: number;
 *     name: string;
 *     age: number;
 * }
 * - 주로 [key in ...] 커맨드를 이용해서 생성함.
 * - 이런 인터페이스가 있을 때, 부분적인 필드를 읽어올 수 있도록 하는 타입을 선언해봐라.
 * - 정보 중 일부만 조회, 정보 중 일부만 업데이트 하는 타입 선언.
 *
 */

// 맵드 타입 -> 기존 객체에서 뭔가 생성하는 것임. keyof 연산자 같은 것들 써서.
// 인덱스 시그니쳐 -> 그냥 생성하는 것임.

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in keyof User]?: User[key]
};

const user1: PartialUser = {
    name: "hello",
}

const user2: PartialUser = {
    age: 10,

}

function updateUser(user: PartialUser) {
    // ... // 일부 값만 업데이트
}


/**
 * 이것저것 타입 변환도 가능함.
 */

type BooleanUser = {
    [key in keyof User]: boolean
};

type NumberUser = {
    [key in keyof User]: number
};