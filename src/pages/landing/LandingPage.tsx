import { useNavigate } from "react-router-dom";
import { BannerHeader } from "../../components/BannerHeader";
import { SiteHeader } from "../../components/SiteHeader";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { CtaBanner } from "./sections/CtaBanner";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-w-[320px]">
      <BannerHeader
        badge="New"
        message="Frontend Pages Added"
        dismissible
      />
      <SiteHeader
        onPrimaryCtaClick={() => navigate("/register")}
        onSecondaryCtaClick={() => navigate("/sign-in")}
      />
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
