/**
 * 선언 합침
 * - 타입은 동일한 이름으로 선언할 수 없다.
 * - 그러나 인터페이스는 동일한 이름으로 선언하면 합쳐진다.
 * - 인터페이스의 선언 합침은 주로 서드파티 라이브러리의 타입이 조금 부족할 때 보충하기 위해 사용한다.
 */


interface Person {
    name: string;
}


interface Person {
    age: number;
}

const person: Person = {
    name: "hello",
    age: 29,
}


// 모듈 보강 관점에서 한번 더
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 1,
    c: ""
}

