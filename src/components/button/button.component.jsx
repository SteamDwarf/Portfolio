import './button.style.scss';

const Button = ({className, children, onClick, type, disabled}) => {
    return (
        <button disabled={disabled} type={type} className={`button ${className}`} onClick={onClick}>{children}</button>
    );
}

export default Button;