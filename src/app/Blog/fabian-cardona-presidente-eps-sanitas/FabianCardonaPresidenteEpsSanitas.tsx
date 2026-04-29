"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function NoticiaSanitasCardona() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Noticias del sector salud en Colombia
          </span>

          <h1 className={styles.title}>
            Fabián Cardona es nombrado nuevo presidente de EPS Sanitas en
            Colombia: impacto en cartera y pagos a IPS
          </h1>

          <p className={styles.subtitle}>
            Cambio clave en el sistema de salud colombiano con impacto en la
            gestión de cartera, pagos a IPS y sostenibilidad financiera en
            Bogotá y todo el país.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Nuevo liderazgo en EPS Sanitas y su impacto en Colombia</h2>

          <p>
            El nombramiento de Fabián Cardona como presidente de EPS Sanitas
            marca un momento relevante para el sistema de salud en Colombia.
          </p>

          <p>
            EPS Sanitas enfrenta retos de sostenibilidad financiera y pago a IPS
            en Bogotá y otras regiones.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Perfil de liderazgo y visión estratégica en el sector salud</h2>

          <p>
            Su experiencia está enfocada en eficiencia operativa y
            sostenibilidad del sistema de salud colombiano.
          </p>

          <p>
            Su llegada busca mejorar relación con prestadores y optimizar
            procesos internos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Impacto del cambio en EPS Sanitas sobre el cobro de cartera en
            Colombia
          </h2>

          <ul className={styles.checklist}>
            <li>Reorganización de prioridades de pago</li>
            <li>Ajustes en flujos de caja</li>
            <li>Incremento en negociaciones de cartera</li>
            <li>Mayor necesidad de estrategias de recaudo</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Qué significa este cambio para IPS y clínicas en Bogotá?</h2>

          <p>
            Estos cambios pueden generar ajustes en pagos y tiempos de
            respuesta.
          </p>

          <p>
            Las IPS deben fortalecer su gestión documental y estrategias de
            cobro.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Claves para la recuperación de cartera en el sector salud</h2>

          <div className={styles.letterBox}>
            <p>
              La gestión de cartera en Colombia requiere estructura, control
              documental y estrategia jurídica.
            </p>

            <p>
              La anticipación es clave para evitar acumulación de cartera
              vencida.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Conclusión sobre EPS Sanitas y el sistema de salud en Colombia
          </h2>

          <p>
            Los cambios en EPS Sanitas reflejan transformaciones en el sistema
            de salud colombiano.
          </p>

          <p>
            Las IPS deben fortalecer sus estrategias de recaudo en Bogotá y
            Colombia.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Fuente oficial de la información</h2>

          <a
            href="https://consultorsalud.com/fabian-cardona-asume-la-presidencia-eps-sanitas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Ver noticia original ↗
          </a>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Estrategia jurídica adecuada = mejor recaudo en Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
