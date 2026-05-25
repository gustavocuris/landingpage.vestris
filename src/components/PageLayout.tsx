import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  noFooter?: boolean;
}

export function PageLayout({ children, noFooter = false }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden="true" className="global-grid-overlay" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      {!noFooter && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}
    </div>
  );
}
