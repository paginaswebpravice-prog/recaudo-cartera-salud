import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* COLUMNA 1 */}
          <div className={styles.column}>
            <h3 className={styles.logo}>PRAVICE ABOGADOS</h3>
            <p className={styles.description}>
              Firma especializada en recuperación de cartera del sector salud.
              Estrategia jurídica inteligente con alineación total a resultados.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div className={styles.column}>
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#metodologia">Metodología</a>
              </li>
              <li>
                <a href="#clientes">Clientes</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul>
              <li>Bogotá, Colombia</li>
              <li>contacto@pravice.com</li>
              <li>+57 300 000 0000</li>
            </ul>
          </div>

          {/* COLUMNA 4 - REDES */}
          <div className={styles.column}>
            <h4>Síguenos</h4>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                aria-label="Instagram Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                aria-label="LinkedIn Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                aria-label="Facebook Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} PRAVICE ABOGADOS. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/573000000000"
        className={styles.whatsappFloat}
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
