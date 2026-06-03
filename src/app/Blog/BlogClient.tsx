"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const articles = [
  {
    title:
      "EPS Sanitas cambia de presidente: impacto en pagos y cartera en Colombia",
    slug: "fabian-cardona-presidente-eps-sanitas",
    description:
      "El médico Fabián Cardona fue designado como nuevo presidente de EPS Sanitas tras una reorganización del grupo Keralty en Colombia.",
  },
  {
    title:
      "Cómo recuperar cartera EPS en Colombia y evitar pérdidas millonarias",
    slug: "como-recuperar-cartera-eps-colombia",
    description:
      "Estrategias legales para IPS y clínicas frente a mora prolongada de EPS.",
  },
  {
    title:
      "Carta de cobro a EPS en Colombia: modelo legal para recuperar cartera",
    slug: "carta-cobro-cartera-eps",
    description:
      "Modelo estratégico y checklist documental previo a proceso judicial.",
  },
  {
    title:
      "Cobro de cartera EPS paso a paso: del prejurídico al proceso ejecutivo",
    slug: "etapas-cobro-cartera-eps",
    description: "Desde el cobro prejurídico hasta el proceso ejecutivo.",
  },
  {
    title:
      "Cómo responder a una EPS que quiere comprar su cartera (sin perder dinero)",
    slug: "respuesta-eps-compra-cartera",
    description:
      "Qué implica la compra de cartera y cómo proteger su flujo financiero.",
  },
  {
    title:
      "Medidas cautelares contra EPS en Colombia: embargos y recuperación real",
    slug: "medidas-cautelares-cobro-eps",
    description: "Embargos y estrategias para garantizar recaudo efectivo.",
  },
  {
    title:
      "Cobro de cartera ante ADRES en Colombia: cómo reclamar y ganar el pago",
    slug: "cobro-cartera-adres",
    description: "Accidentes, NO PBS, negaciones y procedimientos especiales.",
  },
  {
    title:
      "Cobro a entes territoriales en salud: cómo recuperar cartera pública en Colombia",
    slug: "cobro-entes-territoriales-salud",
    description: "PNA y esfuerzo propio en el sector salud.",
  },
  {
    title:
      "Prescripción de cartera en salud: cómo evitar perder su dinero en Colombia",
    slug: "prescripcion-cartera-salud",
    description: "Cómo evitar perder la cartera por vencimiento de términos.",
  },
  {
    title:
      "¿Vender cartera EPS o recuperarla? Lo que nadie le dice en Colombia",
    slug: "no-vender-cartera-eps",
    description:
      "Alternativas jurídicas más rentables que la venta de cartera.",
  },
  {
    title:
      "Documentos para demandar una EPS en Colombia: checklist completo para IPS",
    slug: "requerimiento-documental-demandar-eps",
    description: "Checklist jurídico para reducir riesgos procesales.",
  },

  /* ================= NUEVOS ARTÍCULOS SEO ================= */

  {
    title: "Cómo demandar una EPS en Colombia paso a paso por cartera vencida",
    slug: "como-demandar-eps-colombia",
    description:
      "Guía jurídica completa para IPS y clínicas que necesitan iniciar acciones legales contra EPS.",
  },
  {
    title:
      "Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia",
    slug: "cuanto-tarda-demanda-eps-cartera",
    description:
      "Tiempos reales de recuperación judicial de cartera EPS en Colombia.",
  },
  {
    title:
      "Qué hacer si una EPS no responde requerimientos de pago en Colombia",
    slug: "eps-no-responde-requerimientos",
    description:
      "Alternativas legales cuando las EPS ignoran solicitudes de pago.",
  },
  {
    title: "Cómo funcionan las medidas cautelares contra EPS en Colombia",
    slug: "como-funcionan-medidas-cautelares-eps",
    description:
      "Embargos, cuentas y estrategias para garantizar recuperación efectiva.",
  },
  {
    title: "Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla",
    slug: "cuando-prescribe-cartera-eps",
    description:
      "Términos legales y estrategias para evitar la pérdida de cartera en salud.",
  },
  {
    title:
      "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente",
    slug: "recuperar-cartera-no-pbs",
    description:
      "Reclamaciones, ADRES y procesos de cobro para servicios NO PBS.",
  },
  {
    title: "Cobro prejurídico vs cobro jurídico a EPS: diferencias y ventajas",
    slug: "cobro-prejuridico-vs-juridico-eps",
    description:
      "Diferencias entre estrategias amistosas y procesos judiciales de cobro.",
  },
  {
    title: "Cómo mejorar el flujo de caja de una IPS y reducir cartera vencida",
    slug: "mejorar-flujo-caja-ips",
    description:
      "Estrategias financieras y jurídicas para estabilizar ingresos en IPS.",
  },
  {
    title: "Estrategias de recaudo para clínicas y hospitales en Colombia",
    slug: "estrategias-recaudo-clinicas-hospitales",
    description:
      "Métodos efectivos para reducir mora y mejorar el recaudo en salud.",
  },
  {
    title: "Documentos que necesita una IPS para cobrar cartera judicialmente",
    slug: "documentos-cobro-judicial-ips",
    description:
      "Checklist documental clave para demandar EPS y recuperar cartera.",
  },
  {
    title:
      "Cómo responder glosas médicas en Colombia y recuperar pagos rechazados",
    slug: "como-responder-glosas-medicas",
    description:
      "Guía completa para IPS y clínicas sobre cómo responder glosas médicas, evitar pérdidas financieras y recuperar cartera rechazada por EPS.",
  },
  {
    title: "Tipos de glosas médicas más comunes en Colombia y cómo evitarlas",
    slug: "tipos-glosas-medicas",
    description:
      "Errores frecuentes de facturación y estrategias para reducir glosas y devoluciones en IPS y clínicas.",
  },
  {
    title: "Qué hacer si una EPS lleva más de 180 días sin pagar en Colombia",
    slug: "eps-mas-180-dias-sin-pagar",
    description:
      "Alternativas jurídicas y financieras para IPS y clínicas frente a mora prolongada de EPS.",
  },
  {
    title:
      "Cómo cobrar cartera de EPS intervenidas o en liquidación en Colombia",
    slug: "cobro-cartera-eps-intervenidas",
    description:
      "Estrategias legales para recuperar cartera frente a EPS intervenidas, liquidadas o bajo vigilancia estatal.",
  },
  {
    title: "Diferencia entre glosa y devolución en cuentas médicas en Colombia",
    slug: "diferencia-glosa-devolucion-cuentas-medicas",
    description:
      "Aspectos clave para IPS y prestadores de salud sobre glosas, devoluciones y recuperación de cartera.",
  },
  {
    title: "Cómo mejorar la liquidez financiera de una IPS en Colombia",
    slug: "mejorar-liquidez-financiera-ips",
    description:
      "Estrategias para reducir cartera vencida, optimizar flujo de caja y fortalecer la sostenibilidad financiera de IPS.",
  },
  {
    title:
      "Errores frecuentes que hacen perder dinero a las IPS en el cobro a EPS",
    slug: "errores-cobro-cartera-eps-ips",
    description:
      "Principales errores jurídicos, administrativos y documentales que afectan el recaudo en el sector salud.",
  },
  {
    title: "Cómo funciona el giro directo ADRES y cómo afecta a las IPS",
    slug: "giro-directo-adres-ips",
    description:
      "Impacto financiero del giro directo ADRES en clínicas, hospitales e IPS en Colombia.",
  },
  {
    title: "Conciliación de cartera entre IPS y EPS en Colombia: cómo funciona",
    slug: "conciliacion-cartera-ips-eps",
    description:
      "Proceso de conciliación financiera, acuerdos de pago y recuperación efectiva de cartera en salud.",
  },
  {
    title: "Cómo evitar devoluciones de facturación médica en Colombia",
    slug: "evitar-devoluciones-facturacion-medica",
    description:
      "Recomendaciones para IPS y clínicas que buscan reducir rechazos y mejorar el recaudo de cartera.",
  },
];

