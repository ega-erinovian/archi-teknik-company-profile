import Service from "@/features/service";
import { getService } from "@/lib/contentful";
import { Metadata, ResolvingMetadata } from "next";
import { FC } from "react";

interface Props {
  params: { id: string };
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const service = await getService(params.id);

  const image = service?.thumbnail!;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Archi Teknik | " + service?.title,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
};

const ServiceDetail: FC<Props> = ({ params }) => {
  return <Service id={params.id} />;
};

export default ServiceDetail;
