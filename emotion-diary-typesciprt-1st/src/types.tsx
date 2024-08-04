import React from "react";


export type DispatchersType = {
    createDiaryItem: (diary: DiaryItemType) => void,
    updateDiaryItem: (diary: DiaryItemType) => void,
    deleteDiaryItem: (diary: DiaryItemType) => void,
}


export type ChoiceType =
    "CREATE" |
    "UPDATE" |
    "DELETE"

export type ActionType = {
    type: ChoiceType,
    diary: DiaryItemType
}

export type IdKeyContextType = {
    idKey: React.MutableRefObject<number> | null
}

export type DiaryItemType = {
    id: number,
    date: number,
    emotionId: number,
    content: string
};