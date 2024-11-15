import { overviewContent } from "../constants";

const CompanyOverview = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        Why choose <span className="text-blue-600">us</span>?
      </h1>
      <div className="lg:grid grid-cols-3 gap-16 xl:gap-28">
        {overviewContent.map((content, idx) => (
          <div
            className="flex flex-col gap-3 items-center text-center py-10 lg:text-start lg:items-start"
            key={idx}>
            {content.icon}
            <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">
              {content.title}
            </h2>
            <p className="md:text-lg">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyOverview;
