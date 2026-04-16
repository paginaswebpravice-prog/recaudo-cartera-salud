"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function NoVenderCarteraEps() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Decisión estratégica</span>

          <h1 className={styles.title}>Por qué NO vender su cartera EPS</h1>

          <p className={styles.subtitle}>
            Recuperarla jurídicamente suele ser una alternativa más rentable y
            estratégica.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.sectionAlt}>
          <h2>Vender cartera implica perder valor</h2>

          <p>
            La compra de cartera generalmente se realiza con descuentos
            significativos sobre el valor real.
          </p>

          <p>Esto reduce el ingreso final frente a lo realmente adeudado.</p>

          <p>
            Una recuperación jurídica busca el pago completo mediante
            herramientas como el proceso ejecutivo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>PRAVICE no compra cartera</h2>

          <p>
            PRAVICE implementa estrategias de recuperación con enfoque en
            recaudo real.
          </p>

          <p>
            El modelo se basa en resultados, alineando intereses con el cliente.
          </p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>Maximizar recaudo vs vender con descuento</h2>

          <p>
            Una estrategia jurídica estructurada permite proteger el valor de la
            cartera frente a cesiones con descuento.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            Antes de vender su cartera, evalúe su potencial de recuperación en
            Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
