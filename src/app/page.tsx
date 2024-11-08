import Image from "next/image";
import Header from "../components/sections/Homepage/Header";
import CompanyOverview from "@/components/sections/Homepage/CompanyOverview";
import Services from "@/components/sections/Homepage/Services";
import Testimonials from "@/components/sections/Homepage/Testimonials";

export default function Home() {
  return (
    <>
      {/* Homepage */}
      <section className="pt-12 lg:pt-32">
        <Header />
        <CompanyOverview />
        <Testimonials />
        <Services />
      </section>
    </>
  );
}
