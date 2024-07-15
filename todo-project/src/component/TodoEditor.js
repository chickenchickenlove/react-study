import "./TodoEditor.css"
import {useRef, useState} from "react";

function TodoEditor({ onCreate }) {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    // Enter를 눌러 아이템 추가하기.
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        // 빈 입력 방지.
        if (!content) {
            inputRef.current.focus(); // 커서를 그곳에 가져다 두도록 하는 기능임.
            return;
        }
        onCreate(content);
        setContent(""); // 입력 후, 입력창 제거.
    }

    return (
        <div className="TodoEditor">
            <h3> 새로운 Todo 작성하기 ✏️</h3>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}> 추가 </button>
            </div>

        </div>
    );
}


export default TodoEditor;