import './Editor.css'
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {DiaryType, EmotionId} from "../DiaryTypes";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {goToPreviousNavi} from "../hooks/MyCustomHook";

const emotionIds = [1, 2, 3, 4, 5];

const getFormattedDate = (date: number) => {
    const d = new Date(date);
    const yy = d.getFullYear()
    const MM = d.getMonth() + 1 < 10 ? '0' + String(d.getMonth() + 1) : String(d.getMonth() + 1);
    const dd = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate());
    return `${yy}-${MM}-${dd}`;
}

interface EditorPropsType extends DiaryType {
    onClickedDelegate: (diary: DiaryType) => void;
}

function Editor({ id, emotionId, date, contents, onClickedDelegate }: EditorPropsType) {
    const [diary, setDiary] = useState<DiaryType>({id, emotionId, date, contents})
    const navigate = useNavigate();


    // callback
    const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDiary((prevDiaryState) => {
            return {
             ...prevDiaryState,
                date: new Date(e.target.value).getTime()
            }});
    }

    const onUpdateContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDiary((prevDiaryState) => {
            return {
                ...prevDiaryState,
                contents: e.target.value}})
    }

    const onSelectEmotionId = (emotionId: EmotionId) => {
        setDiary((prevDiary) => {
            return {...prevDiary,
                emotionId: emotionId
            }})

        // setSelectedEmotion((_) => emotionId);
    }

    const doAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!diary.contents) {
            alert("내용을 입력해주세요.")
            return;
        }


        onClickedDelegate(diary);
    }

    const doCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        goToPreviousNavi(navigate)();
    };


    return (
        <div className={'Editor'}>
            <div className={'editor_section'}>
                <h4>오늘의 날짜</h4>
                <input
                    value={getFormattedDate(diary.date)}
                    onChange={onChangeDate}
                    type={'date'}
                />
                <h4>오늘의 감정</h4>
                <div className={'emotion_list_wrapper'}>
                    {
                        emotionIds
                            .map((emotionId) =>
                                <EmotionItem
                                    key={emotionId}
                                    emotionId={emotionId}
                                    selectedEmotion={diary.emotionId}
                                    onSelected={onSelectEmotionId}
                                />)
                    }
                </div>
                <h4>오늘의 일기</h4>
                <textarea
                    value={diary.contents}
                    onChange={onUpdateContents}
                    placeholder={'오늘은 어땟나요?'}/>
                <div className={'bottom_section'}>
                    <Button
                        text={'취소하기'}
                        doAction={doCancel}
                    />
                    <Button
                        type={'positive'}
                        text={'작성완료'}
                        doAction={doAction}
                    />
                </div>
            </div>
        </div>
    );
}

export default Editor;