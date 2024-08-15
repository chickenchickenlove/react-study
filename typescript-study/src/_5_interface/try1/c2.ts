/**
 * - Interface는 선언 합침을 제공함.
 * - Interface를 같은 이름으로 여러 번 선언하면, 선언한 타입이 합쳐짐.
 * - 주로 Third Party 라이브러리의 타입이 조금 부족할 때, 보강하기 위한 형태로 많이 쓴다.
 */


// Type 키워드는 동일한 이름으로 여러 번 선언 시, 에러가 발생함.
/*
type Person = {
    name: string
}

type Person = {
    age: number;
}
*/

interface Person {
    name: string;
}

// 이것은 선언 합침이 됨.
interface Person {
    age: number;
}

const person: Person = {
    name: 'hello',
    age: 10,
}


// 모듈 보강 개념으로...
interface Lib {
    a: number;
    b: number;
}

// 내 모듈에서 추가 선언.
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: '3'
}
