import { useEffect, useRef, useState } from "react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import logo from "@assets/20251126_144937_0000_1765970748932.png";
import appServices from "@/assets/app-services.png";
import {
  ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3,
  LocateFixed, MapPin, Menu, Phone, X
} from "lucide-react";
import "./landing-approved.css";

const APP = "https://app.gruard.com/app";
const PLAY = "https://play.google.com/store/apps/details?id=com.fouronesolutions.gruard";
const APPLE = "https://apps.apple.com/do/app/gr%C3%BAa-rd/id6759132391";

const faqs = [
  {
    q: "¿Cómo solicito asistencia?",
    a: "Continúa en la app Grúa RD. Allí eliges el servicio, indicas dónde estás y hacia dónde va tu vehículo para recibir una cotización."
  },
  {
    q: "¿Puedo ver quién atenderá mi solicitud?",
    a: "Cuando se asigne un operador, podrás consultar su información y seguir el servicio desde la aplicación."
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "La app contempla pagos con tarjeta y en efectivo. Las opciones disponibles pueden depender del servicio."
  },
  {
    q: "¿Qué otros servicios están disponibles?",
    a: "La disponibilidad de servicios adicionales puede variar por zona y operador. Confirma las opciones que aparecen en la app antes de solicitar."
  }
];

function StoreLink({ store }: { store: "play" | "apple" }) {
  const play = store === "play";
  return (
    <a className="gr-store" href={play ? PLAY : APPLE} target="_blank" rel="noreferrer">
      <span className="gr-store-mark" aria-hidden="true">{play ? <SiGoogleplay /> : <SiAppstore />}</span>
      <span><small>Descárgala en</small><strong>{play ? "Google Play" : "App Store"}</strong></span>
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return <article className="gr-step">
    <span className="gr-step-no">{n}</span>
    <div><h3>{title}</h3><p>{text}</p></div>
  </article>;
}

export default function ApprovedLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="gr-proposal">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <div className="gr-topline"><span>ASISTENCIA VIAL EN REPÚBLICA DOMINICANA</span><a href="tel:+18097533796"><Phone size={13} /> 809 753 3796</a></div>
      <header className="gr-header">
        <a className="gr-brand" href="#inicio" onClick={closeMenu}>
          <img src={logo} alt="" width={38} height={38} />
          <span>Grúa <b>RD</b><small>EN EL CAMINO, CONTIGO</small></span>
        </a>
        <button ref={menuButton} className="gr-menu-toggle" type="button" aria-controls="landing-navigation" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="landing-navigation" className={menuOpen ? "gr-nav gr-nav-open" : "gr-nav"} aria-label="Navegación principal">
          <a href="#como-funciona" onClick={closeMenu}>Cómo funciona</a>
          <a href="#app" onClick={closeMenu}>La app</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <a href="/blog">Blog</a>
          <a className="gr-nav-cta" href={APP}>Solicitar asistencia <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
      <section className="gr-hero" id="inicio">
        <div className="gr-hero-copy">
          <div className="gr-eyebrow"><span className="gr-pulse" /> UNA MANERA MÁS CLARA DE PEDIR AYUDA</div>
          <h1>¿Te quedaste<br />en el camino?<br /><em>Vamos contigo.</em></h1>
          <p className="gr-hero-intro">Pide asistencia vial desde tu celular. Indica dónde estás, conoce la cotización y sigue el servicio desde la app.</p>
          <a className="gr-primary-btn" href={APP}>Continuar en la app <ArrowRight size={18} /></a>
          <div className="gr-callout"><span className="gr-call-icon"><MapPin size={18} /></span><span><b>Empieza por tu ubicación</b><small>Selecciona el punto de recogida y el destino.</small></span></div>
          <div className="gr-hero-phone"><Phone size={15} /><span>¿Prefieres llamar?</span><a href="tel:+18097533796">809 753 3796</a></div>
          <div className="gr-hero-stores"><StoreLink store="play" /><StoreLink store="apple" /></div>
        </div>
        <div className="gr-hero-visual">
          <div className="gr-visual-note"><span className="gr-note-dot" /> TU RUTA, MÁS CLARA</div>
          <div className="gr-image-frame">
            <img src={appServices} width={900} height={1600} fetchPriority="high" alt="Pantalla principal de Grúa RD con el mapa y las opciones de asistencia para tu vehículo" />
          </div>
        </div>
        <a className="gr-scroll" href="#como-funciona"><span>DESLIZA PARA CONOCER</span><ArrowDownRight size={15} /></a>
      </section>

      <section className="gr-reassure">
        <span>EN MOMENTOS DE ESTRÉS,</span>
        <p>menos incertidumbre.<br /><b>Más claridad en cada paso.</b></p>
        <span className="gr-reassure-line" />
      </section>

      <section className="gr-how" id="como-funciona">
        <div className="gr-section-heading">
          <div><span className="gr-kicker">ASÍ DE SENCILLO</span><h2>Sabes qué sigue.</h2></div>
          <p>Desde el primer dato hasta el cierre del servicio, la app te mantiene al tanto.</p>
        </div>
        <div className="gr-steps">
          <Step n="01" title="Indica la ruta" text="Marca tu ubicación y el destino. Cuéntanos qué necesita tu vehículo." />
          <Step n="02" title="Revisa la cotización" text="Conoce el precio antes de continuar con tu solicitud." />
          <Step n="03" title="Sigue el servicio" text="Consulta el operador asignado, conversa por chat y mira el seguimiento." />
        </div>
        <div className="gr-how-foot"><span><LocateFixed size={17} /> Tu ubicación y destino, en el mismo lugar.</span><a href={APP}>Empezar en la app <ArrowRight size={15} /></a></div>
      </section>

      <section className="gr-app" id="app">
        <div className="gr-app-copy">
          <span className="gr-kicker gr-kicker-light">GRÚA RD EN TU CELULAR</span>
          <h2>Tu asistencia,<br /><em>sin perder el hilo.</em></h2>
          <p>La app reúne lo que necesitas para estar informado mientras se gestiona tu servicio.</p>
          <ul className="gr-benefits">
            <li><span><Check size={14} /></span><div><b>Ubicación y destino</b><small>Señala dónde estás y a dónde va tu vehículo.</small></div></li>
            <li><span><Check size={14} /></span><div><b>Cotización antes de seguir</b><small>Revisa el precio antes de confirmar.</small></div></li>
            <li><span><Check size={14} /></span><div><b>Operador y seguimiento</b><small>Consulta quién fue asignado y sigue el servicio.</small></div></li>
            <li><span><Check size={14} /></span><div><b>Chat, pagos e historial</b><small>Conversa, paga con tarjeta o efectivo y revisa servicios anteriores.</small></div></li>
          </ul>
          <a className="gr-light-btn" href={APP}>Continuar en la app <ArrowRight size={17} /></a>
          <div className="gr-app-stores"><StoreLink store="play" /><StoreLink store="apple" /></div>
        </div>
        <div className="gr-app-visual">
          <div className="gr-app-image"><img src={appServices} width={900} height={1600} loading="lazy" alt="Pantalla real de la app Grúa RD con el flujo de solicitud y opciones de asistencia" /></div>
          <div className="gr-app-caption"><span>VISTA DE LA APP</span><b>Una solicitud guiada, paso a paso.</b></div>
        </div>
      </section>

      <section className="gr-services" id="servicios">
        <div className="gr-services-head"><span className="gr-kicker">CUANDO EL VEHÍCULO NO PUEDE SEGUIR</span><h2>La ayuda empieza<br />por saber qué necesitas.</h2></div>
        <div className="gr-services-body">
          <p>La app te permite iniciar una solicitud de asistencia y consultar las opciones que aparezcan para tu ubicación.</p>
          <div className="gr-service-chips"><span>Remolque</span><span>Asistencia vial</span><span>Otras opciones en la app</span></div>
          <div className="gr-availability"><Clock3 size={16} /><span><b>Servicios sujetos a disponibilidad.</b><br />Las opciones dependen de la zona y de los operadores disponibles.</span></div>
        </div>
      </section>

      <section className="gr-faq" id="preguntas">
        <div className="gr-faq-title"><span className="gr-kicker">ANTES DE SALIR</span><h2>Preguntas<br />frecuentes.</h2><a href="tel:+18097533796"><Phone size={15} /> ¿Necesitas hablar? 809 753 3796</a></div>
        <div className="gr-faq-list">
          {faqs.map((faq, i) => <article className={`gr-faq-item ${openFaq === i ? "is-open" : ""}`} key={faq.q}>
            <button id={`faq-question-${i}`} type="button" aria-controls={`faq-answer-${i}`} aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <span className="gr-faq-number">0{i + 1}</span><span>{faq.q}</span><ChevronDown size={18} />
            </button>
            <p id={`faq-answer-${i}`} aria-labelledby={`faq-question-${i}`} hidden={openFaq !== i}>{faq.a}</p>
          </article>)}
        </div>
      </section>

      <section className="gr-last-call">
        <div><span className="gr-kicker gr-kicker-light">CUANDO LO NECESITES</span><h2>Da el primer paso.<br /><em>Te acompañamos desde ahí.</em></h2></div>
        <div className="gr-last-actions"><a className="gr-last-btn" href={APP}>Continuar en la app <ArrowRight size={17} /></a><a className="gr-last-phone" href="tel:+18097533796"><Phone size={16} /> 809 753 3796</a></div>
      </section>
      <section className="gr-audiences" aria-label="Operadores y empresas">
        <p>¿Tienes una grúa o gestionas una flota?</p>
        <a href={APP}>Acceso para operadores y empresas <ArrowRight size={16} /></a>
      </section>
      </main>

      <footer className="gr-footer">
        <a className="gr-brand gr-footer-brand" href="#inicio"><img src={logo} alt="" width={33} height={33} /><span>Grúa <b>RD</b><small>ASISTENCIA VIAL</small></span></a>
        <p>Hecha para acompañarte en el camino.<br /><span>Carrt. Juan Bosch C/ Principal #106,<br />Canca la Reyna, Espaillat, RD.</span></p>
        <div className="gr-footer-links"><a href="https://app.gruard.com/login">Iniciar sesión</a><a href="/blog">Blog</a><a href="mailto:info@gruard.com">info@gruard.com</a><a href={PLAY} target="_blank" rel="noreferrer">Google Play</a><a href={APPLE} target="_blank" rel="noreferrer">App Store</a></div>
        <nav className="gr-legal-links" aria-label="Información legal"><a href="/terminos">Términos y condiciones</a><a href="/privacidad">Privacidad</a><a href="/seguridad">Seguridad</a><a href="/reembolsos">Reembolsos</a><a href="/entrega">Entrega</a></nav>
        <span className="gr-copyright">© Grúa RD</span>
      </footer>
    </div>
  );
}
