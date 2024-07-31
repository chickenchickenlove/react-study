import "./EmotionItem.css"
import {getEmotionImage} from "../utils";

type EmotionItemType = {
    emotionId: number,
    emotionText: string
}


function EmotionItem({ emotionId, emotionText}: EmotionItemType) {

    const isSelected = false;
    const className = isSelected ?
        ["EmotionItem", `EmotionItem_on_${emotionId}`].join(' ') :
        ["EmotionItem", `EmotionItem_off`].join(' ');

    return (
        <div className={className}>
            <img src={getEmotionImage(emotionId)}/>
            <span>{emotionText}</span>
        </div>
    )
}

export default EmotionItem;