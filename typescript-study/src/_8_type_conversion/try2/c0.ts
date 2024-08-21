/**
 * 인덱스드 액세스 타입
 * - index를 이용해 다른 타입 내의 특정 property의 타입을 추출하는 타입
 * - Index를 이용해 튜플의 특정 위치의 타입도 추출 가능
 * - 객체 타입, 배열 타입, 튜플 타입에 모두 사용할 수 있음.
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    }
}

// indexed access type
function printAuthorInfo(authorInfo: Post['author']) {
    console.log(`${authorInfo.id} + ${authorInfo.name} + ${authorInfo.age}`);
}

type Tup = [number, boolean, string];
type Tup1 = Tup[0];
type Tup2 = Tup[1];
type Tup3 = Tup[2];
type TupAll = Tup[number]; // Tuple 전체에 있는 타입을 하나씩 추출해줌.

