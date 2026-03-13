import Header from "./landing-header";
import Footer from "./landing-footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
