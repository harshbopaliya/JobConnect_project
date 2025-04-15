
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedJobs from "@/components/FeaturedJobs";
import CompanyHighlights from "@/components/CompanyHighlights";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <CompanyHighlights />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
