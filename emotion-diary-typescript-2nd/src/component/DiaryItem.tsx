import './DiaryItem.css';
import Button from "./Button";
import {getEmotionImageByEmotionId} from "../utils/imgUtils";
import {DiaryType} from "../DiaryTypes";
import {useNavigate} from "react-router-dom";
import {goToPageDiaryNavi, goToPageEditNavi} from "../hooks/MyCustomHook";
import React, {useMemo} from "react";

interface Props extends DiaryType { }

function DiaryItem({
                       id,
                       emotionId,
                       contents,
                       date = new Date().getTime()
                   }: Props) {

    const navigate = useNavigate();
    const goToPageEdit = goToPageEditNavi(navigate);
    const goToPageDiary = goToPageDiaryNavi(navigate);

    const goToPageEditOnClick = useMemo(() => {
        return (e: React.MouseEvent) => goToPageEdit(id);
    }, [id]);

    const goToPageDiaryOnClick = useMemo(() => {
        return (e: React.MouseEvent) => goToPageDiary(id);
    }, [id]);

    return (
        <div className={'DiaryItem'}>
            <div className={`img_section img_section_${emotionId}`}>
                <img
                    alt={'hello'}
                    src={getEmotionImageByEmotionId(emotionId)}
                />
            </div>
            <div
                onClick={goToPageDiaryOnClick}
                className={'info_section'}>
                <div className={'date_wrapper'}>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className={'content_wrapper'}>
                    {contents}
                </div>
            </div>
            <div className={'button_section'}>
                <Button
                    text={'수정하기'}
                    doAction={goToPageEditOnClick}/>
            </div>
        </div>
    );
}

export default React.memo(DiaryItem);