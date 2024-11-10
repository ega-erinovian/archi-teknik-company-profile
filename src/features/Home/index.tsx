import CompanyOverview from "@/features/Home/components/CompanyOverview";
import Header from "@/features/Home/components/Header";
import Services from "@/features/Home/components/Services";
import React from "react";
import CompanyValue from "./components/CompanyValue";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactLink from "./components/ContactLink";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      <Header />
      <CompanyOverview />
      <CompanyValue />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactLink />
    </>
  );
};

export default HomePage;
