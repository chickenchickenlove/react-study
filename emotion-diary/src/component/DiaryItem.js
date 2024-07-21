import React from "react";
import "./DiaryItem.css"

import {useNavigate} from "react-router-dom";
import {getEmotionImgById} from "../utils";
import Button from "./Button";


function DiaryItem ({ id, emotionId, content, date }) {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`)
    }

    const goEdit = () => {
        navigate(`/edit/${id}`)
    }

    const emotionClassName = `img_section_${emotionId}`
    const className = ["img_section", emotionClassName].join(" ");

    return (
        <div className="DiaryItem">
            <div
                onClick={goDetail}
                className={className}
            >
                <img
                    alt={`emotion${emotionId}`}
                    src={getEmotionImgById(emotionId)} />
            </div>
            <div onClick={goDetail} className="info_section">
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className="content_wrapper">{content.slice(0, 25)}</div>
            </div>
            <div className={"button_section"}>
                <Button text={"수정하기"} onClick={goEdit} />
            </div>
        </div>
    )
}

export default React.memo(DiaryItem);