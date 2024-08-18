import Header from "../component/Header";
import Editor from "../component/Editor";
import Button from "../component/Button";

function New() {
    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={"뒤로 가기"}
                    />
                }
                title={"새 일기 쓰기"}
            />
            <Editor/>
        </div>

    );
}

export default New;