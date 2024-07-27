import "./TodoEditor.css"
import {TodoItemType} from "../DataModel";
import React, {useCallback, useContext, useState} from "react";
import {DispatchContext} from "../ContextUtils";

type TodoEditorInputType = {
    idKey: React.MutableRefObject<number>,
};

function TodoEditor({ idKey }: TodoEditorInputType) {
    const [contents, setContents] = useState('');
    const {onCreateTodoItem} = useContext(DispatchContext);
    const onUpdateContents = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setContents((_prevState) => e.target.value);
    }, []);

    const onButtonClick = useCallback((_e: React.MouseEvent<HTMLButtonElement>): void => {
        const newTodoItem: TodoItemType = {
            id: idKey.current,
            title: contents,
            date: new Date().getTime(),
            is_done: false
        };

        idKey.current += 1

        onCreateTodoItem(newTodoItem);
        setContents((_prevState) => '');
    }, [contents]);

    return (
        <div className="TodoEditor">
            <h3> 새로운 Todo 작성하기 ✏️</h3>
            <div className="editor_wrapper">
                <input
                    // Value와 EventHandler는 같이 선언되어야 한다.
                    // input 요소에서 value 속성을 제어할 때는 반드시 onChange 이벤트 핸들러를 함께 지정해야 함.
                    // 그렇지 않으면 입력 필드가 읽기 전용이 되어 사용자가 값을 변경할 수 없게 됩니다.
                    value={contents}
                    onChange={onUpdateContents}
                    placeholder="새로운 Todo..."
                />
                <button
                    onClick={onButtonClick}
                >추가</button>
            </div>
        </div>
    )
}

export default React.memo(TodoEditor);