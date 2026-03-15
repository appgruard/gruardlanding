import { motion } from "framer-motion";
import { 
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/20251126_144937_0000_1765970748932.png";

const APP_DOMAIN = "https://app.gruard.com";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Grúa RD" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" data-testid="img-logo" />
          <span className="font-bold text-lg sm:text-xl text-foreground">Grúa RD</span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-6">
          <a href="/#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-servicios">Servicios</a>
          <a href="/#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-caracteristicas">Características</a>
          <a href="/#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-como-funciona">Cómo Funciona</a>
          <a href="/#novedades" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-novedades">Novedades</a>
          <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog">Blog</a>
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
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2">
            <a href="/#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="/#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Características</a>
            <a href="/#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Cómo Funciona</a>
            <a href="/#novedades" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Novedades</a>
            <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
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
