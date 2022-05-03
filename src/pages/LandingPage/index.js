import Header from "../../components/Header";
import Footer from "../../components/Footer/index,";
import style from "./style.module.css";
import {ReactComponent as ImgPrincipalLP} from '../../assets/ImgPrincipalLP.svg';
import {ReactComponent as MascoteQuebraCabeça} from '../../assets/mascoteQuebraCabeça.svg';
import {ReactComponent as MascoteRitimoMania} from '../../assets/MascoteRitimoMania.svg';
import Ufpafinaces from '../../assets/Ufpa.svg';
import CapesFinances from '../../assets/CAPES.svg';
import CnpqFinances from '../../assets/CNPQ.svg';
import FapespaFinances from '../../assets/FAPESPA.svg';
const LandingPage = () =>{
    return(
        <>
            <section className={style.nav}>
                <Header/>
                <section className={style.introduction}>
                    <div className={style.titulo}>
                        <span>Plataforma</span>
                        <h1>Jogos Adaptaveis</h1>
                        <p>Desevolvida para gera relatorios sobre o desenpenho dos jogadores </p>
                    </div>

                    <div className={style.Img}>
                        <ImgPrincipalLP />
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

                    <div className={style.mascoteQuebraCabeça}>
                        <MascoteQuebraCabeça />
                    </div>
                </div>


                <div className={style.ritmoMania}>
                    <div className={style.titlePlayRitmoMania}>
                        <span > </span>
                        <h2>Ritmo Mania</h2>
                    </div>
                    <div className={style.characteristicsRitmoMania}>
                        <h3>Características</h3>
                        <ul>
                            <li>
                                <span>01</span>
                                <p>Ritmo</p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>Memória</p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>Habilidades motoras finas</p>
                            </li>
                            <li>
                                <span>04</span>
                                <p>Refinamento da Audição</p>
                            </li>
                            <li>
                                <span>05</span>
                                <p>Reconhecimento de canções Populares</p>
                            </li>
                            <li>
                                <button>Download</button>
                            </li>
                        </ul>
                        
                    </div>

                    <div className={style.mascoteRitimoMania}>
                        <MascoteRitimoMania />
                    </div>
                </div>
            </section>

            <section className={style.finances}>
                <h1>Financiadores</h1>

                <ul>
                    <li><img src={Ufpafinaces } alt="" /></li>
                    <li><img src={CapesFinances} alt="" /></li>
                    <li><img src={CnpqFinances} alt="" /></li>
                    <li><img src={FapespaFinances} alt="" /></li>
                </ul>
            </section>

           <Footer  />
            
        </>
    )
}

export default LandingPage;