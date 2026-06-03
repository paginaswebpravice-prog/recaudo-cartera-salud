"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ConciliacionCarteraIPSEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Recuperación de cartera en el sector salud
          </span>

          <h1 className={styles.title}>
            Conciliación de cartera entre IPS y EPS en Colombia: cómo funciona
          </h1>

          <p className={styles.subtitle}>
            Conozca cómo funciona el proceso de conciliación de cartera entre
            IPS y EPS en Colombia, cuáles son sus beneficios y cómo utilizarlo
            para mejorar el recaudo y reducir conflictos financieros en el
            sector salud.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Qué es la conciliación de cartera entre IPS y EPS en Colombia</h2>

          <p>
            La conciliación de cartera es un proceso mediante el cual IPS,
            clínicas, hospitales y EPS revisan conjuntamente cuentas pendientes,
            diferencias de facturación, glosas, pagos parciales y valores en
            discusión para buscar acuerdos financieros y reducir conflictos
            relacionados con cartera en salud.
          </p>

          <p>
            Este mecanismo permite depurar cartera, validar obligaciones reales
            y establecer acuerdos de pago que ayuden a mejorar la liquidez de
            las instituciones prestadoras de salud.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo funciona el proceso de conciliación de cartera en salud</h2>

          <div className={styles.box}>
            <h3>1. Identificación de cartera pendiente</h3>

            <p>
              La IPS consolida las facturas pendientes de pago, glosas,
              devoluciones y cuentas en discusión frente a la EPS.
            </p>

            <h3>2. Cruce de información financiera</h3>

            <p>
              Ambas partes revisan soportes, pagos realizados, diferencias
              contables y estado de las cuentas médicas.
            </p>

            <h3>3. Revisión de glosas y devoluciones</h3>

            <p>
              Durante la conciliación se analizan objeciones, soportes
              documentales y valores susceptibles de reconocimiento.
            </p>

            <h3>4. Acuerdos de pago</h3>

            <p>
              Si existe consenso, se pueden establecer cronogramas de pago,
              reconocimientos parciales o compromisos financieros.
            </p>

            <h3>5. Seguimiento posterior</h3>

            <p>
              La IPS debe hacer seguimiento constante al cumplimiento de los
              acuerdos alcanzados durante la conciliación.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Beneficios de la conciliación de cartera para IPS y clínicas</h2>

          <ul className={styles.checklist}>
            <li>Reducir conflictos financieros con EPS</li>
            <li>Mejorar flujo de caja</li>
            <li>Facilitar recuperación de cartera</li>
            <li>Disminuir tiempos de recaudo</li>
            <li>Resolver diferencias documentales</li>
            <li>Evitar procesos judiciales innecesarios</li>
            <li>Fortalecer trazabilidad financiera</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Problemas frecuentes durante la conciliación de cartera</h2>

          <p>
            Aunque la conciliación puede facilitar acuerdos financieros, muchas
            IPS enfrentan dificultades por falta de soportes, glosas complejas,
            diferencias contables o incumplimientos posteriores por parte de las
            EPS.
          </p>

          <p>
            En algunos casos, las conciliaciones se prolongan durante meses sin
            resultados concretos, afectando la liquidez de clínicas y
            hospitales.
          </p>

          <ul className={styles.checklist}>
            <li>Falta de soportes documentales</li>
            <li>Glosas recurrentes</li>
            <li>Diferencias en valores conciliados</li>
            <li>Retrasos en acuerdos de pago</li>
            <li>Incumplimientos posteriores de EPS</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cuándo una IPS debería iniciar cobro jurídico después de conciliar
          </h2>

          <p>
            Cuando la EPS incumple acuerdos de conciliación, mantiene mora
            prolongada o no existe voluntad real de pago, puede ser necesario
            iniciar acciones de cobro prejurídico o judicial para proteger los
            recursos de la IPS.
          </p>

          <p>
            Esperar demasiado tiempo puede aumentar el riesgo financiero y
            dificultar la recuperación efectiva de cartera.
          </p>

          <ul className={styles.checklist}>
            <li>Documentar incumplimientos de la EPS</li>
            <li>Formalizar acuerdos por escrito</li>
            <li>Controlar vencimientos y antigüedad de cartera</li>
            <li>Evaluar medidas cautelares cuando aplique</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo mejorar la conciliación de cartera en el sector salud</h2>

          <p>
            Las IPS que implementan procesos organizados de conciliación,
            auditoría y seguimiento financiero suelen obtener mejores resultados
            de recaudo y menor acumulación de cartera crítica.
          </p>

          <p>
            Una adecuada preparación documental y jurídica puede marcar la
            diferencia durante negociaciones y conciliaciones frente a EPS en
            Colombia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera en salud con estrategias financieras y
            jurídicas
          </h2>

          <p>
            La conciliación es una herramienta importante para resolver
            conflictos financieros en el sector salud, pero debe complementarse
            con estrategias de control documental, auditoría y recuperación de
            cartera.
          </p>

          <p>
            Actuar oportunamente permite proteger la estabilidad financiera de
            IPS, clínicas y hospitales frente a problemas de mora y retrasos de
            pago.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, conciliaciones y procesos efectivos frente a
            EPS morosas.
          </p>
        </footer>
      </article>
    </main>
  );
}
