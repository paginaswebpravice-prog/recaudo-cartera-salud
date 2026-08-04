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

        {/* RECURSOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recursos especializados sobre cobro ADRES, reclamaciones en salud y
            recuperación de cartera
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            Mantenerse actualizado sobre los procedimientos de ADRES, las
            modificaciones regulatorias y las mejores prácticas para estructurar
            reclamaciones permite reducir devoluciones, agilizar la recuperación
            de recursos y fortalecer la sostenibilidad financiera de las IPS.
            Una adecuada gestión documental también disminuye reprocesos y
            facilita el seguimiento de cada expediente hasta su reconocimiento
            económico.
          </motion.p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/cobro-adres.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Guía especializada sobre cobro ADRES para IPS, hospitales y
              clínicas
            </a>

            <a
              href="https://recaudodecartera.com/cobro-glosas-eps-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Estrategias para disminuir glosas y fortalecer el recaudo
              institucional
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación integral de cartera para IPS, hospitales y clínicas
            </a>
          </div>
        </section>

        {/* ¿CUÁNDO FORTALECER EL PROCESO? */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Cuándo es recomendable fortalecer el proceso de cobro ante ADRES?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            No todas las dificultades aparecen al momento de radicar una
            reclamación. En muchos casos los problemas se originan desde la
            facturación, la gestión documental, la organización de los soportes
            o el seguimiento posterior al trámite. Identificar estas situaciones
            a tiempo permite implementar mejoras que reducen devoluciones y
            fortalecen el recaudo institucional.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Incremento constante de devoluciones</h4>

              <p>
                Si cada mes aumenta el número de reclamaciones devueltas por
                errores administrativos o inconsistencias documentales, es
                recomendable revisar integralmente los procesos internos antes
                de continuar radicando nuevos expedientes.
              </p>
            </div>

            <div>
              <h4>✔ Disminución del flujo de caja</h4>

              <p>
                Cuando los recursos esperados tardan más de lo previsto en
                recuperarse, la liquidez institucional comienza a verse afectada
                y pueden aparecer dificultades para atender obligaciones
                operativas.
              </p>
            </div>

            <div>
              <h4>✔ Acumulación de reclamaciones pendientes</h4>

              <p>
                El crecimiento permanente de expedientes sin respuesta o sin
                seguimiento puede generar retrasos administrativos y afectar la
                recuperación de los recursos reconocibles.
              </p>
            </div>

            <div>
              <h4>✔ Alta carga para los equipos administrativos</h4>

              <p>
                Cuando el personal dedica gran parte de su tiempo a corregir
                errores, responder requerimientos o reconstruir expedientes,
                disminuye la productividad de toda la institución.
              </p>
            </div>

            <div>
              <h4>✔ Cambios normativos frecuentes</h4>

              <p>
                La actualización permanente de requisitos técnicos hace
                necesario revisar periódicamente los procedimientos internos
                para evitar inconsistencias en futuras reclamaciones.
              </p>
            </div>

            <div>
              <h4>✔ Necesidad de mejorar indicadores financieros</h4>

              <p>
                Optimizar los procesos de cobro contribuye a reducir tiempos de
                recuperación, mejorar el recaudo y fortalecer la sostenibilidad
                financiera de IPS, hospitales y clínicas.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            Las instituciones que realizan revisiones periódicas de sus procesos
            de radicación, auditoría documental y seguimiento de reclamaciones
            suelen disminuir reprocesos, fortalecer el control administrativo y
            mejorar la recuperación de recursos provenientes de ADRES.
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Beneficios de fortalecer la gestión de cobro ante ADRES para IPS,
            clínicas y hospitales
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            Una adecuada administración de las reclamaciones no solo busca
            disminuir devoluciones. También permite mejorar la eficiencia
            administrativa, fortalecer el recaudo institucional y optimizar el
            flujo de caja necesario para garantizar la continuidad en la
            prestación de los servicios de salud. Cuando cada etapa del proceso
            se controla correctamente, la institución dispone de mayor
            información para tomar decisiones financieras y reducir riesgos
            operativos.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Mayor recuperación de recursos",
                text: "Una gestión organizada incrementa las posibilidades de obtener el reconocimiento económico de las reclamaciones presentadas ante ADRES.",
              },
              {
                title: "Disminución de devoluciones",
                text: "La revisión previa de soportes y documentos ayuda a reducir inconsistencias que pueden retrasar el proceso.",
              },
              {
                title: "Mejor flujo de caja",
                text: "La recuperación oportuna de recursos fortalece la liquidez y facilita la operación diaria de IPS, hospitales y clínicas.",
              },
              {
                title: "Reducción de reprocesos",
                text: "Procesos documentales estandarizados disminuyen tiempos administrativos y optimizan el trabajo de los equipos de cartera y facturación.",
              },
              {
                title: "Mayor control de la información",
                text: "La trazabilidad documental permite conocer el estado de cada reclamación y responder oportunamente a los requerimientos.",
              },
              {
                title: "Sostenibilidad financiera",
                text: "La optimización del recaudo contribuye a fortalecer la estabilidad financiera y la capacidad de inversión de las instituciones de salud.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            Implementar procesos de mejora continua, auditoría documental y
            seguimiento permanente permite que las instituciones reduzcan
            tiempos de gestión, fortalezcan su liquidez y cuenten con mayor
            capacidad para responder a los desafíos financieros propios del
            sistema de salud colombiano.
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

        {/* ERRORES FRECUENTES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Errores más frecuentes que ocasionan devoluciones en las
            reclamaciones ante ADRES
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Una parte importante de las reclamaciones presentadas ante ADRES
            requiere correcciones o genera devoluciones debido a inconsistencias
            documentales, errores administrativos o incumplimiento de requisitos
            técnicos. Detectar estos inconvenientes antes de la radicación ayuda
            a disminuir reprocesos, mejorar los tiempos de respuesta y aumentar
            la probabilidad de obtener el reconocimiento de los recursos.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Soportes documentales incompletos",
                text: "La ausencia de anexos, historias clínicas, autorizaciones u otros documentos puede impedir la validación adecuada de la reclamación.",
              },
              {
                title: "Inconsistencias en la información reportada",
                text: "Errores en datos del paciente, fechas, valores, códigos o identificación generan observaciones durante el proceso de auditoría.",
              },
              {
                title: "Radicación fuera de los plazos",
                text: "No presentar oportunamente la reclamación puede afectar el trámite y limitar las posibilidades de reconocimiento económico.",
              },
              {
                title: "Fallas en la organización del expediente",
                text: "La documentación desordenada dificulta la revisión técnica y aumenta el riesgo de requerimientos adicionales.",
              },
              {
                title: "Errores en la facturación",
                text: "Las inconsistencias entre la factura y los soportes clínicos suelen generar observaciones que retrasan el proceso.",
              },
              {
                title: "Seguimiento insuficiente",
                text: "No realizar control permanente sobre cada reclamación dificulta responder oportunamente a observaciones o solicitudes de ADRES.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            <strong>Importante:</strong> una revisión documental previa y una
            adecuada organización de la información permiten disminuir
            significativamente las devoluciones, reducir reprocesos
            administrativos y mejorar la eficiencia durante todo el proceso de
            reclamación ante ADRES.
          </div>
        </section>

        {/* BUENAS PRÁCTICAS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Buenas prácticas para optimizar el proceso de cobro ante ADRES y
            reducir devoluciones
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            Más allá de presentar correctamente una reclamación, las IPS,
            hospitales y clínicas necesitan implementar procesos internos que
            permitan disminuir los tiempos de radicación, fortalecer el control
            documental y realizar un seguimiento permanente de cada expediente.
            Una gestión organizada contribuye a reducir observaciones, evitar
            reprocesos y mejorar la recuperación de los recursos provenientes de
            ADRES.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Estandarizar los procesos internos</h4>

              <p>
                Contar con procedimientos claramente definidos facilita la
                preparación, revisión y radicación de las reclamaciones,
                reduciendo errores administrativos y aumentando la eficiencia
                operativa.
              </p>
            </div>

            <div>
              <h4>✔ Verificar la documentación antes de radicar</h4>

              <p>
                Una validación previa de soportes clínicos, facturación y anexos
                permite identificar inconsistencias antes de presentar la
                reclamación ante ADRES.
              </p>
            </div>

            <div>
              <h4>✔ Mantener trazabilidad de cada expediente</h4>

              <p>
                Registrar cada etapa del proceso facilita responder
                requerimientos, conocer el estado de las reclamaciones y
                controlar los tiempos de gestión.
              </p>
            </div>

            <div>
              <h4>✔ Capacitar permanentemente al personal</h4>

              <p>
                Los cambios normativos y operativos hacen necesario actualizar
                de forma constante al equipo encargado de facturación, auditoría
                y cartera para disminuir errores repetitivos.
              </p>
            </div>

            <div>
              <h4>✔ Realizar seguimiento continuo</h4>

              <p>
                Supervisar periódicamente las reclamaciones radicadas permite
                responder oportunamente a observaciones, requerimientos o
                devoluciones emitidas durante el proceso.
              </p>
            </div>

            <div>
              <h4>✔ Analizar indicadores de gestión</h4>

              <p>
                Medir tiempos de respuesta, porcentaje de devoluciones,
                reclamaciones aprobadas y recursos recuperados ayuda a
                identificar oportunidades de mejora y fortalecer la
                sostenibilidad financiera de la institución.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            Una estrategia integral de gestión documental, auditoría preventiva,
            seguimiento permanente y mejora continua puede incrementar la
            eficiencia de las reclamaciones presentadas ante ADRES y fortalecer
            el flujo de caja de las instituciones prestadoras de servicios de
            salud.
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
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              Optimice el proceso de cobro ante ADRES y fortalezca el flujo de
              caja de su institución
            </h2>

            <p className={styles.ctaText}>
              Si su IPS, clínica u hospital presenta reclamaciones pendientes,
              devoluciones frecuentes, inconsistencias documentales o
              dificultades para recuperar recursos ante ADRES, contar con una
              estrategia integral puede marcar una diferencia significativa en
              la eficiencia administrativa y la sostenibilidad financiera. Un
              proceso bien estructurado ayuda a reducir reprocesos, mejorar la
              trazabilidad documental y aumentar las probabilidades de
              recuperación de los recursos reconocibles.
            </p>

            <div className={styles.actions}>
              <a href="/contacto" className={styles.primary}>
                Solicitar orientación especializada
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Hablar con un especialista
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
