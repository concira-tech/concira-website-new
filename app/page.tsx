import Applications from "./_components/Applications";
import Contactus from "./_components/Contactus";
import Features from "./_components/Features";
import FloatingCards from "./_components/FloatingCards";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import SectionOne from "./_components/SectionOne";
import SectionThree from "./_components/SectionThree";
import SectionTwo from "./_components/SectionTwo";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Features />
      <Applications />
      <FloatingCards />
      <Testimonials />
      <Contactus />
      <Footer />
    </>
  );
}
