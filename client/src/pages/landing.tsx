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
  ChevronRight,
  Phone,
  Star,
  LogIn,
  UserPlus,
  Menu,
  X,
  Sparkles,
  Bell,
  Wrench,
  Key
} from "lucide-react";
import { useState } from "react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/20251126_144937_0000_1765970748932.png";
import { DominicanMap } from "@/components/dominican-map";

import LandingLayout from "./landing-layout";

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
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.fouronesolutions.gruard";
const APP_STORE_URL = "https://apps.apple.com/do/app/gr%C3%BAa-rd/id6759132391";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]" data-testid="text-hero-title">
              Asistencia Vial{" "}
              <span className="text-orange">Cuando Más</span>{" "}
              La Necesitas
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0" data-testid="text-hero-subtitle">
              La plataforma emergente de servicios de grúa en República Dominicana. 
              Conectamos clientes con operadores certificados de forma rápida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href={`${APP_DOMAIN}/onboarding`} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-orange text-orange-foreground h-14 px-8 text-lg font-semibold"
                  data-testid="button-register-hero"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Registrarse Gratis
                </Button>
              </a>
              <a href={`${APP_DOMAIN}/login`} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm"
                  data-testid="button-login-hero"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a 
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn-dark"
                data-testid="link-google-play"
              >
                <SiGoogleplay className="w-6 h-6 text-white flex-shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
              <a 
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn-dark"
                data-testid="link-app-store"
              >
                <SiAppstore className="w-6 h-6 text-white flex-shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] text-white/70">Disponible en</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="w-full h-[350px] sm:h-[500px] bg-card rounded-3xl shadow-2xl overflow-hidden relative border-4 border-foreground/10">
                <DominicanMap />
              </div>
            </div>
          </motion.div>
        </div>

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
        { icon: CreditCard, text: "Pagos en RD$ (Visa/MasterCard)" },
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
        { icon: Navigation, text: "Navegación asistida" },
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
    { icon: Shield, title: "Verificación", description: "Validación de identidad para mayor seguridad" },
    { icon: Wifi, title: "Conectividad", description: "Optimizado para bajo consumo de datos" },
    { icon: Clock, title: "Notificaciones", description: "Alertas en tiempo real del servicio" },
    { icon: CreditCard, title: "Pagos Seguros", description: "RD$ - Tarjeta, Efectivo o Aseguradora" }
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
      title: "Confirmación en Tiempo Real",
      description: "Visualiza la asignación del operador y recibe actualizaciones de su llegada",
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

