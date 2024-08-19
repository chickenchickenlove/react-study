import "./EmotionItem.css"
import {EmotionTagType, getImageAndTags, ImageOrderType} from "../utils";

interface Props {
    tag: EmotionTagType;
    isSelected?: boolean;
}


function EmotionItem({tag, isSelected }: Props) {

    const {image, description, order} = getImageAndTags(tag);
    const dynamicClass = isSelected ? `EmotionItem_on_${order}` : `EmotionItem_off`;

    return (
        <div className={`EmotionItem ${dynamicClass}`}>
            <img src={image}/>
            <span>{description}</span>
        </div>
    )
}

export default EmotionItem;