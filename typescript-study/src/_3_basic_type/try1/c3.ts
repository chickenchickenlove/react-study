/**
 * 기본 타입 간의 호환성
 */


let num1: number = 10;
let num2: 10 = 10;

num1 = num2
// num2 = num1 // 리터럴 타입은 좀 더 세분화 된 타입이다. 즉, 자식 타입이라고 볼 수 있음.


/**
 * 객체 타입 간의 호환성
 * - property를 기준으로 SubType / Supertype이 나누어 짐.
 *
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}


let animal: Animal = {
    name: "hello1",
    color: "yellow1",
}


let dog: Dog = {
    name: "hello2",
    color: "yello2",
    breed: "jindo"
}

animal = dog;
// dog = animal // dog는 더 많은 프로퍼티를 가지고 있기 때문에 하위 타입이 됨.

/**
 * 초과 프로퍼티 검사는 생성할 때 사용되고, 캐스팅 할 때는 사용되지 않음.
 * 따라서 처음부터 자식 타입의 형태로 부모를 생성하려고 하면 실패함.
 */

let failCase: Animal = {
    name: "hello3",
    color: "yellow3",
    // breed: "jindo", // 이게 있으면 초과 프로퍼티 검사에 걸려서 실패함.
}

// 이런 형태로 만든 후에 캐스팅 해줘야 함.
let child: Dog = {
    name: "hello3",
    color: "yellow3",
    breed: "jindo", // 이게 있으면 초과 프로퍼티 검사에 걸려서 실패함.
}
let myAnimal: Animal = child;

