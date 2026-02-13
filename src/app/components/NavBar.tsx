"use client";

import styles from "../styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>PRAVICE</div>

        {/* MENU */}
        <nav className={styles.menu}>
          <a href="#inicio">Inicio</a>
          <a href="#problema">Problema</a>
          <a href="#solucion">Solución</a>
          <a href="#metodologia">Metodología</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* BOTÓN APP */}
        <div className={styles.cta}>
          <Link
            href="/https://legalapp.pravice.co/login.php"
            className={styles.appButton}
          >
            Consultar mi caso
          </Link>
        </div>
      </div>
    </header>
  );
}
