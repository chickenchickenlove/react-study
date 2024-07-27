import "./TodoItem.css"
import { TodoItemType } from "../DataModel";
import React, {useContext, useMemo} from "react";
import {DispatchContext} from "../ContextUtils";

type InternalTodoItemType = {
    id: number,
    title: string,
    date: number,
    is_done: boolean
}


function TodoItem({
                      id,
                      title,
                      date,
                      is_done
                  }: InternalTodoItemType) {

    const {onDeleteTodoItem, onUpdateTodoItem} = useContext(DispatchContext);
    const onClickedDeleteButton = (_e: React.MouseEvent<HTMLButtonElement>) => {
        onDeleteTodoItem({ id, title, date, is_done });
    }

    const onChangeCheckedButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateTodoItem({ id, title, date, is_done: !is_done });
    }

    return (
        <div className="TodoItem">
            <input
                onChange={onChangeCheckedButton}
                checked={is_done}
                className="checkbox_col"
                type="checkbox"/>
            <div className="title_col">{title}</div>
            <div className="date_col">{new Date(date).toLocaleDateString()}</div>
            <button
                onClick={onClickedDeleteButton}
                className="btn_col">삭제
            </button>
        </div>
    )
}

export default React.memo(TodoItem);