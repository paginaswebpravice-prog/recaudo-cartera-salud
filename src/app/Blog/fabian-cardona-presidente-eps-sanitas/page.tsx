import styles from "./Article.module.css";
import Link from "next/link";

export const metadata = {
  title:
    "Fabián Cardona asume presidencia de EPS Sanitas: impacto en IPS y cartera en Colombia",
  description:
    "Análisis del nombramiento de Fabián Cardona en EPS Sanitas y su impacto en el cobro de cartera a EPS en Colombia, especialmente para IPS y clínicas en Bogotá.",
};

export default function NoticiaSanitasCardona() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Noticias sector salud Colombia</span>

          <h1 className={styles.title}>
            Fabián Cardona asume la presidencia de EPS Sanitas en Colombia
          </h1>

          <p className={styles.subtitle}>
            Un cambio clave en el sistema de salud colombiano que impacta la
            gestión de cartera, pagos a IPS y la sostenibilidad financiera del
            sector en Bogotá y todo el país.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        {/* CONTEXTO */}
        <section className={styles.section}>
          <h2>Nuevo liderazgo en EPS Sanitas</h2>

          <p>
            El nombramiento de Fabián Cardona como presidente de EPS Sanitas
            marca un momento relevante para el sistema de salud en Colombia,
            especialmente en un contexto de transformación, regulación y presión
            financiera sobre las entidades aseguradoras.
          </p>

          <p>
            EPS Sanitas, una de las principales aseguradoras del país, enfrenta
            retos asociados a la sostenibilidad, la gestión del riesgo y el
            cumplimiento en el pago a clínicas e IPS en ciudades como Bogotá.
          </p>
        </section>

        {/* PERFIL */}
        <section className={styles.sectionAlt}>
          <h2>Perfil estratégico de liderazgo en salud</h2>

          <p>
            Fabián Cardona cuenta con experiencia en el sector salud colombiano,
            con enfoque en eficiencia operativa, sostenibilidad financiera y
            fortalecimiento institucional.
          </p>

          <p>
            Su llegada busca optimizar la gestión interna de la EPS, mejorar la
            relación con prestadores y responder a los desafíos actuales del
            sistema de salud en Colombia.
          </p>
        </section>

        {/* IMPACTO CARTERA */}
        <section className={styles.section}>
          <h2>Impacto en el cobro de cartera a EPS en Colombia</h2>

          <p>
            Los cambios directivos en EPS como Sanitas tienen un impacto directo
            en el cobro de cartera del sector salud, especialmente para IPS y
            clínicas en Bogotá y otras regiones del país.
          </p>

          <ul className={styles.checklist}>
            <li>Reorganización de prioridades en pagos a prestadores</li>
            <li>Ajustes en flujos de caja y tiempos de respuesta</li>
            <li>Incremento en negociaciones de cartera</li>
            <li>Necesidad de fortalecer estrategias de recaudo</li>
          </ul>

          <p>
            En este contexto, el manejo estratégico de la cartera se vuelve
            clave para garantizar el recaudo efectivo y evitar acumulación de
            cartera vencida.
          </p>
        </section>

        {/* ANÁLISIS */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué significa para IPS y clínicas en Bogotá?</h2>

          <p>
            Para los prestadores de servicios de salud en Bogotá y Colombia,
            este tipo de cambios representa tanto riesgos como oportunidades en
            la recuperación de cartera.
          </p>

          <p>
            Es posible que se presenten ajustes en políticas de pago, lo que
            exige mayor control documental, seguimiento a facturación y
            activación oportuna de procesos de cobro prejurídico y jurídico.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.section}>
          <h2>Claves para el recaudo de cartera en el sector salud</h2>

          <div className={styles.letterBox}>
            <p>
              En escenarios de cambio dentro de las EPS en Colombia, la mejor
              estrategia no es esperar, sino actuar con estructura.
            </p>

            <p>
              Las IPS y clínicas deben implementar modelos de gestión de cartera
              que incluyan control de antigüedad, soporte documental completo y,
              cuando sea necesario, inicio de proceso ejecutivo para asegurar el
              pago.
            </p>

            <p>
              La anticipación y la estrategia jurídica son determinantes para
              lograr resultados reales en el recaudo.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.section}>
          <h2>Un cambio que redefine el sector salud en Colombia</h2>

          <p>
            La llegada de un nuevo presidente a EPS Sanitas refleja los cambios
            estructurales que atraviesa el sistema de salud colombiano.
          </p>

          <p>
            Para las IPS y clínicas en Bogotá y Colombia, este tipo de
            transformaciones refuerza la importancia de contar con estrategias
            sólidas de cobro de cartera, negociación y recuperación efectiva.
          </p>
        </section>

        {/* FUENTE ORIGINAL */}
        <section className={styles.sectionAlt}>
          <h2>Fuente original de la noticia</h2>

          <p>
            Este artículo es un resumen y análisis basado en la noticia
            publicada por Consultorsalud sobre el nombramiento de Fabián Cardona
            en EPS Sanitas.
          </p>

          <a
            href="https://consultorsalud.com/fabian-cardona-asume-la-presidencia-eps-sanitas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Ver noticia completa ↗
          </a>
        </section>

        {/* FOOTER CTA */}
        <footer className={styles.footer}>
          <p>
            ¿Su IPS tiene cartera pendiente con EPS en Colombia?{" "}
            <strong>
              Una estrategia jurídica adecuada puede marcar la diferencia en el
              recaudo efectivo.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
