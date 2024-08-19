import {EmotionTagType} from "./utils";

export type MyType = string;

export interface DiaryType {
    readonly id: number;
    created_date: number;
    content: string;
    emotion: EmotionTagType
}

