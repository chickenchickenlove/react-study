import Header from "../component/Header";
import DiaryList from "../component/DiaryList";
import Button from "../component/Button";

function Home() {

    return (
        <div>
            <Header
                title={`${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`}
                left_child={<Button
                    text={"<"}
                />}
                right_child={<Button
                    text={">"}
                />}
            />
            <DiaryList/>
        </div>
    );
}

export default Home;