import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <h1 id="hero-title">
          Gestión Estratégica de Cartera en el Sector Salud
        </h1>

        <p className={styles.heroSubtitle}>
          Soluciones jurídicas y administrativas para la recuperación eficiente
          de cartera hospitalaria y cuentas médicas.
        </p>
      </div>
    </section>
  );
}
