export type TodoItemType = {
    id: number,
    title: string,
    date: number,
    is_done: boolean
};

export const dummyTodoItems = [
    {id: 10, title: "hello1", date: new Date().getTime() + 1, is_done: false},
    {id: 11, title: "hello2", date: new Date().getTime() + 2, is_done: false},
    {id: 12, title: "hello3", date: new Date().getTime() + 3, is_done: false}
];