import { 
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/20251126_144937_0000_1765970748932.png";

const APP_DOMAIN = "https://app.gruard.com";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileMenuOpen(false);
      menuButton.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/70 shadow-[0_4px_24px_-16px_rgba(15,41,71,0.3)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Grúa RD" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" data-testid="img-logo" />
          <span className="font-bold text-lg sm:text-xl text-foreground">Grúa RD</span>
        </a>
        
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6">
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
          <a href={`${APP_DOMAIN}/app`} data-testid="link-register">
            <Button size="sm" className="rounded-xl bg-orange text-orange-foreground">
              <UserPlus className="w-4 h-4 mr-2" />
              Registrarse
            </Button>
          </a>
        </div>

        <Button 
          ref={menuButton}
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden max-h-[calc(100svh-4rem)] overflow-y-auto bg-background border-b border-border px-4 py-4 space-y-3 shadow-lg">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-2">
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
            <a href={`${APP_DOMAIN}/app`} className="w-full" data-testid="link-register-mobile">
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
