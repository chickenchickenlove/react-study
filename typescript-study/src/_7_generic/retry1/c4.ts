/**
 * 제네릭 클래스
 */

class CustomList<T> {
    constructor(private list: T[]) {
        this.list = list
    }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list)
    }
}

const numList = new CustomList([1,2,3,4])
numList.pop();
numList.push(1);
numList.print();

