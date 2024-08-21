import "./DiaryItem.css"
import {getImageAndTags} from "../utils";
import Button from "./Button";
import {DiaryType} from "../types";
import {useNavigate} from "react-router-dom";

interface Props {
    diary: DiaryType;
}


function DiaryItem({diary}: Props) {

    const { image, order} = getImageAndTags(diary.emotion);
    const navigate = useNavigate();
    const goToEditPage = (e: any) => {
        navigate(`/edit/${diary.id}`)
    }

    const goToDetailPage = (e: any) => {
        navigate(`/diary/${diary.id}`);
    };

    return (
        <div className={"DiaryItem"}>
            <div className={`img_section img_section_${order}`}>
                <img src={image} />
            </div>
            <div
                onClick={goToDetailPage}
                className={"info_section"}>
                <div className={"date_wrapper"}>{new Date(diary.created_date).toLocaleDateString()}</div>
                <div className={"content_wrapper"}>{diary.content}</div>
            </div>
            <div className={"button_section"}>
                <Button
                    text={"수정하기"}
                    doCallback={goToEditPage}
                />
            </div>
        </div>
    )
}

export default DiaryItem;