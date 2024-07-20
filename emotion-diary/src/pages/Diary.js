import {useParams} from "react-router-dom";


function Diary() {
    // React Router가 제공하는 파라메터임.
    // useParams()를 이용하면 URL 파라미터를 Object로 바꿔서 전달해줌.
    // const params = useParams();
    // console.log(params);
    const {id} = useParams();
    console.log(id);

    return (
        <div>Diary 페이지입니다.</div>
    );
}

export default Diary;