import "./Button.css"

type ButtonType = {
    text: string,
    type?: 'positive' | 'negative' | 'default',
    // onButtonClick: (e: MouseEvent) => void
}

function Button({ text, type = 'default'}: ButtonType) {
    return (
        <button
            className={`Button Button_${type}`}
        >
            {text}
        </button>
    )
}

export default Button;