import Input from "../../../components/Form/Input";
import useForm from "../../../Hooks/useForm";
import style from "./style.module.css";

const LoginForm = () =>{
    const email = useForm();
    const password = useForm();
    
    return(
        <section className={style.container}>
            <div className={style.formContainer}>
                <form className={style.form}>
                    <h1 className={style.title}>Login</h1>
                    <Input name="email" type="email" label="E-mail"  {...email}/>
                    <Input name="password" type="password" label="Password" {...password}/>
                    <div className={style.informtaion}>
                        <label className={style.label}>
                        <input type="checkbox" />
                        <p>Lembre-me</p> 
                        </label>
                        <a href="" className={style.esqueceu}>Esquesseu a senha?</a>
                    </div>
                    <button className={style.btnLogin}>Entrar</button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;