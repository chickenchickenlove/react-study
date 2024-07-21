import {TodoListType} from "./ContextUtil";

const mockData: TodoListType = [
    {
        id: 1,
        title: "React 공부하기",
        date: new Date().getTime(),
        isDone: true
    },
    {
        id: 2,
        title: "Typescript 공부하기",
        date: new Date().getTime(),
        isDone: false
    },
    {
        id: 3,
        title: "Javascript 공부하기",
        date: new Date().getTime(),
        isDone: false
    }
]