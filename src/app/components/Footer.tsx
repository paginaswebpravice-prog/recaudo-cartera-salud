"use client";

import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCTA(true);

      // Se oculta después de 10 segundos
      setTimeout(() => {
        setShowCTA(false);
      }, 10000);
    }, 15000); // aparece cada 15s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* COLUMNA 1 */}
          <div className={styles.column}>
            <h3 className={styles.logo}>PRAVICE ABOGADOS</h3>
            <p className={styles.description}>
              Firma jurídica especializada en recuperación de cartera
              hospitalaria, cobro jurídico a EPS y procesos ejecutivos en el
              sector salud en Colombia.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div className={styles.column}>
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="/#inicio">Inicio</a>
              </li>
              <li>
                <a href="/#metodologia">Metodología</a>
              </li>
              <li>
                <a href="/#clientes">Clientes</a>
              </li>
              <li>
                <a href="/#contacto">Contacto</a>
              </li>
              <li>
                <a href="/Blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul>
              <li>Bogotá D.C., Colombia</li>
              <li>info.pravice@abogadosespecialistas.com.co</li>
              <li>(601) 3099331</li>
              <li>Atención a nivel nacional</li>
            </ul>
          </div>

          {/* REDES */}
          <div className={styles.column}>
            <h4>Síguenos</h4>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} PRAVICE ABOGADOS S.A.S.</p>
        </div>
      </footer>

      {/* CTA FLOTANTE */}
      {showCTA && (
        <div className={styles.whatsappCTA}>
          💬 ¿Necesitas asesoría legal? <br />
          <span>Habla con un abogado ahora</span>
        </div>
      )}

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
