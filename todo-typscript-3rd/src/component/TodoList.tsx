import "./TodoList.css"
import React from "react";
import TodoItem from "./TodoItem";
import {useCallback, useContext, useState} from "react";
import {TodoStateCtx} from "../Context";

function TodoList() {
    const {todoItems} = useContext(TodoStateCtx);
    const [searchKey, setSearchKey] = useState('')

    const onUpdateSearchKey = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey((prevState) => e.target.value);
    }, []);

    return (
        <div className={"TodoList"}>
            <input
                value={searchKey}
                onChange={onUpdateSearchKey}
                className={"searchBar"}
                placeholder={"검색어를 입력하세요."}
            />
            <div className={"list_wrapper"}>
                {
                    todoItems
                        .filter((it) => it.title.includes(searchKey))
                        .map((it) => {return <TodoItem key={it.id} {...it} />})
                }
            </div>
        </div>
    )
}

export default React.memo(TodoList);