export default function BlogClient() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Cómo recuperar cartera EPS en Colombia y evitar pérdidas en el
            sector salud
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>
          </motion.div>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Blog jurídico especializado en cómo recuperar cartera EPS en
            Colombia. Encuentra guías completas sobre cobro de cartera en el
            sector salud, procesos ejecutivos, medidas cautelares, cartera ante
            ADRES, prescripción, compra de cartera y estrategias legales para
            IPS, clínicas y prestadores de servicios de salud.
          </motion.p>
        </motion.div>
      </section>

      {/* BLOG */}
      <section className={styles.blogSection}>
        <div className={styles.grid}>
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={`/Blog/${article.slug}`} className={styles.card}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardDescription}>
                    {article.description}
                  </p>
                  <span className={styles.readMore}>Leer artículo →</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.ctaTitle}>
            ¿Tiene cartera EPS pendiente de recuperación en Colombia?
          </motion.h2>

          <motion.p className={styles.ctaText}>
            Nuestro equipo jurídico especializado en recuperación de cartera en
            Colombia asesora a IPS, clínicas y prestadores de salud en procesos
            de cobro prejurídico, judicial, medidas cautelares y estrategias
            frente a EPS, ADRES y entidades territoriales.
          </motion.p>

          <div className={styles.ctaActions}>
            <Link
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </Link>

            <a
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
