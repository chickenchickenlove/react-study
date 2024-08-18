/**
 * 제네릭 인터페이스 & 제네릭 타입 별칭
 */
let keyPair1 = {
    key: "hello",
    value: true,
};
let keyPair2 = {
    key: true,
    value: "hello",
};
let numberMap1 = {
    "a": 1,
    "b": 2
};
let myMap1 = {
    "a": "a1",
    "b": "b1",
};
let myMap2 = {
    "a": true,
    "b": false,
};
let stringMap2 = {
    key: "hello",
};
const dev = {
    profile: {
        type: "developer",
        skill: "java",
    },
    name: "hello1",
};
const student = {
    profile: {
        type: "student",
        school: "가톨릭대",
    },
    name: "학생1",
};
function goToSchool(user) {
    if (user.profile.type === 'student') {
        console.log(`${user.name}은 ${user.profile.school}로 등교합니다.`);
    }
}
// 이렇게 하면 해결할 수 있음.
function goToSchoolWithGeneric(user) {
    console.log(`${user.name}은 ${user.profile.school}로 등교합니다.`);
}
export {};
