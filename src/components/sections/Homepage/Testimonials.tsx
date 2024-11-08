import Image from "next/image";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="bg-blue-600 relative min-h-screen overflow-hidden px-5 md:px-20 xl:px-0">
      <div className="container mx-auto py-24 ">
        <div className="xl:grid xl:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-4xl xl:text-7xl text-center xl:text-start font-bold mb-5 xl:mb-24 capitalize text-white">
              Powering innovation across industries, globally
            </h1>
          </div>
        </div>
        <div className="relative w-full h-[256px] md:h-[380px] xl:h-[800px] md:my-10 xl:my-0">
          <Image
            src={"/testimonials-bg.png"}
            alt="world-map"
            className="object-contain"
            fill
          />
        </div>
        {/* TODO: Testimonials number - mobile ver*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-20 gap-32 mt-20 text-white">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
