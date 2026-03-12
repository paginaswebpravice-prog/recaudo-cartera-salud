"use client";

import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        {/* TOPBAR */}
        <div className={styles.topbar}>
          <div className={styles.topbarContainer}>
            <div className={styles.topInfo}>
              <span>
                <FontAwesomeIcon icon={faMailForward} />{" "}
                info.pravice@abogadosespecialistas.com.co
              </span>
              <span>
                <FontAwesomeIcon icon={faPhone} /> (601) 3099331
              </span>
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
              </span>
            </div>

            <div className={styles.socials}>
              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Pravice Abogados"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Pravice Abogados"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Pravice Abogados"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className={styles.navbar}>
          <div className={styles.container}>
            {/* LOGO */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo_pravice.png"
                alt="Logo PRAVICE Abogados"
                width={60}
                height={60}
                priority
              />
            </Link>

            {/* HAMBURGER */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>

            {/* MENU */}
            <nav
              className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            >
              <a href="#inicio" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
              <a href="#problema" onClick={() => setMenuOpen(false)}>
                Problema
              </a>
              <a href="#solucion" onClick={() => setMenuOpen(false)}>
                Solución
              </a>
              <a href="#metodologia" onClick={() => setMenuOpen(false)}>
                Metodología
              </a>
              <a href="#clientes" onClick={() => setMenuOpen(false)}>
                Clientes
              </a>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
              <a href="/Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>

              <Link
                href="https://legalapp.pravice.co/login.php"
                target="_blank"
                className={styles.appButton}
                onClick={() => setMenuOpen(false)}
              >
                Consultar mi caso
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
