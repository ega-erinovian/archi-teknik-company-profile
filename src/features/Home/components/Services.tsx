import Link from "next/link";
import services from "../constants/services";

const Services = () => {
  // TODO: CMS

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
