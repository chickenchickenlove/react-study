/**
 * Generic을 이용해 Promise의 반환 타입까지 설정해보기.
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10); // 명백하게 10을 돌려주는데도 unknown 타입으로 설정됨. => Promise 생성자에는 Generic이 지원됨.
        reject("Reject!");
    }, 3000);
});
// 아무것도 안하면 value => unknown
promise.then((value) => {
    console.log(value);
});
// 아무것도 안하면 => err는 any
promise.catch((err) => {
    console.log(err);
});
function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                contents: "내용",
            });
        }, 3000);
    });
}
const post = fetchPost();
post.then((value) => console.log(value));
export {};
