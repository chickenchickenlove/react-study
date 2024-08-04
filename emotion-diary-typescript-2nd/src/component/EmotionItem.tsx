import './EmotionItem.css'
import {getEmotionImageByEmotionId, getEmotionTextByEmotionId} from "../utils/imgUtils";

type EmotionItemType = {
    selectedEmotionId?: number
    emotionId: number
}

function EmotionItem({   selectedEmotionId = 3,
                         emotionId} : EmotionItemType) {

    const className =
        selectedEmotionId === emotionId ?
        `EmotionItem EmotionItem_on_${emotionId}` :
        `EmotionItem EmotionItem_off`;

    return (
        <div className={className}>
            <img src={getEmotionImageByEmotionId(emotionId)} />
            <span>{getEmotionTextByEmotionId(emotionId)}</span>
        </div>
    )
}

export default EmotionItem;