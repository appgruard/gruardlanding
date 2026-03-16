import { motion } from "framer-motion";
import { useEffect } from "react";
import { Truck, Globe, CheckCircle, AlertTriangle, MapPin } from "lucide-react";
import LandingLayout from "../landing-layout";
import { setLegalPageMeta, removePageJsonLd } from "@/lib/seo";

export default function DeliveryPolicy() {
  useEffect(() => {
    setLegalPageMeta({
      title: "Política de Entrega del Servicio",
      description: "Política de entrega del servicio de Grúa RD: zonas de cobertura en República Dominicana, tiempos de respuesta y condiciones de operación.",
      path: "/entrega",
    });
    window.scrollTo(0, 0);
    return () => removePageJsonLd();
  }, []);

  return (
    <LandingLayout>
      <div className="pt-24 pb-16 min-h-[calc(100vh-400px)] bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Política de Entrega del Servicio</h1>
            
            <div className="space-y-6 prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: 26 de diciembre, 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Globe className="w-6 h-6 text-orange" />
                  1. Naturaleza Digital de la Entrega
                </h2>
                <p>
                  Grúa RD proporciona una solución de software como servicio (SaaS). La "entrega" en nuestro contexto se define como la provisión exitosa de la intermediación tecnológica a través de nuestra plataforma móvil o web.
                </p>
                <p>
                  El cumplimiento de la entrega se registra en el momento en que el sistema confirma la asignación de un proveedor de servicios y pone a disposición del usuario los datos de rastreo y contacto del mismo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange" />
                  2. Ámbito Geográfico de Cobertura
                </h2>
                <p>
                  Nuestros servicios de intermediación están disponibles para todo el territorio de la <strong>República Dominicana</strong>. No obstante, la disponibilidad de operadores físicos puede variar según la densidad poblacional y la hora del día en provincias específicas. El usuario será notificado antes de realizar el pago si no existen operadores disponibles en su zona.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Truck className="w-6 h-6 text-orange" />
                  3. Tiempos Estimados (ETA)
                </h2>
                <p>
                  La plataforma proporciona un Tiempo Estimado de Llegada (ETA) basado en algoritmos de tráfico y distancia. Usted acepta que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los ETAs son solo estimaciones informativas.</li>
                  <li>Factores externos como accidentes viales, condiciones climáticas extremas o cierres de vías pueden alterar significativamente estos tiempos.</li>
                  <li>Grúa RD no es responsable por retrasos causados por el tráfico o por la conducta del operador independiente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange" />
                  4. Fallas en la Entrega
                </h2>
                <p>
                  Si un servicio asignado no puede completarse debido a que el usuario proporcionó una ubicación incorrecta o no es localizable en el punto de encuentro, la entrega se considerará "fallida por causa del usuario" y no será elegible para reembolso conforme a nuestra Política de Reembolsos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-orange" />
                  5. Registro de Servicio Completado
                </h2>
                <p>
                  El servicio se considera finalizado cuando el Operador marca la tarea como "Completada" en su aplicación y el vehículo ha sido entregado en el destino solicitado por el usuario. El sistema generará automáticamente un recibo digital en formato PDF que será enviado al correo electrónico registrado.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingLayout>
  );
}
