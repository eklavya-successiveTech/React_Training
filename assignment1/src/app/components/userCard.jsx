const Usercard = ({name, email, avatarUrl}) =>{
    return(
        <div>
            <img src={avatarUrl} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Usercard;