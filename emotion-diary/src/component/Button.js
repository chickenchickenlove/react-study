import "./Button.css";


function Button({ text, type, onClick }) {
    const buttonType = ["positive", "negative"].includes(type) ? type : "default";
    const buttonClassName = ["Button", `Button_${buttonType}`].join(" ");

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
                {text}
        </button>
    );
}

export default Button;