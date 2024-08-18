/**
 * Generic을 이용해 map, foreach 구현해보기
 */
// map 구현
function map(items, callback) {
    const result = [];
    for (const item of items) {
        result.push(callback(item));
    }
    return result;
}
const a1 = [1, 2, 3, 4]
    .map((it) => it * 2);
// foreach 구현
function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}
[1, 2, 3, 4]
    .forEach((it) => console.log(it));
export {};
