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
 * - 만약 Person의 특정 Key 값만 불러오고 싶다면, key의 타입은 뭘로 선언해야할까? => getPropertyKey()
 * - keyof 연산자는 typeof와 함께 쓸 수 있음.
 */


interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {name: "hello", age: 10}
let age = getPropertyKey(person, "age");


// 특정 객체의 타입을 읽고, 그 객체가 가지고 있는 property를 읽어오도록 할 수도 있다.
type Person1 = typeof person;

function getPropertyKey1(person: Person, key: keyof typeof person) {
    return person[key];
}
