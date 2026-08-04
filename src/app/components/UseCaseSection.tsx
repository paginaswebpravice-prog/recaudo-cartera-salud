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
        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Casos frecuentes donde una estrategia especializada de recuperación de
          cartera hospitalaria marca la diferencia para IPS, clínicas y
          hospitales en Colombia
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          No todas las cuentas médicas requieren el mismo procedimiento. Algunas
          pueden resolverse mediante conciliación con la EPS, mientras que otras
          necesitan una estrategia documental o incluso un proceso judicial.
          Estos son algunos escenarios que encontramos con frecuencia en
          instituciones prestadoras de servicios de salud, hospitales,
          laboratorios y proveedores médicos de todo el país.
        </motion.p>

        {/* APOYO SEO */}
        <motion.div
          className={styles.parentLink}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Si su empresa pertenece a otro sector económico y necesita servicios
            generales de recuperación de cartera empresarial, puede visitar
            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
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
          {/* CARD 1 */}
          <motion.div
            className={`${styles.card} ${styles.large}`}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <span className={styles.label}>
              Recuperación de cartera glosada
            </span>

            <h3>
              IPS con glosas médicas acumuladas y retrasos en el pago de cuentas
              por parte de las EPS
            </h3>

            <p>
              Muchas instituciones prestadoras de salud enfrentan un crecimiento
              constante de glosas administrativas y técnicas que retrasan el
              reconocimiento de la facturación médica y afectan directamente la
              liquidez necesaria para operar.
            </p>

            <p>
              <strong>¿Cómo intervenimos?</strong> Analizamos cada glosa,
              revisamos soportes clínicos y administrativos, fortalecemos la
              evidencia documental y estructuramos la estrategia jurídica más
              adecuada para lograr el reconocimiento y posterior recuperación de
              la cartera.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className={`${styles.card} ${styles.medium}`}
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.label}>
              Cobro ejecutivo de cuentas médicas
            </span>

            <h3>Facturas aceptadas por la EPS que siguen sin ser pagadas</h3>

            <p>
              Cuando la obligación ya fue reconocida y existen los soportes
              necesarios para exigir el pago, la demora injustificada puede
              generar graves impactos financieros para la institución.
            </p>

            <p>
              <strong>¿Qué hacemos?</strong> Evaluamos la viabilidad del cobro
              ejecutivo, preparamos la documentación requerida y desarrollamos
              una estrategia procesal orientada a acelerar la recuperación del
              dinero y proteger el patrimonio de la entidad.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className={`${styles.card} ${styles.small}`}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.label}>Prevención de prescripción</span>

            <h3>
              Cartera hospitalaria con riesgo de perder el derecho de cobro
            </h3>

            <p>
              Una parte importante de la cartera hospitalaria permanece durante
              años sin una gestión especializada, aumentando el riesgo de perder
              la posibilidad jurídica de recuperar esos recursos.
            </p>

            <p>
              <strong>¿Cómo ayudamos?</strong> Priorizamos las cuentas con mayor
              riesgo, verificamos términos legales, proponemos acciones
              preventivas y definimos la estrategia necesaria para proteger el
              derecho de cobro antes de que sea demasiado tarde.
            </p>
          </motion.div>
        </motion.div>

        {/* DESTACADO */}
        <motion.div
          className={styles.bottomBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>
            Un enfoque exclusivo para la recuperación de cartera del sector
            salud
          </h3>

          <p>
            Nos enfocamos únicamente en IPS, clínicas, hospitales, laboratorios
            y proveedores médicos porque entendemos que la recuperación de
            cartera hospitalaria exige conocimientos distintos a los utilizados
            en otros sectores económicos. Cada caso requiere analizar glosas,
            auditorías, conciliaciones, soportes documentales, cuentas médicas,
            comportamiento de las EPS y riesgos jurídicos antes de definir la
            estrategia más conveniente.
          </p>

          <p>
            Esta especialización nos permite desarrollar metodologías adaptadas
            al funcionamiento real del sistema de salud colombiano y ofrecer un
            acompañamiento mucho más preciso durante todo el proceso de
            recuperación de cartera.
          </p>
        </motion.div>

        {/* SEO */}
        <p className={styles.seoText}>
          Especialistas en recuperación de cartera hospitalaria para IPS,
          clínicas, hospitales, laboratorios y proveedores del sector salud en
          Colombia. Gestión de glosas médicas, conciliaciones con EPS, cobro
          ejecutivo de cuentas médicas, recuperación de facturación, prevención
          de prescripción y estrategias jurídicas orientadas a mejorar el flujo
          financiero de las instituciones prestadoras de servicios de salud.
        </p>
      </motion.div>
    </section>
  );
}
