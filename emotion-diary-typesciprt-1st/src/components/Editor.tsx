import "./Editor.css"
import React, {useCallback, useContext, useRef, useState} from "react";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import {useNavigate} from "react-router-dom";
import {DiaryStateContext, DispatchersContext, IdKeyContext} from "../App";
import {Simulate} from "react-dom/test-utils";


const defaultEmotions = [
    {
        emotionId: 1,
        emotionText: "완전 좋음",
        selectedEmotionId: 6
    },
    {
        emotionId: 2,
        emotionText: "좋음",
        selectedEmotionId: 6
    },
    {
        emotionId: 3,
        emotionText: "그럭저럭",
        selectedEmotionId: 6
    },
    {
        emotionId: 4,
        emotionText: "나쁨",
        selectedEmotionId: 6
    },
    {
        emotionId: 5,
        emotionText: "끔찍함",
        selectedEmotionId: 6
    }
]


function getFormattedValue(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? '0' + String(date.getMonth()+1) : String(date.getMonth()+1);
    const day = date.getDate() < 10 ? '0' + String(date.getDate()) : String(date.getDate());

    return `${year}-${month}-${day}`;
}


function Editor() {




    const navigate = useNavigate();
    const onClickCancel = (e: React.MouseEvent) => {
        navigate(-1);
    }

    // const idKey = useRef(7);

    const [emotions, setEmotions] = useState(defaultEmotions);
    const [chooseDate, setChooseDate] = useState(getFormattedValue(new Date()));
    const [contents, setContents] = useState('');
    const whenChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents((_prevContents) => e.target.value);
    }

    const [selectedEmotion, setSelectedEmotion] = useState(6);

    const {createDiaryItem} = useContext(DispatchersContext);


    const onUpdateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChooseDate((_prevDate) => e.target.value);
    };

    const onSelectedEmotion = useCallback((selectedEmotionId: number) => {
        setSelectedEmotion((_prevState) => selectedEmotionId);
        setEmotions((prevEmotions) => {
            return prevEmotions.map((it) => {
                return {...it, selectedEmotionId: selectedEmotionId}
            })
        })
    }, []);


    const {idKey} = useContext(IdKeyContext);
    if (!idKey) {
        return <div>=Loading...</div>;
    }


    const doSubmitCreate = useCallback((e: React.MouseEvent) => {

        console.log("idKey:", idKey.current);
        console.log(selectedEmotion);
        if (contents && selectedEmotion !== 6) {
            createDiaryItem({
                id: idKey.current,
                date: new Date().getTime(),
                emotionId: selectedEmotion,
                content: contents
            });

            idKey.current += 1;
            console.log("idKey:", idKey.current);
            setContents('');
            setSelectedEmotion(6);
            navigate('/');
        } else if (selectedEmotion === 6){
            console.log('here')
            alert('오늘의 감정은 어땟나요?')
        } else if (!contents) {
            alert('오늘 무슨 일이 있었는지 적어주세요!')
        }
    }, [contents, selectedEmotion, idKey]);




    return (
        <div className={"Editor"}>
            <div className={"editor_section"}></div>
            <h4>오늘의 날짜</h4>
            <input
                type={"date"}
                value={chooseDate}
                onChange={onUpdateDate}
            />
            <h4>오늘의 감정</h4>
            <div className={"emotion_list_wrapper"}>
                {
                    emotions
                        .map((it) => <EmotionItem key={it.emotionId} onSelectedEmotion={onSelectedEmotion} {...it}/>)
                }
            </div>
            <h4>오늘의 일기</h4>
            <textarea
                value={contents}
                onChange={whenChangeContents}
                placeholder={"오늘은 어땟나요?"}></textarea>
            <div className={"bottom_section"}>
                <Button onButtonClick={onClickCancel} text={"취소하기"} />
                <Button onButtonClick={doSubmitCreate} type={"positive"} text={"작성 완료"} />
            </div>
        </div>
    );
}

export default Editor;