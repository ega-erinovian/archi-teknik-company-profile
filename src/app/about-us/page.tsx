import AboutUs from "@/features/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archi Teknik | About Us",
  description:
    "Discover exceptional architectural and engineering consulting services, offering innovative designs, precise planning, and sustainable solutions for projects worldwide. Partner with experts to bring your vision to life.",
};

const AboutPage = () => {
  return <AboutUs />;
};

export default AboutPage;
