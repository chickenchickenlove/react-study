/**
 * 제네릭으로 메서드 구현해보기
 * - map
 * - foreach
 */


function myMap<T, U>(items: T[], callback: (item: T) => U) {
    const result = [];
    for (const item of items) {
        result.push(callback(item));
    }
    return result;
}


function myForEach<T>(items: T[], callback: (item: T) => void) {
    for (const item of items) {
        callback(item);
    }
}





