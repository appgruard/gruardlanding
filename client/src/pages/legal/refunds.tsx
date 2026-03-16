import { motion } from "framer-motion";
import { useEffect } from "react";
import { CreditCard, AlertCircle, Clock, CheckCircle2, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LandingLayout from "../landing-layout";
import { setLegalPageMeta, removePageJsonLd } from "@/lib/seo";

export default function RefundPolicy() {
  useEffect(() => {
    setLegalPageMeta({
      title: "Política de Reembolsos",
      description: "Información sobre la política de reembolsos y cancelaciones de Grúa RD: plazos, condiciones y proceso de devolución.",
      path: "/reembolsos",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Política de Reembolsos y Cancelaciones</h1>
            
            <div className="space-y-6 prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: 26 de diciembre, 2025</p>

              <Card className="border-orange/20 bg-orange/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-orange">
                    <AlertCircle className="w-6 h-6" />
                    <h2 className="text-xl font-bold m-0">Aviso Importante</h2>
                  </div>
                  <p className="leading-relaxed">
                    Grúa RD es una plataforma de intermediación tecnológica. Debido a la naturaleza inmediata de los servicios de auxilio vial, las políticas de reembolso son estrictas para garantizar la sostenibilidad operativa de nuestros proveedores independientes.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-6 h-6 text-orange" />
                  1. Política de Cancelación
                </h2>
                <p>
                  <strong>Antes de la Asignación:</strong> Usted puede cancelar su solicitud de servicio sin cargo alguno siempre que el sistema aún no haya asignado un Operador de Grúa a su solicitud.
                </p>
                <p>
                  <strong>Después de la Asignación:</strong> Una vez que un Operador ha aceptado y se le ha asignado el servicio, se aplicará un <strong>Cargo por Cancelación</strong> equivalente al 30% del monto total cotizado, para compensar el desplazamiento y tiempo del operador.
                </p>
                <p>
                  <strong>Servicio en Sitio:</strong> Si el Operador llega a la ubicación solicitada y el usuario decide cancelar o no se encuentra presente, el Cargo por Cancelación será del 100%.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-orange" />
                  2. Elegibilidad para Reembolsos
                </h2>
                <p>Solo se procesarán solicitudes de reembolso total en los siguientes casos demostrables:</p>
                <ul>
                  <li><strong>Errores de Plataforma:</strong> Cargos duplicados por una misma transacción debido a fallos técnicos del sistema.</li>
                  <li><strong>No Prestación del Servicio:</strong> Cuando el Operador asignado nunca llegue a la ubicación y no se haya provisto una alternativa en un tiempo razonable.</li>
                  <li><strong>Fallo del Operador:</strong> Cuando el servicio no pueda completarse por fallas mecánicas de la grúa asignada durante el proceso.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-orange" />
                  3. Proceso de Reclamación
                </h2>
                <p>Para solicitar un reembolso, el usuario debe:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Enviar un correo a <a href="mailto:payments@gruard.com" className="text-orange underline">payments@gruard.com</a> dentro de las 48 horas posteriores al incidente.</li>
                  <li>Incluir el número de referencia del servicio (GRD-XXXXXX).</li>
                  <li>Adjuntar evidencia si aplica (capturas de pantalla, fotos).</li>
                </ol>
                <p>Nuestro equipo revisará la solicitud y emitirá una resolución en un plazo de <strong>5 a 7 días laborables</strong>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-orange" />
                  4. Tiempo de Acreditación
                </h2>
                <p>
                  Una vez aprobado el reembolso, el tiempo para que el dinero aparezca en su estado de cuenta dependerá exclusivamente de las políticas de su banco emisor, pudiendo variar entre <strong>10 y 30 días laborables</strong> para transacciones con tarjeta.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingLayout>
  );
}
