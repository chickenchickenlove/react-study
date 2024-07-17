import "./TodoItem.css"

function TodoItem({
    id,
    content,
    isDone,
    createdDate,
    onUpdate,
    onDelete
}) {

    const onChangeCheckBox = () => {
        onUpdate(id); // id를 기준으로 props를 업데이트 한다.
    };

    const onDeleteButtonClicked = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input checked={isDone} onChange={onChangeCheckBox} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <button className="btn_col" onClick={onDeleteButtonClicked}>삭제</button>
        </div>
    );
}

export default TodoItem;