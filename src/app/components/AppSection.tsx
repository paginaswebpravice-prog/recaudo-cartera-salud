import styles from "../styles/AppSection.module.css";

export default function AppSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          APP LEGAL PRAVICE: Control Total de su Cartera y Procesos Jurídicos,
          24/7
        </h2>

        <p className={styles.intro}>
          La App Legal PRAVICE no es un simple portal de consulta. Es su centro
          de control jurídico empresarial en tiempo real.
        </p>

        <p className={styles.description}>
          Diseñada para empresas, IPS, gerencias financieras y compañías con
          volumen de cartera, la plataforma le permite tener visibilidad,
          trazabilidad y comunicación directa sobre todos sus procesos. No es
          información estática. Es control estratégico permanente.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Seguimiento 24 horas a sus procesos</h3>
            <p>
              Acceda en cualquier momento al estado actualizado de procesos
              ejecutivos y declarativos, gestión de cobro, actuaciones
              radicadas, medidas cautelares, reportes de recaudo y pagos
              recibidos. Toda la información organizada por cliente, bloque o
              proceso, con trazabilidad clara.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Solicitud de asesorías online</h3>
            <p>
              Desde la misma plataforma puede solicitar asesoría jurídica
              inmediata, agendar reuniones virtuales, consultar conceptos
              legales y hacer seguimiento a requerimientos específicos. Su
              equipo jurídico externo disponible sin desplazamientos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Chat jurídico directo</h3>
            <p>
              La App incluye un chat interno exclusivo para solicitudes en
              tiempo real, peticiones de informes específicos, consulta de
              avances y solicitud de documentos. Cada comunicación queda
              registrada y trazable.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Carga y gestión de documentos</h3>
            <p>
              Adjunte directamente facturas electrónicas, contratos, pagarés,
              soportes contables, correos de aceptación y documentos
              probatorios. Todo queda organizado por caso y respaldado
              digitalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
