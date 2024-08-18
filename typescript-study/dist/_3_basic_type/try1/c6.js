/**
 * 타입 단언
 * - TS는 대부분 타입을 잘 추론하나, 추론하지 못하는 경우도 있음.
 * - 이 때는 타입 단언을 이용해 타입을 명확히 해줄 수도 있음.
 * - 단언식 : A as B (단, A는 B의 슈퍼 / 서브 타입이어야 함)
 * - Non Null 단언으로 Optional Chaining을 해소시켜줄 수 있으나, 위험한 코드다.
 */
/*
// 이 경우에는 에러가 발생함.
let person1: Person = {};
person1.name = '홍길동';
person1.age = 30;

*/
// Any => 에러가 발생하지 않음. 그러나 사용하는 쪽에서 곤란하기 때문에 안 쓰는게 좋음.
let person2 = {};
person2.name = '홍길동';
person2.age = 30;
/*
// 이 경우에도 에러가 발생함.
// 타입 자체가 빈 객체 타입이기 때문에 Attribute를 추가하는 것을 막음.

let person3 = {};
person3.name = '홍길동';
person3.age = 30 ;

*/
// '타입 단언'임.
// 만약 이게 없었다면 person은 타입 추론에 의해 {} 타입이 되어서 에러가 발생했을 것임.
let person4 = {};
person4.name = '홍길동';
person4.age = 30;
let post = {
    title: 't',
    author: 'a',
};
// post.author?.length // optional 필드이기 때문에 null 일 수도 있다. 따라서 옵셔널 체이닝이 반드시 발생함.
// 이런 문법은 위험하다.
// '!' 를 이용하면 non null 타입 단언이 된다.
// 그래도 아무튼 위험함...
post.author.length;
export {};
