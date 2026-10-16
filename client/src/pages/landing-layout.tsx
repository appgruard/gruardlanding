import { MotionConfig } from "framer-motion";
import Header from "./landing-header";
import Footer from "./landing-footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="landing-site w-full min-h-screen bg-background overflow-x-hidden">
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="w-full relative">
          {children}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
