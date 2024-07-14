import "./TodoEditor.css"

function TodoEditor() {

    const textAreaHolder = "새로운 Todo..."

    return (
        <div className="TodoEditor">
            <h3> 새로운 Todo 작성하기 ✏️</h3>
            <div className="editor_wrapper">
                <input placeholder={textAreaHolder}/>
                <button> 추가</button>
            </div>

        </div>
    );
}


export default TodoEditor;