/**
 * 인터페이스의 확장
 */


// Animal + Dog / Cat으로 확장해보자.
// Animlal : name, age

interface Animal {
    name: string;
    age: number
}

interface Dog extends Animal {
    isBarked: boolean
}

interface Cat extends Animal {
    isMeow: boolean;
}


const cat: Cat = {
    name: "i'm cat",
    age: 59,
    isMeow: true,
}






