import ServicesPage from "@/features/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archi Teknik | Services",
  description:
    "Discover exceptional architectural and engineering consulting services, offering innovative designs, precise planning, and sustainable solutions for projects worldwide. Partner with experts to bring your vision to life.",
};

const ServiceDetail = () => {
  return <ServicesPage />;
};

export default ServiceDetail;
