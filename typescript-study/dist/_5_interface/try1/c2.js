/**
 * - Interface는 선언 합침을 제공함.
 * - Interface를 같은 이름으로 여러 번 선언하면, 선언한 타입이 합쳐짐.
 * - 주로 Third Party 라이브러리의 타입이 조금 부족할 때, 보강하기 위한 형태로 많이 쓴다.
 */
const person = {
    name: 'hello',
    age: 10,
};
const lib = {
    a: 1,
    b: 2,
    c: '3'
};
export {};
