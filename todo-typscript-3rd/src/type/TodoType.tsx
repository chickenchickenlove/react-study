
export type TodoItemType = {
    id: number,
    title: string,
    date: number,
    is_done: boolean
}

export type TodoStateCtxType = {
    todoItems: TodoItemType[];
}


export type ActionType = "CREATE" | "DELETE" | "UPDATE"
export type TodoItemAction =
    {type: ActionType, item: TodoItemType}