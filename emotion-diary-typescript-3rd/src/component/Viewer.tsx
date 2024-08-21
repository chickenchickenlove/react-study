import "./Viewer.css"
import {getImageAndTags} from "../utils";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {DiaryStateContext} from "../App";
import {DiaryType} from "../types";

interface Props {
    diary: DiaryType
}

function Viewer({diary}: Props) {
    const { order, description, image } = getImageAndTags(diary.emotion);

    return (
        <div className={"Viewer"}>
            <section>
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${order}`}>
                    <img src={image}/>
                    <div className={"emotion_descript"}>{description}</div>
                </div>
                <h4>오늘의 일기</h4>
                <div className={"content_wrapper"}>
                    <p>{diary.content}</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;