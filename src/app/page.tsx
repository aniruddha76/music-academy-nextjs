import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import FeaturedCources from "@/components/FeaturedCources";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCources />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
