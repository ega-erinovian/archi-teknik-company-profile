import { FaDraftingCompass } from "react-icons/fa";
import { FaBuilding, FaRecycle } from "react-icons/fa6";
import { GiMagnifyingGlass } from "react-icons/gi";
import { PiBlueprintFill } from "react-icons/pi";
import { RiScanFill } from "react-icons/ri";

const services = [
  {
    icon: <PiBlueprintFill className="text-5xl xl:text-7xl mb-7" />,
    title: "Project Planning",
    description:
      "We provide detailed planning and strategic guidance to ensure project success from start to finish, tailored to your unique needs.",
  },
  {
    icon: <FaDraftingCompass className="text-5xl xl:text-7xl mb-7" />,
    title: "Design Development",
    description:
      "Our team creates innovative, efficient designs that prioritize functionality, sustainability, and regulatory compliance.",
  },
  {
    icon: <RiScanFill className="text-5xl xl:text-7xl mb-7" />,
    title: "Site Analysis",
    description:
      "We conduct thorough site evaluations to assess feasibility, risks, and opportunities for informed decision-making.",
  },
  {
    icon: <FaBuilding className="text-5xl xl:text-7xl mb-7" />,
    title: "Structural Engineering",
    description:
      "Our experts deliver resilient structural solutions designed to withstand environmental challenges and enhance durability.",
  },
  {
    icon: <GiMagnifyingGlass className="text-5xl xl:text-7xl mb-7" />,
    title: "Quality Assurance",
    description:
      "We ensure every project meets the highest standards through rigorous quality checks and consistent oversight.",
  },
  {
    icon: <FaRecycle className="text-5xl xl:text-7xl mb-7" />,
    title: "Sustainability Consulting",
    description:
      "Our sustainability team guides projects toward eco-friendly practices that reduce environmental impact and maximize efficiency.",
  },
];

export default services;
