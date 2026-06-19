"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function CostoServiciosIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Gestión financiera para IPS en Colombia
          </span>

          <h1 className={styles.title}>
            Cómo calcular el costo real de los servicios médicos en una IPS en
            Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y hospitales en Colombia sobre
            costeo real de servicios médicos, control financiero y mejora de la
            rentabilidad frente a EPS y entidades del sistema de salud.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>Importancia del cálculo de costos en una IPS en Colombia</h2>

          <p>
            El cálculo del costo real de los servicios médicos es uno de los
            pilares más importantes para la sostenibilidad financiera de una IPS
            en Colombia. Sin un modelo de costeo adecuado, las instituciones
            pueden terminar trabajando con tarifas que no cubren sus gastos
            reales.
          </p>

          <p>
            Esto genera problemas como déficit operativo, acumulación de cartera
            vencida y dependencia de EPS que pagan con retrasos prolongados.
          </p>
        </section>

        {/* COMPONENTES */}
        <section className={styles.section}>
          <h2>Componentes del costo real en servicios de salud</h2>

          <p>
            Para calcular correctamente el costo en una IPS, es necesario
            identificar todos los factores que intervienen en la prestación del
            servicio médico.
          </p>

          <ul className={styles.checklist}>
            <li>Insumos médicos y medicamentos utilizados por paciente</li>
            <li>Honorarios médicos y del personal asistencial</li>
            <li>Costos administrativos de facturación y cartera</li>
            <li>Infraestructura, equipos biomédicos y mantenimiento</li>
            <li>Costos financieros asociados a mora y cartera vencida</li>
          </ul>
        </section>

        {/* METODOLOGÍAS */}
        <section className={styles.sectionAlt}>
          <h2>Métodos de cálculo de costos en IPS</h2>

          <p>
            En Colombia, las IPS utilizan diferentes metodologías de costeo
            dependiendo de su nivel de complejidad, volumen de pacientes y
            estructura administrativa.
          </p>

          <ul className={styles.checklist}>
            <li>
              <strong>Costeo por servicio:</strong> asigna costos directos a
              cada procedimiento médico.
            </li>
            <li>
              <strong>Costeo ABC:</strong> analiza actividades y procesos
              internos en lugar de servicios aislados.
            </li>
            <li>
              <strong>Costeo estándar:</strong> utiliza valores promedio
              históricos para proyecciones financieras.
            </li>
          </ul>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores frecuentes en el cálculo de costos</h2>

          <p>
            Uno de los principales problemas en IPS en Colombia es la falta de
            precisión en la identificación de costos indirectos, lo que genera
            decisiones financieras equivocadas.
          </p>

          <ul className={styles.checklist}>
            <li>No incluir costos administrativos en el servicio</li>
            <li>Ignorar la cartera vencida como costo financiero real</li>
            <li>No actualizar precios de insumos médicos</li>
            <li>Subestimar tiempos reales de atención</li>
            <li>No medir pérdidas por glosas y devoluciones</li>
          </ul>
        </section>

        {/* IMPACTO */}
        <section className={styles.section}>
          <h2>Impacto del mal costeo en la rentabilidad de la IPS</h2>

          <p>
            Cuando una IPS no calcula correctamente sus costos, termina
            aceptando tarifas que no reflejan la realidad financiera del
            servicio prestado.
          </p>

          <p>
            Esto afecta directamente el flujo de caja, incrementa la dependencia
            de crédito y reduce la capacidad de inversión en infraestructura,
            talento humano y tecnología.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.sectionAlt}>
          <h2>Estrategias para mejorar el control de costos</h2>

          <p>
            Las IPS que logran estabilidad financiera en Colombia no son
            necesariamente las que más facturan, sino las que mejor controlan
            sus costos y su cartera.
          </p>

          <ul className={styles.checklist}>
            <li>Implementar sistemas digitales de costeo y facturación</li>
            <li>Relacionar costos con EPS específicas y su comportamiento</li>
            <li>Controlar cartera vencida como indicador financiero clave</li>
            <li>Auditar procesos de facturación y glosas constantemente</li>
            <li>Negociar tarifas basadas en costos reales documentados</li>
          </ul>
        </section>

        {/* CONTEXTO COLOMBIA */}
        <section className={styles.section}>
          <h2>Costo de servicios médicos en Colombia: contexto real</h2>

          <p>
            El sistema de salud en Colombia presenta retos estructurales como
            retrasos en pagos de EPS, procesos de auditoría complejos y glosas
            frecuentes que afectan directamente la rentabilidad de las IPS.
          </p>

          <p>
            En ciudades como Bogotá, Medellín y Cali, la presión financiera es
            mayor debido al volumen de pacientes y la alta dependencia del
            aseguramiento.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.section}>
          <h2>Conclusión</h2>

          <p>
            Calcular correctamente el costo real de los servicios médicos en una
            IPS en Colombia no es solo una tarea contable, sino una estrategia
            clave para la supervivencia financiera.
          </p>

          <p>
            Una estructura de costos sólida permite negociar mejor con EPS,
            reducir pérdidas y garantizar sostenibilidad a largo plazo.
          </p>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> apoya a IPS en Colombia en la recuperación
            de cartera, optimización financiera y fortalecimiento jurídico del
            sector salud.
          </p>
        </footer>
      </article>
    </main>
  );
}
