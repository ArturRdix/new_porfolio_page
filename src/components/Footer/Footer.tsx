import styles from './Footer.module.scss'
import { FaTelegramPlane,FaInstagram,FaGithub   } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.leftBlock}>
          <p>Знайди мене:</p>
           <a target='_blank' className={styles.first} href="https://t.me/TheRdix"><FaTelegramPlane/></a>
           <a target='_blank' href="https://www.instagram.com/66baby_devil66/"><FaInstagram /></a>
          </div>
          <span className={styles.copy}>&copy; Усі права на сайт захищені © 2025</span>
          <div className={styles.rightBlock}>
          <a target='_blank' href="https://github.com/ArturRdix">ArturRdix<FaGithub /></a>
          </div>
        </footer>
    );
}

export default Footer;