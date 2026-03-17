import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title:
    "Carta para cobro de cartera a EPS en Colombia | Modelo editable para IPS y clínicas",
  description:
    "Descarga modelo de carta para cobro de cartera a EPS en Colombia. Guía profesional para IPS, clínicas y proveedores de salud en Bogotá y todo el país. Mejora tu recaudo prejurídico y reduce la mora.",
};

export default function CartaCobroEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Modelo profesional editable</span>

          <h1 className={styles.title}>
            Carta para cobro de cartera a las EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y proveedores de salud en Bogotá y
            Colombia que buscan recuperar cartera vencida de manera efectiva,
            estructurando correctamente el cobro prejurídico y preparando el
            camino para un eventual cobro jurídico.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2>Cobro de cartera en el sector salud en Colombia</h2>
          <p>
            El cobro de cartera a EPS en Colombia es uno de los principales
            retos financieros para IPS, clínicas y proveedores de servicios de
            salud, especialmente en ciudades como Bogotá donde el volumen de
            servicios es alto. Una gestión adecuada del cobro prejurídico
            permite mejorar el flujo de caja, reducir la mora y fortalecer la
            posición jurídica frente a un eventual proceso ejecutivo.
          </p>
          <p>
            Una carta de cobro bien estructurada no solo comunica una obligación
            pendiente, sino que también deja evidencia formal de requerimiento
            de pago, lo cual es clave dentro de una estrategia legal de
            recuperación de cartera en el sector salud.
          </p>
        </section>

        {/* CHECKLIST */}
        <section className={styles.section}>
          <h2>Checklist mínimo antes de iniciar el cobro a una EPS</h2>

          <ul className={styles.checklist}>
            <li>
              Listado detallado de facturas (número, fecha, radicación,
              vencimiento, valor y saldo)
            </li>
            <li>Soporte de radicación y trazabilidad ante la EPS</li>
            <li>
              Documentación administrativa y clínica mínima exigida en Colombia
            </li>
            <li>Historial de pagos, abonos y conciliaciones</li>
            <li>Cuenta bancaria y condiciones claras de pago</li>
          </ul>
        </section>

        {/* MODELO DE CARTA */}
        <section className={styles.sectionAlt}>
          <h2>Modelo de carta para cobro de cartera a EPS (editable)</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento formal de pago - Cartera
              vencida sector salud
            </p>

            <p>
              Señores <br />
              [Nombre EPS] <br />
              [Ciudad - Colombia]
            </p>

            <p>Atn: Área de Cartera</p>

            <p>Cordial saludo:</p>

            <p>
              En nuestra calidad de [IPS/Clínica/Proveedor de salud en
              Colombia], nos permitimos requerir el pago de la cartera vencida
              relacionada en el anexo, correspondiente a servicios de salud
              debidamente prestados, facturados y radicados ante su entidad, por
              un valor total de $____.
            </p>

            <p>
              A la fecha, las obligaciones se encuentran en mora, afectando el
              flujo financiero de nuestra institución. Por lo anterior,
              solicitamos el pago dentro de los cinco (5) días hábiles
              siguientes a la recepción de esta comunicación.
            </p>

            <p>
              En caso de no obtener respuesta o acuerdo de pago verificable, nos
              veremos en la obligación de iniciar las acciones legales
              correspondientes en Colombia, incluyendo proceso ejecutivo y
              solicitud de medidas cautelares para el recaudo efectivo de la
              cartera.
            </p>

            <p>
              Atentamente, <br />
              [Nombre / Cargo] <br />
              [Teléfono / Correo]
            </p>
          </div>
        </section>

        {/* DILACIONES */}
        <section className={styles.section}>
          <h2>¿Qué hacer si la EPS no paga o dilata el proceso?</h2>
          <p>
            En muchos casos en Colombia, las EPS responden con glosas,
            objeciones o dilaciones administrativas. Ante esto, es fundamental
            responder por escrito, dejar trazabilidad y exigir cronogramas de
            pago claros. Si la obligación es exigible, se debe estructurar una
            estrategia de cobro jurídico con soporte documental sólido.
          </p>
        </section>

        {/* ERRORES SEO */}
        <section className={styles.section}>
          <h2>Errores comunes en el cobro de cartera en salud</h2>
          <p>
            Muchas IPS y clínicas en Bogotá y Colombia cometen errores que
            dificultan el recaudo de cartera:
          </p>

          <ul className={styles.checklist}>
            <li>No documentar correctamente la radicación</li>
            <li>Enviar comunicaciones sin estructura legal</li>
            <li>No hacer seguimiento oportuno a la cartera vencida</li>
            <li>Retrasar el inicio del cobro jurídico</li>
          </ul>
        </section>

        {/* CIERRE SEO */}
        <section className={styles.section}>
          <h2>
            Recuperación de cartera en Bogotá y Colombia con estrategia legal
          </h2>
          <p>
            La recuperación de cartera en el sector salud requiere una
            estrategia integral que combine gestión administrativa, cobro
            prejurídico y acciones legales oportunas. En PRAVICE, acompañamos a
            IPS, clínicas y empresas del sector salud en Bogotá y toda Colombia
            en la estructuración de estrategias efectivas de recaudo.
          </p>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> La recupera mediante
            estrategias legales enfocadas en resultados reales en Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
