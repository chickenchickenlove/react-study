import "./TodoList.css";
import TodoItem from "./TodoItem";
import {useContext, useState} from "react";
import {TodoStateContext} from "../MyContext";


function TodoList() {
    const todoItems = useContext(TodoStateContext);
    const [searchKey, setSearchKey] = useState('');

    const onUpdateSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey((_) => e.target.value);
    }

    return (
        <div className={"TodoList"}>
            <h3>Todo List 🌱</h3>
            <input
                value={searchKey}
                onChange={onUpdateSearchKey}
                className={"searchBar"}
                placeholder={"검색어를 입력하세요"}
            />
            <div className={"list_wrapper"}>
                {
                    todoItems
                        .filter((it) => it.title.includes(searchKey))
                        .map((it) => {
                        return <TodoItem key={it.id} {...it}></TodoItem>
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;

