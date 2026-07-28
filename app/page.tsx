import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/service";
import TrustedBy from "@/components/TrustedBy";
import Solutions from "@/components/sections/solutions";
import FeaturedProduct from "@/components/FeaturedProduct";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/sections/whyChooseUs";
import Process from "@/components/Process";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (<>
  <Navbar/>
  <Hero/>
  <Service/>
  <TrustedBy/>
  <Solutions/>
  <FeaturedProduct/>
  <Industries/>
  <WhyChooseUs/>
  <Process/>
  <Investors/>
  <Contact/>
  <Footer/>
  </>
  );
}