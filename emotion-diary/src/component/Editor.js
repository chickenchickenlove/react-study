import "./Editor.css";
import {useEffect, useState} from "react";
import { emotionList, getFormattedDate } from "../utils";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

// initData : 기존에 작성한 일기를 페이지에 보여줄 목점임.
// onSubmit : 작성 완료 버튼을 눌렀을 때.
function Editor({ initData, onSubmit }) {

    const [state, setState] = useState(
        {
            date: getFormattedDate(new Date()),
            emotionId: 3,
            content: ""})

    const handleChangeDate = (e) => {
        setState(
            {
                ...state,
                date: e.target.value
            }
        )
    }

    const handleChangeContent = (e) => {
        setState(
            {
                ...state,
                content: e.target.value
            }
        )
    };

    const handleSubmit = () => {
        onSubmit(state);
    }

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId ,
            })
    };

    // react-router-dom이 제공함.
    // useNaviagate 사용시 클라이언트 사이드 렌더링 방식으로 페이지를 이동하는 함수 생성.
    // navigate('/new') 같은 거 전달하면, Link 컴포넌트를 클릭한 것처럼 이동함.
    // -1을 입력하면 뒤로 가기가 됨.
    const navigate = useNavigate();
    const handleOnGoBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date)))
            });
        }
    }, [initData]);


    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input
                        type="date"
                        value={state.date}
                        onChange={handleChangeDate}
                    />
                </div>
            </div>
            <div className="editor_section">
                {/* 감정 */}
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map(it => (
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id} />
                        ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땟나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section bottom_section">
                <Button text={"취소하기"} onClick={handleOnGoBack}/>
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default Editor;