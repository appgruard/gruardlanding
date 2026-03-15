import Header from "./landing-header";
import Footer from "./landing-footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
