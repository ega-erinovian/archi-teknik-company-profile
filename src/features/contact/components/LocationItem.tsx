import { FC } from "react";

interface LocationItemProps {
  idx: number;
  city: string;
  address: string;
}

const LocationItem: FC<LocationItemProps> = ({ idx, city, address }) => {
  return (
    <li className="flex flex-col gap-4" key={idx}>
      <h1 className="font-semibold text-4xl">{city}</h1>
      <hr />
      <p>{address}</p>
    </li>
  );
};

export default LocationItem;
