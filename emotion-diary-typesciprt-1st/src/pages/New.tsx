import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

function New() {
    return (
        <div className={"New"}>
            <Header
                left_child={<Button text={"뒤로 가기"}/>}
                title={"새 일기 쓰기"}></Header>
            <Editor />
        </div>
    );
}

export default New;

