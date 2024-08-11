/**
 * - 제네릭 인터페이스
 * - 제네릭 타입 별칭
 * - 코드에서 타입 좁히기를 줄이기 위해 제네릭 별칭을 많이 쓰자.
 */

// 제네릭 인터페이스
interface KeyPair<K, V> {
    Key: K;
    Value: V;
}

// 사용하는 경우 => 타입을 선언할 때, 제네릭에 타입을 정의해야함.
const stringKeyPair: KeyPair<string, string> = {
    Key: "HelloKey",
    Value: "HelloValue",
}

const numberKeyPair: KeyPair<number, number> = {
    Key: 1,
    Value: 10,
}

// 제네릭 + 인덱스 시그니처
interface NumberMap {
    [key: string]: number;
}

interface StringMap {
    [key: string]: string;
}

interface GenericMap<V> {
    [key: string]: V;
}

let stringMap: GenericMap<string> = {
    A: "B"
}

let numberMap: GenericMap<number> = {
    A: 1
}

// 제네릭 타입 별칭.
type Map2<V> = {
    [key: string]: V
}

// 제네릭 사용해서 타입 좁히기 줄이는 방법

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

// 여기서 학생만 학교로 갈 수 있다..
// 타입 좁히기로 한다면..
function gotoSchool(user: User) {
    if (user.profile.type === "student") {
        console.log(`${user.profile.school}로 등교 완료`);
    } else {
        console.log("학생이 아닙니다.")
    }
}


// T extends ...로는 좁힐 수 없다. 따라서 인터페이스를 좀 더 업데이트 해줘야한다.
// function gotoSchoolWithGeneric<T extends >(user: User) {
//     if (user.profile.type === "student") {
//         console.log(`${user.profile.school}로 등교 완료`);
//     } else {
//         console.log("학생이 아닙니다.")
//     }
// }

interface UserGeneric<T extends Developer | Student> {
    name: string;
    profile: T
}

function gotoSchoolWithGeneric(user: UserGeneric<Student>) {
    console.log(`${user.profile.school}로 등교 완료`);
}
