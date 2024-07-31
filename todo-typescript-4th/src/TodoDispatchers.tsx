import {ActionType, TodoItemActionType, TodoItemType} from "./type/TodoType";


export function todoReducer(previousState: TodoItemType[], action: TodoItemActionType) {
    switch (action.type) {
        case "CREATE": {
            return [action.item, ...previousState];
        }
        case "UPDATE": {
            return previousState
                .map((it) => it.id === action.item.id ? action.item : it);
        }
        case "DELETE": {
            return previousState
                .filter((it) => it.id !== action.item.id);
        }
        default: {
            return previousState;
        }
    }
}

export function createTodoItemAction(type: ActionType, item: TodoItemType): TodoItemActionType {
    return {type, item};
}