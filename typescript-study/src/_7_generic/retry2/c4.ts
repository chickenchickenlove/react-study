/**
 * 제네릭 클래스: 선언 방법
 */


class NumberList<T> {

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

const numList = new NumberList([1,2,3,4,5])
numList.push(1);
numList.pop()
numList.print();
