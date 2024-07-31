export type TodoItemType = {
    id: number,
    title: string,
    date: number,
    is_done: boolean
};

export type ActionType = "CREATE" | "UPDATE" | "DELETE"
export type TodoItemActionType =
    { type: ActionType, item: TodoItemType}


export type DispatchType = (item: TodoItemType) => void
export type TodoDispatchersType = {
    onCreateTodoItem: DispatchType,
    onUpdateTodoItem: DispatchType,
    onDeleteTodoItem: DispatchType
};