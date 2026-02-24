import FAQSection from "@/components/faq";
import ContactSection from "@/components/footer";
import GrohairTopBar from "@/components/header";
import VelacheryBeautyBanner from "@/components/hero-section";
import GloskinApartSection from "@/components/logoslider";
import AppointmentForm from "@/components/offer-highlight";
import WhoWeAreSection from "@/components/results-section";
import CTABanner from "@/components/review";
import BeautyServicesSection from "@/components/skinpopup";
import ImageGridCarousel from "@/components/video";


export default function HomePage() {
  return (
    <main className="bg-background">
      <GrohairTopBar />
      <VelacheryBeautyBanner />
      <BeautyServicesSection />
      <ImageGridCarousel />
      <WhoWeAreSection />
      <GloskinApartSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />


    </main>
  );
}
