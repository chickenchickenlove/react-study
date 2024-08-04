import './Viewer.css';
import {getEmotionImageByEmotionId, getEmotionObjectByEmotionId, getEmotionTextByEmotionId} from "../utils/imgUtils";

type ViewerType = {
    emotionId?: number
}




function Viewer({ emotionId = 1 }: ViewerType) {

    const {image, text} = getEmotionObjectByEmotionId(emotionId)

    return (
        <div className={'Viewer'}>
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}
                >
                    <img src={image}/>
                    <div className={'emotion_descript'}>{text}</div>

                </div>

                <h4>오늘의 일기</h4>
                <div className={'content_wrapper'}>
                    <p>시부렁시부렁</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;