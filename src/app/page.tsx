import styles from "./page.module.css";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import MethodologySection from "./components/MethodologySection";
import ClientsSection from "./components/ClientsSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <ClientsSection />
      <CtaSection />
    </>
  );
}
