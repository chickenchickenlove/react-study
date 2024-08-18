/**
 * - Union Type : Or 연산자 (합집합)
 * - Intersection Type : And 연산자 (교집합)
 *
 */

/**
 * Union: '|'로 선언.
 */

let a: string | number;
a = 1;
a = '1';

let arr: (number | string | boolean)[] = [1, '1', true];

/**
 * 객체의 Union : '|'로 선언
 */

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 =  Dog | Person

// 두 개 모두 가능. (교집합으로도 볼 수 있음. 두 개 다 가지고 있으니까. 집합 다이어그램을 떠올려봐 )
let union1: Union1 = {
    name: '',
    color: '',
    language: '',
}

// Dog 타입도 가능
let union2: Union1 = {
    name: '',
    color: '',
}

// Person 타입도 가능
let union3: Union1 = {
    name: '',
    language: '',
}

/**
 * Intersection Type: '&'로 선언
 */

let variable: string & number;

type Intersection = Dog & Person;
let intersection: Intersection = {
    name: '',
    color: '',
    language: '',
}
