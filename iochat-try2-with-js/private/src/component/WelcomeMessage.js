import "./WelcomeMessage.css"

function WelcomeMessage({userName}) {
    return (
        <div className='WelcomeMessage'>
            <div className='line'/>
            <div>
                {`${userName} join this chat.`}
            </div>
            <div className='line'/>
        </div>
    )
}

export default WelcomeMessage;
