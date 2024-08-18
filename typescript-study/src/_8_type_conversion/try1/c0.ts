/**
 * 인덱스드 액세스 타입
 * - index를 이용해 다른 타입 내의 특정 property의 타입을 추출하는 타입
 * - 객체 타입, 배열 타입, 튜플 타입에 모두 사용할 수 있음.
 *
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


/**
 * Index를 이용해 특정 타입만 떼어내보자.
 */

function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`)
}



// 튜플의 타입 추출
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

// 여기서 number는 0,1,2 같은 값임... number로 하면 전체 튜플을 포함하는 최적의 타입을 뽑아옴.
// 0,1,2는 인덱스가 될 수 있으니.. number를 쓴다는 것은 Tup[0] | Tup[1] | Tup[2] | ... | Tup[N] 같은 느낌이 된다.
type TupNumber = Tup[number]