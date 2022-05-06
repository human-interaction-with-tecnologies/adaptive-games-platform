import style from './style.module.css';

const Footer = () =>{
    return(
        <div className={style.footer}>
            <ul >
                <span>Conato </span>
                <li>
                    jogosadaptaveis@gmail.com
                </li>
            </ul>

            <div>
                <p>Projeto de jogos adaptaveis 2021 -  deritos reservados</p>
            </div>
        </div>
    )
}

export default Footer;