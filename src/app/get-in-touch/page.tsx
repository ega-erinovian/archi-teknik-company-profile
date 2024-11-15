import Contact from "@/features/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archi Teknik | Get In Touch",
  description:
    "Discover exceptional architectural and engineering consulting services, offering innovative designs, precise planning, and sustainable solutions for projects worldwide. Partner with experts to bring your vision to life.",
};

const GetInTouch = () => {
  return <Contact />;
};

export default GetInTouch;
