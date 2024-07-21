import "./TodoList.css"
import TodoItem from "./TodoItem";
import {TodoStateContext, TodoListType} from "../ContextUtil";
import React, {useEffect, useState} from "react";


function TodoList() {

    const {todo} = React.useContext(TodoStateContext);
    const [filteredTodo, setFilteredTodo] = useState(todo);

    const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredTodo(todo.filter((it) => it.title.includes(e.currentTarget.value)));
    };

    useEffect(() => {
        setFilteredTodo(todo);
    }, [todo]);

    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input
                className="search_container"
                type="text"
                onChange={onChangeSearchKeyword}
                placeholder={"검색어를 입력하세요"}/>
            <div className="todo_list_container">
                {filteredTodo.map((it) => {
                    return (<TodoItem key={it.id} {...it}/>)
                })}
            </div>
        </div>
    )
}


export default TodoList;