import Image from "next/image";
import ValueItem from "./ValueItem";

const CompanyValue = () => {
  return (
    <div className="bg-blue-600 relative min-h-screen overflow-hidden px-5 md:px-20 xl:px-0 mb-48">
      <div className="container mx-auto pt-40 lg:pt-52 lg:pb-44 md:pb-36 pb-28">
        <div className="xl:grid xl:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-4xl xl:text-7xl text-center xl:text-start font-bold mb-5 xl:mb-24 capitalize text-white">
              Powering innovation across industries, globally
            </h1>
          </div>
        </div>
        <div className="relative w-full h-[256px] md:h-[380px] xl:h-[600px] md:my-10 xl:my-0">
          <Image
            src={"/testimonials-bg.png"}
            alt="world-map"
            className="object-contain"
            fill
          />
        </div>
        {/* TODO: Testimonials number - mobile ver*/}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 md:gap-20 gap-32 mt-20 text-white">
          <ValueItem />
          <ValueItem />
          <ValueItem />
          <ValueItem />
        </div>
      </div>
    </div>
  );
};

export default CompanyValue;
