import { motion } from "framer-motion";
import LandingLayout from "../landing-layout";

export default function TermsAndConditions() {
  return (
    <LandingLayout>
      <div className="pt-24 pb-16 min-h-[calc(100vh-400px)] bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Términos y Condiciones de Uso</h1>
            
            <div className="space-y-6 prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: 26 de diciembre, 2025</p>
              
              <section>
                <h2 className="text-2xl font-bold text-foreground">1. Relación Contractual</h2>
                <p>
                  Los presentes Términos de Uso ("Términos") regulan el acceso o uso que usted haga, como persona física, desde cualquier país del mundo de aplicaciones, páginas web, contenido, productos y servicios ("Servicios") puestos a disposición por Grúa RD, una sociedad constituida en la República Dominicana, con domicilio social en CARRT. JUAN BOSCH C/ PRINCIPAL #106, CANCA LA REYNA, ESPAILLAT.
                </p>
                <p>
                  LEA ESTOS TÉRMINOS ATENTAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS. Su acceso y uso de los Servicios constituye su consentimiento a vincularse por estos Términos, que establecen una relación contractual entre usted y Grúa RD. Si no acepta estos Términos, no podrá acceder o usar los Servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">2. Los Servicios</h2>
                <p>
                  Los Servicios constituyen una plataforma de tecnología que permite a los usuarios de aplicaciones móviles o páginas web de Grúa RD, facilitadas como parte de los Servicios, organizar y planear servicios de logística y auxilio vial con terceros proveedores independientes de dichos servicios, incluidos terceros transportistas independientes y terceros proveedores de logística independientes bajo acuerdo con Grúa RD.
                </p>
                <p className="bg-muted p-4 rounded-lg italic">
                  Usted reconoce que Grúa RD no presta servicios de transporte o de logística ni funciona como una empresa de grúas y que dichos servicios se prestan por terceros proveedores independientes que no están empleados por Grúa RD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">3. Uso de los Servicios</h2>
                <h3 className="text-xl font-semibold text-foreground mt-4">Cuentas de Usuario</h3>
                <p>
                  Con el fin de usar la mayor parte de los aspectos de los Servicios, usted debe registrarse y mantener activa una cuenta personal de usuario de los Servicios ("Cuenta"). Para obtener una Cuenta debe tener como mínimo 18 años de edad. El registro de la cuenta requiere que comunique a Grúa RD determinada información personal, como su nombre, dirección, número de teléfono móvil, así como por lo menos un método de pago válido (una tarjeta de crédito o un socio de pago aceptado).
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-4">Conducta y Obligaciones</h3>
                <p>
                  Usted no podrá autorizar a terceros a utilizar su Cuenta. No podrá ceder ni transferir de otro modo su Cuenta a cualquier otra persona o entidad. Usted acuerda cumplir con todas las leyes aplicables al utilizar los Servicios y solo podrá utilizar los Servicios con fines legítimos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">4. Pagos y Tarifas</h2>
                <p>
                  Usted entiende que el uso de los Servicios puede derivar en cargos por los servicios o bienes que reciba de un Tercer proveedor ("Cargos"). Después de que haya recibido los servicios u obtenido los bienes mediante el uso de los Servicios, Grúa RD facilitará su pago de los Cargos aplicables en nombre del Tercer proveedor como agente de cobro limitado de dicho Tercer proveedor. El pago de los Cargos de dicha manera se considerará como el pago efectuado directamente por usted al Tercer proveedor.
                </p>
                <p>
                  <strong>Moneda:</strong> Todos los Cargos son pagaderos en Pesos Dominicanos (RD$) e incluyen los impuestos establecidos por la ley.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">5. Renuncias; Limitación de Responsabilidad; Indemnidad</h2>
                <p>
                  GRÚA RD NO GARANTIZA LA FIABILIDAD, PUNTUALIDAD, CALIDAD, IDONEIDAD O DISPONIBILIDAD DE LOS SERVICIOS O CUALQUIERA DE LOS BIENES O SERVICIOS SOLICITADOS A TRAVÉS DEL USO DE LOS SERVICIOS, O QUE LOS SERVICIOS NO SERÁN INTERRUMPIDOS O ESTARÁN LIBRES DE ERRORES.
                </p>
                <p>
                  Grúa RD no será responsable de daños indirectos, incidentales, especiales, ejemplares, punitivos o emergentes, incluidos el lucro cesante, la pérdida de datos, lesiones personales o daños a la propiedad, ni de perjuicios relativos, o en relación con, o de otro modo derivados de cualquier uso de los servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">6. Legislación Aplicable; Jurisdicción</h2>
                <p>
                  Estos Términos se regirán e interpretarán exclusivamente de conformidad con las leyes de la República Dominicana. Cualquier disputa, conflicto, reclamación o controversia que surja de estos Términos o en relación con ellos se someterá obligatoriamente a los tribunales competentes de la jurisdicción de Espaillat, República Dominicana.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingLayout>
  );
}
