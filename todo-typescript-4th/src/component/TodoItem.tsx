import "./TodoItem.css";
import {TodoItemType} from "../type/TodoType";
import React, {useCallback, useContext} from "react";
import {TodoDispatchersContext} from "../MyContext";


function TodoItem({ id, title, date, is_done}: TodoItemType) {
    const {onUpdateTodoItem, onDeleteTodoItem} = useContext(TodoDispatchersContext);

    const onUpdateCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateTodoItem({id, title, date, is_done: e.target.checked});
    }, []);

    const onClickDeleteButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        onDeleteTodoItem({id, title, date, is_done});
    }, []);

    return (
        <div className={"TodoItem"}>
            <input
                onChange={onUpdateCheck}
                checked={is_done}
                className={"checkbox_col"}
                type="checkbox"
            />
            <div className={"title_col"}>{title}</div>
            <div className={"date_col"}>{new Date().toLocaleDateString()}</div>
            <button
                onClick={onClickDeleteButton}
                className={"btn_col"}>삭제</button>
        </div>
    );
}

export default React.memo(TodoItem);

