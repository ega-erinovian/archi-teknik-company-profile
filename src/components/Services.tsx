import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface ServicesProps {
  id: string;
}

const Services: FC<ServicesProps> = ({ id }) => {
  const ServicesContent = async () => {
    const services = await getServices();

    if (!services) {
      return <Skeleton className="w-full h-[300px]" />;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
        {services.map((service) => {
          if (service.entryId !== id) {
            return (
              <div key={service.entryId}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <Image
                        src={service.icon}
                        alt={service.entryId}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 transform group-hover:scale-110"
                      />
                    </div>
                    <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl text-gray-800">
                      {service.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="md:text-lg text-gray-600 line-clamp-3">
                      {documentToReactComponents(service?.overview)}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Link
                      href={"/service/" + service.entryId}
                      className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold mb-16 sm:mb-24">
          How can we help{" "}
          <span className="text-blue-600 relative">
            you
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
          </span>
          ?
        </h1>
        <ServicesContent />
      </div>
    </section>
  );
};

export default Services;
