/* ─────────────────────────────────────────────────────────────────
   app/page.tsx — Home page
   All sections composed in order.
───────────────────────────────────────────────────────────────── */

import NavBar from "@/components/ui/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProofSection from "@/components/sections/ProofSection";
import InstallSection from "@/components/sections/InstallSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <HowItWorksSection />
        <ProofSection />
        <InstallSection />
      </main>
      <Footer />
    </>
  );
}
