import React from "react";
import {dummyTodoItems, TodoItemType} from "./DataModel";

export type TodoItemAction =
    | { type: "CREATE", item: TodoItemType }
    | { type: "DELETE", item: TodoItemType }
    | { type: "UPDATE", item: TodoItemType }

export type TodoItemContextType = {
    todoItems: TodoItemType[];
    };

export type DispatchContextType = {
    onCreateTodoItem: ((newTodoItem: TodoItemType) => void),
    onDeleteTodoItem: ((newTodoItem: TodoItemType) => void),
    onUpdateTodoItem: ((newTodoItem: TodoItemType) => void)
}

const defaultDispatchers: DispatchContextType = {
    onCreateTodoItem: (newTodoItem: TodoItemType) => {console.log(newTodoItem)},
    onDeleteTodoItem: (newTodoItem: TodoItemType) => {console.log(newTodoItem)},
    onUpdateTodoItem: (newTodoItem: TodoItemType) => {console.log(newTodoItem)}
}

export const TodoItemContext = React.createContext<TodoItemContextType>({todoItems: dummyTodoItems});
export const DispatchContext = React.createContext<DispatchContextType>(defaultDispatchers);
