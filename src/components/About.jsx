import image1 from '../assets/image-info-01.png';
import image2 from '../assets/image-info-02.png';
import image3 from '../assets/image-info-03.png';
import image4 from '../assets/image-info-04.png';
import image5 from '../assets/image-info-05.png';
import image6 from '../assets/image-info-06.png';
import image7 from '../assets/image-info-07.png';
import image8 from '../assets/image-info-08.png';
import image9 from '../assets/image-info-09.png';

import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <h1>Sobre a Datamar</h1>

        <p>A Datamar foi fundada em 1996 e os seus dados são utilizados a mais de duas décadas pelos armadores e terminais de contêineres da costa leste da América do Sul.</p>

        <div className="container">
          <div className={styles.row}>
            <figure>
              <img src={image1} />
              <span>Agentes de Carga</span>
            </figure>

            <figure>
              <img src={image2} />
              <span>Gestão de Logística de Portos e Terminais</span>
            </figure>

            <figure>
              <img src={image3} />
              <span>Empresas de Importação</span>
            </figure>

            <figure>
              <img src={image4} />
              <span>Empresas Exportadoras</span>
            </figure>

            <figure>
              <img src={image5} />
              <span>Governo / Câmaras de comércio / Consultorias</span>
            </figure>

            <figure>
              <img src={image6} />
              <span>Logística Marítima de Armadores</span>
            </figure>

            <figure>
              <img src={image8} />
              <span>Transportadoras Multimodais</span>
            </figure>

            <figure>
              <img src={image7} />
              <span>Agências Marítimas</span>
            </figure>

            <figure>
              <img src={image9} />
              <span>Gestão Logística do Transporte de Cargas</span>
            </figure>
          </div>
        </div>

        <p>Nos dedicamos a entregar os dados em uma plataforma de uso fácil, com<span>excelência na qualidade dos dados</span>, dentro do tempo esperado, com integridade e atendendo as necessidades de compliance. Tudo isso com atendimento e suporte rápido e constante aos nossos clientes, ajudando-os a atingirem
        <span>resultados fortes e tangíveis.</span></p>
      </div>
    </section>
  )
}