import "./UserMessage.css"
function UserMessage({clazz, userName, data}) {

    console.log('UserMessage!!!: ', clazz, " message: ", data)
    return (
        <div className='UserMessage'>
            <div className={`${clazz} UserName`}>{userName}</div>
            <div className={`${clazz}_msg`}>{data}</div>
        </div>
    )
}


export default UserMessage;