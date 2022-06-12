
import style from "./style.module.css";

const Input = ({label, type, name, value, onChange, error, onBlur, placeholder}) =>{
    return(
        <div className={style.wrapper}>
            <label htmlFor={name} className={style.label}>{label}</label>
            <input 
                id={name} 
                name={name}
                className={style.input}
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input;