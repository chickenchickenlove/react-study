import React from "react";

export type ActionType =
    | { type: "CREATE", data: TodoItemType}
    | { type: "DELETE", id: number}
    | { type: "UPDATE", data: TodoItemType}

export type TodoItemType = {
    id: number,
    title: string,
    date: number,
    isDone: boolean
}

export type TodoListType = TodoItemType[];
export type TodoStateContextType = {
    todo: TodoListType,
    // index: number,
    // setIndexMemo: () => void;
}
export type DispatcherType =
    {
        onCreate: ((t: TodoItemType) => void),
        onDelete: ((t: TodoItemType) => void),
        onUpdate: ((t: TodoItemType) => void)
    };

const defaultDispatchers = {
    onCreate: ((t: TodoItemType) => {console.log(t)}),
    onDelete: ((t: TodoItemType) => {console.log(t)}),
    onUpdate: ((t: TodoItemType) => {console.log(t)})
}

export const DispatcherContext = React.createContext<DispatcherType>(defaultDispatchers)
export const TodoStateContext = React.createContext<TodoStateContextType>({todo: []});


export function todoStateReducer(state: TodoListType,
                                 action: ActionType): TodoListType {
    console.log("todoStateReducer:", action)
    switch (action.type) {
        case "CREATE": {
            return [action.data, ...state];
        }

        case "UPDATE": {
            return state.map((it) => {
                return it.id === action.data.id ?
                    action.data :
                    it})
        }
        case "DELETE": {
            return state.filter((it) => it.id !== action.id);
        }
        default: {
            return state;
        }
    }
}
