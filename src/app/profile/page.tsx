import Bloggers from "@/app/components/Bloggers";
import FeauturedBlogs from "@/app/components/FeauturedBlogs";
import Footer from "@/app/components/Footer";
import TestimonialCards from "@/app/components/TestimonialCards";
import UpcommingBlogs from "@/app/components/UpcommingBlogs";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import HeroSection from "@/app/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-h-screen antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeauturedBlogs />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcommingBlogs />
      <Bloggers />
      <Footer />
    </main>
  );
}
