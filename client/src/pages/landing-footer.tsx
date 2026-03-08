import { 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/20251126_144937_0000_1765970748932.png";

const APP_DOMAIN = "https://app.gruard.com";

export default function Footer() {
  return (
    <footer className="bg-primary pt-10 sm:pt-16 pb-8 border-t border-white/10" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Grúa RD" className="h-10 w-10 rounded-lg" />
              <span className="font-bold text-xl text-white">Grúa RD</span>
            </div>
            <p className="text-white/60 text-sm">
              Asistencia vial 24/7 en toda la República Dominicana. Transparencia, seguridad y rapidez en cada servicio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Información Corporativa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/60 text-xs sm:text-sm">
                  CARRT. JUAN BOSCH C/ PRINCIPAL #106, CANCA LA REYNA, ESPAILLAT, RD.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/60 text-xs sm:text-sm">829-351-9324</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/60 text-xs sm:text-sm">info@gruard.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="/terminos" className="text-sm text-white/60 hover:text-orange transition-colors">Términos y Condiciones</a></li>
              <li><a href="/privacidad" className="text-sm text-white/60 hover:text-orange transition-colors">Políticas de Privacidad</a></li>
              <li><a href="/seguridad" className="text-sm text-white/60 hover:text-orange transition-colors">Políticas de Seguridad</a></li>
              <li><a href="/reembolsos" className="text-sm text-white/60 hover:text-orange transition-colors">Reembolsos y Cancelaciones</a></li>
              <li><a href="/entrega" className="text-sm text-white/60 hover:text-orange transition-colors">Políticas de Entrega</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Pagos Seguros</h4>
            <p className="text-sm text-white/60 mb-4">
              Todas las transacciones se procesan en <strong>RD$ (Pesos Dominicanos)</strong>.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 brightness-0 invert opacity-60" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 brightness-0 invert opacity-60" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center">
                <div className="text-[8px] font-bold text-white/40 leading-tight text-center">VERIFIED BY VISA</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center">
                <div className="text-[8px] font-bold text-white/40 leading-tight text-center">MASTERCARD ID CHECK</div>
              </div>
            </div>
            <div className="mt-4">
              <Badge className="bg-white/10 text-white/70 border-white/20 text-[10px] w-full justify-center">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                PCI-DSS Compliant
              </Badge>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Grúa RD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
