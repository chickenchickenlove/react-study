/**
 * 인덱스드 액세스 타입
 * - index를 이용해 다른 타입 내의 특정 property의 타입을 추출하는 타입
 * - 객체 타입, 배열 타입, 튜플 타입에 모두 사용할 수 있음.
 *
 */
/**
 * Index를 이용해 특정 타입만 떼어내보자.
 */
function printAuthorInfo(author) {
    console.log(`${author.name}-${author.id}`);
}
export {};
