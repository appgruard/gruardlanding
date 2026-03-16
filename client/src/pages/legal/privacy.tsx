import { motion } from "framer-motion";
import { useEffect } from "react";
import LandingLayout from "../landing-layout";
import { setLegalPageMeta, removePageJsonLd } from "@/lib/seo";

export default function PrivacyPolicy() {
  useEffect(() => {
    setLegalPageMeta({
      title: "Política de Privacidad",
      description: "Conoce cómo Grúa RD recopila, usa y protege tus datos personales conforme a la ley dominicana de protección de datos.",
      path: "/privacidad",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Política de Privacidad y Tratamiento de Datos</h1>
            
            <div className="space-y-6 prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: 26 de diciembre, 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-foreground">1. Introducción</h2>
                <p>
                  En Grúa RD, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, procesamos y compartimos su información, incluidos los datos personales, en relación con su acceso y uso de la plataforma Grúa RD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">2. Información que Recopilamos</h2>
                <h3 className="text-xl font-semibold text-foreground mt-4">Información proporcionada por usted:</h3>
                <ul>
                  <li><strong>Información de la cuenta:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono y fotografía de perfil.</li>
                  <li><strong>Información de pago:</strong> Datos de tarjeta de crédito/débito (procesados de forma segura por terceros certificados PCI-DSS).</li>
                  <li><strong>Comunicaciones:</strong> Cuando se comunica con Grúa RD o con otros usuarios a través de la plataforma.</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-4">Información recopilada automáticamente:</h3>
                <ul>
                  <li><strong>Datos de ubicación:</strong> Recopilamos datos de ubicación precisos o aproximados del dispositivo móvil si usted lo permite. Grúa RD recopila esta información cuando la aplicación se está ejecutando en primer plano (abierta y en pantalla) o en segundo plano (abierta pero no en pantalla).</li>
                  <li><strong>Datos de uso:</strong> Información sobre cómo interactúa con nuestros Servicios.</li>
                  <li><strong>Información del dispositivo:</strong> Dirección IP, modelo del hardware, sistema operativo.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">3. Finalidad del Tratamiento</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                  <li>Proporcionar, personalizar y mejorar nuestros Servicios.</li>
                  <li>Facilitar la conexión entre usuarios y proveedores de auxilio vial.</li>
                  <li>Procesar pagos y transacciones financieras.</li>
                  <li>Mantener la seguridad y la integridad de nuestra plataforma y de nuestros usuarios.</li>
                  <li>Cumplir con obligaciones legales y regulatorias de la República Dominicana.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">4. Derechos del Interesado (Derechos ARCO)</h2>
                <p>
                  De acuerdo con la Ley No. 172-13 sobre Protección de Datos Personales en la República Dominicana, usted tiene derecho a:
                </p>
                <ul>
                  <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre usted.</li>
                  <li><strong>Rectificación:</strong> Corregir cualquier información inexacta o incompleta.</li>
                  <li><strong>Cancelación/Supresión:</strong> Solicitar la eliminación de sus datos personales cuando ya no sean necesarios.</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
                </ul>
                <p>Para ejercer estos derechos, puede contactarnos en <a href="mailto:privacy@gruard.com" className="text-orange underline">privacy@gruard.com</a>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">5. Cookies y Tecnologías Similares</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para autenticar usuarios, recordar preferencias y analizar tendencias de tráfico. Usted puede configurar su navegador para rechazar cookies, pero esto podría limitar la funcionalidad de nuestros Servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">6. Cambios en la Política</h2>
                <p>
                  Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Si realizamos cambios sustanciales, se lo notificaremos a través de la aplicación o por correo electrónico.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingLayout>
  );
}
