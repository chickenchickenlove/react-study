/**
 * 타입 좁히기
 * - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 좁히는 방법임.
 * - instanceof : 객체에게만 가능함.
 * - typeof : 타입을 추론할 수 있음. 그런데 타입이 string으로 표현되기 때문에 실수할 수 있음.
 */
function func(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    }
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    // else if (typeof value === 'Date') { => Date는 객체 타입이기 때문에 'object'로 해야함.
    // else if (typeof value === 'object') {
    // 그런데 ojbect만으로는 어떤 타입인지 모르기 때문에 타입 단언을 해야함.
    //    console.log((value as Date).getTime())
    //} // 이렇게 쓰는 것은 위험하기 때문에 객체에게는 instanceOf를 쓰자.
    else if (value instanceof Date) {
        console.log(value.getTime());
    }
    // Person은 객체가 아니라 Type임. 따라서 instanceof를 사용할 수 없음.
    // else if (value instanceof Person) {}
    // Value가 null이 아니고 + 어떤 프로퍼티가 있냐로 할 수 있음.
    else if (value && 'name' in value && 'age' in value) {
        console.log(value.name);
    }
    else {
        // 나머지는 null임.
    }
}
export {};
