"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function CuandoPrescribeCarteraEPS() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla",
    description:
      "Guía completa sobre la prescripción de cartera EPS en Colombia y cómo evitar perder dinero por vencimiento de términos.",
    image: "https://recaudocarteraipsyeps.com/logo.png",
    author: {
      "@type": "Organization",
      name: "Recaudo Cartera IPS y EPS",
    },
    publisher: {
      "@type": "Organization",
      name: "Recaudo Cartera IPS y EPS",
      logo: {
        "@type": "ImageObject",
        url: "https://recaudocarteraipsyeps.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/cuando-prescribe-cartera-eps",
    },
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className={styles.wrapper}>
        {/* HERO */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContainer}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/Blog" className={styles.backLink}>
              ← Volver al blog
            </Link>

            <span className={styles.badge}>Prescripción de cartera EPS</span>

            <h1 className={styles.title}>
              Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla
            </h1>

            <p className={styles.subtitle}>
              Descubra cómo funciona la prescripción de cartera EPS en Colombia,
              cuáles son los términos legales y qué hacer para evitar perder
              millones en cuentas por cobrar.
            </p>
          </motion.div>
        </section>

        {/* ARTICLE */}
        <article className={styles.article}>
          {/* INTRO */}
          <section className={styles.section}>
            <h2>¿Qué significa que una cartera EPS prescriba en Colombia?</h2>

            <p>
              La prescripción ocurre cuando transcurre el tiempo legal permitido
              para reclamar judicialmente una obligación y el acreedor pierde la
              posibilidad de exigir el pago ante un juez.
            </p>

            <p>
              En el sector salud colombiano, esto representa uno de los mayores
              riesgos financieros para IPS, clínicas y prestadores de servicios,
              especialmente cuando existen cuentas pendientes con EPS durante
              largos periodos.
            </p>
          </section>

          {/* BLOQUE */}
          <section className={styles.sectionAlt}>
            <h2>
              Por qué la prescripción de cartera EPS es un problema tan grave
            </h2>

            <p>
              Muchas entidades de salud acumulan cartera vencida durante años
              mientras esperan conciliaciones, auditorías o acuerdos de pago que
              nunca se concretan.
            </p>

            <p>
              El problema es que mientras pasa el tiempo, la posibilidad de
              recuperar judicialmente la deuda puede reducirse hasta perderse
              por completo.
            </p>
          </section>

          {/* SECCIÓN */}
          <section className={styles.section}>
            <h2>
              Cuánto tiempo tarda en prescribir la cartera EPS en Colombia
            </h2>

            <p>
              El término de prescripción depende del tipo de obligación, el
              documento soporte y la naturaleza jurídica del cobro.
            </p>

            <p>
              En muchos casos relacionados con facturación y títulos ejecutivos,
              el término puede ser de varios años contados desde el momento en
              que la obligación se hizo exigible.
            </p>

            <p>
              Sin embargo, cada caso debe analizarse individualmente porque
              existen factores que pueden suspender, interrumpir o modificar los
              términos legales.
            </p>
          </section>

          {/* HIGHLIGHT */}
          <section className={styles.sectionHighlight}>
            <h2>
              Esperar demasiado puede hacer perder completamente la cartera
            </h2>

            <p>
              Muchas IPS pierden capacidad de recuperación porque dejan pasar el
              tiempo sin iniciar cobros prejurídicos, requerimientos formales o
              procesos judiciales contra las EPS.
            </p>

            <p>
              Una estrategia jurídica temprana puede evitar que la cartera se
              convierta en una pérdida definitiva.
            </p>
          </section>

          {/* SECCIÓN */}
          <section className={styles.section}>
            <h2>Factores que pueden acelerar el riesgo de prescripción</h2>

            <p>
              Existen varios factores que aumentan el riesgo de perder cartera
              EPS por vencimiento de términos:
            </p>

            <p>
              <strong>Falta de seguimiento jurídico:</strong> muchas cuentas no
              reciben monitoreo constante.
            </p>

            <p>
              <strong>Documentación incompleta:</strong> errores documentales
              dificultan acciones judiciales oportunas.
            </p>

            <p>
              <strong>Dependencia de conciliaciones:</strong> esperar acuerdos
              indefinidamente puede consumir años valiosos.
            </p>

            <p>
              <strong>Demoras administrativas:</strong> procesos internos lentos
              retrasan decisiones estratégicas de cobro.
            </p>
          </section>

          {/* ALT */}
          <section className={styles.sectionAlt}>
            <h2>Cómo evitar perder cartera EPS por prescripción en Colombia</h2>

            <p>
              La prevención es la herramienta más importante para proteger la
              cartera del sector salud.
            </p>

            <p>
              Implementar controles de antigüedad de cartera, seguimiento
              jurídico permanente y estrategias de cobro escalonado permite
              reducir significativamente el riesgo de prescripción.
            </p>

            <p>
              También es fundamental actuar rápidamente frente a EPS con mora
              prolongada o incumplimientos reiterados.
            </p>
          </section>

          {/* FINAL */}
          <section className={styles.section}>
            <h2>
              Estrategias jurídicas para recuperar cartera EPS antes de que
              prescriba
            </h2>

            <p>
              Entre las estrategias más utilizadas se encuentran los
              requerimientos formales de pago, cobro prejurídico, conciliaciones
              estratégicas, demandas ejecutivas y medidas cautelares.
            </p>

            <p>
              Cada mecanismo debe aplicarse según el estado de la cartera y el
              comportamiento de la EPS deudora.
            </p>

            <p>
              Actuar a tiempo puede marcar la diferencia entre recuperar
              millones de pesos o perder definitivamente la posibilidad de
              cobro.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
