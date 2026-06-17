"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function QueEsADRESColombia() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            ADRES y sistema de salud colombiano
          </span>

          <h1 className={styles.title}>
            Qué es ADRES y cuál es su función en el sistema de salud colombiano
          </h1>

          <p className={styles.subtitle}>
            Conozca qué es la Administradora de los Recursos del Sistema General
            de Seguridad Social en Salud (ADRES), cuáles son sus funciones y
            cómo impacta los pagos a IPS, clínicas, hospitales y demás actores
            del sector salud en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es ADRES en Colombia?</h2>

          <p>
            La ADRES (Administradora de los Recursos del Sistema General de
            Seguridad Social en Salud) es una entidad adscrita al Ministerio de
            Salud y Protección Social encargada de administrar los recursos
            financieros del sistema de salud colombiano.
          </p>

          <p>
            Su función principal es garantizar que los recursos públicos
            destinados a la atención en salud sean distribuidos de manera
            adecuada entre EPS, IPS, hospitales, clínicas y demás actores del
            sistema.
          </p>

          <p>
            Desde su creación, ADRES se convirtió en una pieza fundamental para
            la sostenibilidad financiera del sector salud, centralizando la
            administración de grandes flujos de recursos y fortaleciendo los
            mecanismos de control y trazabilidad.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Funciones principales de ADRES</h2>

          <ul className={styles.checklist}>
            <li>Administrar los recursos públicos del sistema de salud.</li>
            <li>
              Realizar pagos por giro directo a IPS y prestadores autorizados.
            </li>
            <li>
              Gestionar reclamaciones relacionadas con accidentes de tránsito,
              eventos catastróficos y servicios especiales.
            </li>
            <li>
              Administrar recursos de tecnologías y servicios financiados con
              cargo a recursos públicos.
            </li>
            <li>Ejecutar procesos de auditoría y validación de cuentas.</li>
            <li>
              Garantizar la transparencia y trazabilidad de los recursos del
              sistema.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Cuál es la diferencia entre ADRES y las EPS?</h2>

          <p>
            Una de las dudas más frecuentes en Colombia es confundir las
            funciones de ADRES con las de las EPS. Aunque ambas participan en el
            sistema de salud, cumplen roles completamente distintos.
          </p>

          <p>
            Las EPS se encargan del aseguramiento de los usuarios, la gestión
            del riesgo en salud y la contratación de servicios médicos. ADRES,
            por su parte, administra recursos financieros y realiza pagos según
            las reglas establecidas por la normativa vigente.
          </p>

          <p>
            En términos simples, ADRES administra dinero público del sistema,
            mientras que las EPS administran la prestación y aseguramiento de
            los servicios de salud.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Qué pagos realiza ADRES?</h2>

          <p>
            Dependiendo del tipo de servicio y del mecanismo de financiación,
            ADRES puede participar en distintos procesos de reconocimiento y
            pago.
          </p>

          <ul className={styles.checklist}>
            <li>Pagos mediante giro directo a IPS.</li>
            <li>
              Reclamaciones por accidentes de tránsito cuando corresponda.
            </li>
            <li>
              Procesos asociados a recursos públicos del sistema de salud.
            </li>
            <li>
              Reconocimientos relacionados con tecnologías y servicios definidos
              por la regulación vigente.
            </li>
            <li>
              Procesos derivados de acuerdos especiales establecidos por el
              Gobierno Nacional.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Cómo afecta ADRES a las IPS y clínicas?</h2>

          <p>
            Para las IPS, hospitales y clínicas, ADRES representa un actor
            financiero de gran relevancia debido a que interviene en múltiples
            mecanismos de flujo de recursos dentro del sistema de salud.
          </p>

          <p>
            Una correcta gestión documental, la adecuada radicación de cuentas y
            el cumplimiento de requisitos técnicos pueden impactar directamente
            la velocidad de reconocimiento y pago de determinados recursos.
          </p>

          <p>
            Por esta razón, muchas instituciones desarrollan procesos internos
            especializados para gestionar relaciones operativas y financieras
            relacionadas con ADRES.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Problemas frecuentes relacionados con ADRES</h2>

          <ul className={styles.checklist}>
            <li>Errores en la radicación de documentos.</li>
            <li>Inconsistencias en soportes administrativos.</li>
            <li>Devoluciones de cuentas por requisitos incompletos.</li>
            <li>Retrasos derivados de auditorías y validaciones.</li>
            <li>Dificultades para identificar el responsable del pago.</li>
            <li>
              Falta de seguimiento a reclamaciones o solicitudes presentadas.
            </li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Importancia de conocer el funcionamiento de ADRES</h2>

          <p>
            Entender cómo opera ADRES permite a las IPS tomar mejores decisiones
            financieras, reducir errores administrativos y fortalecer los
            procesos de recuperación de recursos.
          </p>

          <p>
            Además, facilita la identificación de oportunidades de mejora en
            facturación, radicación, auditoría y seguimiento de cuentas,
            contribuyendo a una mayor estabilidad financiera dentro del sector
            salud colombiano.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> asesora IPS, clínicas y hospitales en
            Colombia en procesos de recuperación de cartera, reclamaciones ante
            entidades públicas, auditorías, cobro jurídico y estrategias de
            fortalecimiento financiero en el sector salud.
          </p>
        </footer>
      </article>
    </main>
  );
}
