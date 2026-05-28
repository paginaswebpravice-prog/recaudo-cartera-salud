"use client";

import { motion } from "framer-motion";
import styles from "../styles/UseCaseSection.module.css";

export default function UseCaseSection() {
  return (
    <section className={styles.section} id="casos-uso">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TÍTULO SEO MÁS ESPECÍFICO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Escenarios de Recuperación de Cartera para IPS, Hospitales y
          Proveedores del Sector Salud
        </motion.h2>

        {/* SUBTÍTULO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estos escenarios reflejan problemáticas frecuentes en instituciones
          prestadoras de servicios de salud frente a EPS, ADRES y entidades
          públicas en Colombia. Cada situación requiere una estrategia jurídica,
          documental y procesal diferente según el estado de la cartera y el
          riesgo financiero de la entidad.
        </motion.p>

        {/* ENLACE CONTEXTUAL HACIA WEB MADRE */}
        <motion.div
          className={styles.parentLink}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Para procesos generales de recuperación de cartera empresarial y
            estrategias complementarias de cobro jurídico en Colombia, visite{" "}
            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recaudo de Cartera
            </a>
            .
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* CARD GRANDE */}
          <motion.div
            className={`${styles.card} ${styles.large}`}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <span className={styles.label}>Cartera Glosada en IPS</span>

            <h3>IPS con Facturación Glosada y Bloqueo de Flujo de Caja</h3>

            <p>
              Institución prestadora de salud con acumulación de facturas
              objetadas por EPS durante varios periodos fiscales, afectando
              liquidez operativa, pago a proveedores y sostenibilidad
              financiera.
            </p>

            <p>
              <strong>Enfoque estratégico:</strong> análisis técnico de glosas,
              consolidación documental, reconstrucción probatoria y preparación
              de proceso declarativo para recuperar cartera hospitalaria.
            </p>
          </motion.div>

          {/* CARD DERECHA */}
          <motion.div
            className={`${styles.card} ${styles.medium}`}
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.label}>Cobro Ejecutivo</span>

            <h3>Proveedor Médico con Facturas Aceptadas Pendientes de Pago</h3>

            <p>
              Empresa del sector salud con cuentas aceptadas por la entidad
              aseguradora, pero sin desembolso efectivo dentro de los términos
              legales establecidos.
            </p>

            <p>
              <strong>Enfoque estratégico:</strong> inicio de proceso ejecutivo,
              medidas cautelares y aseguramiento patrimonial para acelerar el
              recaudo.
            </p>
          </motion.div>

          {/* CARD INFERIOR */}
          <motion.div
            className={`${styles.card} ${styles.small}`}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.label}>Riesgo de Prescripción</span>

            <h3>Clínica con Cartera Próxima a Vencimiento de Términos</h3>

            <p>
              Institución médica con cuentas pendientes ante EPS y ADRES con
              riesgo jurídico de pérdida del derecho de cobro por prescripción.
            </p>

            <p>
              <strong>Enfoque estratégico:</strong> interrupción oportuna de
              términos, estructuración procesal y radicación de acciones
              judiciales para proteger el derecho de pago.
            </p>
          </motion.div>
        </motion.div>

        {/* BLOQUE SEO ESTRATÉGICO */}
        <motion.div
          className={styles.bottomBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Especialización exclusiva en cartera del sector salud</h3>

          <p>
            Esta plataforma se enfoca únicamente en recuperación de cartera para
            IPS, hospitales, clínicas, laboratorios y proveedores médicos en
            Colombia, evitando competir con estrategias generales de cobro
            empresarial y fortaleciendo la autoridad temática del ecosistema
            digital.
          </p>
        </motion.div>

        {/* TEXTO SEO CONTROLADO */}
        <p className={styles.seoText}>
          Recuperación de cartera hospitalaria para IPS, clínicas y hospitales
          en Colombia. Cobro jurídico especializado a EPS, ADRES y entidades
          públicas mediante procesos ejecutivos y declarativos enfocados en el
          sector salud.
        </p>
      </motion.div>
    </section>
  );
}
