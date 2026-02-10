import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hook from "@/components/Hook";
import ServicesRail from "@/components/ServicesRail";
import Nexa from "@/components/Nexa";
import Strategy from "@/components/Strategy";
import Lab from "@/components/Lab";
import ContactEngine from "@/components/ContactEngine";
import Footer from "@/components/Footer";
import SectionSpacer from "@/components/system/SectionSpacer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hook />
      <ServicesRail />
      <SectionSpacer />
      <Nexa />
      <Strategy />
      <Lab />
      <ContactEngine />
      <Footer />
    </>
  );
}
