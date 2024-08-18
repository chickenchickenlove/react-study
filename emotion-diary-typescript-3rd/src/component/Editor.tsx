import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";

function Editor() {
    return (
        <div className={"Editor"}>
            <div className={"editor_section"}>
                <h4>오늘의 날짜</h4>
                <input type={"date"}/>
                <h4>오늘의 감정</h4>
                <div className={"emotion_list_wrapper"}>
                    <EmotionItem />
                    <EmotionItem />
                    <EmotionItem />
                    <EmotionItem />
                    <EmotionItem />
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