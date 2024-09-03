import "./UserMessage.css"
function UserMessage({clazz, userName, data}) {

    const onClickUserName = (e) => {
        console.log('here')
    }

    return (
        <div className='UserMessage'>
            <div
                onClick={onClickUserName}
                className={`${clazz} UserName`}>{userName}</div>
            <div className={`${clazz}_msg`}>{data}</div>
        </div>
    )
}


export default UserMessage;