/**
 * 사용자 정의 타입가드
 * - 함수의 반환 타입으로 특정 조건이 참일 때만 타입이 좁혀질 수 있도록 하는 방법임.
 * - 반환 타입을 'value is Type' 형식으로 정의함.
 * - 반환 타입은 조건이 참일 때, 주어진 value가 특정 Type임을 보장함.
 */
function warning(animal) {
    // 만약 여기서 Dog, Cat에 따라 다르게 하고 싶다면 Type에 Tag를 넣어야 함.
    // 그러나 타입을 내가 만질 수 없는 라이브러리 코드면 불가능하다. => 안정적인 코드가 아님.
    if ("isBark" in animal) {
        // 개다
    }
    else if ("isScratch" in animal) {
        // 고양이다.
    }
}
// 이런 부분들을 해소하기 위해서 나온 것이 타입가드다.
// animal is Dog로 타입 가드를 하면, return이 True일 때 Dog가 됨.
function isDog(animal) {
    // 타입 단언(as Dog)으로 Casting 한 후에, isBark가 있는지 확인한다.
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning2(animal) {
    if (isDog(animal)) {
        // 개다
        console.log(animal);
    }
    else if (isCat(animal)) {
        // 고양이다.
        console.log(animal);
    }
}
export {};
