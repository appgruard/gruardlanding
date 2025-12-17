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
  Download
} from "lucide-react";
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

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Grúa RD" className="h-10 w-10 rounded-lg" data-testid="img-logo" />
          <span className="font-bold text-xl text-foreground">Grúa RD</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-servicios">Servicios</a>
          <a href="#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-caracteristicas">Características</a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-como-funciona">Cómo Funciona</a>
          <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonios">Testimonios</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex" data-testid="button-demo">
            <Play className="w-4 h-4 mr-2" />
            Ver Demo
          </Button>
          <Button size="sm" className="bg-orange text-orange-foreground" data-testid="button-download-header">
            <Download className="w-4 h-4 mr-2" />
            Descargar
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="bg-orange/20 text-orange border-orange/30 mb-6" data-testid="badge-pwa">
              Disponible en iOS, Android y Web
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
              Asistencia Vial{" "}
              <span className="text-orange">Cuando Más</span>{" "}
              La Necesitas
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0" data-testid="text-hero-subtitle">
              La plataforma líder de servicios de grúa en República Dominicana. 
              Conectamos clientes con operadores en tiempo real, 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground h-14 px-8 text-lg font-semibold"
                data-testid="button-download-hero"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar App
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm"
                data-testid="button-demo-hero"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 transition-transform hover:scale-105"
                data-testid="link-google-play"
              >
                <SiGoogleplay className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 transition-transform hover:scale-105"
                data-testid="link-app-store"
              >
                <SiAppstore className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-[580px] bg-gradient-to-b from-card to-card/80 rounded-[3rem] border-8 border-foreground/20 shadow-2xl overflow-hidden">
                <div className="h-full bg-gradient-to-b from-primary/5 to-orange/5 p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={logoImage} alt="Grúa RD" className="w-8 h-8 rounded-lg" />
                      <span className="font-semibold text-sm">Grúa RD</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">En línea</Badge>
                  </div>
                  <div className="flex-1 bg-muted/50 rounded-2xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-orange mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Mapa GPS</p>
                    </div>
                  </div>
                  <Card className="bg-card/80 backdrop-blur">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center">
                          <Truck className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Grúa en camino</p>
                          <p className="text-xs text-muted-foreground">ETA: 8 minutos</p>
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-orange rounded-full" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-10 h-10 text-orange-foreground" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "24/7", label: "Disponibilidad" },
            { value: "150+", label: "Operadores" },
            { value: "10K+", label: "Servicios" },
            { value: "4.8", label: "Calificación" }
          ].map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase()}`}>
              <p className="text-3xl md:text-4xl font-bold text-orange">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
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
    <section id="servicios" className="py-20 md:py-32 bg-background" data-testid="section-servicios">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-servicios">
            Servicios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-servicios-title">
            Una Plataforma,{" "}
            <span className="text-orange">Múltiples Soluciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-servicios-subtitle">
            Diseñada para satisfacer las necesidades de clientes, operadores y empresas
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
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
    <section id="caracteristicas" className="py-20 md:py-32 bg-muted/30" data-testid="section-caracteristicas">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-caracteristicas">
              Características
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-caracteristicas-title">
              Tecnología de{" "}
              <span className="text-orange">Última Generación</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-caracteristicas-subtitle">
              Construida con las mejores tecnologías para garantizar una experiencia 
              rápida, segura y confiable en cada servicio.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
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
    <section id="como-funciona" className="py-20 md:py-32 bg-background" data-testid="section-como-funciona">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-como-funciona">
            Cómo Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-como-funciona-title">
            Tan Simple Como{" "}
            <span className="text-orange">1, 2, 3</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-como-funciona-subtitle">
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
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <Card className="text-center h-full" data-testid={`step-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-orange flex items-center justify-center mx-auto">
                        <step.icon className="w-10 h-10 text-orange-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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

function TestimonialsSection() {
  const testimonials = [
    {
      name: "María García",
      role: "Cliente Frecuente",
      rating: 5,
      quote: "Excelente servicio. La grúa llegó en menos de 15 minutos y el operador fue muy profesional. La app es muy fácil de usar.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      role: "Operador de Grúa",
      rating: 5,
      quote: "Desde que me uní a Grúa RD mis ingresos han aumentado significativamente. El sistema de wallet es muy conveniente.",
      avatar: "CR"
    },
    {
      name: "Seguros del Caribe",
      role: "Empresa Asociada",
      rating: 5,
      quote: "La integración con nuestro sistema ha sido perfecta. Nuestros clientes están muy satisfechos con el servicio.",
      avatar: "SC"
    }
  ];

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-muted/30" data-testid="section-testimonios">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-testimonios">
            Testimonios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonios-title">
            Lo Que Dicen{" "}
            <span className="text-orange">Nuestros Usuarios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonios-subtitle">
            Miles de clientes, operadores y empresas confían en Grúa RD
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                      <span className="font-bold text-orange">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
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
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden" data-testid="section-cobertura">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-orange/20 text-orange border-orange/30" data-testid="badge-cobertura">
            Cobertura Nacional
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cobertura-title">
            Presentes en Toda{" "}
            <span className="text-orange">República Dominicana</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto" data-testid="text-cobertura-subtitle">
            Red de operadores en las 32 provincias del país, listos para asistirte
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              data-testid={`coverage-stat-${index}`}
            >
              <p className="text-3xl md:text-4xl font-bold text-orange mb-2">{stat.value}</p>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="py-20 md:py-32 bg-background" data-testid="section-download">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/10 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-download-title">
                Descarga la App{" "}
                <span className="text-orange">Ahora</span>
              </h2>
              <p className="text-lg text-white/80 mb-8" data-testid="text-download-subtitle">
                Únete a miles de usuarios que ya disfrutan de asistencia vial 
                confiable en República Dominicana
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-3 bg-black rounded-xl px-6 py-4 transition-transform hover:scale-105"
                  data-testid="link-google-play-download"
                >
                  <SiGoogleplay className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <p className="text-xs text-white/70">Disponible en</p>
                    <p className="text-lg font-semibold text-white">Google Play</p>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-3 bg-black rounded-xl px-6 py-4 transition-transform hover:scale-105"
                  data-testid="link-app-store-download"
                >
                  <SiAppstore className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <p className="text-xs text-white/70">Disponible en</p>
                    <p className="text-lg font-semibold text-white">App Store</p>
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
    <footer className="bg-primary py-16" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Grúa RD" className="h-10 w-10 rounded-lg" />
              <span className="font-bold text-xl text-white">Grúa RD</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              La plataforma líder de servicios de grúa y asistencia vial en República Dominicana.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-orange"
                data-testid="link-social-phone"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-orange"
                data-testid="link-social-email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Para Clientes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-solicitar">Solicitar Servicio</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-tarifas">Tarifas</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-cobertura">Cobertura</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Para Operadores</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-unirse">Únete como Operador</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-requisitos">Requisitos</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-ganancias">Ganancias</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-soporte">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-terminos">Términos de Servicio</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-privacidad">Política de Privacidad</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-orange transition-colors" data-testid="link-footer-cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm" data-testid="text-copyright">
            © 2024 Grúa RD. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Badge className="bg-white/10 text-white/70 border-white/20">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Verificado
            </Badge>
            <p className="text-white/50 text-sm">Hecho con dedicación en RD</p>
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
        <TestimonialsSection />
        <CoverageSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
