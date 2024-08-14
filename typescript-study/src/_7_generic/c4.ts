/**
 * Generic Class
 * - 선언 방법
 * - 제네릭 클래스는 이런 형태로 선언 가능함.
 */

class NumberList<T> {
    constructor(private list: T[]) {
        this.list = list;
    }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop;
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

