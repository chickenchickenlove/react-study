/**
 * Object Type
 * - Readonly 키워드
 * - Optional Properties
 */
// 이렇게 선언한 경우, object Type에는 id, name 값이 지정되어 있지 않음.
// 따라서 Typescript에서는 Property를 추론할 수 없다.
let user = {
    id: 1,
    name: "홍길동"
};
// Object 타입을 잘 추론하려면 아래 형식으로 해야함.
let user1 = {
    id: 1,
    name: "홍길동",
};
/**
 * Optional한 Object Type
 * - age를 선언하지 않아도 컴파일 에러가 나지 않음.
 * - user2.name의 타입은 number | undefined가 됨.
 * - 사용하려고 하는 경우 Optional Chaining을 야기함.
 */
let user2 = {
    id: 1,
    name: "홍길동"
};
/**
 * Readonly 키워드
 */
let user3 = {
    id: 1,
    name: "홍길동",
};
export {};
// user3.id = 10 // readonly 키워드는 절대로 변경할 수 없게 됨.
