import "./TodoItem.css"
import {DispatcherContext, TodoItemType} from "../ContextUtil";
import {useContext} from "react";
import React from "react";

function TodoItem({
                      id,
                      title,
                      date,
                      isDone
}: TodoItemType) {

    console.log("TodoItem called", id, title, date, isDone)
    const {onDelete, onUpdate} = useContext(DispatcherContext);
    const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const deleteItem: TodoItemType = {
            id, title, date, isDone
        }
        onDelete(deleteItem);
    }

    const onChangeChecked = (e: any) => {
        const updateItem: TodoItemType = {
            id, title, date, isDone: !isDone
        }
        onUpdate(updateItem);
    };


    return (
        <div className="TodoItem">
            <input
                onChange={onChangeChecked}
                checked={isDone}
                className="checkbox_col"
                type="checkbox"/>
            <div className="title_col">{title}</div>
            <div className="date_col"> {new Date(date).toLocaleDateString()}</div>
            <button className="button_col" onClick={onClickButton}> 삭제</button>
        </div>
    )
}


export default React.memo(TodoItem);