/**
 * 제네릭 클래스
 */
class CustomList {
    list;
    constructor(list) {
        this.list = list;
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const numList = new CustomList([1, 2, 3, 4]);
numList.pop();
numList.push(1);
numList.print();
export {};
