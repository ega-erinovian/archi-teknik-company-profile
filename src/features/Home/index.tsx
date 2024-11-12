import CompanyOverview from "@/features/home/components/CompanyOverview";
import Header from "@/features/home/components/Header";
import Services from "@/features/home/components/Services";
import React from "react";
import CompanyValue from "./components/CompanyValue";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactLink from "@/components/ContactLink";

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
