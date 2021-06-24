
const Button = ({ onClick, link, className, color, text}) => {
    return (
        


        <button 
        className={`${className}`}
        color={ `${color||""}`}  
        link={`${link}`}
        type="submit" >{text} </button>
    );
};


export default Button
// "btn btn-primary mx-3 my-2"
// color={color} className={className }
// className={styles.btn}