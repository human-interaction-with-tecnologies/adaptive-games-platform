import { useState } from "react"

const useForm = (type) =>{
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    function onChange({target}){
        if(error){
            validate(target.value)
        }
        setValue(target.value);
    }

    function validate(value){
        if(type === false){
            return true;
        }

        if(value.length === 0){
            setError('Prencha um valor');
            return false;
        }else{
            setError(null)
            return true;
        }
    }

    return{
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }

}

export default useForm;