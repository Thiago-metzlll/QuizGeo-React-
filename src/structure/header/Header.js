import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import BtnTheme from './../../components/ui/allBtns/btn.theme/BtnTheme'

function Header() {
    return <>
        <header className={styles.header}>
            <Link className={styles.link} to={'/'}>QuizGeo</Link>
            <Link className={styles.link} to={'/login'}>Login</Link>
            <Link className={styles.link} to={'/cards'}>Cards</Link>
            <BtnTheme className={styles.btnTheme} />
        </header>
    </>

}

export default Header