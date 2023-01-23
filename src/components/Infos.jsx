import { MdArrowRightAlt } from "react-icons/md";

import logo from '../assets/datamar.svg';
import image from '../assets/image.png';

import styles from './Infos.module.scss';

export default function Infos() {
  return (
    <div className={styles.info}>
      <div>
        <img src={logo} alt="datamar logo" />
        <h1>Experimente nossas soluções inteligentes de dados</h1>
      </div>

      <h2>Com a Datamar você tem acesso a:</h2>

      <div><MdArrowRightAlt /><p>Importadores com identificação dos nomes do consignatário e notify</p></div>
      <div><MdArrowRightAlt /><p>Importadores com identificação dos nomes do consignatário e notify</p></div>
      <div><MdArrowRightAlt /><p>Importadores com identificação dos nomes do consignatário e notify</p></div>
      <div><MdArrowRightAlt /><p>Importadores com identificação dos nomes do consignatário e notify</p></div>
      <div><MdArrowRightAlt /><p>Importadores com identificação dos nomes do consignatário e notify</p></div>

      <h3>Dúvidas? Entre em contato e fale com um de nossos<br/>especialistas:<span>0800 891 1887</span></h3>

      <img src={image} alt="image" />
    </div>
  )
}