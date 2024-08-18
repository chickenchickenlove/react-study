import "./EmotionItem.css"
import {EmotionTag, getImageAndTags, ImageOrderType} from "../utils";

interface Props {
    tag?: EmotionTag;
    isSelected?: boolean;
}


function EmotionItem({tag, isSelected }: Props) {

    const {image, description, order} = getImageAndTags("VERY_GOOD");
    const dynamicClass = isSelected ? `EmotionItem_on_${order}` : `EmotionItem_off`;

    return (
        <div className={`EmotionItem ${dynamicClass}`}>
            <img src={image}/>
            <span>{description}</span>
        </div>
    )
}

export default EmotionItem;