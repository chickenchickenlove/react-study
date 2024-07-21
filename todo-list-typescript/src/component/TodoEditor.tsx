import "./TodoEditor.css"
import React, {useContext, useRef, useState} from "react";
import {DispatcherContext, TodoItemType, TodoStateContext} from "../ContextUtil";
import {MyCtx} from "../App";

function TodoEditor() {
    console.log("TodoEditor")
    const {onCreate} = useContext(DispatcherContext);

    const {index, setIndexMemo} = useContext(MyCtx);
    // const {index, setIndexMemo} = useContext(TodoStateContext);
    const [content, setContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!content ) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }

        submit();
        setContent("")
    }

    const submit = () => {
        console.log("submit")
        const newTodo: TodoItemType = {
            id: index,
            title: content,
            date: new Date().getTime(),
            isDone: false
        };
        // cons
        onCreate(newTodo);
        setIndexMemo();
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            submit();
        }
    }

    return (
        <div className="TodoEditor">
            <div> 새로운 Todo 작성하기 ✏️</div>
            <div className="editor_container">
                <input
                    className="editor_input"
                    type="text"
                    value={content}
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                    onChange={onChangeContent}
                    placeholder={"새로운 Todo..."} />
                <button className="editor_button" onClick={onSubmit}> 추가 </button>
            </div>
        </div>
    )
}

export default React.memo(TodoEditor);