export enum EmotionId {
    VERY_GOOD = 1,
    GOOD = 2,
    NORMAL = 3,
    BAD = 4,
    VERY_BAD = 5
}

export interface DiaryType {
    readonly id: number;
    emotionId: EmotionId;
    date: number;
    contents: string;
};


export type DiaryDispatcherContextType = {
    onCreateNewDiary: (newDiary: DiaryType) => void;
    onUpdateDiary: (updatedDiary: DiaryType) => void;
    onDeleteDiary: (deletedDiary: DiaryType) => void;
}

export const dummyDiaries: DiaryType[] = [
    {
        id: 1,
        emotionId: EmotionId.VERY_GOOD,
        date: new Date().getTime() + 1,
        contents: '오늘은 행복했어.',
    },
    {
        id: 2,
        emotionId: EmotionId.GOOD,
        date: new Date().getTime() + 2,
        contents: '오늘은 적당히 행복했으.',
    },
    {
        id: 3,
        emotionId: EmotionId.NORMAL,
        date: new Date().getTime() + 3,
        contents: '오늘은 그럭저럭이야',
    },
];




