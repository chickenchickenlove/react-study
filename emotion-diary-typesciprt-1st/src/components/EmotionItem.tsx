import "./EmotionItem.css"
import {getEmotionImage} from "../utils";
import button from "./Button";
import React from "react";

type EmotionItemType = {
    emotionId: number,
    emotionText: string
    selectedEmotionId?: number,
    onSelectedEmotion: (n: number) => void
}


function EmotionItem({ emotionId, emotionText, selectedEmotionId=6, onSelectedEmotion }: EmotionItemType) {

    const onOrOff = emotionId === selectedEmotionId;
    const className = emotionId === selectedEmotionId ?
        ["EmotionItem", `EmotionItem_on_${emotionId}`].join(' ') :
        ["EmotionItem", `EmotionItem_off`].join(' ');

    const onTest = (e: React.MouseEvent) => {
        console.log('h1');
        onSelectedEmotion(emotionId);
    }


    return (
        <div
            onClick={onTest}
            className={className}>
            <img
                src={getEmotionImage(emotionId)}/>
            <span>{emotionText}</span>
        </div>
    )
}

export default EmotionItem;