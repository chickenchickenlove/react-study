/**
 * 조건부 타입
 * - 삼항 연산자를 이용해 타입을 결정함.
 * - 조건부 타입은 제네릭과 함께 사용할 때 매우 유용함.
 * number extends string ? string : number;
 * (number extends string)까지가 한덩어리임.
 */

// 조건부 타입 예시 => 삼항 연산자에 주목

type A = number extends string ? string : number;


// 객체 타입으로 예시
type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

// 참이기 때문에 ObjB extends number가 됨.
type B = ObjB extends ObjA ? number : string;

// 제네릭 + 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> // => string
let varB: StringNumberSwitch<string> // => number




// 또 다른 예시
// 너무 많은 타입이 있어서 함수 내에서 쪼개기 구현을 해야함...
function removeSpaces(text: string | undefined | null) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}


function removeSpaces1<T>(text: T): T extends string ? string : undefined;
function removeSpaces1<T>(text: T) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}

// 첫번째 방식으로 사용할 경우, 반환값이 string 혹은 undefined가 될 수 있어서 사용하는 쪽에서 타입 좁히기를 한번 더 해야함.
// 두번째 방식에서는 T를 반환하기 때문에 처음 타입으로 반환 타입을 추론 가능하다. 따라서 사용하는 쪽에서는 고려하지 않아도 되게 됨.
let result = removeSpaces("Hi im hong.");  // => 여기서는 반환 타입이 string | undefined임.
let result1 = removeSpaces1("Hi im hong.");  // => 여기서는 반환 타입이 string이 됨.