import CompanyOverview from "@/features/home/components/CompanyOverview";
import Header from "@/features/home/components/Header";
import React from "react";
import CompanyValue from "./components/CompanyValue";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactLink from "@/components/ContactLink";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <>
      <Header />
      <CompanyOverview />
      <CompanyValue />
      <Services id="" />
      <Testimonials />
      <FAQ />
      <ContactLink />
    </>
  );
};

export default HomePage;
