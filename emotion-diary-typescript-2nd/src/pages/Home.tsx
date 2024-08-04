import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import React, {useState} from "react";


const getFormattedDate = (date: number) => {
    const d = new Date(date);
    return `${d.getFullYear()}년 ${d.getMonth()+1}월`
}

function Home() {

    const [date, setDate] = useState(new Date().getTime());

    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={'<'}
                        doAction={(_) => console.log(1)}
                    />
                }
                right_child={
                    <Button
                        text={'>'}
                        doAction={(_) => console.log(1)}
                    />
                }
                title={getFormattedDate(date)}

            />
            <DiaryList />
        </div>
    );
}

export default Home;

