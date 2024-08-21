import "./EmotionItem.css"
import {EmotionTagType, getImageAndTags, ImageOrderType} from "../utils";

interface Props {
    tag: EmotionTagType;
    isSelected: boolean;
    onClickedEmotion: (emotion: EmotionTagType) => void
}



function EmotionItem({tag, isSelected, onClickedEmotion }: Props) {

    const {image, description, order} = getImageAndTags(tag);
    const dynamicClass = isSelected ? `EmotionItem_on_${order}` : `EmotionItem_off`;

    const onClickedEmotionWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
        onClickedEmotion(tag);
    }

    return (
        <div
            onClick={onClickedEmotionWrapper}
            className={`EmotionItem ${dynamicClass}`}>
            <img src={image}/>
            <span>{description}</span>
        </div>
    )
}

export default EmotionItem;