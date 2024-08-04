import './DiaryItem.css';
import Button from "./Button";
import {getEmotionImageByEmotionId} from "../utils/imgUtils";

type DiaryItemType = {
    emotionId?: number
    content?: string
    date?: number
}

function DiaryItem({
                       emotionId = 1,
                       content = 'hello',
                       date = new Date().getTime()
                   }: DiaryItemType) {

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
                    {content}
                </div>
            </div>
            <div className={'button_section'}>
                <Button text={'수정하기'} doAction={(_) => console.log(1)}/>
            </div>
        </div>
    );
}

export default DiaryItem;