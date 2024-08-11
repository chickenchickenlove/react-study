import './EmotionItem.css'
import {getEmotionImageByEmotionId, getEmotionTextByEmotionId} from "../utils/imgUtils";
import {EmotionId} from "../DiaryTypes";

interface Props {
    selectedEmotion: EmotionId;
    emotionId: EmotionId;
    onSelected: (e: EmotionId) => void
}

function EmotionItem({ selectedEmotion, emotionId, onSelected } : Props) {

    const className =
        selectedEmotion === emotionId ?
        `EmotionItem EmotionItem_on_${emotionId}` :
        `EmotionItem EmotionItem_off`;

    const onClicked = (_: React.MouseEvent) => {
        onSelected(emotionId);
    };

    return (
        <div
            className={className}
            onClick={onClicked}
        >
            <img src={getEmotionImageByEmotionId(emotionId)} />
            <span>{getEmotionTextByEmotionId(emotionId)}</span>
        </div>
    )
}

export default EmotionItem;