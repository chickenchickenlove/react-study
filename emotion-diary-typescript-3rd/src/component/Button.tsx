import "./Button.css"

interface Props {
    type?: "negative" | "positive" | "default";
    text?: string;
    doCallback?: () => void;
}

function Button(
    {
        type = "default",
        text = "default",
        doCallback = (() => {
            alert("hello");})
    }: Props) {

    const buttonClass = `Button Button_${type}`;

    return (
        <button
            className={buttonClass}
            onClick={() => doCallback()}>
            {text}
        </button>
    )
}

export default Button;