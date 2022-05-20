import { Routes, Route, useNavigate} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () =>{
    return(
        <section>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
            </Routes>
        </section>
    )
}

export default Login;