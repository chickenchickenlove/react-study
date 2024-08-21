/**
 * Interface
 * - 객체의 타입을 정의하는데 특화되어있음.
 */

interface Person {
    readonly name: string;
    age: number;
}

const person: Person = {
    name: "hello",
    age: 29,
}