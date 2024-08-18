/**
 * 서로소 Union Type
 * - 교집합 (intersection)이 없는 타입. (And 조건이 하나도 없음)
 * - 예시 : string | number
 * - 주로 서로 다른 타입을 완전히 분리할 때 사용함. (Tag 등을 이용해서 분리함)
 * - 여러 타입이 올 수 있는데, 그 중에서 분기를 타야하고 안전한 코드를 사용하고 싶을 때 유용하게 쓸 수 있음.
 */



// Tag를 추가하면 좀 더 분별하기 쉬운 서로소 유니온 타입을 생성함.

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

// 서로소 유니온 타입임.
type User = Admin | Member | Guest


// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
    // 이 코드는 가독성이 좋지 않음. => Property로만 처리하니
    if ('kickCount' in user) {
        // Admin
    }
    else if ('point' in user) {
        // User
    }
    else if ('visitCount' in user) {
        // Guest
    }
}

function loginImproved(user: User) {
    // 더 읽기 편하다.
    switch (user.tag) {
        case "ADMIN":
            break
        case "MEMBER":
            break
        case "GUEST":
            break
    }
}


// 서로소 유니온 추가 사례
// 비동기 작업의 결과를 처리하는 객체
type AsyncTask = {
    state: "LOADING" | "FAILED" | 'SUCCESS';
    error?: {
        message: string;
    };
    response?: {
        data: string;
    }
}

const loading: AsyncTask = {
    state: "LOADING",
}

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~~",
    }
}

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    }
}

// 로딩 중 - >콘솔에 로딩중 출력
// 실패 -> 실패 : 에러 메세지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING':
            console.log('로딩 중')
            break;
        case 'FAILED':
            console.log(`에러 발생 : ${task.error?.message}`) // 옵셔널 체이닝이 남아있음.
        case 'SUCCESS':
            console.log(`성공 : ${task.response?.data}`); // 옵셔널 체이닝
    }
}

// 옵셔널 체이닝을 없애주기 위해서 깔끔하게 분리해줄 수 있음.
// 서로소 유니온 타입으로 분리해서 처리가 완료됨.

type LoadingTask = {
    state: "LOADING";
}

type FailedTask = {
    state: "FAILED";
    error: { message: string;}
}

type SuccessTask = {
    state: "SUCCESS";
    response: { data: string;}
}

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask
const loading2: AsyncTask2 = {
    state: "LOADING",
}

const failed2: AsyncTask2 = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~~",
    }
}

const success2: AsyncTask2 = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    }
}

function processResult2(task: AsyncTask2) {
    switch (task.state) {
        case 'LOADING':
            console.log('로딩 중')
            break;
        case 'FAILED':
            console.log(`에러 발생 : ${task.error.message}`)
            break;
        case 'SUCCESS':
            console.log(`성공 : ${task.response.data}`);
            break;
    }
}
