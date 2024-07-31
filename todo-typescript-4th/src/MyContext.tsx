import React from "react";
import {TodoDispatchersType, TodoItemType} from "./type/TodoType";

export const TodoStateContext = React.createContext<TodoItemType[]>([]);
export const TodoDispatchersContext = React.createContext<TodoDispatchersType>(
    {
        onCreateTodoItem: item => console.log("item"),
        onDeleteTodoItem: item => console.log("item"),
        onUpdateTodoItem: item => console.log("item"),
    });