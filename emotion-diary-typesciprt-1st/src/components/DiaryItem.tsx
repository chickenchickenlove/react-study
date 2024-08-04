import "./DiaryItem.css"
import {getEmotionImage} from "../utils";
import Button from "./Button";
import {DiaryItemType} from "../types";
import {useNavigate} from "react-router-dom";
import {useNavigatorFunction} from "../hooks/MyCustomHook";


function DiaryItem({id, date, emotionId, content}: DiaryItemType) {

    const {goToEditPage, goToDiaryPage} = useNavigatorFunction(useNavigate())
    const onClickGoToEditPage = (_event: React.MouseEvent) => {
        goToEditPage(id);
    };

    const onClickGoToDiaryPage = (_event: React.MouseEvent) => {
        goToDiaryPage(id)
    };

    return (
        <div className={"DiaryItem"}>
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div
                onClick={onClickGoToDiaryPage}
                className={"info_section"}>
                <div className={"date_wrapper"}>{new Date(date).toLocaleDateString()}</div>
                <div className={"content_wrapper"}>{content}</div>
            </div>
            <div className={"button_section"}>
                <Button
                    text={"수정하기"}
                    onButtonClick={onClickGoToEditPage}/>
            </div>
        </div>
    )
}

export default DiaryItem;