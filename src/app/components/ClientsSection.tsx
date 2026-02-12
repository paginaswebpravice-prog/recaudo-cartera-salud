import styles from "../page.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="clients-title">
      <div className={styles.container}>
        <h2 id="clients-title">Instituciones que Atendemos</h2>

        <ul className={styles.clientsList}>
          <li>Clínicas y hospitales de mediana y alta complejidad.</li>
          <li>IPS especializadas.</li>
          <li>Centros médicos ambulatorios.</li>
          <li>Entidades del sector salud con cartera significativa.</li>
        </ul>
      </div>
    </section>
  );
}
