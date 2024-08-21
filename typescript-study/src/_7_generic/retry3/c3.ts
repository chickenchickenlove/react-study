/**
 * 제네릭 인터페이스
 * 제네릭 인터페이스의 인덱스 시그니처
 * Generic Type Alias
 * 코드에서 타입 좁히기를 줄이기 위해 제네릭 별칭을 많이 쓰자.
 *
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 * -> goToSchool() 함수 구현 -> 학생이면 학교에 간다고 하고, 개발자면 잘못 왔다고 표현.
 * -> 개선 버전 : 호출하는 시점부터 학생인 경우에만 호출할 수 있도록 수정!
 */

// 제네릭 인터페이스
interface KeyPair<T, U> {
    key: T;
    value: U;
}


interface GenericMap<T> {
    [key: string]: T;
}

const stringMap: GenericMap<string> = {
    "hello": "hello"
}

const numberMap: GenericMap<number> = {
    "hello": 1
}



/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 * -> goToSchool() 함수 구현 -> 학생이면 학교에 간다고 하고, 개발자면 잘못 왔다고 표현.
 * -> 개선 버전 : 호출하는 시점부터 학생인 경우에만 호출할 수 있도록 수정!
 */


// 아래는 실수하기 쉬운 코드
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User {
    name: string;
    profile: Student | Developer;
}

function goToSchool1(user: User) {
    if (user.profile.type === 'student') {
        console.log(`${user.profile.school}로 잘 도착했습니다.`)
    } else {
        console.log("잘못 오셨어요.")
    }
}

// 애초에 분리하지 않고, 쓰는 쪽에서 타입이 다른 경우에 못 오게 하려면?
// 제네릭을 쓰면 됨.

interface User1<T extends Student | Developer> {
    name: string;
    profile: T;
}

function goToSchool2(user: User1<Student>) {
    console.log(`${user.profile.school}로 잘 도착했습니다.`)
}


