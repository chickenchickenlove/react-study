/**
 * keyof 연산자
 * - 특정 객체 타입에 있는 모든 property를 불러옴.
 * - typeof 연산자와 함께 쓸 수 있음.
 */


interface Person {
    name: string;
    age: number;
}

// 만약 Person의 특정 Key 값만 불러오고 싶다면, key의 타입은 뭘로 선언해야할까?
// 1. key: string -> string은 아무값이나 올 수 있음. 따라서 person['ballo'] 같은 값이 들어올 수 있기 때문에 허용되지 않음.
// 2. key: 'name' | 'age' 가능은 하지만 확장에 한계가 있음.
// 3. keyOf 객체 -> 객체의 모든 타입을 다 보여줌.

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "name",
    age: 30,
}

const a = getPropertyKey(person, 'name');


/**
 * keyof 연산자는 typeof와 함께 쓸 수 있음.
 */

type Person1 = typeof person;

function getPropertyKey1(person: Person, key: keyof typeof person) {
    // person 객체에만 있는 Key 타입을 얻을 수 있음.
    // Person 타입이 합집합인 경우에 유용할 것 같음.
    return person[key];
}