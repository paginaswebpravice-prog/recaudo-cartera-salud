"use client";

import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_pravice.png"
            alt="Logo PRAVICE Abogados"
            width={70}
            height={70}
            priority
          />
        </Link>

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
            href="https://legalapp.pravice.co/login.php"
            className={styles.appButton}
            target="_blank"
          >
            Consultar mi caso
          </Link>
        </div>
      </div>
    </header>
  );
}
