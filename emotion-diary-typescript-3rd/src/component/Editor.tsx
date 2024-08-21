import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import {EmotionTag, EmotionTagType} from "../utils";
import {useNavigate} from "react-router-dom";
import {DiaryType} from "../types";
import Diary from "../pages/Diary";
import React from "react";

interface Props {
    diary: DiaryType;
    setDiary: React.Dispatch<React.SetStateAction<DiaryType>>;
    onClickCompletedButton: () => void
}

function convertToProperDateString(date: number) {
    const d = new Date(date);
    const yy = d.getFullYear();
    const MM = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    return `${yy}-${MM}-${dd}`
}

function Editor({diary, setDiary, onClickCompletedButton}: Props) {

    // TODO : EmotionItem => useEffect()로 전환 필요.

    const navigate = useNavigate();
    const onClickCancelButton = () => {
        if (window.confirm("정말 취소하시겠습까?")) {
            navigate("/");
        }
    }

    const onUpdateContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDiary((prevDiary) => {return {...prevDiary, content: e.target.value}});
    }

    const onUpdateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiary((prevDiary) => {
            return {...prevDiary, created_date: new Date(e.target.value).getTime()}
        });
    };

    const onUpdateEmotion = (emotion: EmotionTagType) => {
        setDiary((prevDiary) => {
            return {...prevDiary, emotion: emotion}
        });
    };

    return (
        <div className={"Editor"}>
            <div className={"editor_section"}>
                <h4>오늘의 날짜</h4>
                <input
                    onChange={onUpdateDate}
                    value={convertToProperDateString(diary.created_date)}
                    type={"date"}/>
                <h4>오늘의 감정</h4>
                <div className={"emotion_list_wrapper"}>
                    {
                        EmotionTag.map((it) => {
                            return <EmotionItem
                                key={it}
                                tag={it}
                                onClickedEmotion={onUpdateEmotion}
                                isSelected={it === diary.emotion} />
                        })
                    }
                </div>

            </div>
            <h4>오늘의 일기</h4>
            <textarea
                onChange={onUpdateContents}
                placeholder={"오늘은 어땠나요?"} />
            <div className={"bottom_section"}>
                <Button
                    text={"취소하기"}
                    doCallback={onClickCancelButton}
                />
                <Button
                    type={"positive"}
                    text={"작성완료"}
                    doCallback={onClickCompletedButton}
                />
            </div>
        </div>
    )
}

export default Editor;