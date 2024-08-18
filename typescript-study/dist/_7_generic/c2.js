/**
 * Generic
 * 1. Map 함수 구현
 * 2. Foreach 함수 구현
 */
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]
// Any로는 쓰는 쪽이 고통스러움.
// Generic으로 타입을 좁혀주자.
function CustomMap(arr, callback) {
    const ret = [];
    for (let i = 0; i < arr.length; i++) {
        ret.push(callback(arr[i]));
    }
    return ret;
}
/**
 * Foreach
 */
const arr1 = [1, 2, 3];
arr1.forEach((it) => console.log(it));
function forEachCustom(arr, callback) {
    for (const arrElement of arr) {
        callback(arrElement);
    }
}
export {};
