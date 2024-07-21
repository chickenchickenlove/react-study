import "./Viewer.css"
import {emotionList} from "../utils";


function Viewer({content, emotionId}) {
    const emotionItem = emotionList.find((it) => String(it.id) === String(emotionId));

    const emotionClassName = `emotion_img_wrapper_${emotionId}`;
    const className = ["emotion_img_wrapper", emotionClassName].join(" ");

    console.log(className)
    console.log(emotionItem)

    return (
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={className}
                >
                    <img
                        alt={`emotionId${emotionId}`}
                        src={emotionItem.img}
                    />
                    <div className="emotion_descript">
                        {emotionItem.name}
                    </div>
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>

        </div>
    )
}

export default Viewer;