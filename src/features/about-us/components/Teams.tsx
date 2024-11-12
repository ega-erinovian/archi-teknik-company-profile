"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Team from "./Team";
import useGetRandomUser from "@/hooks/useGetRandomUser";
import { Skeleton } from "@/components/Loading";

const Teams = () => {
  const positions = [
    "Principal Engineer",
    "Senior Project Manager",
    "Technical Director",
    "Chief Engineer",
    "Director of Engineering",
    "Managing Director",
  ];

  const { users } = useGetRandomUser(positions.length);

  if (!users) {
    return <Skeleton />;
  }

  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        Meet our <span className="text-blue-600">experts</span>
      </h1>
      <Carousel className="">
        <CarouselContent>
          {users &&
            users.map((user, idx) => (
              <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4">
                <Team user={user} position={positions[idx]} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <p></p>
    </div>
  );
};

export default Teams;
