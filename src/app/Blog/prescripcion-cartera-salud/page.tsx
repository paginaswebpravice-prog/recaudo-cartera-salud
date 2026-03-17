import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title:
    "Prescripción de cartera en salud en Colombia: cómo evitar perder el cobro | Bogotá IPS y clínicas",
  description:
    "Evite la prescripción de cartera en el sector salud en Colombia. Estrategias legales para IPS y clínicas en Bogotá: control de términos, cobro prejurídico y proceso ejecutivo.",
};

export default function PrescripcionCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Control de riesgo jurídico</span>

          <h1 className={styles.title}>
            Prescripción de cartera en el sector salud en Colombia
          </h1>

          <p className={styles.subtitle}>
            Estrategias para IPS, clínicas y prestadores de salud en Bogotá y
            Colombia que buscan evitar la pérdida del derecho de cobro frente a
            EPS por vencimiento de términos.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2>
            Prescripción de cartera EPS en Colombia: un riesgo financiero real
          </h2>

          <p>
            La prescripción de cartera en el sector salud en Colombia es uno de
            los principales riesgos financieros para IPS, clínicas y prestadores
            de servicios de salud, especialmente en ciudades como Bogotá donde
            el volumen de facturación es alto.
          </p>

          <p>
            Cuando no se gestionan adecuadamente los tiempos legales, las
            entidades pierden el derecho de cobro frente a las EPS, lo que se
            traduce en pérdidas económicas significativas.
          </p>
        </section>

        {/* RIESGO REAL */}
        <section className={styles.sectionAlt}>
          <h2>El riesgo real de no gestionar la cartera a tiempo</h2>

          <p>
            En el cobro de cartera a EPS en Colombia, el paso del tiempo sin
            acciones estructuradas incrementa el riesgo de prescripción y reduce
            drásticamente la probabilidad de recaudo.
          </p>

          <p>
            Muchas IPS y clínicas en Bogotá confían en la voluntad de pago de
            las EPS, postergando decisiones jurídicas clave. Esta práctica puede
            resultar en la pérdida total de la cartera.
          </p>

          <p>
            La recuperación de cartera en el sector salud debe iniciar con un
            control riguroso de antigüedad, verificación de exigibilidad y una
            estrategia jurídica clara desde el primer momento.
          </p>
        </section>

        {/* MEDIDAS PRÁCTICAS */}
        <section className={styles.section}>
          <h2>Medidas prácticas para evitar la prescripción de cartera</h2>

          <p>
            Evitar la prescripción en el cobro de cartera EPS en Colombia
            requiere una gestión activa, estratégica y permanente.
          </p>

          <ul className={styles.checklist}>
            <li>Segmentación de cartera por antigüedad y nivel de riesgo</li>
            <li>Requerimientos formales de pago con trazabilidad jurídica</li>
            <li>Acuerdos de pago con cronogramas verificables</li>
            <li>Activación oportuna del proceso ejecutivo</li>
            <li>Control permanente de términos legales y procesales</li>
          </ul>

          <p>
            Estas acciones permiten interrumpir términos de prescripción y
            proteger el derecho de cobro de IPS y clínicas en Colombia.
          </p>
        </section>

        {/* ESTRATEGIA JURÍDICA */}
        <section className={styles.sectionAlt}>
          <h2>Interrupción de la prescripción: clave en el proceso</h2>

          <p>
            En el contexto legal colombiano, la prescripción puede interrumpirse
            mediante actuaciones como requerimientos formales o el inicio de un
            proceso judicial.
          </p>

          <p>
            Por esta razón, el cobro de cartera en el sector salud no debe
            limitarse a la gestión administrativa, sino que debe integrarse con
            una estrategia jurídica que garantice la conservación del derecho de
            cobro.
          </p>

          <p>
            En Bogotá y otras ciudades de Colombia, esta práctica es clave para
            mantener la viabilidad financiera de las instituciones de salud.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.sectionHighlight}>
          <h2>Estrategia preventiva desde el primer día</h2>

          <p>
            En PRAVICE abordamos la recuperación de cartera EPS en Bogotá y
            Colombia con una estrategia preventiva desde el inicio.
          </p>

          <p>
            No esperamos a que el término esté por vencerse: implementamos
            control jurídico temprano, gestión prejurídica y acciones legales
            oportunas para proteger el recaudo.
          </p>

          <p>
            La prescripción no se combate cuando ya ocurrió, se evita con
            estrategia.
          </p>
        </section>

        {/* CIERRE SEO */}
        <section className={styles.section}>
          <h2>Proteja su cartera en el sector salud en Bogotá y Colombia</h2>

          <p>
            La correcta gestión de la prescripción en el cobro de cartera EPS es
            determinante para la estabilidad financiera de IPS, clínicas y
            prestadores de salud en Colombia.
          </p>

          <p>
            Implementar controles jurídicos adecuados permite maximizar el
            recaudo, reducir pérdidas y fortalecer la posición legal frente a
            las entidades deudoras.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            ¿Su cartera está en riesgo de prescripción en Bogotá o Colombia?{" "}
            <strong>
              PRAVICE protege su derecho de cobro con estrategia legal efectiva.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
