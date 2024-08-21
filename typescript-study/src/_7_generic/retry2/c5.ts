/**
 * Promise와 제네릭
 */


// TaskExecutor를 실행 => 성공하면 resolve 호출, 실패하면 reject 호출
// Promise 생성자를 보면 제네릭으로 선언 가능한 것을 알 수 있음.

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        reject("no!");
    }, 3000);
});

// 여기서 resolve에는 1을 넘겨주는데, value는 unknown이 오고 있음.
// Generic으로 생성할 수 있기 때문에 number type으로 제네릭 선언해주면 됨.
promise.then((value) => {console.log(value);})
    .catch((reason) => console.log(reason));





/**
 * 프로미스를 반환하는 함수의 타입을 정의해보자. => 서버로부터 하나의 게시글 데이터를 불러오는 함수
 * 정의하고 then() 절에서 써보자.
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                content: "내용"
            })
        })
    });
}

const postRequest = fetchPost();
postRequest.then((value) => {
    console.log(value.id);
})

