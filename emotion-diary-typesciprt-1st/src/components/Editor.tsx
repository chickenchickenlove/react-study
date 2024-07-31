import "./Editor.css"
import React, {useState} from "react";
import Button from "./Button";
import EmotionItem from "./EmotionItem";


const emotions = [
    {
        emotionId: 1,
        emotionText: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionText: "좋음"
    },
    {
        emotionId: 3,
        emotionText: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionText: "나쁨"
    },
    {
        emotionId: 5,
        emotionText: "끔찍함"
    }
]


function getFormattedValue() {
    const date1 = new Date();

    console.log(date1.getTime());
    return `${date1.getFullYear()}-07-${date1.getDay()}`;
}


function Editor() {

    const [state, setState] = useState(getFormattedValue());

    const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        // setState((_) => e.target.value);
    };

    return (
        <div className={"Editor edi"}>
            <div className={"editor_section"}></div>
            <h4>오늘의 날짜</h4>
            <input
                type={"date"}
                value={state}
                // onChange={onUpdate}
                // value={new Date().toLocaleDateString()}
            />
            <h4>오늘의 감정</h4>
            <div className={"emotion_list_wrapper"}>
                {
                    emotions
                        .map((it) => <EmotionItem key={it.emotionId} {...it}/>)
                }
            </div>
            <h4>오늘의 일기</h4>
            <textarea placeholder={"오늘은 어땟나요?"}></textarea>
            <div className={"bottom_section"}>
                <Button text={"취소하기"} />
                <Button type={"positive"} text={"작성 완료"} />


            </div>
        </div>
    );
}

export default Editor;