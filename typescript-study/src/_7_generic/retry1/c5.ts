/**
 * Generic을 이용해 Promise의 반환 타입까지 설정해보기.
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(10); // 명백하게 10을 돌려주는데도 unknown 타입으로 설정됨. => Promise 생성자에는 Generic이 지원됨.
        reject("Reject!");
    }, 3000);
});

// 아무것도 안하면 value => unknown
promise.then((value) => {
    console.log(value);
})

// 아무것도 안하면 => err는 any
promise.catch((err) => {
    console.log(err);
})


/**
 * Post 하나 받아와서 Console로 찍어주는 비동기 함수 생성
 */

type Post = {
    id: number;
    title: string;
    contents: string;
}

function fetchPost() {
    return new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                contents: "내용",
            })
        }, 3000);
    });
}


const post = fetchPost();
post.then((value) => console.log(value));