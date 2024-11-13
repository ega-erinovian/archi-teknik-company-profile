import Service from "@/features/service";
import { FC } from "react";

interface ServiceDetailProps {
  params: { id: string };
}

const ServiceDetail: FC<ServiceDetailProps> = ({ params }) => {
  return <Service id={params.id} />;
};

export default ServiceDetail;
