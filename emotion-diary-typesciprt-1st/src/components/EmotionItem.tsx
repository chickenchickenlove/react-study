import "./EmotionItem.css"
import {getEmotionImage} from "../utils";
import React from "react";

export const emotions = [
    {
        emotionId: 1,
        emotionText: "완전 좋음",
        selectedEmotionId: 6
    },
    {
        emotionId: 2,
        emotionText: "좋음",
        selectedEmotionId: 6
    },
    {
        emotionId: 3,
        emotionText: "그럭저럭",
        selectedEmotionId: 6
    },
    {
        emotionId: 4,
        emotionText: "나쁨",
        selectedEmotionId: 6
    },
    {
        emotionId: 5,
        emotionText: "끔찍함",
        selectedEmotionId: 6
    }
]


type EmotionItemType = {
    emotionId: number,
    selectedEmotionId?: number,
    onSelectedEmotion: (n: number) => void
}


function EmotionItem({ emotionId, selectedEmotionId=6, onSelectedEmotion }: EmotionItemType) {

    const onOrOff = emotionId === selectedEmotionId;
    const className = emotionId === selectedEmotionId ?
        ["EmotionItem", `EmotionItem_on_${emotionId}`].join(' ') :
        ["EmotionItem", `EmotionItem_off`].join(' ');

    const onTest = (e: React.MouseEvent) => {
        console.log('h1');
        onSelectedEmotion(emotionId);
    }

    const findEmotion = emotions.find((it) => it.emotionId === emotionId);
    if (!findEmotion) {
        return <div>Loading...</div>
    }

    return (
        <div
            onClick={onTest}
            className={className}>
            <img
                src={getEmotionImage(emotionId)}/>
            <span>{findEmotion.emotionText}</span>
        </div>
    );
}

export default EmotionItem;