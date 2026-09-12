import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import ExperienceSection from "@/sections/ExperienceSection"
import Testimonials from "@/sections/Testimonials";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";
import { Toaster } from 'react-hot-toast'
import AnimatedLayout from "@/components/layouts/AnimatedLayout";

export default function Home() {
  return (
    <AnimatedLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Toaster />
    </AnimatedLayout>
  );
}
