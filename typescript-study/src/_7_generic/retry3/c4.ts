/**
 * 제네릭 클래스
 * GenericList를 만들어봐라
 * - push()
 * - pop()
 * - print()
 * 구현
 */

class GenericList<T> {

    constructor(private list: T[]) {
        this.list = list;
    }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}
