import "./LoginForm.css";
import {useState} from "react";

function LoginForm({sendLoginRequestToServer}) {

    const [userId, setUserId] = useState('');
    const updateUserId = (e) => {
        setUserId((_) => e.target.value);
    }

    const onClickSubmitButton = (e) => {
        sendLoginRequestToServer(userId);
        setUserId('');
    }

    return (
        <div className="LoginForm">
            <div className="wrapper">
                <input
                    onChange={updateUserId}
                    value={userId}
                    placeholder={"Enter Username"}
                />
                <button
                    type='submit'
                    onClick={onClickSubmitButton}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default LoginForm;