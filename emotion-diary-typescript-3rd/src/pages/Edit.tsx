import Header from "../component/Header";
import Editor from "../component/Editor";
import Button from "../component/Button";

function Edit() {
    return (
        <div>
            <Header
                left_child={<Button text={"뒤로 가기"} />}
                right_child={<Button
                    type={"negative"}
                    text={"삭제하기"}
                />}
                title={"수정하기"}
            />
            {/*<Editor />*/}
        </div>

    );
}

export default Edit;