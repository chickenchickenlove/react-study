import "./TodoEditor.css";
import React, {useContext, useRef, useState} from "react";
import {TodoDispatchersContext} from "../MyContext";


function TodoEditor() {
    const {onCreateTodoItem} = useContext(TodoDispatchersContext);
    const [contents, setContents] = useState('');
    const idRef = useRef(4);

    const onSubmit = (_: React.MouseEvent<HTMLButtonElement>) => {
        const newItem = {
            id: idRef.current,
            title: contents,
            date: new Date().getTime(),
            is_done: false
        };

        onCreateTodoItem(newItem);
        idRef.current += 1;
        setContents((_) => '');
    }

    const onUpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContents((_) => e.target.value);
    }

    return (
        <div className={"TodoEditor"}>
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className={"editor_wrapper"}>
                <input
                    value={contents}
                    onChange={onUpdateInput}
                    placeholder={"새로운 Todo..."}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;

