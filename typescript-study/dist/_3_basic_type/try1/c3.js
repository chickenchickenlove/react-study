/**
 * 기본 타입 간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: "hello1",
    color: "yellow1",
};
let dog = {
    name: "hello2",
    color: "yello2",
    breed: "jindo"
};
animal = dog;
// dog = animal // dog는 더 많은 프로퍼티를 가지고 있기 때문에 하위 타입이 됨.
/**
 * 초과 프로퍼티 검사는 생성할 때 사용되고, 캐스팅 할 때는 사용되지 않음.
 * 따라서 처음부터 자식 타입의 형태로 부모를 생성하려고 하면 실패함.
 */
let failCase = {
    name: "hello3",
    color: "yellow3",
    // breed: "jindo", // 이게 있으면 초과 프로퍼티 검사에 걸려서 실패함.
};
// 이런 형태로 만든 후에 캐스팅 해줘야 함.
let child = {
    name: "hello3",
    color: "yellow3",
    breed: "jindo", // 이게 있으면 초과 프로퍼티 검사에 걸려서 실패함.
};
let myAnimal = child;
export {};
