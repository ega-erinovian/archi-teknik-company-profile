import Link from "next/link";
import { getServices } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { Skeleton } from "@/components/Loading";
import { FC } from "react";

interface ServicesProps {
  id: string;
}

const Services: FC<ServicesProps> = async ({ id }) => {
  const services = await getServices();

  if (!services) {
    return <Skeleton />;
  }

  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        How can we help <span className="text-blue-600">you</span>?
      </h1>

      <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-16 xl:gap-28">
        {services?.map((service) => {
          if (service.entryId !== id) {
            return (
              <div
                className="flex flex-col gap-3 items-center text-center py-10 lg:text-start lg:items-start"
                key={service.entryId}>
                <Image
                  src={service.icon}
                  alt={service.entryId}
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-4"
                />
                <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">
                  {service.title}
                </h2>
                <div className="md:text-lg line-clamp-3">
                  {documentToReactComponents(service?.overview)}
                </div>
                <Link
                  href={"/service/" + service.entryId}
                  className="text-blue-600 hover:translate-x-1 font-semibold transition-all">
                  Learn More &#10141;
                </Link>
              </div>
            );
          }
        })}
        {/* {services?.map((service) => (
          <div
            className="flex flex-col gap-3 items-center text-center py-10 lg:text-start lg:items-start"
            key={service.entryId}>
            <Image
              src={service.icon}
              alt={service.entryId}
              width={1000}
              height={1000}
              className="w-20 h-20 mb-4"
            />
            <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">
              {service.title}
            </h2>
            <div className="md:text-lg line-clamp-3">
              {documentToReactComponents(service?.overview)}
            </div>
            <Link
              href={"/service/" + service.entryId}
              className="text-blue-600 hover:translate-x-1 font-semibold transition-all">
              Learn More &#10141;
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Services;
