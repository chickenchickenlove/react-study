/**
 * 인터페이스의 확장.
 * - extends 키워드를 이용하면 됨.
 * - A extends B인 경우, B는 A의 슈퍼 타입이어야 함.
 */


interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isMeow: boolean;
}

interface Chicken extends Animal {
    hasWings: boolean;
}

const chicken: Chicken = {
    name: '치킨',
    age: 20,
    hasWings: true,
}


