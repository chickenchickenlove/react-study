/**
 * Promise와 Generic
 */


// TaskExecutor를 실행 => 성공하면 resolve 호출, 실패하면 reject 호출
// Promise 생성자를 보면 제네릭으로 선언 가능한 것을 알 수 있음.
const promise = new Promise<number>((resolve, reject) => {

    // resolve: 비동기 작업 성공 시, 결과값 전달하는 함수 => then()과 연결
    // reject: 비동기 작업 실패 시, 그것을 알려주는 함수 => catch()와 연결

    setTimeout(() => {
        resolve(20);
        reject("~~때문에 실패")

    }, 3000);
});

// 성공했을 때 then 호출
// Promise의 Generic을 number로 하지 않았을 경우, response는 unknown으로 추론된다.
promise.then((response) => {
    console.log(response * 10);
})

// 실패했을 때 catch 호출
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
})


/**
 * 프로미스를 반환하는 함수의 타입을 정의해보자. => 서버로부터 하나의 게시글 데이터를 불러오는 함수
 */

interface Post {
    id: number;
    title: string;
    content: string;
}


function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, title: '제목', content: '내용'})
        }, 3000);
    });
}


const postRequest = fetchPost();
postRequest.then((post) => {
    console.log(post.id);
});