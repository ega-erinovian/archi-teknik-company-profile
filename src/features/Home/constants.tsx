import {
  FaPeopleCarryBox,
  FaRecycle,
  FaScrewdriverWrench,
  FaBuilding,
} from "react-icons/fa6";

import { FaDraftingCompass } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { PiBlueprintFill } from "react-icons/pi";
import { RiScanFill } from "react-icons/ri";

export const overviewContent = [
  {
    icon: <FaScrewdriverWrench className="text-5xl xl:text-7xl mb-7" />,
    title: "Trusted Expertise",
    description:
      "Our experienced engineers bring decades of knowledge to every project, delivering precision and innovative solutions you can rely on.",
  },
  {
    icon: <FaPeopleCarryBox className="text-5xl xl:text-7xl mb-7" />,
    title: "Client Focus",
    description:
      "We prioritize understanding each client’s needs, ensuring tailored solutions that meet expectations and add lasting value.",
  },
  {
    icon: <FaRecycle className="text-5xl xl:text-7xl mb-7" />,
    title: "Sustainable Vision",
    description:
      "We are committed to eco-friendly practices, creating resilient infrastructure that supports a sustainable future.",
  },
];

export const questionAnswers = [
  {
    question: "What services do you offer, and which industries do you serve?",
    answer:
      "We provide a comprehensive range of engineering services, including project planning, design development, site analysis, structural engineering, quality assurance, and sustainability consulting. Our expertise spans industries such as commercial, industrial, infrastructure, and environmental sectors.",
  },
  {
    question: "How does your consultation and project management process work?",
    answer:
      "Our process starts with an in-depth consultation to understand your goals and project scope. We then develop a plan with clear timelines and budgets, maintaining open communication and providing regular updates to ensure alignment with your vision.",
  },
  {
    question:
      "Do you handle projects of all sizes, and how do you manage timelines and budgets?",
    answer:
      "Yes, we work on projects of all sizes, from small assessments to large-scale developments. We set clear timelines and budgets upfront and actively manage resources to stay on track, addressing challenges proactively to meet deadlines and budget constraints.",
  },
  {
    question:
      "How do you ensure quality, compliance, and sustainability in your projects??",
    answer:
      "We adhere to strict quality assurance protocols, including regular inspections and compliance checks, to uphold the highest safety and performance standards. Sustainability is a core value, and we integrate eco-friendly practices, energy-efficient designs, and green materials wherever possible.",
  },
  {
    question: "What sets you apart, and how can I get started?",
    answer:
      "Our personalized approach, combined with deep industry expertise and a commitment to quality and sustainability, sets us apart. To get started, simply reach out via our contact page or give us a call to schedule an initial consultation.",
  },
];

export const services = [
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
