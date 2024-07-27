import "./TodoList.css"
import TodoItem from "./TodoItem";
import {useContext, useEffect, useState} from "react";
import {TodoItemContext} from "../ContextUtils";


function TodoList() {
    console.log("TodoList")
    const [searchKey, setSearchKey] = useState('');
    const {todoItems} = useContext(TodoItemContext);

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
                {todoItems
                    .filter((it) => it.title.includes(searchKey))
                    .map((it) => <TodoItem key={it.id} {...it} />)}
            </div>
        </div>

    );
}

export default TodoList;