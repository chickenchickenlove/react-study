import "./TodoItem.css"

function TodoItem() {
    return (
        <div className={"TodoItem"}>
            <input
                className={"checkbox_col"}
                type="checkbox"
            />
            <div className={"title_col"}>{"contents"}</div>
            <div className={"date_col"}>{"date"}</div>
            <button className={"btn_col"}>삭제</button>
        </div>
    )
}

export default TodoItem;