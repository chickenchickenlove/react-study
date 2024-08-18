/**
 * 맵드 타입 <-> 인덱스 시그니처
 * - 기존의 객체 타입을 기반으로 새로운 타입을 만드는 방법임.
 * - 인터페이스에서는 사용할 수 없고, 타입 별칭에서만 쓸 수 있음.
 * - 실무에서 굉장히 많이 쓰인다.
 *
 * 인덱스 시그니처
 * - 객체 타입에서 특정 키 패턴에 대응되는 값의 타입을 정의하는 방법임.
 * type NumberDict = {[key: string]: number}; 이런 느낌임.
 */


interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    return {
        id: 1,
        name: '홍길동',
        age: 30,
    }
}

// 이렇게 필드를 하나씩 적는 건 한계가 있을지도.
interface PartialUser {
    id?: number;
    name?: string;
    age?: number;
}

// 한명의 유저 정보를 불러오는 기능...
function updateUser(user: PartialUser) {
    // ... 수정하는 기능...
}


// 수정하고 싶은 값만 집어넣고 싶은 경우도 있음
// PartialInterface 추가 => 그런데 중복되는 값만 있다.
// => 이 상황에서 맵드 타입을 이용해서 할 수 있음.

updateUser({
    // id: 1,
    // name: "홍길동",
    age: 30,
})


type PartialUser1 = {
    // 인덱스 시그니처와 마찬가지로 [key in "id" | "name" | "age"] => 어떤 Key가 올 수 있는지 의미함.
    // User[key] : Type을 의미함.
    // 마지막에 ?를 붙여주면, Mapped Type의 모든 Property가 Optional Property가 됨.
    [key in "id" | "name" | "age"]?: User[key]
};


type BooleanUser = {
    [key in "id" | "name" | "age"]?: boolean
}

type BooleanUser1 = {
    [key in "id" | "name" | "age"]: boolean
}

type ReadonlyUser = {
    readonly [key in "id" | "name" | "age"]?: User[key]
}