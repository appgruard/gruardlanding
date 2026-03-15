import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LandingLayout from "../landing-layout";

export default function SecurityPolicy() {
  return (
    <LandingLayout>
      <div className="pt-24 pb-16 min-h-[calc(100vh-400px)] bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Políticas y Estándares de Seguridad</h1>
            
            <div className="space-y-8 prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: 26 de diciembre, 2025</p>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <Shield className="w-8 h-8" />
                    <h2 className="text-2xl font-bold m-0">Compromiso de Seguridad</h2>
                  </div>
                  <p className="leading-relaxed">
                    Grúa RD implementa medidas de seguridad de grado bancario para proteger la integridad, confidencialidad y disponibilidad de la información de nuestros usuarios y transacciones.
                  </p>
                </CardContent>
              </Card>

              <section>
                <div className="flex items-center gap-3 mb-4 text-foreground">
                  <Lock className="w-6 h-6 text-orange" />
                  <h3 className="text-xl font-bold m-0">1. Cifrado en Tránsito y Reposo</h3>
                </div>
                <p>
                  Toda la comunicación entre los clientes (App móvil, Navegador web) y los servidores de Grúa RD está protegida mediante protocolos <strong>TLS 1.2 o superior</strong> con algoritmos de cifrado de 256 bits. Esto asegura que los datos no puedan ser interceptados ni leídos por terceros durante su transmisión. Los datos sensibles almacenados en nuestras bases de datos están cifrados mediante <strong>AES-256</strong>.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4 text-foreground">
                  <FileCheck className="w-6 h-6 text-orange" />
                  <h3 className="text-xl font-bold m-0">2. Cumplimiento Estándar PCI-DSS</h3>
                </div>
                <p>
                  Como parte de nuestro cumplimiento con los estándares internacionales de seguridad de datos para la industria de tarjetas de pago (PCI-DSS):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No Almacenamiento:</strong> Grúa RD nunca almacena el código de seguridad (CVV/CVC) ni la banda magnética de sus tarjetas.</li>
                  <li><strong>Tokenización:</strong> Los datos de la tarjeta son reemplazados por un "token" único mediante nuestros procesadores de pago certificados, eliminando el riesgo de exposición de los datos reales de la tarjeta en nuestros sistemas.</li>
                  <li><strong>Procesadores Certificados:</strong> Trabajamos exclusivamente con pasarelas de pago que poseen certificación PCI-DSS Nivel 1.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4 text-foreground">
                  <EyeOff className="w-6 h-6 text-orange" />
                  <h3 className="text-xl font-bold m-0">3. Protocolos de Autenticación Avanzada</h3>
                </div>
                <p>
                  Para prevenir el fraude en transacciones no presenciales, implementamos protocolos de <strong>3D Secure (3DS)</strong>, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Verified by Visa:</strong> Autenticación directa con el banco emisor.</li>
                  <li><strong>MasterCard ID Check:</strong> Validación de identidad para transacciones seguras.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4 text-foreground">
                  <Server className="w-6 h-6 text-orange" />
                  <h3 className="text-xl font-bold m-0">4. Monitoreo y Auditoría</h3>
                </div>
                <p>
                  Nuestros sistemas son monitoreados 24/7 para detectar intentos de intrusión o comportamientos anómalos. Realizamos escaneos de vulnerabilidades periódicos y pruebas de penetración para asegurar que nuestras defensas evolucionen al mismo ritmo que las amenazas digitales.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingLayout>
  );
}
