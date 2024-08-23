/**
 * 인덱스드 액세스 타입
 * - index를 이용해 다른 타입 내의 특정 property의 타입을 추출하는 타입
 * - Index를 이용해 튜플의 특정 위치의 타입도 추출 가능
 * - 객체 타입, 배열 타입, 튜플 타입에 모두 사용할 수 있음.
 *
 * interface Post {
 *     title: string;
 *     content: string;
 *     author: {
 *         id: number;
 *         name: string;
 *         age: number;
 *     }
 * }
 *
 * // 과제1. Post interface에서 author 필드의 타입 정보만 뽑아서 사용해
 * // 과제2. Tuple도 Index Accessed Type을 할 수 있니?
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

// 과제1. Post interface에서 author 필드의 타입 정보만 뽑아서 사용해
function printAuthorInfo(author: Post['author']) {
    // ...
}

// 과제2. 과제2. Tuple도 Index Accessed Type을 할 수 있니?
type Tup = [number, string, boolean];
type Tup0 = Tup[0] // number
type Tup1 = Tup[1] // string
type Tup2 = Tup[number] // number | string | boolean. (인덱스에 넘버는 모든 숫자를 의미함. 그래서 안에 있는 모든 타입을 추출해줌)


