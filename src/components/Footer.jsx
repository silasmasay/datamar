import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerInfo}>
            <h3>Onde estamos?</h3>
            <div>
              <h2><MdOutlineLocationOn />São Paulo, Brasil</h2>
              <h2><MdOutlineLocationOn />Bangalore, Índia</h2>
            </div>
          </div>

          <div className={styles.stripe}></div>

          <div className={styles.nav}>
            <h2>2023 © Datamar Comércio Exterior com Inteligência - Todos os Direitos Reservados</h2>

            <nav>
              <ul>
                <li><a href="">www.datamar.com.br</a></li>
                <li><a href="">datamarnews.com</a></li>
                <li><a href="">Cookie Preferences</a></li>
                <li><a href="">Termos e condições</a></li>
              </ul>

              <ul>
                <li><a href=""><FaLinkedinIn /></a></li>
                <li><a href=""><FaTwitter /></a></li>
                <li><a href=""><FaInstagram /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}