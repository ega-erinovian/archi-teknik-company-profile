"use client";

import useGetRandomUser from "@/hooks/useGetRandomUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const { user } = useGetRandomUser();
  return (
    <Card>
      <CardHeader>
        <Avatar className="w-[150px] h-[150px]">
          <AvatarImage src={user?.picture.large} />
          <AvatarFallback>{`${user?.name.first[0]}${user?.name.last[0]}`}</AvatarFallback>
        </Avatar>
        <CardTitle>{`${user?.name.first} ${user?.name.last}`}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default Team;
