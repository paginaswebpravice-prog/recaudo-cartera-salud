import styles from "../styles/ClientsSection.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nuestros Clientes: Instituciones del Sector Salud
        </h2>

        <p className={styles.intro}>
          Trabajamos con instituciones prestadoras de servicios de salud y
          proveedores de tecnologías médicas en toda Colombia. Entendemos los
          desafíos específicos de cada tipo de organización y diseñamos
          estrategias adaptadas a su realidad operativa y necesidades.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/ips.jpg" alt="IPS y Clínicas en Colombia" />
            <h3>IPS y Clínicas</h3>
            <p>
              Instituciones prestadoras de servicios de salud con cartera en
              EPS, ADRES y aseguradoras. Recuperación de facturas de consultas,
              procedimientos, hospitalizaciones y urgencias.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/hospital.jpg" alt="Hospitales públicos y privados" />
            <h3>Hospitales Públicos y Privados</h3>
            <p>
              Centros hospitalarios de mediana y alta complejidad con cartera
              acumulada. Gestión de obligaciones ante entes territoriales y
              entidades del régimen subsidiado.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/tecnologia-medica.jpg"
              alt="Proveedores de tecnología en salud"
            />
            <h3>Proveedores de Tecnologías en Salud</h3>
            <p>
              Empresas que suministran dispositivos médicos, equipos
              diagnósticos e insumos hospitalarios. Cobro de facturas a
              instituciones del sistema.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/laboratorio.jpg"
              alt="Prestadores de servicios especializados"
            />
            <h3>Prestadores de Servicios Especializados</h3>
            <p>
              Laboratorios clínicos, centros de diagnóstico, servicios de
              ambulancia y otros actores del ecosistema salud con cartera por
              recuperar.
            </p>
          </div>
        </div>

        <div className={styles.highlight}>
          <span className={styles.icon}>▣</span>
          <p>
            <strong>Especialización sectorial real:</strong> Conocemos la
            regulación, los procesos administrativos, las dinámicas de glosas y
            los argumentos técnicos que utilizan EPS, ADRES y aseguradoras. Esta
            experiencia específica marca la diferencia entre recuperar o perder
            su cartera.
          </p>
        </div>
      </div>
    </section>
  );
}
