import "./TodoEditor.css"
import {TodoItemType} from "../DataModel";
import React, {useRef, useState} from "react";
import TodoItem from "./TodoItem";

type TodoEditorInputType = {
    setTodoItems: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

function TodoEditor({ setTodoItems }: TodoEditorInputType) {

    const [contents, setContents] = useState('');
    const myRef = useRef<string>('');
    const onUpdateContents = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContents(e.currentTarget.value);
    }

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newTodoItem: TodoItemType = {
            id: 100,
            title: contents,
            date: new Date().getTime(),
            is_done: false
        };

        setTodoItems((prevState: TodoItemType[]) => {
            return [
                newTodoItem,
                ...prevState,
            ];
        });

        setContents((prevState) => '');
    };

    return (
        <div className="TodoEditor">
            <h3> 새로운 Todo 작성하기 ✏️</h3>
            <div className="editor_wrapper">
                <input
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

export default TodoEditor;