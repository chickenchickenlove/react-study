/**
 * - Union Type : Or 연산자 (합집합)
 * - Intersection Type : And 연산자 (교집합)
 *
 */
/**
 * Union: '|'로 선언.
 */
let a;
a = 1;
a = '1';
let arr = [1, '1', true];
// 두 개 모두 가능. (교집합으로도 볼 수 있음. 두 개 다 가지고 있으니까. 집합 다이어그램을 떠올려봐 )
let union1 = {
    name: '',
    color: '',
    language: '',
};
// Dog 타입도 가능
let union2 = {
    name: '',
    color: '',
};
// Person 타입도 가능
let union3 = {
    name: '',
    language: '',
};
/**
 * Intersection Type: '&'로 선언
 */
let variable;
let intersection = {
    name: '',
    color: '',
    language: '',
};
export {};
