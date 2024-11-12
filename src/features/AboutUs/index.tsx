import React from "react";
import Header from "./components/Header";
import CompanyValue from "./components/CompanyValue";
import CompanyOverview from "./components/CompanyOverview";
import Teams from "./components/Teams";

const AboutUs = () => {
  return (
    <>
      <Header />;
      <CompanyValue />
      <CompanyOverview />
      <Teams />
    </>
  );
};

export default AboutUs;
