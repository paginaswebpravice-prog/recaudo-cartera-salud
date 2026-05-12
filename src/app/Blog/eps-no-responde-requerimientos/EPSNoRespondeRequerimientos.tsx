"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function EPSNoRespondeRequerimientos() {
  return (
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

          <span className={styles.badge}>Recuperación de cartera EPS</span>

          <h1 className={styles.title}>
            Qué hacer si una EPS no responde requerimientos de pago en Colombia
          </h1>

          <p className={styles.subtitle}>
            Descubra qué acciones jurídicas pueden tomar IPS, clínicas y
            prestadores de salud cuando una EPS ignora requerimientos de pago o
            solicitudes de cartera en Colombia.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>
            ¿Qué ocurre cuando una EPS no responde requerimientos de pago?
          </h2>

          <p>
            En Colombia, muchas IPS y clínicas enfrentan problemas constantes
            porque algunas EPS no responden requerimientos de pago relacionados
            con facturas, servicios médicos o cartera vencida.
          </p>

          <p>
            La falta de respuesta puede afectar seriamente el flujo de caja,
            generar problemas operativos y aumentar el riesgo financiero para
            los prestadores de salud.
          </p>

          <p>
            Además, el silencio o la demora de la EPS no significa que la deuda
            desaparezca. Por el contrario, puede convertirse en un elemento
            importante dentro de futuras acciones jurídicas.
          </p>
        </section>

        {/* CAUSAS */}
        <section className={styles.sectionAlt}>
          <h2>
            Principales razones por las que una EPS no responde requerimientos
          </h2>

          <p>
            Existen diferentes motivos por los cuales una EPS puede retrasar o
            evitar responder solicitudes de pago.
          </p>

          <p>
            En algunos casos se presentan problemas administrativos internos,
            congestión operativa o revisiones documentales prolongadas.
          </p>

          <p>
            También es común que algunas EPS utilicen tácticas dilatorias para
            extender tiempos de pago o generar desgaste financiero sobre las
            IPS.
          </p>

          <p>
            Por esta razón, resulta fundamental documentar adecuadamente cada
            requerimiento enviado y conservar evidencia de las comunicaciones.
          </p>
        </section>

        {/* ACCIONES */}
        <section className={styles.section}>
          <h2>
            Qué hacer cuando una EPS ignora solicitudes de pago en Colombia
          </h2>

          <p>
            El primer paso consiste en verificar que la radicación y los
            soportes documentales estén completos y correctamente presentados.
          </p>

          <p>
            Posteriormente, es recomendable realizar seguimiento formal mediante
            comunicaciones escritas, requerimientos jurídicos y trazabilidad de
            respuestas.
          </p>

          <p>
            Si la EPS continúa sin responder, pueden evaluarse acciones
            prejurídicas o judiciales dependiendo del estado de la cartera y del
            nivel de riesgo financiero.
          </p>

          <p>
            Una estrategia jurídica especializada permite aumentar presión
            legal, mejorar negociación y preparar eventuales procesos
            ejecutivos.
          </p>
        </section>

        {/* IMPACTO */}
        <section className={styles.sectionHighlight}>
          <h2>
            Cómo afecta el silencio de una EPS a IPS y prestadores de salud
          </h2>

          <p>
            Cuando una EPS no responde requerimientos de pago, las consecuencias
            financieras pueden ser graves para clínicas, hospitales y
            prestadores de servicios médicos.
          </p>

          <p>
            La acumulación de cartera vencida afecta la liquidez, dificulta el
            pago de nómina, limita inversiones y pone presión sobre la operación
            diaria de las entidades de salud.
          </p>

          <p>
            Además, mientras más tiempo pasa sin gestión efectiva, mayores
            pueden ser los riesgos de recuperación y prescripción de cartera.
          </p>
        </section>

        {/* ESTRATEGIAS */}
        <section className={styles.section}>
          <h2>Estrategias para recuperar cartera cuando una EPS no responde</h2>

          <p>
            Una de las estrategias más efectivas es consolidar toda la evidencia
            documental relacionada con facturas, contratos, soportes clínicos y
            radicaciones.
          </p>

          <p>
            También es importante implementar cronogramas de seguimiento y
            requerimientos jurídicos estructurados para fortalecer futuras
            reclamaciones.
          </p>

          <p>
            Dependiendo del caso, pueden utilizarse medidas cautelares,
            conciliaciones o demandas ejecutivas para avanzar en la recuperación
            del dinero adeudado.
          </p>
        </section>

        {/* RECOMENDACIONES */}
        <section className={styles.sectionAlt}>
          <h2>Cómo reducir riesgos de cartera con EPS en Colombia</h2>

          <p>
            Las IPS que implementan controles documentales y estrategias de
            cobranza temprana suelen reducir significativamente los riesgos de
            mora prolongada.
          </p>

          <p>
            Realizar auditorías periódicas de cartera, validar radicaciones y
            mantener seguimiento constante permite identificar problemas antes
            de que se conviertan en conflictos judiciales complejos.
          </p>

          <p>
            La asesoría jurídica especializada en cartera EPS también ayuda a
            diseñar rutas de acción más rápidas y efectivas frente a entidades
            morosas.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.section}>
          <h2>Conclusión sobre EPS que no responden requerimientos de pago</h2>

          <p>
            Cuando una EPS no responde requerimientos de pago en Colombia, es
            fundamental actuar rápidamente y estructurar una estrategia jurídica
            adecuada para proteger la recuperación de cartera.
          </p>

          <p>
            Una gestión organizada, documentada y especializada puede marcar la
            diferencia entre recuperar los recursos o enfrentar pérdidas
            financieras prolongadas en el sector salud.
          </p>
        </section>
      </article>
    </main>
  );
}
