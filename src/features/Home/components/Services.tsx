import Link from "next/link";
import { FaDraftingCompass } from "react-icons/fa";
import { FaBuilding, FaRecycle } from "react-icons/fa6";
import { GiMagnifyingGlass } from "react-icons/gi";
import { PiBlueprintFill } from "react-icons/pi";
import { RiScanFill } from "react-icons/ri";

const Services = () => {
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
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        How can we help <span className="text-blue-600">you</span>?
      </h1>
      <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-16 xl:gap-28">
        {services.map((content, idx) => (
          <div
            className="flex flex-col gap-3 items-center text-center py-10 lg:text-start lg:items-start"
            key={idx}>
            {content.icon}
            <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">
              {content.title}
            </h2>
            <p className="md:text-lg">{content.description}</p>
            <Link
              href={"/"}
              className="text-blue-600 hover:translate-x-1 font-semibold transition-all">
              Learn More &#10141;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
