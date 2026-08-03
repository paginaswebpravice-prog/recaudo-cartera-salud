"use client";

import { motion } from "framer-motion";
import styles from "../styles/ClientsSection.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.section} id="clientes">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* BADGE */}
        <motion.span
          className={styles.badge}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Especialistas en recuperación de cartera para instituciones del sector
          salud
        </motion.span>

        {/* TITLE */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          ¿A qué instituciones del sector salud ayudamos a recuperar su cartera?
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Trabajamos con instituciones del sector salud que enfrentan desafíos
          en la recuperación de cartera, conciliaciones con EPS, gestión de
          glosas, cuentas médicas pendientes y organización documental. Nuestro
          acompañamiento se adapta a las características de cada organización,
          permitiendo desarrollar estrategias orientadas a fortalecer el
          recaudo, mejorar el flujo de caja y optimizar la gestión financiera de
          IPS, hospitales, clínicas, laboratorios y demás prestadores de
          servicios de salud en Colombia.
        </motion.p>

        {/* SUPPORT BOX */}
        <motion.div
          className={styles.supportBox}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <p>
            ¿Tu empresa pertenece a otro sector económico? Para procesos
            generales de recuperación de cartera empresarial en otros sectores
            económicos:
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce nuestra firma especializada en recuperación y recaudo de
            cartera empresarial →
          </a>
        </motion.div>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              img: "/IpsClinicas.jpg",
              alt: "IPS y clínicas en Colombia",
              title: "IPS y Clínicas",
              text: "Acompañamos instituciones prestadoras de servicios de salud que necesitan fortalecer la recuperación de cartera, agilizar conciliaciones con EPS, gestionar glosas médicas y mejorar la organización de sus cuentas por cobrar mediante procesos técnicos y jurídicos.",
            },
            {
              img: "/Hospitales.jpg",
              alt: "Hospitales públicos y privados",
              title: "Hospitales Públicos y Privados",
              text: "Apoyamos hospitales que requieren optimizar la gestión de cartera hospitalaria, resolver diferencias derivadas de auditorías, fortalecer la documentación de sus cuentas médicas y desarrollar estrategias que permitan mejorar el recaudo y proteger su estabilidad financiera.",
            },
            {
              img: "/Tecnologia.jpg",
              alt: "Empresas proveedoras de tecnología médica",
              title: "Empresas proveedoras del sector salud",
              text: "Trabajamos con empresas que suministran dispositivos médicos, tecnología, equipos, insumos y otros servicios especializados, apoyando la organización de la cartera y el seguimiento de cuentas pendientes relacionadas con el sector salud.",
            },
            {
              img: "/Laboratorio.jpg",
              alt: "Laboratorios clínicos y centros de diagnóstico",
              title: "Laboratorios y centros de diagnóstico",
              text: "Laboratorios clínicos, centros de imágenes diagnósticas y demás prestadores especializados pueden fortalecer sus procesos de conciliación, organización documental y recuperación de cuentas médicas mediante estrategias adaptadas a su operación.",
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.img
                src={client.img}
                alt={client.alt}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              <h3>{client.title}</h3>
              <p>{client.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT */}
        <motion.div
          className={styles.highlight}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.icon}>▣</span>

          <p>
            <strong>
              Conocemos las particularidades de la recuperación de cartera en el
              sector salud.
            </strong>{" "}
            Cada tipo de institución enfrenta retos diferentes relacionados con
            glosas, conciliaciones con EPS, auditorías, validación documental y
            cuentas médicas. Nuestro enfoque busca adaptarse a esas necesidades
            para desarrollar procesos más eficientes y mejorar las
            probabilidades de recuperación.
          </p>
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Nuestro acompañamiento está dirigido a IPS, hospitales, clínicas,
          laboratorios, centros de diagnóstico, proveedores de tecnología médica
          y demás prestadores de servicios de salud que requieren fortalecer la
          recuperación de cartera hospitalaria. Desarrollamos estrategias
          orientadas a la conciliación con EPS, gestión de glosas, organización
          documental, seguimiento de cuentas por cobrar y recuperación de
          recursos, contribuyendo a mejorar el flujo de caja y la sostenibilidad
          financiera de las instituciones del sector salud en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
