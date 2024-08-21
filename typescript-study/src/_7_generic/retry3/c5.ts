/**
 * Promise와 제네릭
 * - Promise에서 then이 특정 타입을 사용할 수 있도록 해보기
 * - Promise 타입을 반환하는 함수 짜보기. (Post)
 * interface Post {
 *     id: number;
 *     title: string;
 *     content: string;
 * }
 */


// Promise에서 then이 특정 타입을 사용할 수 있도록 해보기
const promise1 = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
        reject("reason");
    }, 3000);
})

promise1.then((value) => {
    console.log(value)}) // 아무것도 안하면 unknown이다. 그런데 내가 돌려주는 타입은 10이잖아. 그러니까 타입추론 할 수 있어야지.


promise1.catch((reason) => {
    console.log(reason);
})



// Promise 타입을 반환하는 함수 짜보기. (Post)
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, title: "t", content: "c"});
        }, 3000);
    })
}

const post = fetchPost();
post.then((post) => console.log(post));