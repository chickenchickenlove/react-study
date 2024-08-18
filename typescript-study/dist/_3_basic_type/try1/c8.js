/**
 * 서로소 Union Type
 * - 교집합 (intersection)이 없는 타입. (And 조건이 하나도 없음)
 * - 예시 : string | number
 * - 주로 서로 다른 타입을 완전히 분리할 때 사용함. (Tag 등을 이용해서 분리함)
 * - 여러 타입이 올 수 있는데, 그 중에서 분기를 타야하고 안전한 코드를 사용하고 싶을 때 유용하게 쓸 수 있음.
 */
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user) {
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
function loginImproved(user) {
    // 더 읽기 편하다.
    switch (user.tag) {
        case "ADMIN":
            break;
        case "MEMBER":
            break;
        case "GUEST":
            break;
    }
}
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~~",
    }
};
const success = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    }
};
// 로딩 중 - >콘솔에 로딩중 출력
// 실패 -> 실패 : 에러 메세지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task) {
    switch (task.state) {
        case 'LOADING':
            console.log('로딩 중');
            break;
        case 'FAILED':
            console.log(`에러 발생 : ${task.error?.message}`); // 옵셔널 체이닝이 남아있음.
        case 'SUCCESS':
            console.log(`성공 : ${task.response?.data}`); // 옵셔널 체이닝
    }
}
const loading2 = {
    state: "LOADING",
};
const failed2 = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~~",
    }
};
const success2 = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    }
};
function processResult2(task) {
    switch (task.state) {
        case 'LOADING':
            console.log('로딩 중');
            break;
        case 'FAILED':
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        case 'SUCCESS':
            console.log(`성공 : ${task.response.data}`);
            break;
    }
}
export {};
