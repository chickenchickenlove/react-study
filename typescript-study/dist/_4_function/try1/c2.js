/**
 * 함수 타입의 호환성
 * - 특정 함수는 다른 함수에 호환될 수 있을까?
 * - 체크리스트
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 * 두 기준이 모두 만족할 때, 함수가 호환되고 컴파일러가 불평하지 않는다.
 */
let a = () => 10;
let b = () => 10;
// A 타입은 B Type에 호환되지 않음. A 타입은 number 타입을 반환하는데, B는 10만 반환해야한다.
// 그런데 현재 a 함수는 10 말고도 다른 값을 반환할 수 있기 때문에 b 함수에 a 함수를 넣을 수는 없음.
// 반대로 b 함수는 10을 반환하지만, a 함수는 10을 포함해서 number를 반환하면 되기 때문에 문제가 없음.
a = b;
let c = (value) => { };
let d = (value) => { };
// d는 10이라는 특정 값만 받을 수 있음.
// c는 아무 숫자 값을 받을 수 있다.
// 만약에 d함수를 c함수에 넣게 되면, c함수에는 11, 12 같은 값도 올 수 있을텐데 이 때 에러가 발생함.
// c = d;
// d = c는 가능하다.
// c는 number 타입만 받아야 함.
// d는 10 타입만 받아야함.
// d 함수에 c를 넣더라도, c 타입에는 10이라는 값만 올 수 있는데 <- 이게 중요함.
// 이 10이라는 값은 d에서 처리할 수 있다. 왜냐하면 d는 number type을 처리하기 때문
// 따라서 호환 가능하다.
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// dogFunc가 (animal: Animal): void 타입이 되는 것임.
// 그런데 dogFunc는 dog.color도 호출하는데, animal 타입에는 animal.color가 없다.
// animalFunc = dogFunc // => 컴파일 에러 발생함.
dogFunc = animalFunc;
let func1 = (a, b) => console.log('1');
let func2 = (a) => console.log('1');
func1 = func2;
export {};
// func2 = func1 // 컴파일 에러 발생.
// 이건 (a: number)에 (a: number, b: number) 타입이 들어가는건데, b가 없다고 고려됨.
// 결론...
// 1. 반환 타입은 업캐스팅 관개일 때 가능함.
// 2-1. 매개변수 타입이 다를 때 => 슈퍼타입인 경우에만 호환됨. (다운
// 2-2. 매개변수 개수가 다를 때 => 매개변수가 적은 타입은 매개변수가 많은 타입으로 호환되지만, 반대는 안됨.
