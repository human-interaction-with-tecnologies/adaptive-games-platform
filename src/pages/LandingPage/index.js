import Header from "../../components/Header";
import style from "./style.module.css"
import {ReactComponent as ImgPrincipalLP} from '../../assets/ImgPrincipalLP.svg'
import {ReactComponent as MascoteRitimoMania} from '../../assets/mascoteRitimoMania.svg'
const LandingPage = () =>{
    return(
        <section className="Container">
            <section className={style.nav}>
                <Header/>

                <section className={style.introduction}>
                    <div className={style.titulo}>
                        <span>Plataforma</span>
                        <h1>Jogos Adaptaveis</h1>
                        <p>Desevolvida para gera relatorios sobre o desenpenho dos jogadores </p>
                    </div>

                    <div className={style.Img}>
                        <ImgPrincipalLP/>
                    </div>

                    <div className={style.ImgEffect}>
                    </div>
                    
                </section>
                
            </section>

            <section className={style.jogos}>
                <h1>Jogos</h1>
                <div className={style.quebracabeca}>
                    <div className={style.titlePlay}>
                        <span > </span>
                        <h2>Quebra-Cabeça</h2>
                    </div>
                    <div className={style.characteristics}>
                        <h3>Características</h3>
                        <ul>
                            <li>
                                <span>01</span>
                                <p>Raciocínio Lógico</p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>Habilidades motoras finas</p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>Memória</p>
                            </li>
                            <li>
                                <span>04</span>
                                <p>Reconhecimento de pessoas, animais e objetos</p>
                            </li>
                            <li>
                                <span>05</span>
                                <p>personalização das Imagens utilizadas do jogo</p>
                            </li>
                            <li>
                                <button>Download</button>
                            </li>
                        </ul>
                        
                    </div>

                    <div className={style.mascoteRitimoMania}>
                        <MascoteRitimoMania/>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default LandingPage;