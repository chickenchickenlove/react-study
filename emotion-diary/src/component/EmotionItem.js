import React from "react";
import "./EmotionItem.css"


function EmotionItem({ id, img, name, onClick, isSelected }) {

    const handleOnClick = () => {
        onClick(id);
    };

    const selectedClassName = isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`
    const className = ["EmotionItem", selectedClassName].join(" ")

    return (
        <div className={className} onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img}/>
            <span>{name}</span>
        </div>
    );
}

export default React.memo(EmotionItem);