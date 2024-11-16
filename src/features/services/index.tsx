import React from "react";
import Header from "../service/components/Header";
import Services from "@/components/Services";
import ContactLink from "@/components/ContactLink";

const ServicesPage = () => {
  return (
    <>
      <Header
        title="What We Offer"
        overview="At Archi, we provide a comprehensive range of expert services tailored to meet the diverse needs of our clients. From innovative project planning to sustainable consulting, our solutions are designed to ensure precision, efficiency, and excellence at every step. Trust our team of seasoned professionals to turn your vision into reality, delivering unmatched quality and value."
      />
      <div className="mb-56"></div>
      <Services id="" />
      <ContactLink />
    </>
  );
};

export default ServicesPage;
