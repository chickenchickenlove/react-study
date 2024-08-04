import "./Editor.css"
import React, {useCallback, useContext, useState} from "react";
import Button from "./Button";
import EmotionItem, {emotions} from "./EmotionItem";
import {useNavigate} from "react-router-dom";
import {DispatchersContext} from "../App";
import {DiaryItemType} from "../types";
import {getFormattedValue} from "../DateUtil";

type EditorType = {
    diaryItem? : DiaryItemType,
    submitFunction : (d: DiaryItemType) => void,
}

const initData = {
    id: 0,
    date: new Date().getTime(),
    emotionId: 3,
    content: ''
}

function Editor({diaryItem = initData, submitFunction } : EditorType) {

    const navigate = useNavigate();
    const onClickCancel = (e: React.MouseEvent) => {
        navigate(-1);
    }

    const [state, setState] = useState<DiaryItemType>(diaryItem)

    const whenChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState((prevDiaryItem) => {
            return {...prevDiaryItem, content: e.target.value};
        })
    }

    const {createDiaryItem} = useContext(DispatchersContext);
    const onUpdateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevDiaryItem) => {
            return {...prevDiaryItem, date: new Date(e.target.value).getTime()}
        })
    };

    const onSelectedEmotion = useCallback((selectedEmotionId: number) => {
        setState((prevDiaryItem) => {
            return {...prevDiaryItem, emotionId: selectedEmotionId}
        });
    }, [state]);


    const doSubmit = useCallback((e: React.MouseEvent) => {
        if (state.content) {
            submitFunction({
                id: state.id,
                date: state.date,
                emotionId: state.emotionId,
                content: state.content
            });
            navigate('/');
        } else if (!state.content) {
            alert('오늘 무슨 일이 있었는지 적어주세요!')
        }
    }, [state]);


    return (
        <div className={"Editor"}>
            <div className={"editor_section"}></div>
            <h4>오늘의 날짜</h4>
            <input
                type={"date"}
                value={getFormattedValue(new Date(state.date))}
                onChange={onUpdateDate}
            />
            <h4>오늘의 감정</h4>
            <div className={"emotion_list_wrapper"}>
                {
                    emotions
                        .map((it) => it.emotionId)
                        .map((emotionId) => <EmotionItem key={emotionId}
                                                         emotionId={emotionId}
                                                         selectedEmotionId={state.emotionId}
                                                         onSelectedEmotion={onSelectedEmotion}/>)
                }
            </div>
            <h4>오늘의 일기</h4>
            <textarea
                value={state.content}
                onChange={whenChangeContents}
                placeholder={"오늘은 어땟나요?"}></textarea>
            <div className={"bottom_section"}>
                <Button onButtonClick={onClickCancel} text={"취소하기"} />
                <Button onButtonClick={doSubmit} type={"positive"} text={"작성 완료"} />
            </div>
        </div>
    );
}

export default Editor;