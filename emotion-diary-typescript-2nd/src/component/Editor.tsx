import './Editor.css'
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionIds = [1, 2, 3, 4, 5];

function Editor() {


    return (
        <div className={'Editor'}>
            <div className={'editor_section'}>
                <h4>오늘의 날짜</h4>
                <input
                    type={'date'}
                />
                <h4>오늘의 감정</h4>
                <div className={'emotion_list_wrapper'}>
                    {
                        emotionIds
                            .map((emotionId) => <EmotionItem key={emotionId} emotionId={emotionId} />)
                    }
                </div>

                <h4>오늘의 일기</h4>
                <textarea placeholder={'오늘은 어땟나요?'}/>
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