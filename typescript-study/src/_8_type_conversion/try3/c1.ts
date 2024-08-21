/**
 * keyof 연산자
 * - 특정 객체 타입에 있는 모든 property를 불러옴.
 * - typeof 연산자와 함께 쓸 수 있음.
 *
 * interface Person {
 *     name: string;
 *     age: number;
 * }
 *
 * - 과제1. Person 타입, key 값이 주어졌을 때 Value를 불러오려면? Key는 아무거나 될 수 있음.
 * - 과제2. 특정 인스턴스가 주어졌을 때, 해당 인스턴스의 Key에 대한 값을 불러오는 함수를 구하려면?
 */


interface Person {
    name: string;
    age: number;
}

// 과제 1
function getPropertyFromPerson(person: Person, key: keyof Person) {
    return person[key];
}

// 과제2
const person: Person = {name: "hello", age: 10}
function getPropertyFromPersonInstance(person: Person, key: keyof typeof person) {
    return person[key];
}
