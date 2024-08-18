import "./DiaryItem.css"
import {getImageAndTags} from "../utils";
import Button from "./Button";

function DiaryItem() {

    const { image} = getImageAndTags("VERY_GOOD")
    return (
        <div className={"DiaryItem"}>
            <div className={"img_section img_section_1"}>
                <img src={image} />
            </div>
            <div className={"info_section"}>
                <div className={"date_wrapper"}>2024. 8. 18.</div>
                <div className={"content_wrapper"}> 오늘은 행복했어</div>
            </div>
            <div className={"button_section"}>
                <Button
                    text={"수정하기"}
                />
            </div>
        </div>
    )
}

export default DiaryItem;