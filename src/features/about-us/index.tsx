import React from "react";
import Header from "./components/Header";
import CompanyValue from "./components/CompanyValue";
import CompanyOverview from "./components/CompanyOverview";
import Teams from "./components/Teams";
import Culture from "./components/Culture";
import ContactLink from "@/components/ContactLink";

const AboutUs = () => {
  return (
    <>
      <Header />;
      <CompanyValue />
      <CompanyOverview />
      <Teams />
      <Culture />
      <ContactLink />
    </>
  );
};

export default AboutUs;
