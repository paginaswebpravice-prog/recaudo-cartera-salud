"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ResponderCompraCarteraArticle() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Estrategia crítica en cartera EPS
          </span>

          <h1 className={styles.title}>
            Cómo responder a una EPS que quiere comprar su cartera en Colombia
            sin perder dinero
          </h1>

          <p className={styles.subtitle}>
            Estrategia legal para IPS, clínicas y prestadores de salud en Bogotá
            y Colombia para evitar descuentos y proteger el 100% del valor de su
            cartera.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2>
            Compra de cartera en el sector salud en Colombia: una práctica que
            puede costarle dinero a las IPS
          </h2>

          <p>
            En el sector salud en Colombia, especialmente en ciudades como
            Bogotá, es frecuente que las EPS propongan esquemas de “compra de
            cartera” a IPS y clínicas con el argumento de acelerar el pago de
            obligaciones pendientes.
          </p>

          <p>
            Sin embargo, en la mayoría de los casos, estas propuestas implican
            descuentos significativos sobre el valor real de la cartera,
            afectando la rentabilidad y sostenibilidad financiera de los
            prestadores de servicios de salud.
          </p>

          <p>
            Por esta razón, es fundamental contar con una estrategia clara de
            respuesta que priorice el recaudo efectivo y no la cesión de la
            obligación.
          </p>
        </section>

        {/* ACLARACIÓN PRINCIPAL */}
        <section className={styles.sectionAlt}>
          <h2>
            Respuesta correcta: no vender la cartera, sino recuperarla al 100%
          </h2>

          <p>
            Frente a este tipo de solicitudes, la posición jurídica adecuada en
            el cobro de cartera a EPS en Colombia es clara:
            <strong> la cartera no se vende ni se descuenta</strong>, se
            <strong> recupera mediante estrategia estructurada</strong>.
          </p>

          <p>
            Esto implica implementar gestión prejurídica, control de
            negociaciones y, cuando sea necesario, iniciar proceso ejecutivo con
            medidas cautelares que garanticen el recaudo.
          </p>

          <p>
            Esta postura es especialmente relevante para IPS y clínicas en
            Bogotá, donde los volúmenes de cartera pueden ser altos y los
            descuentos impactan directamente el flujo de caja.
          </p>
        </section>

        {/* MODELO DE RESPUESTA */}
        <section className={styles.section}>
          <h2>
            Modelo de respuesta a EPS cuando proponen compra de cartera (listo
            para usar)
          </h2>

          <p>
            A continuación, un modelo de respuesta recomendado para
            instituciones del sector salud en Colombia:
          </p>

          <p>Cordial saludo. Gracias por su comunicación.</p>

          <p>
            Nos permitimos aclarar que{" "}
            <strong>PRAVICE ABOGADOS S.A.S. no compra cartera</strong>. Nuestro
            servicio está orientado a la <strong>recuperación efectiva</strong>{" "}
            de la cartera en el sector salud mediante gestión prejurídica y, de
            ser necesario, el inicio de acciones judiciales (proceso ejecutivo)
            con solicitud de medidas cautelares.
          </p>

          <p>
            En este sentido, no manejamos esquemas de cesión o descuento sobre
            el valor de las obligaciones. Nuestro enfoque está dirigido a lograr
            el pago completo o acuerdos formales con cronogramas verificables.
          </p>

          <p>
            Para avanzar, agradecemos confirmar el responsable de cartera y
            remitir propuesta de pago sobre las facturas relacionadas, o en su
            defecto, coordinar una mesa de conciliación.
          </p>

          <p>
            Atentamente, <br />
            PRAVICE ABOGADOS S.A.S.
          </p>
        </section>

        {/* ERRORES COMUNES */}
        <section className={styles.sectionAlt}>
          <h2>
            Errores más costosos al negociar compra de cartera con EPS en
            Colombia
          </h2>

          <p>
            En el cobro de cartera en el sector salud, muchas IPS y clínicas en
            Bogotá cometen errores al aceptar condiciones desfavorables sin una
            evaluación jurídica previa.
          </p>

          <p>
            Entre los errores más comunes se encuentran aceptar descuentos
            elevados, negociar sin soportes claros o dilatar decisiones
            estratégicas.
          </p>

          <p>
            Estas prácticas debilitan la posición del acreedor y reducen las
            probabilidades de recuperación total de la cartera.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.sectionHighlight}>
          <h2>
            Clave estratégica para IPS: cómo maximizar el recaudo frente a EPS
          </h2>

          <p>
            En el contexto del sector salud en Colombia, la clave no está en
            negociar rápido, sino en negociar estratégicamente.
          </p>

          <p>
            No se debe tratar la cartera como un activo a vender, sino como una
            obligación exigible que puede ser recuperada mediante herramientas
            jurídicas adecuadas.
          </p>

          <p>
            Cuando existe incumplimiento o dilación, la activación del proceso
            ejecutivo es determinante para lograr resultados reales de recaudo.
          </p>
        </section>

        {/* CIERRE SEO */}
        <section className={styles.section}>
          <h2>
            Estrategia legal para proteger el 100% de la cartera en Bogotá y
            Colombia
          </h2>

          <p>
            Las IPS, clínicas y prestadores de servicios de salud que
            implementan estrategias jurídicas estructuradas logran mejores
            resultados en el cobro de cartera a EPS en Colombia.
          </p>

          <p>
            Contar con asesoría especializada permite proteger el valor total de
            la cartera, evitar negociaciones desfavorables y asegurar un recaudo
            efectivo.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            ¿Le están proponiendo compra de cartera en Bogotá o Colombia?{" "}
            <strong>
              PRAVICE protege el valor total de su cartera y la recupera sin
              descuentos.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
