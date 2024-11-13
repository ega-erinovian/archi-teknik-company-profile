import { ImageSkeleton, Skeleton } from "@/components/Loading";
import Image from "next/image";
import { FC } from "react";

interface ServiceDescriptionProps {
  image?: string;
  title: string;
  tagline: string;
  desciption: any;
}

const ServiceDescription: FC<ServiceDescriptionProps> = ({
  image,
  title,
  tagline,
  desciption,
}) => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mt-48 xl:my-56 pb-56">
      {!image ? (
        <ImageSkeleton />
      ) : (
        <div className="relative w-full h-[320px] lg:h-[480px] xl:h-[900px] mb-8 lg:mb-24 xl:mb-40">
          <Image
            src={image!}
            alt={title + " Image"}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-4">
        <div className="h-full">
          <h1 className="font-bold text-2xl mb-5 lg:text-4xl xl:text-6xl lg:sticky lg:top-32">
            {tagline}
          </h1>
        </div>
        <div className="grid gap-4 lg:gap-6 xl:text-2xl">{desciption}</div>
      </div>
    </div>
  );
};

export default ServiceDescription;
