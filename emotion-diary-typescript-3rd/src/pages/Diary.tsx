import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";

function Diary() {
    return (
        <div>
            <Header
                left_child={
                    <Button text={"뒤로 가기"} />
                }
                right_child={
                    <Button text={"수정하기"} />
                }
                title={"2024. 8. 18. 기록"}
            />
            <Viewer />
        </div>

    );
}

export default Diary;