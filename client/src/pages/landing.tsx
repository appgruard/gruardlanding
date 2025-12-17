import { motion } from "framer-motion";
import { 
  Truck, 
  MapPin, 
  CreditCard, 
  Clock, 
  Smartphone,
  Navigation,
  Wallet,
  Users,
  Building2,
  FileText,
  Shield,
  Wifi,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  ChevronRight,
  Play,
  Download,
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/20251126_144937_0000_1765970748932.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const APP_DOMAIN = "https://app.gruard.com";

function TowTruckAnimation() {
  return (
    <div className="relative w-full h-48 sm:h-64 overflow-hidden" data-testid="animation-tow-truck">
      <svg 
        viewBox="0 0 800 220" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="truckYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="truckOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="truckBed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="180" width="800" height="40" fill="url(#roadGradient)" />
        <line x1="0" y1="200" x2="800" y2="200" stroke="#fbbf24" strokeWidth="3" strokeDasharray="40 20">
          <animate attributeName="stroke-dashoffset" from="0" to="-60" dur="0.5s" repeatCount="indefinite" />
        </line>
        
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-2; 0,0"
            dur="0.3s"
            repeatCount="indefinite"
          />
          
          <path d="M200,130 L200,155 L180,155 L180,145 L190,145 L195,130 Z" fill="url(#truckYellow)" />
          
          <rect x="200" y="100" width="100" height="55" rx="3" fill="url(#truckYellow)" />
          <path d="M200,100 L200,155 L195,155 Q185,155 185,145 L185,130 Q185,115 200,110 Z" fill="url(#truckYellow)" />
          
          <rect x="210" y="108" width="45" height="35" rx="3" fill="#7dd3fc" opacity="0.9" />
          <line x1="232" y1="108" x2="232" y2="143" stroke="#1f2937" strokeWidth="2" />
          
          <rect x="260" y="120" width="35" height="10" rx="2" fill="#1f2937" opacity="0.3" />
          
          <circle cx="190" cy="115" r="6" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
          </circle>
          
          <rect x="300" y="125" width="120" height="30" rx="2" fill="url(#truckBed)" />
          <rect x="300" y="120" width="120" height="8" fill="url(#truckYellow)" />
          <line x1="320" y1="125" x2="320" y2="155" stroke="#4b5563" strokeWidth="1" />
          <line x1="350" y1="125" x2="350" y2="155" stroke="#4b5563" strokeWidth="1" />
          <line x1="380" y1="125" x2="380" y2="155" stroke="#4b5563" strokeWidth="1" />
          
          <rect x="395" y="85" width="20" height="35" fill="url(#truckOrange)" />
          <line x1="405" y1="50" x2="405" y2="85" stroke="url(#truckOrange)" strokeWidth="12" />
          <line x1="405" y1="50" x2="480" y2="95" stroke="url(#truckOrange)" strokeWidth="8" />
          
          <line x1="478" y1="95" x2="478" y2="140" stroke="#6b7280" strokeWidth="2">
            <animate attributeName="y2" values="140;145;140" dur="0.5s" repeatCount="indefinite" />
          </line>
          <path d="M470,140 Q478,135 486,140 L483,155 Q478,160 473,155 Z" fill="#4b5563">
            <animate attributeName="transform" attributeType="XML" type="translate" values="0,0; 0,5; 0,0" dur="0.5s" repeatCount="indefinite" />
          </path>
          
          <circle cx="230" cy="180" r="22" fill="#1f2937" />
          <circle cx="230" cy="180" r="16" fill="#4b5563" />
          <circle cx="230" cy="180" r="8" fill="#f59e0b" />
          
          <circle cx="390" cy="180" r="22" fill="#1f2937" />
          <circle cx="390" cy="180" r="16" fill="#4b5563" />
          <circle cx="390" cy="180" r="8" fill="#f59e0b" />
        </g>
        
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-3; 0,0"
            dur="0.25s"
            repeatCount="indefinite"
          />
          
          <rect x="520" y="130" width="90" height="50" rx="5" fill="url(#carBodyGradient)" />
          <path d="M530,130 L540,105 L590,105 L600,130" fill="url(#carBodyGradient)" />
          
          <rect x="543" y="108" width="22" height="20" rx="2" fill="#bfdbfe" opacity="0.85" />
          <rect x="568" y="108" width="22" height="20" rx="2" fill="#bfdbfe" opacity="0.85" />
          
          <rect x="522" y="145" width="12" height="8" rx="2" fill="#fde047">
            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="596" y="145" width="12" height="8" rx="2" fill="#ef4444" />
          
          <circle cx="545" cy="180" r="18" fill="#1f2937" />
          <circle cx="545" cy="180" r="12" fill="#4b5563" />
          <circle cx="545" cy="180" r="5" fill="#6b7280" />
          
          <circle cx="590" cy="180" r="18" fill="#1f2937" />
          <circle cx="590" cy="180" r="12" fill="#4b5563" />
          <circle cx="590" cy="180" r="5" fill="#6b7280" />
          
          <line x1="478" y1="155" x2="530" y2="120" stroke="#6b7280" strokeWidth="3" strokeDasharray="8 4">
            <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="1s" repeatCount="indefinite" />
          </line>
        </g>
        
        <g opacity="0.5">
          <circle r="3" fill="white">
            <animate attributeName="cx" from="180" to="50" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="160;155;165;160" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="white">
            <animate attributeName="cx" from="180" to="30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;145;155;150" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Grúa RD" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" data-testid="img-logo" />
          <span className="font-bold text-lg sm:text-xl text-foreground">Grúa RD</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-servicios">Servicios</a>
          <a href="#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-caracteristicas">Características</a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-como-funciona">Cómo Funciona</a>
        </nav>
        
        <div className="hidden sm:flex items-center gap-2">
          <a href={`${APP_DOMAIN}/login`} data-testid="link-login">
            <Button variant="ghost" size="sm">
              <LogIn className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </Button>
          </a>
          <a href={`${APP_DOMAIN}/onboarding`} data-testid="link-register">
            <Button size="sm" className="bg-orange text-orange-foreground">
              <UserPlus className="w-4 h-4 mr-2" />
              Registrarse
            </Button>
          </a>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-background border-b border-border px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2">
            <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Características</a>
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Cómo Funciona</a>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <a href={`${APP_DOMAIN}/login`} className="w-full" data-testid="link-login-mobile">
              <Button variant="outline" className="w-full">
                <LogIn className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
            </a>
            <a href={`${APP_DOMAIN}/onboarding`} className="w-full" data-testid="link-register-mobile">
              <Button className="w-full bg-orange text-orange-foreground">
                <UserPlus className="w-4 h-4 mr-2" />
                Registrarse
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 sm:py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="bg-orange/20 text-orange border-orange/30 mb-4 sm:mb-6 text-xs sm:text-sm" data-testid="badge-pwa">
              Disponible en iOS, Android y Web
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-testid="text-hero-title">
              Asistencia Vial{" "}
              <span className="text-orange">Cuando Más</span>{" "}
              La Necesitas
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0" data-testid="text-hero-subtitle">
              La plataforma líder de servicios de grúa en República Dominicana. 
              Conectamos clientes con operadores en tiempo real, 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <a href={`${APP_DOMAIN}/onboarding`}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-orange text-orange-foreground h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold"
                  data-testid="button-register-hero"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Registrarse Gratis
                </Button>
              </a>
              <a href={`${APP_DOMAIN}/login`}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm"
                  data-testid="button-login-hero"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </Button>
              </a>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="flex items-center justify-center xs:justify-start gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 transition-transform hover:scale-105"
                data-testid="link-google-play"
              >
                <SiGoogleplay className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center xs:justify-start gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 transition-transform hover:scale-105"
                data-testid="link-app-store"
              >
                <SiAppstore className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <TowTruckAnimation />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { value: "24/7", label: "Disponibilidad" },
            { value: "150+", label: "Operadores" },
            { value: "10K+", label: "Servicios" },
            { value: "4.8", label: "Calificación" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm" data-testid={`stat-${stat.label.toLowerCase()}`}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      id: "clientes",
      icon: Users,
      title: "Para Clientes",
      description: "Solicita servicio de grúa desde tu celular en segundos",
      features: [
        { icon: MapPin, text: "Selección de ubicación en mapa" },
        { icon: Clock, text: "Seguimiento GPS en tiempo real" },
        { icon: CreditCard, text: "Múltiples métodos de pago" },
        { icon: FileText, text: "Historial y recibos PDF" }
      ],
      color: "bg-blue-500/10 text-blue-500",
      iconBg: "bg-blue-500"
    },
    {
      id: "operadores",
      icon: Truck,
      title: "Para Operadores",
      description: "Gestiona tu negocio de grúas de forma eficiente",
      features: [
        { icon: Smartphone, text: "Dashboard de solicitudes" },
        { icon: Navigation, text: "Navegación con Waze" },
        { icon: Wallet, text: "Sistema de Wallet" },
        { icon: Truck, text: "Gestión de vehículos" }
      ],
      color: "bg-orange/10 text-orange",
      iconBg: "bg-orange"
    },
    {
      id: "empresas",
      icon: Building2,
      title: "Para Empresas",
      description: "Portal B2B con facturación automatizada",
      features: [
        { icon: Building2, text: "Portal empresarial dedicado" },
        { icon: FileText, text: "Facturación automatizada" },
        { icon: Users, text: "Gestión de flota" },
        { icon: Shield, text: "Integración con aseguradoras" }
      ],
      color: "bg-green-500/10 text-green-500",
      iconBg: "bg-green-500"
    }
  ];

  return (
    <section id="servicios" className="py-12 sm:py-20 md:py-32 bg-background" data-testid="section-servicios">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-servicios">
            Servicios
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-servicios-title">
            Una Plataforma,{" "}
            <span className="text-orange">Múltiples Soluciones</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-servicios-subtitle">
            Diseñada para satisfacer las necesidades de clientes, operadores y empresas
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-service-${service.id}`}>
                <CardContent className="p-6 md:p-8">
                  <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Smartphone, title: "Apps Nativas", description: "Disponible en iOS, Android y como PWA" },
    { icon: MapPin, title: "GPS Preciso", description: "Seguimiento en tiempo real de alta precisión" },
    { icon: Shield, title: "Verificación OCR", description: "Validación de cédula dominicana con Verifik" },
    { icon: Wifi, title: "Modo Offline", description: "Funciona sin conexión a internet" },
    { icon: Clock, title: "Notificaciones Push", description: "Alertas en tiempo real del servicio" },
    { icon: CreditCard, title: "Pagos Seguros", description: "Efectivo, tarjeta o aseguradora" }
  ];

  return (
    <section id="caracteristicas" className="py-12 sm:py-20 md:py-32 bg-muted/30" data-testid="section-caracteristicas">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-3 sm:mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-caracteristicas">
              Características
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-caracteristicas-title">
              Tecnología de{" "}
              <span className="text-orange">Última Generación</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8" data-testid="text-caracteristicas-subtitle">
              Construida con las mejores tecnologías para garantizar una experiencia 
              rápida, segura y confiable en cada servicio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  data-testid={`feature-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-primary/20 rounded-[3rem] blur-3xl" />
              <div className="relative w-64 h-[520px] mx-auto bg-gradient-to-b from-card to-card/80 rounded-[2.5rem] border-8 border-foreground/10 shadow-2xl overflow-hidden">
                <div className="h-full p-4 flex flex-col">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <img src={logoImage} alt="Grúa RD" className="w-6 h-6 rounded" />
                    <span className="font-semibold text-sm">Grúa RD</span>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    {[
                      { label: "Solicitar Grúa", icon: Truck, active: true },
                      { label: "Mis Servicios", icon: Clock, active: false },
                      { label: "Pagos", icon: Wallet, active: false },
                      { label: "Soporte", icon: Phone, active: false }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          item.active ? 'bg-orange text-orange-foreground' : 'bg-muted/50'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Solicita el Servicio",
      description: "Selecciona tu ubicación en el mapa y el tipo de servicio que necesitas",
      icon: MapPin
    },
    {
      number: "02",
      title: "Rastreamos en Tiempo Real",
      description: "Visualiza la llegada del operador con GPS en vivo y recibe actualizaciones",
      icon: Navigation
    },
    {
      number: "03",
      title: "Paga y Califica",
      description: "Completa el pago de forma segura y califica el servicio recibido",
      icon: Star
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-20 md:py-32 bg-background" data-testid="section-como-funciona">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-como-funciona">
            Cómo Funciona
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-como-funciona-title">
            Tan Simple Como{" "}
            <span className="text-orange">1, 2, 3</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-como-funciona-subtitle">
            Obtén asistencia vial en minutos con nuestro proceso simplificado
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange/30 to-transparent -translate-y-1/2" />
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <Card className="text-center h-full" data-testid={`step-${index + 1}`}>
                  <CardContent className="p-5 sm:p-8">
                    <div className="relative inline-block mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange flex items-center justify-center mx-auto">
                        <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-foreground" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  const stats = [
    { value: "32", label: "Provincias" },
    { value: "150+", label: "Operadores Activos" },
    { value: "10,000+", label: "Servicios Completados" },
    { value: "4.8/5", label: "Satisfacción" }
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-primary relative overflow-hidden" data-testid="section-cobertura">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-orange rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-orange/20 text-orange border-orange/30" data-testid="badge-cobertura">
            Cobertura Nacional
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" data-testid="text-cobertura-title">
            Presentes en Toda{" "}
            <span className="text-orange">República Dominicana</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto" data-testid="text-cobertura-subtitle">
            Red de operadores en las 32 provincias del país, listos para asistirte
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              data-testid={`coverage-stat-${index}`}
            >
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-orange mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background" data-testid="section-download">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-6 sm:p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-orange/10 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" data-testid="text-download-title">
                Comienza{" "}
                <span className="text-orange">Ahora</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8" data-testid="text-download-subtitle">
                Únete a miles de usuarios que ya disfrutan de asistencia vial 
                confiable en República Dominicana
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-6">
                <a href={`${APP_DOMAIN}/onboarding`}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-orange text-orange-foreground h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold"
                    data-testid="button-register-download"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Crear Cuenta Gratis
                  </Button>
                </a>
                <a href={`${APP_DOMAIN}/login`}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm"
                    data-testid="button-login-download"
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    Ya tengo cuenta
                  </Button>
                </a>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 justify-center md:justify-start">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-3 bg-black rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-transform hover:scale-105"
                  data-testid="link-google-play-download"
                >
                  <SiGoogleplay className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <div className="text-left">
                    <p className="text-xs text-white/70">Disponible en</p>
                    <p className="text-sm sm:text-lg font-semibold text-white">Google Play</p>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-3 bg-black rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-transform hover:scale-105"
                  data-testid="link-app-store-download"
                >
                  <SiAppstore className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <div className="text-left">
                    <p className="text-xs text-white/70">Disponible en</p>
                    <p className="text-sm sm:text-lg font-semibold text-white">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <img src={logoImage} alt="Grúa RD QR" className="w-24 h-24 mx-auto rounded-xl mb-2" />
                    <p className="text-sm text-white/70">Escanea para descargar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-10 sm:py-16" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Grúa RD" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
              <span className="font-bold text-lg sm:text-xl text-white">Grúa RD</span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm mb-4">
              La plataforma líder de servicios de grúa y asistencia vial en República Dominicana.
            </p>
            <div className="flex gap-3">
              <a 
                href="tel:+18095551234" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-orange"
                data-testid="link-social-phone"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a 
                href="mailto:info@gruard.com" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-orange"
                data-testid="link-social-email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Acceso a la App</h4>
            <ul className="space-y-2">
              <li><a href={`${APP_DOMAIN}/login`} className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-login">Iniciar Sesión</a></li>
              <li><a href={`${APP_DOMAIN}/onboarding`} className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-register">Registrarse</a></li>
              <li><a href={`${APP_DOMAIN}/onboarding?type=operator`} className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-operator-register">Registro Operador</a></li>
              <li><a href="#servicios" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-servicios">Servicios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Para Operadores</h4>
            <ul className="space-y-2">
              <li><a href={`${APP_DOMAIN}/onboarding?type=operator`} className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-unirse">Únete como Operador</a></li>
              <li><a href="#como-funciona" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-requisitos">Cómo Funciona</a></li>
              <li><a href="#caracteristicas" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-caracteristicas">Características</a></li>
              <li><a href="mailto:soporte@gruard.com" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-soporte">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-terminos">Términos de Servicio</a></li>
              <li><a href="#" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-privacidad">Política de Privacidad</a></li>
              <li><a href="#" className="text-white/60 text-xs sm:text-sm hover:text-orange transition-colors" data-testid="link-footer-cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs sm:text-sm" data-testid="text-copyright">
            © 2024 Grúa RD. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Badge className="bg-white/10 text-white/70 border-white/20 text-xs">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Verificado
            </Badge>
            <p className="text-white/50 text-xs sm:text-sm">Hecho con dedicación en RD</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CoverageSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
