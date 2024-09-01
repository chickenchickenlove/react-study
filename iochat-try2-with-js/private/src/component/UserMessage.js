import "./UserMessage.css"
function UserMessage({type, clazz, userName, data}) {
    return (
        <div className='UserMessage'>
            <div className={`${clazz} UserName`}>{userName}</div>
            <div className={`${clazz}_msg`}>{data}</div>
        </div>
    )
}


export default UserMessage;