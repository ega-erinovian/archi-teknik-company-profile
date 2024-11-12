"use client";
import Image from "next/image";
import { gallery } from "../constants";
import BlurFade from "@/components/ui/blur-fade";

const Culture = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        Life at <span className="text-blue-600">Archi</span>
      </h1>
      <div className="lg:gap-6 gap-4 md:columns-3">
        {gallery.map((item, idx) => (
          <BlurFade key={item} delay={0.25 + idx * 0.05} inView>
            <Image
              key={idx}
              src={item}
              alt={"hello" + idx}
              className="lg:mb-6 mb-4 size-full object-contain"
              width={1000}
              height={1000}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Culture;
