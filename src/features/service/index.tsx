import ContactLink from "@/components/ContactLink";
import Header from "./components/Header";
import ServiceDescription from "./components/ServiceDescription";
import { FC } from "react";
import { getService } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Services from "@/components/Services";

interface ServiceProps {
  id: string;
}

const Service: FC<ServiceProps> = async ({ id }) => {
  const service = await getService(id);

  return (
    <>
      <Header
        title={service?.title}
        overview={documentToReactComponents(service?.overview)}
      />
      <ServiceDescription
        tagline={service?.tagline}
        image={service?.thumbnail}
        title={service?.title}
        desciption={documentToReactComponents(service?.description)}
      />
      <ContactLink />
      <Services id={id} />
    </>
  );
};

export default Service;
