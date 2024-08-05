import './Editor.css'
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {DiaryType, EmotionId} from "../DiaryTypes";
import {ChangeEvent, useState} from "react";

const emotionIds = [1, 2, 3, 4, 5];

const getFormattedDate = (date: number) => {
    const d = new Date(date);
    const yy = d.getFullYear()
    const MM = d.getMonth() + 1 < 10 ? '0' + String(d.getMonth() + 1) : String(d.getMonth() + 1);
    const dd = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate());
    return `${yy}-${MM}-${dd}`;
}

function Editor({ id, emotionId, date, contents }: DiaryType) {
    const [diary, setDiary] = useState<DiaryType>({id, emotionId, date, contents})
    const [selectedEmotion, setSelectedEmotion] = useState(EmotionId.NORMAL);

    // callback
    const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDiary((prevDiaryState) => {
            return {
             ...prevDiaryState,
                date: new Date(e.target.value).getTime()
            }});
    }

    const onUpdateContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("here", e.target.value);
        setDiary((prevDiaryState) => {
            return {
                ...prevDiaryState,
                contents: e.target.value}})
    }

    const onSelectEmotionId = (emotionId: EmotionId) => {
        setSelectedEmotion((_) => emotionId);
    }


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
                            .map((emotionId) => <EmotionItem key={emotionId}
                                                             emotionId={emotionId}
                                                             selectedEmotion={selectedEmotion}
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
                    <Button text={'취소하기'} doAction={(_) => console.log(1)}/>
                    <Button
                        type={'positive'}
                        text={'작성완료'}
                        doAction={(_) => console.log(1)}/>
                </div>
            </div>
        </div>
    );
}

export default Editor;