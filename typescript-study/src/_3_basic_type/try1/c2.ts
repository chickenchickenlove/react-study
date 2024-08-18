/**
 * Type Unknown
 * - 최상위 타입임. 자바의 Object와도 동일함.
 *
 * Type Never
 * - 최하위 타입임.
 * - 공집함임.
 * - 절대로 발생할 수 없는 타입임.
 *
 * Type Void
 * - return 문이 없는 함수의 반환 타입
 * - undefined 타입의 Super type이 void임. (void > undefined)
 *
 * Type Any
 * - 치트키 타입임. never를 제외한 어떠한 타입으로도 다운 / 업 캐스팅 가능함.
 * - 이걸 쓰면 타입 스크립트를 사용하는 의미가 없음.
 */

function unknownExam() {

    // 아무 타입이나 올 수 있음. (업캐스팅은 쌉가능)
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = undefined;
    let e: unknown = null;

    let unknownVar: unknown
    // 다운 캐스팅은 안됨. => 컴파일 에러 발생.
    // let num: number = unknownVar;
    // let str: string = unknownVar;
}


/**
 * Never Type
 */

function neverExam() {

    // 반환할 수 있는 값이 아무것도 없음.
    function neverFunc(): never {
        while (true) { }
    }

    // Never는 최하위 타입임. 따라서 number / string / boolean => never는 Downcasting임.
    // 그리고 never를 number, string, boolena 타입에 넣어도 무방함.
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}


/**
 * Void Type
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;

}

/**
 * Any Type
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let neverVar: never;
    let undefinedVar: undefined;

    anyVar = unknownVar;
    anyVar = undefinedVar;

    undefinedVar = anyVar;
    unknownVar = anyVar;

    // any는 Never로 Up/Down Casting이 안됨.
    // anyVar = neverVar;
    // neverVar = anyVar;
}

