/**
 * - 제네릭 인터페이스
 * - 제네릭 타입 별칭
 * - 코드에서 타입 좁히기를 줄이기 위해 제네릭 별칭을 많이 쓰자.
 */
// 사용하는 경우 => 타입을 선언할 때, 제네릭에 타입을 정의해야함.
const stringKeyPair = {
    Key: "HelloKey",
    Value: "HelloValue",
};
const numberKeyPair = {
    Key: 1,
    Value: 10,
};
let stringMap = {
    A: "B"
};
let numberMap = {
    A: 1
};
// 여기서 학생만 학교로 갈 수 있다..
// 타입 좁히기로 한다면..
function gotoSchool(user) {
    if (user.profile.type === "student") {
        console.log(`${user.profile.school}로 등교 완료`);
    }
    else {
        console.log("학생이 아닙니다.");
    }
}
function gotoSchoolWithGeneric(user) {
    console.log(`${user.profile.school}로 등교 완료`);
}
export {};
