import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
import styles from './style.module.css';

const Header = () =>{
    // função para ajuste de tela no mobile
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);
    const linkDiv = document.querySelectorAll('a');
    const ButtonDiv = document.querySelector('.buttonDiv');
    console.log(ButtonDiv)

    function CloseMenuMobile(){
        setMobileMenu(false);
    }
    linkDiv.forEach((item)=>{
        item.addEventListener('click', CloseMenuMobile)
    })

    linkDiv.forEach((item)=>{
        ButtonDiv.addEventListener('click', CloseMenuMobile);
    })
    
    console.log(mobileMenu)
    return (
        <>  
            {mobile &&  <button 
                aria-label='Menu' 
                className={`${styles.mobileMenu} ${mobileMenu && styles.mobileButtonActive}`}
                onClick={()=> setMobileMenu(!mobileMenu)}
                >
                </button>
            }
            <div className={` buttonDiv ${mobileMenu ? styles.divActive:  styles.navMobileMenu}`}></div>
            <nav className={`
                ${mobile ? styles.navMobileMenu : styles.nav}
                ${mobileMenu && styles.navMobileActive }
            `}>
                <a href="#">Jogos</a>
                <a href="#" >
                    Financiadores
                </a>
                <Link className={styles.btnLoginHeader} to='/login'>Login</Link>
            </nav>
        </>
    )
}

export default Header;