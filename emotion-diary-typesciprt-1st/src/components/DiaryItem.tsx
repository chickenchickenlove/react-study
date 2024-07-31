import "./DiaryItem.css"
import {getEmotionImage} from "../utils";
import Button from "./Button";

export type DiaryItemType = {
    id: number,
    date: number,
    emotionId: number,
    content: string
};

function DiaryItem({id, date, emotionId, content}: DiaryItemType) {
    return (
        <div className={"DiaryItem"}>
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div className={"info_section"}>
                <div className={"date_wrapper"}>{new Date(date).toLocaleDateString()}</div>
                <div className={"content_wrapper"}>{content}</div>
            </div>
            <div className={"button_section"}>
                <Button text={"수정하기"}/>
            </div>
        </div>
    )
}

export default DiaryItem;