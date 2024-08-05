import './Viewer.css';
import {getEmotionImageByEmotionId, getEmotionObjectByEmotionId, getEmotionTextByEmotionId} from "../utils/imgUtils";
import {DiaryType} from "../DiaryTypes";


function Viewer({ id, emotionId, date, contents }: DiaryType) {
    const {image, text} = getEmotionObjectByEmotionId(emotionId)

    return (
        <div className={'Viewer'}>
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={image}/>
                    <div className={'emotion_descript'}>{text}</div>
                </div>
                <h4>오늘의 일기</h4>
                <div className={'content_wrapper'}>
                    <p>{contents}</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;