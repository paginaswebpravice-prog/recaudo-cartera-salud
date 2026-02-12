import styles from "../styles/UseCaseSection.module.css";

export default function UseCaseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Casos de Uso: Escenarios Reales de Recuperación
        </h2>

        <p className={styles.subtitle}>
          Estas son situaciones representativas de los casos que manejamos
          diariamente. Cada institución tiene características particulares, pero
          los patrones de cartera envejecida son similares en todo el sector
          salud colombiano.
        </p>

        <div className={styles.grid}>
          {/* Card grande izquierda */}
          <div className={`${styles.card} ${styles.large}`}>
            <h3>IPS con Cartera Glosada Acumulada</h3>
            <p>
              Institución de mediana complejidad con $4.000 millones en facturas
              glosadas por EPS durante los últimos 3 años. Las glosas alegan
              "falta de pertinencia" y "servicios no autorizados". La IPS
              respondió las glosas pero nunca obtuvo pronunciamiento definitivo.
            </p>
            <p>
              Estrategia PRAVICE: Proceso declarativo con reconstrucción
              probatoria completa de cada atención, incluidos soportes médicos y
              jurisprudencia favorable. Medidas cautelares sobre cuentas de la
              EPS.
            </p>
          </div>

          {/* Card derecha superior */}
          <div className={`${styles.card} ${styles.medium}`}>
            <h3>Proveedor de Tecnología con Facturas Aceptadas sin Pago</h3>
            <p>
              Empresa proveedora de dispositivos médicos con $1.200 millones en
              facturas radicadas hace 18 meses ante hospital público. Las
              facturas fueron aceptadas administrativamente pero el pago nunca
              se ejecutó por "restricciones presupuestales".
            </p>
            <p>
              Estrategia PRAVICE: Proceso ejecutivo inmediato con embargo
              preventivo de recursos del SGP destinados a salud. Negociación
              paralela con la entidad territorial para pago programado.
            </p>
          </div>

          {/* Card inferior izquierda */}
          <div className={`${styles.card} ${styles.small}`}>
            <h3>Clínica con Riesgo de Prescripción Inminente</h3>
            <p>
              Clínica especializada con $800 millones en cartera de ADRES con
              más de 2.5 años de antigüedad. Sin gestión judicial previa y con
              riesgo de prescripción en 6 meses.
            </p>
            <p>
              Estrategia PRAVICE: Radicación urgente de demandas ejecutivas
              antes del vencimiento de términos. Investigación patrimonial de
              ADRES para identificar cuentas ejecutables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
