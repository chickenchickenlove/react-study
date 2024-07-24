import "./TodoItem.css"

function TodoItem() {
    return (
        <div className="TodoItem">
            <input
                className="checkbox_col"
                type="checkbox"/>
            <div className="title_col">h</div>
            <div className="date_col"> h </div>
            <button className="btn_col">삭제</button>
        </div>
    )
}

export default TodoItem;