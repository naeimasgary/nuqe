import { SiteHeader } from "../../components/SiteHeader";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { CtaBanner } from "./sections/CtaBanner";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";

export function LandingPage() {
  return (
    <div style={{ minWidth: "320px" }}>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CtaBanner />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
