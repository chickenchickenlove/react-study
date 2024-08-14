/**
 * 제네릭 인터페이스 & 제네릭 타입 별칭
 */


interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair1: KeyPair<string, boolean> = {
    key: "hello",
    value: true,
}

let keyPair2: KeyPair<boolean, string> = {
    key: true,
    value: "hello",
}

/**
 * Index Signature
 */


interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    "a": 1,
    "b": 2
}

/**
 * Generic Index Signature
 */

interface Map<V> {
    [key: string]: V;
}

let myMap1: Map<String> = {
    "a": "a1",
    "b": "b1",
}

let myMap2: Map<Boolean> = {
    "a": true,
    "b": false,
}

/**
 * Generic Type alias
 */

type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello",
}

/**
 * 제네릭 인터페이스 활용 예시
 * - 유저 관리 프로그램
 * - 유저 구분 : 학생 / 개발자 구분
 * - goToSchool 구현 : 유저가 학생이면 학교로 가라. 학생은 school이라는 타입을 가지고 있음.
 */


interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User {
    name: string;
    profile: Student | Developer;
}

const dev: User = {
    profile: {
        type: "developer",
        skill: "java",
    },
    name: "hello1",
}

const student: User = {
    profile: {
        type: "student",
        school: "가톨릭대",
    },
    name: "학생1",
}

function goToSchool(user: User) {
    if (user.profile.type === 'student') {
        console.log(`${user.name}은 ${user.profile.school}로 등교합니다.`);
    }
}

// 위와 같이 할 경우 모든 타입 검사를 직접 좁히기 해줘야 한다.
// 제네릭을 지정해두면, 사용하는 쪽이나 내부 코드를 구현하는 쪽이나 더 괜찮은 거 같음.
interface User1<T> {
    name: string;
    profile: T;
}

// 이렇게 하면 해결할 수 있음.
function goToSchoolWithGeneric(user: User1<Student>) {
    console.log(`${user.name}은 ${user.profile.school}로 등교합니다.`);
}






