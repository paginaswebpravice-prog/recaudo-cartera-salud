"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CobroAdresContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Gestión de cobro ADRES para IPS y clínicas en Colombia
          </span>

          <h1 className={styles.title}>
            Cómo hacer cobro ante ADRES en Colombia: radicación, devoluciones y
            recuperación de recobros NO PBS, SOAT y ECAT
          </h1>

          <p className={styles.description}>
            Servicio especializado en gestión de cobro ante ADRES para IPS,
            clínicas y prestadores de salud en Colombia. Apoyamos procesos de
            radicación, auditoría documental, corrección de devoluciones y
            recuperación de recursos asociados a recobros NO PBS, SOAT, ECAT y
            reclamaciones del sistema de salud.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>

            <a href="/Blog" className={styles.secondary}>
              Ver contenido especializado
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Cobro ante ADRES en Colombia para IPS: errores frecuentes y cómo
            evitarlos
          </h2>

          <p className={styles.text}>
            Muchas IPS y clínicas presentan dificultades en procesos de cobro
            ante ADRES debido a inconsistencias documentales, errores en
            radicación, devoluciones repetitivas o incumplimiento de requisitos
            técnicos establecidos por la entidad.
          </p>

          <p className={styles.text}>
            Cuando estos procesos no se gestionan correctamente, pueden generar
            retrasos significativos en el recaudo, afectando el flujo de caja y
            aumentando la cartera pendiente en el sector salud.
          </p>

          <div className={styles.highlightBox}>
            📌 Si buscas una visión más amplia sobre recuperación de cartera en
            el sector salud, puedes consultar nuestra guía relacionada sobre{" "}
            <a
              href="https://recaudodecartera.com/cartera-sector-salud.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cartera del sector salud en Colombia
            </a>
            .
          </div>
        </section>

        {/* PROBLEMAS */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Principales causas de devoluciones en cobros ADRES en Colombia
          </motion.h2>

          <div className={styles.grid}>
            {[
              "Errores en soportes clínicos y administrativos",
              "Radicaciones incompletas o inconsistentes",
              "Incumplimiento de requisitos técnicos de ADRES",
              "Problemas en recobros NO PBS",
              "Errores en reclamaciones SOAT y ECAT",
              "Falta de validación documental previa",
              "Demoras prolongadas en auditoría",
              "Pérdida de recursos por devoluciones repetitivas",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Un error documental puede retrasar durante meses el reconocimiento
            y pago de recursos por parte de ADRES.
          </div>
        </section>

        {/* QUE ES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Qué es ADRES y qué tipo de cartera pueden recuperar las IPS en
            Colombia
          </h2>

          <p className={styles.text}>
            ADRES es la entidad encargada de administrar recursos del sistema de
            salud en Colombia y reconocer determinados pagos asociados a
            reclamaciones, tecnologías NO PBS, accidentes de tránsito y otros
            conceptos definidos normativamente.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Recobros NO PBS</h4>
              <p>
                Servicios y tecnologías no financiadas con la UPC y sujetas a
                reconocimiento.
              </p>
            </div>

            <div>
              <h4>✔ SOAT y ECAT</h4>
              <p>
                Reclamaciones derivadas de accidentes de tránsito y eventos
                catastróficos.
              </p>
            </div>

            <div>
              <h4>✔ Reclamaciones especiales</h4>
              <p>
                Procesos sujetos a auditoría y validación técnica por ADRES.
              </p>
            </div>

            <div>
              <h4>✔ Devoluciones y subsanaciones</h4>
              <p>
                Corrección de inconsistencias para viabilizar el pago efectivo.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 La estructuración técnica correcta puede aumentar
            significativamente la probabilidad de aprobación y pago.
          </div>
        </section>

        {/* SERVICIO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicio especializado para gestión de cobro ADRES en Colombia
          </h2>

          <p className={styles.text}>
            Implementamos estrategias técnicas, administrativas y jurídicas para
            optimizar procesos de cobro ante ADRES y reducir devoluciones en
            IPS, clínicas y prestadores de salud.
          </p>

          <div className={styles.grid}>
            {[
              "Auditoría integral de cuentas",
              "Validación documental",
              "Corrección de devoluciones",
              "Estrategias de radicación",
              "Seguimiento a reclamaciones",
              "Acompañamiento técnico y jurídico",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Cómo hacer un proceso de cobro ante ADRES paso a paso
          </h2>

          <div className={styles.grid}>
            {[
              "Diagnóstico inicial de cartera",
              "Revisión normativa y documental",
              "Auditoría técnica de soportes",
              "Estructuración y radicación",
              "Seguimiento de reclamaciones",
              "Recuperación efectiva de recursos",
            ].map((step, i) => (
              <motion.div key={i} className={styles.card}>
                <h3>Paso {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de optimizar el cobro ADRES para IPS y clínicas
          </h2>

          <div className={styles.benefits}>
            <span>✔ Menos devoluciones</span>
            <span>✔ Mayor tasa de aprobación</span>
            <span>✔ Recuperación de recursos retenidos</span>
            <span>✔ Mejor flujo financiero</span>
            <span>✔ Cumplimiento técnico y normativo</span>
            <span>✔ Soporte jurídico especializado</span>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Por qué una estrategia técnica es clave en cobros ADRES
          </h2>

          <p className={styles.text}>
            Los procesos ante ADRES requieren precisión documental, conocimiento
            normativo y seguimiento permanente. Una mala estructuración puede
            derivar en devoluciones repetitivas y retrasos importantes en el
            recaudo.
          </p>

          <div className={styles.highlightBox}>
            🚀 El objetivo no es solo radicar cuentas, sino maximizar la
            probabilidad real de pago.
          </div>
        </section>

        {/* FAQ SEO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre cobro ADRES en Colombia
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>¿Qué es un cobro NO PBS ante ADRES?</h4>
              <p>
                Corresponde a servicios o tecnologías no financiadas por la UPC
                que pueden ser objeto de reconocimiento económico.
              </p>
            </div>

            <div>
              <h4>¿Por qué ADRES devuelve reclamaciones?</h4>
              <p>
                Generalmente por inconsistencias documentales, errores técnicos
                o incumplimiento de requisitos normativos.
              </p>
            </div>

            <div>
              <h4>¿Qué se necesita para radicar correctamente?</h4>
              <p>
                Soportes completos, validación previa y cumplimiento técnico de
                requisitos establecidos por ADRES.
              </p>
            </div>

            <div>
              <h4>¿Las IPS pueden recuperar devoluciones antiguas?</h4>
              <p>
                Sí, dependiendo del estado del proceso y la viabilidad técnica y
                jurídica del caso.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Optimiza tus cobros ante ADRES y reduce devoluciones
            </h2>

            <p className={styles.ctaText}>
              Ayudamos a IPS y clínicas en Colombia a mejorar procesos de
              radicación, auditoría y recuperación de recursos ante ADRES con
              enfoque técnico y jurídico especializado.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar asesoría
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
