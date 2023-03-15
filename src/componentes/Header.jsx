import styles from '../Header.module.css'
import logo from '../imagens/logo.png'

function Cabecalho(props){

    return (


        <div className={styles.cabecalho}>
            <img src={logo} alt="Gerador de ordem de serviço logo" className={styles.logotipo}/>

            <ul className={styles.nav_cabecalho}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Fale conosco</a></li>
            </ul>
        </div>


    )

}

export default Cabecalho