function BenefitsSection() {
  const benefits = [
    {
      title: "Respuesta Inmediata",
      description: "Localizamos al operador más cercano a tu ubicación para minimizar el tiempo de espera.",
      icon: Clock
    },
    {
      title: "Precios Transparentes",
      description: "Conoce el costo estimado antes de solicitar el servicio, sin cargos ocultos.",
      icon: Wallet
    },
    {
      title: "Seguridad Garantizada",
      description: "Todos nuestros operadores pasan por un proceso de verificación y seguimiento continuo.",
      icon: Shield
    },
    {
      title: "Pagos Flexibles",
      description: "Paga de forma segura con tarjeta de crédito (RD$), efectivo o a través de tu aseguradora.",
      icon: CreditCard
    }
  ];

  return (
    <section id="beneficios" className="py-12 sm:py-20 md:py-32 bg-muted/30" data-testid="section-beneficios">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
          <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
            Beneficios
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            ¿Por Qué Elegir <span className="text-orange">Grúa RD</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos enfocamos en brindar una experiencia de asistencia vial moderna, segura y eficiente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background overflow-hidden" data-testid="section-cobertura">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-4 bg-orange/10 text-orange border-orange/20">
              Cobertura
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Servicio en Toda la{" "}
              <span className="text-orange">República Dominicana</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Nuestra red de operadores independientes se extiende por las principales 
              provincias del país, asegurando que siempre haya una grúa cerca de ti.
            </p>
            <div className="space-y-4">
              {[
                "Santo Domingo & Distrito Nacional",
                "Santiago & Zona Norte",
                "Punta Cana & Zona Este",
                "Barahona & Zona Sur",
                "Moca, Licey & Toda La Provincia Espaillat"
              ].map((city, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="font-medium text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[500px] bg-muted rounded-3xl flex items-center justify-center overflow-hidden border-4 border-foreground/10"
          >
            <DominicanMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AppInfoSection() {
  const whatsNew = [
    {
      icon: Wrench,
      title: "Nuevos tipos de servicio",
      description: "Izaje y Construcción con subtipos como materiales, muebles, equipos y maquinaria. Formulario específico para Remoción de Escombros."
    },
    {
      icon: Truck,
      title: "Extracción con traslado",
      description: "Toggle de transporte en Extracción de Vehículo: indica si necesitas traslado además de la extracción."
    },
    {
      icon: Key,
      title: "Cerrajería y batería",
      description: "Nuevas opciones de Auxilio Vial: cerrajería automotriz y envío/instalación de batería con precios variables según el servicio."
    },
    {
      icon: MapPin,
      title: "Mapa mejorado",
      description: "Marcadores con vista aérea que se orientan automáticamente según la dirección del conductor. Tamaño adaptativo según nivel de zoom."
    },
    {
      icon: Navigation,
      title: "Posición más precisa",
      description: "La ubicación del conductor se ajusta automáticamente a la calle más cercana, eliminando saltos a edificios o aceras."
    },
    {
      icon: Bell,
      title: "Notificaciones mejoradas",
      description: "Al tocar una notificación de mensaje nuevo, la app abre directamente la conversación correcta. Acceso rápido a servicios activos."
    }
  ];

  return (
    <section id="novedades" className="py-12 sm:py-20 md:py-32 bg-muted/30" data-testid="section-novedades">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div {...fadeInUp}>
            <Badge className="mb-4 bg-orange/10 text-orange border-orange/20" data-testid="badge-sobre-la-app">
              Sobre la App
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-novedades-title">
              Asistencia Vial{" "}
              <span className="text-orange">Rápida y Segura</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              Grúa RD es una plataforma digital de asistencia vial diseñada para ofrecer una solución rápida, segura y eficiente ante emergencias en carretera en la República Dominicana.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Solicita servicios de grúa en minutos mediante geolocalización precisa. El sistema asigna automáticamente el proveedor disponible más cercano, optimizando el tiempo de respuesta y reduciendo la espera.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Solicitud de grúa en pocos pasos",
                "Geolocalización automática del usuario",
                "Asignación inteligente del proveedor más cercano",
                "Seguimiento del servicio en tiempo real",
                "Confirmaciones claras del estado del servicio",
                "Interfaz simple y fácil de usar"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-orange" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn-light"
                data-testid="link-google-play-info"
              >
                <SiGoogleplay className="w-6 h-6 flex-shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-60">Disponible en</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn-light"
                data-testid="link-app-store-info"
              >
                <SiAppstore className="w-6 h-6 flex-shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-60">Disponible en</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground" data-testid="text-whats-new-title">Novedades de la Última Versión</h3>
                <p className="text-sm text-muted-foreground">Últimas mejoras y funciones añadidas</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatsNew.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="h-full hover-elevate" data-testid={`card-whats-new-${index}`}>
                    <CardContent className="p-4">
                      <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center mb-3">
                        <item.icon className="w-4 h-4 text-orange" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-primary relative overflow-hidden" data-testid="section-download">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Descarga la App y <span className="text-orange">Viaja Seguro</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Únete a los conductores que ya confían en Grúa RD para su tranquilidad en las carreteras.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn-dark"
              data-testid="link-google-play-footer"
            >
              <SiGoogleplay className="w-6 h-6 text-white flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-white/70">Disponible en</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
            <a 
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn-dark"
              data-testid="link-app-store-footer"
            >
              <SiAppstore className="w-6 h-6 text-white flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-white/70">Disponible en</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <LandingLayout>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CoverageSection />
      <AppInfoSection />
      <DownloadSection />
    </LandingLayout>
  );
}
