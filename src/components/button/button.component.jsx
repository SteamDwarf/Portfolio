import './button.style.scss';

const Button = ({className, children, onClick, type}) => {
    return (
        <button type={type} className={`button ${className}`} onClick={onClick}>{children}</button>
    );
}

export default Button;