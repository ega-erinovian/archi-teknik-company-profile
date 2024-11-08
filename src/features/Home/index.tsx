import CompanyOverview from "@/features/Home/components/CompanyOverview";
import Header from "@/features/Home/components/Header";
import Services from "@/features/Home/components/Services";
import React from "react";
import CompanyValue from "./components/CompanyValue";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <CompanyOverview />
      <CompanyValue />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;
