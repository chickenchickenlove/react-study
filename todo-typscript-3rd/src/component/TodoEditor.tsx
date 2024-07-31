import "./TodoEditor.css"
import React, {useCallback, useContext, useRef, useState} from "react";
import {TodoStateDispatchCtx} from "../Context";

function TodoEditor() {

    const [contents, setContents] = useState('');
    const idKey = useRef(1);

    const {onCreateNewTodo} = useContext(TodoStateDispatchCtx)
    const onUpdateContents = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setContents((_prevState) => e.target.value);
    }, []);

    const onSubmit = useCallback((_e: React.MouseEvent): void => {
        const newItem = {
            id: idKey.current,
            title: contents,
            date: new Date().getTime(),
            is_done: false
        };

        idKey.current += 1;
        onCreateNewTodo(newItem);
        setContents((_prevState) => '');
    },[contents]);

    return (
        <div className={"TodoEditor"}>
            <h3>새로운 Todo 작성하기✏️</h3>
            <div className={"editor_wrapper"}>
                <input
                    onChange={onUpdateContents}
                    value={contents}
                    placeholder={"새로운 Todo..."}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default React.memo(TodoEditor);