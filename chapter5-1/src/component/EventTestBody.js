function EventTestBody() {

    // 리액트에서는 이벤트가 발생하면 이벤트 핸들러에게 이벤트 객체를 매개변수로 전달함.
    // 여기서 handleOnClick은 이벤트 핸들러로 동작함.
    function handleOnClick(e) {
        console.log(e);
        console.log(e.target.name);
        alert("버튼을 클릭하셨군요.");
    }

    return (
        <div>
            <button name="A버튼" onClick={handleOnClick}> A버튼</button>
            <button name="B버튼" onClick={handleOnClick}> B버튼</button>
            <button onClick={handleOnClick}> 클릭하세요</button>
        </div>
    );
}

export default EventTestBody;