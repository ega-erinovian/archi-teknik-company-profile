import { locations } from "../contants";
import LocationItem from "./LocationItem";

const Locations = () => {
  return (
    <div>
      <h1 className="font-semibold mb-16 col-span-2 text-6xl">
        Find <span className="text-blue-600">Us</span>
      </h1>
      <ul className="grid grid-cols-2 gap-x-20 gap-y-12 me-8 xl:me-0">
        {locations.map((location, idx) => (
          <LocationItem
            key={idx}
            idx={idx}
            city={location.city}
            address={location.address}
          />
        ))}
      </ul>
    </div>
  );
};

export default Locations;
