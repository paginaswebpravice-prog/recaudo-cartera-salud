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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                target="_blank"
                rel="noopener noreferrer"
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
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>

            {/* MENU */}
            <nav
              className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            >
              <a href="/" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
              <a href="/#problema" onClick={() => setMenuOpen(false)}>
                Problema
              </a>
              <a href="/#solucion" onClick={() => setMenuOpen(false)}>
                Solución
              </a>
              <a href="/#metodologia" onClick={() => setMenuOpen(false)}>
                Metodología
              </a>

              {/* 🔥 SERVICIOS */}
              <div
                className={`${styles.dropdown} ${
                  openDropdown === "servicios" ? styles.open : ""
                }`}
              >
                <div
                  className={styles.dropdownBtn}
                  onClick={() => toggleDropdown("servicios")}
                >
                  Servicios <span className={styles.arrow}>▼</span>
                </div>

                <div className={styles.dropdownMenu}>
                  <Link href="/Servicios/recuperacion-cartera-eps">
                    Recuperación de cartera EPS
                  </Link>
                  <Link href="/Servicios/cobro-adres">Cobro ADRES</Link>
                  <Link href="/Servicios/cartera-glosada">Cartera glosada</Link>
                  <Link href="/Servicios/proceso-ejecutivo-eps">
                    Proceso ejecutivo EPS
                  </Link>
                  <Link href="/Servicios/medidas-cautelares-eps">
                    Medidas cautelares EPS
                  </Link>
                </div>
              </div>

              {/* 🔥 SECTORES */}
              <div
                className={`${styles.dropdown} ${
                  openDropdown === "sectores" ? styles.open : ""
                }`}
              >
                <div
                  className={styles.dropdownBtn}
                  onClick={() => toggleDropdown("sectores")}
                >
                  Sectores <span className={styles.arrow}>▼</span>
                </div>

                <div className={styles.dropdownMenu}>
                  <Link href="/Sectores/ips">IPS</Link>
                  <Link href="/Sectores/clinicas">Clinicas</Link>
                  <Link href="/Sectores/hospitales">Hospitales</Link>
                </div>
              </div>

              <Link href="/Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>

              <Link
                href="https://legalapp.pravice.co/login.php"
                target="_blank"
                className={styles.appButton}
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
