import "./Viewer.css"
import {getImageAndTags} from "../utils";

function Viewer() {

    const { order, description, image } = getImageAndTags("VERY_GOOD")

    return (
        <div className={"Viewer"}>
            <section>
                <h4>오늘의 감정</h4>
                <div className={"emotion_img_wrapper emotion_img_wrapper_1"}>
                    <img src={image}/>
                    <div className={"emotion_descript"}>{description}</div>
                </div>
                <h4>오늘의 일기</h4>
                <div className={"content_wrapper"}>
                    <p>오늘은 그럭저럭이야</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;