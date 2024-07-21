import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import {getFormattedDate} from "../utils";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";


function Diary() {
    // React Router가 제공하는 파라메터임.
    // useParams()를 이용하면 URL 파라미터를 Object로 바꿔서 전달해줌.
    // const params = useParams();
    // console.log(params);
    const {id} = useParams();
    const data = useDiary(id);
    console.log("data", data);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const goEdit = () =>{
        navigate(`/edit/${id}`)
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else {

        const {date, emotionId, content} = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
        return (
            <div>
                <Header
                    title={title}
                    leftChild={<Button text={"뒤로 가기"} onClick={goBack}/>}
                    rightChild={<Button text={"수정하기"} onClick={goEdit}/>}
                />
                <Viewer content={content} emotionId={emotionId} />
            </div>
        );
    }
}

export default Diary;