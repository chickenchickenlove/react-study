import React from "react";
import {TodoItemType, TodoStateCtxType} from "./type/TodoType";

type TodoStateDispatchCtxType = {
    onCreateNewTodo: (item: TodoItemType) => void,
    onDeleteTodo: (item: TodoItemType) => void,
    onUpdateTodo: (item: TodoItemType) => void,
}

export const TodoStateCtx = React.createContext<TodoStateCtxType>({todoItems: []});
export const TodoStateDispatchCtx = React.createContext<TodoStateDispatchCtxType>({
    onCreateNewTodo: ((item) => {console.log(item)}),
    onDeleteTodo: ((item) => {console.log(item)}),
    onUpdateTodo: ((item) => {console.log(item)})
})
