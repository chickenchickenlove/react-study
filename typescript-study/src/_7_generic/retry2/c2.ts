/**
 * 제네릭으로 메서드 구현해보기
 * - map
 * - foreach
 */


// Map 구현하기
[1, 2, 3, 4, 5]
    .map((it) => (it * 2));

function myMap<T, U>(iter: T[], callback: (data: T) => U) {
    const result: U[] = [];
    for (const t of iter) {
        result.push(callback(t));
    }
    return result;
}



// forEach 구현하기
[1, 2, 3, 4, 5]
    .forEach((it) => console.log(it));

function myForEach<T>(items: T[], callback: (item: T) => void) {
    for (const item of items) {
        callback(item);
    }
}