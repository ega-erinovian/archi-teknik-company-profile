"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC, Suspense } from "react";
import { Skeleton } from "@/components/Loading";
import { User } from "@/types/User";

interface TeamProps {
  user: User;
  position: string;
}

const Team: FC<TeamProps> = ({ user, position }) => {
  return (
    <Card className="h-[240px]">
      <Suspense fallback={<Skeleton />}>
        <CardHeader>
          <div className="flex items-center justify-around flex-col text-center gap-4">
            <Avatar className="w-[120px] h-[120px]">
              <AvatarImage src={user?.picture.large} />
              <AvatarFallback>{`${user?.name.first[0]}${user?.name.last[0]}`}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="lg:text-xl">{`${user?.name.first} ${user?.name.last}`}</CardTitle>
              <CardDescription>{position}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Suspense>
    </Card>
  );
};

export default Team;
