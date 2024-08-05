import './DiaryItem.css';
import Button from "./Button";
import {getEmotionImageByEmotionId} from "../utils/imgUtils";
import {DiaryType} from "../DiaryTypes";
import {useNavigate} from "react-router-dom";

function DiaryItem({
                       id,
                       emotionId,
                       contents,
                       date = new Date().getTime()
                   }: DiaryType) {

    const navigate = useNavigate();
    const goToEditPage = (e: React.MouseEvent) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className={'DiaryItem'}>
            <div className={`img_section img_section_${emotionId}`}>
                <img
                    alt={'hello'}
                    src={getEmotionImageByEmotionId(emotionId)}
                />
            </div>
            <div className={'info_section'}>
                <div className={'date_wrapper'}>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className={'content_wrapper'}>
                    {contents}
                </div>
            </div>
            <div className={'button_section'}>
                <Button text={'수정하기'} doAction={goToEditPage}/>
            </div>
        </div>
    );
}

export default DiaryItem;