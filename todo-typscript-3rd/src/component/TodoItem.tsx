import "./TodoItem.css"
import {TodoItemType} from "../type/TodoType";
import React, {useCallback, useContext} from "react";
import {TodoStateDispatchCtx} from "../Context";

function TodoItem({id, title, date, is_done}: TodoItemType) {
    const {onDeleteTodo, onUpdateTodo} = useContext(TodoStateDispatchCtx)
    const onClickDeleteButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        onDeleteTodo({id, title, date, is_done});
    }, []);

    const onCheckBoxUpdate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateTodo({id, title, date, is_done: e.target.checked})
    }, []);

    return (
        <div className={"TodoItem"}>
            <input
                checked={is_done}
                onChange={onCheckBoxUpdate}
                className={"checkbox_col"}
                type="checkbox"
            />
            <div className={"title_col"}>{title}</div>
            <div className={"date_col"}>{new Date(date).toLocaleDateString()}</div>
            <button
                onClick={onClickDeleteButton}
                className={"btn_col"}>삭제</button>
        </div>
    );
}

export default React.memo(TodoItem);