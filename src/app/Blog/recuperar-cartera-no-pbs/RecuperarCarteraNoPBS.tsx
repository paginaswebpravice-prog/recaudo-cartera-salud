"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function RecuperarCarteraNoPBS() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente",
    description:
      "Guía completa sobre recuperación de cartera NO PBS en Colombia y estrategias jurídicas para IPS y clínicas.",
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
      "@id": "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-no-pbs",
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

            <span className={styles.badge}>Cartera NO PBS</span>

            <h1 className={styles.title}>
              Cómo recuperar cartera NO PBS en Colombia y reclamar pagos
              correctamente
            </h1>

            <p className={styles.subtitle}>
              Descubra cómo funciona el cobro de servicios NO PBS en Colombia y
              qué estrategias jurídicas ayudan a IPS y clínicas a recuperar
              pagos pendientes.
            </p>
          </motion.div>
        </section>

        {/* ARTICLE */}
        <article className={styles.article}>
          {/* INTRO */}
          <section className={styles.section}>
            <h2>¿Qué es la cartera NO PBS en Colombia?</h2>

            <p>
              La cartera NO PBS corresponde a los servicios, tecnologías,
              medicamentos y procedimientos en salud que no están incluidos
              dentro del Plan de Beneficios en Salud financiado por la UPC.
            </p>

            <p>
              Este tipo de cartera suele convertirse en uno de los mayores retos
              financieros para IPS, clínicas y prestadores de salud en Colombia,
              debido a demoras, glosas y dificultades de pago.
            </p>
          </section>

          {/* ALT */}
          <section className={styles.sectionAlt}>
            <h2>
              Por qué la cartera NO PBS genera tantos problemas financieros
            </h2>

            <p>
              Muchos prestadores deben asumir altos costos operativos mientras
              esperan auditorías, validaciones y procesos administrativos para
              lograr el reconocimiento económico de los servicios prestados.
            </p>

            <p>
              Esto provoca acumulación de cartera vencida, afectación del flujo
              de caja y riesgos de liquidez en las entidades de salud.
            </p>
          </section>

          {/* SECTION */}
          <section className={styles.section}>
            <h2>Principales causas de mora en pagos NO PBS en Colombia</h2>

            <p>
              Existen múltiples factores que retrasan el pago de cartera NO PBS:
            </p>

            <p>
              <strong>Glosas administrativas:</strong> observaciones
              relacionadas con soportes, autorizaciones o facturación.
            </p>

            <p>
              <strong>Procesos de auditoría extensos:</strong> validaciones
              prolongadas que retrasan el reconocimiento económico.
            </p>

            <p>
              <strong>Demoras institucionales:</strong> tiempos largos de
              respuesta por parte de EPS y entidades responsables.
            </p>

            <p>
              <strong>Falta de gestión jurídica:</strong> ausencia de
              seguimiento estratégico frente a cartera envejecida.
            </p>
          </section>

          {/* HIGHLIGHT */}
          <section className={styles.sectionHighlight}>
            <h2>
              La falta de acción temprana puede aumentar el riesgo financiero
            </h2>

            <p>
              Muchas IPS dejan pasar meses o años esperando pagos sin activar
              mecanismos jurídicos o estrategias de recuperación de cartera.
            </p>

            <p>
              Entre más tiempo transcurra, mayor puede ser el riesgo de
              deterioro financiero, pérdida de liquidez y dificultades de cobro.
            </p>
          </section>

          {/* SECTION */}
          <section className={styles.section}>
            <h2>Cómo recuperar cartera NO PBS correctamente en Colombia</h2>

            <p>
              La recuperación efectiva requiere una estrategia técnica,
              documental y jurídica organizada.
            </p>

            <p>
              El primer paso consiste en validar soportes clínicos,
              autorizaciones, radicaciones y estado de auditoría de cada cuenta.
            </p>

            <p>
              Posteriormente, se implementan requerimientos formales,
              conciliaciones, seguimiento administrativo y procesos de cobro
              prejurídico o judicial según el comportamiento del deudor.
            </p>
          </section>

          {/* ALT */}
          <section className={styles.sectionAlt}>
            <h2>Importancia de la documentación en reclamaciones NO PBS</h2>

            <p>
              La calidad documental es uno de los factores más importantes en la
              recuperación de cartera NO PBS.
            </p>

            <p>
              Errores en soportes clínicos, inconsistencias de facturación o
              ausencia de documentos pueden retrasar significativamente los
              procesos de reconocimiento y pago.
            </p>

            <p>
              Una adecuada organización documental facilita reclamaciones más
              sólidas y reduce riesgos de glosas permanentes.
            </p>
          </section>

          {/* FINAL */}
          <section className={styles.section}>
            <h2>
              Estrategias jurídicas para recuperar pagos NO PBS en Colombia
            </h2>

            <p>
              Las IPS y clínicas pueden implementar estrategias de cobro
              escalonado dependiendo del estado de la cartera y la conducta de
              la entidad pagadora.
            </p>

            <p>
              Entre las herramientas más utilizadas se encuentran requerimientos
              de pago, conciliaciones, mesas técnicas, cobro prejurídico,
              demandas ejecutivas y medidas cautelares.
            </p>

            <p>
              Una gestión jurídica oportuna permite mejorar la recuperación,
              proteger el flujo de caja y reducir el impacto financiero de la
              mora prolongada en el sector salud colombiano.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
