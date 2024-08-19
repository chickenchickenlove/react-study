import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import {EmotionTag, EmotionTagType} from "../utils";

function Editor() {

    // TODO : EmotionItem => useEffect()로 전환 필요.
    return (
        <div className={"Editor"}>
            <div className={"editor_section"}>
                <h4>오늘의 날짜</h4>
                <input type={"date"}/>
                <h4>오늘의 감정</h4>
                <div className={"emotion_list_wrapper"}>
                    {
                        EmotionTag.map((it) => {
                            return <EmotionItem
                                tag={it}
                                isSelected={false} />
                        })
                    }
                </div>

            </div>
            <h4>오늘의 일기</h4>
            <textarea
                placeholder={"오늘은 어땠나요?"} />
            <div className={"bottom_section"}>
                <Button text={"취소하기"}/>
                <Button
                    type={"positive"}
                    text={"작성완료"}/>
            </div>
        </div>
    )
}

export default Editor;