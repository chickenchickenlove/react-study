import "./TodoList.css"
import TodoItem from "./TodoItem";
import {Dispatch, ReactHTMLElement, useState} from "react";
import {TodoItemType} from "../DataModel";

type TodoListInputType = {
    todoItems: TodoItemType[];
    onDeleteTodoItem: (t: number) => void
    onUpdateTodoItem: (t: number, s: boolean) => void
}

function TodoList({ todoItems, onDeleteTodoItem, onUpdateTodoItem }: TodoListInputType ) {

    const [searchKey, setSearchKey] = useState('');

    const onUpdateSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey((_prevState) => e.target.value);
    };


    return (
        <div className="TodoList">
            <input
                value={searchKey}
                onChange={onUpdateSearchBar}
                className="searchBar"
                placeholder="검색어를 입력하세요"
            />
            <div className="list_wrapper">
                {todoItems.map((it) => <TodoItem key={it.id} onDeleteTodoItem={onDeleteTodoItem} onUpdateTodoItem={onUpdateTodoItem} {...it} />)}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
            </div>

        </div>

    )
}

export default TodoList;