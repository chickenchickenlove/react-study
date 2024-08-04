import "./Viewer.css"
import {DiaryItemType} from "../types";
import {getEmotionImage, getEmotionText} from "../utils";


type ViewerType = {
    diaryItem: DiaryItemType
}

function Viewer({ diaryItem }: ViewerType) {

    return (
        <div className={"Viewer"}>
            <section>
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${diaryItem.id}`}>
                    <img src={getEmotionImage(diaryItem.id)} />
                    <div className={"emotion_descript"}>{getEmotionText(diaryItem.id)}</div>
                </div>
                <h4>오늘의 일기</h4>
                <div className={"content_wrapper"}>
                    <p>{diaryItem.content}</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;