const Button = ({text, color}) =>{
    const styling = {
        backgroundColor: color
    }
    return(
        <div>
            <button style={styling}>{text}</button>
        </div>
    )
}
export default Button;