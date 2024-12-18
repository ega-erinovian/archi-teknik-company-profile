import Image from "next/image";
import React, { FC } from "react";

interface TestimonialItemProps {
  testimonial: {
    entryId: string;
    review: string;
    name: string;
    company: string;
    companyLogo: string;
    backgroundImage: string;
  };
}

const TestimonialItem: FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <div className="border border-gray-400 rounded-xl lg:grid lg:grid-cols-5 h-[640px] lg:h-[480px] w-[320px] md:w-[600px] xl:h-[640px] xl:w-[1080px] overflow-hidden">
      <div className="h-1/2 lg:h-full col-span-2">
        <div className="relative w-full h-full ">
          <Image
            src={testimonial.backgroundImage}
            alt="test"
            className="object-cover lg:object-center"
            fill
            sizes="1000"
          />
        </div>
      </div>
      <div className="px-8 py-4 lg:px-12 lg:py-8 relative w-full col-span-3 h-1/2 lg:h-full">
        <p className="text-lg lg:text-2xl xl:text-3xl text-start">
          ″{testimonial.review}″
        </p>
        <div className="flex justify-between items-center absolute bottom-4 lg:bottom-8 left-0 w-full px-8 lg:px-12">
          <div>
            <h3 className="font-bold xl:text-2xl capitalize">
              {testimonial.name}
            </h3>
            <p className="text-xs md:text-sm">{testimonial.company}</p>
          </div>
          <div className="relative w-[100px] h-[50px]">
            <Image
              src={testimonial.companyLogo}
              alt="test"
              className="object-contain"
              fill
              sizes="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
