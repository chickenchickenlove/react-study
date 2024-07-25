import "./TodoItem.css"
import { TodoItemType } from "../DataModel";

type InternalTodoItemType = {
    id: number,
    title: string,
    date: number,
    is_done: boolean,
    onDeleteTodoItem: (t: number) => void,
    onUpdateTodoItem: (t: number, s: boolean) => void
}


function TodoItem({
                      id,
                      title,
                      date,
                      is_done,
                      onDeleteTodoItem,
                      onUpdateTodoItem
                  }: InternalTodoItemType) {

    const onClickedDeleteButton = (_e: React.MouseEvent<HTMLButtonElement>) => {
        onDeleteTodoItem(id);
    }

    const onChangeCheckedButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateTodoItem(id, e.target.checked);
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

export default TodoItem;