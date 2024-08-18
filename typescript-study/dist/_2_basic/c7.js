/**
 * - Void Type : 반환값이 없는 것을 의미함.
 * - never type : 절대로 일어날 수 없는 일을 의미함. 공집합을 의미함. Void는 일어날 수 있음.
 */
// Return Type : String
function func1() {
    return "Hello";
}
// Return Type : void
function func2() {
    console.log("hi!");
}
let a;
// Never
function func3() {
    while (true) {
        console.log(1);
    }
}
export {};
