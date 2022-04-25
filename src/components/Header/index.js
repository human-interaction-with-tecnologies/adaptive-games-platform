import style from './style.module.css';

const Header = () =>{
    return (
        <nav className={style.nav}>
            <a href="">Jogos</a>
            <a href="">Financiadores</a>
            <button>Login</button>
        </nav>
    )
}

export default Header;