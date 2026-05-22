"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./WhatsAppChat.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

type Message = {
  type: "bot" | "user";
  text: string;
};

const portfolioTypes = [
  "💰 Cartera EPS",
  "📄 Glosas",
  "⚖️ Cobro jurídico",
  "🤝 Cobro prejurídico",
  "🚑 SOAT",
  "🏛️ ADRES",
  "📑 Facturas vencidas",
  "📉 Cartera mayor a 90 días",
];

const portfolioAmounts = [
  "Menos de $10 millones",
  "$10M - $50M",
  "$50M - $200M",
  "Más de $200M",
];

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Bienvenido 👋 Somos especialistas en recuperación de cartera para clínicas, IPS y entidades del sector salud.",
    },
    {
      type: "bot",
      text: "Te haré unas preguntas rápidas para dirigir tu caso con el equipo adecuado.",
    },
  ]);

  const [input, setInput] = useState("");
  const [entityType, setEntityType] = useState("");
  const [contactName, setContactName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioType, setPortfolioType] = useState("");
  const [portfolioAmount, setPortfolioAmount] = useState("");
  const [description, setDescription] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text,
        },
      ]);
    }, 350);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text,
      },
    ]);
  };

  const redirectToWhatsApp = async () => {
    setLoading(true);

    const currentPage = window.location.href;

    try {
      await fetch("TU_URL_DE_APPS_SCRIPT", {
        method: "POST",

        mode: "no-cors",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          entityType,
          contactName,
          companyName,
          email,
          phone,
          portfolioType,
          portfolioAmount,
          description,
          page: currentPage,
        }),
      });
    } catch (error) {
      console.error("Error enviando lead:", error);
    }

    const message = `
- *Nueva solicitud - Recuperación de cartera sector salud*

- *Tipo de entidad:* ${entityType}

- *Entidad:* ${companyName}

- *Contacto:* ${contactName}

- *Correo:* ${email}

- *Teléfono:* ${phone}

- *Tipo de cartera:* ${portfolioType}

- *Monto aproximado:* ${portfolioAmount}

- *Descripción:*  
${description}

- *Página de origen:*  
${currentPage}
`.trim();

    const phoneNumber = "573114659315";

    setTimeout(() => {
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
      )}`;
    }, 1200);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const value = input.trim();

    addUserMessage(value);

    if (step === 1) {
      setContactName(value);

      addBotMessage("¿Cuál es el nombre de la entidad?");

      setStep(2);
    } else if (step === 2) {
      setCompanyName(value);

      addBotMessage("Escribe un correo de contacto.");

      setStep(3);
    } else if (step === 3) {
      setEmail(value);

      addBotMessage("¿Cuál es tu número de contacto?");

      setStep(4);
    } else if (step === 4) {
      setPhone(value);

      addBotMessage("¿Qué tipo de cartera deseas recuperar?");

      setStep(5);
    } else if (step === 7) {
      setDescription(value);

      setInput("");

      setTimeout(() => {
        redirectToWhatsApp();
      }, 300);

      return;
    }

    setInput("");
  };

  return (
    <>
      <button className={styles.floatingButton} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faXmark : faWhatsapp} size="lg" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.chatContainer}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className={styles.header}>
              <div>
                <h3>Recuperación de cartera en salud</h3>

                <p>Atención para IPS, clínicas y entidades del sector salud</p>
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.timestamp}>Hoy</div>

              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={
                    msg.type === "bot" ? styles.botWrapper : styles.userWrapper
                  }
                  initial={{
                    opacity: 0,
                    x: msg.type === "bot" ? -20 : 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div
                    className={
                      msg.type === "bot"
                        ? styles.botMessage
                        : styles.userMessage
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {step === 0 && (
                <motion.div
                  className={styles.optionsGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[
                    "🏥 Clínica / Hospital",
                    "🧪 Laboratorio",
                    "👨‍⚕️ Profesional independiente",
                    "💊 IPS",
                    "🏢 Empresa del sector salud",
                  ].map((item) => (
                    <button
                      key={item}
                      className={styles.optionCard}
                      onClick={() => {
                        addUserMessage(item);

                        setEntityType(item);

                        addBotMessage("¿Cuál es tu nombre?");

                        setStep(1);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  className={styles.servicesGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {portfolioTypes.map((item) => (
                    <button
                      key={item}
                      className={styles.serviceButton}
                      onClick={() => {
                        addUserMessage(item);

                        setPortfolioType(item);

                        addBotMessage(
                          "¿Cuál es el monto aproximado de la cartera?",
                        );

                        setStep(6);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 6 && (
                <motion.div
                  className={styles.servicesGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {portfolioAmounts.map((item) => (
                    <button
                      key={item}
                      className={styles.serviceButton}
                      onClick={() => {
                        addUserMessage(item);

                        setPortfolioAmount(item);

                        addBotMessage(
                          "Cuéntanos brevemente el estado de la cartera o del proceso.",
                        );

                        setStep(7);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {step !== 0 && step !== 5 && step !== 6 && step !== 8 && (
              <div className={styles.inputArea}>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className={styles.chatInput}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                />

                <button className={styles.sendButton} onClick={handleSend}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loadingOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.loadingModal}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
            >
              <div className={styles.spinner} />

              <h3>Redirigiendo a WhatsApp...</h3>

              <p>Estamos preparando tu solicitud de recuperación de cartera.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
