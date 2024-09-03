import "./LogoutMessage.css"

function LogoutMessage({userName}) {
    return (
        <div className='LogoutMessage'>
            <div className='line'/>
            <div>
                {`${userName} left this chat.`}
            </div>
            <div className='line'/>
        </div>
    )
}

export default LogoutMessage;
