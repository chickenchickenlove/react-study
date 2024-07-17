import "./TodoList.css"
import TodoItem from "./TodoItem";
import {useState} from "react";

function TodoList( {todo, onUpdate, onDelete} ) {

    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) =>
                it.content.toLowerCase().includes(search.toLowerCase()));
    };

    const myFunc = (it) => {
        return <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
    };

    return (
        <div className="TodoList">
            <h4> Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                className="searchBar"
                placeholder="검색어를 입력하세요." />
            <div className="list_wrapper">
                {getSearchResult().map(myFunc)}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
            </div>

        </div>
    )
}

export default TodoList;