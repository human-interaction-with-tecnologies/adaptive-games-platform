import Header from "../../components/Header";
import style from "./style.module.css"
import {ReactComponent as ImgPrincipalLP} from '../../assets/ImgPrincipalLP.svg'
import {ReactComponent as ImgWavyEffect} from '../../assets/ImgWavyEffect.svg'
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
                        <ImgPrincipalLP/>
                    </div>

                    <div className={style.ImgEffect}>
                    </div>
                    
                </section>
                
            </section>
            
        </>
    )
}

export default LandingPage;