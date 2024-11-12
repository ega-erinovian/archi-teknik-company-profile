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
import { Badge } from "@/components/ui/badge";

interface TeamProps {
  user: User;
  position: string;
}

const Team: FC<TeamProps> = ({ user, position }) => {
  return (
    <Card className="h-[260px] xl:h-[400px] flex flex-col justify-center">
      <Suspense fallback={<Skeleton />}>
        <CardHeader>
          <div className="flex items-center justify-around flex-col text-center gap-4">
            <Avatar className="w-[120px] h-[120px] xl:w-[164px] xl:h-[164px]">
              <AvatarImage src={user?.picture.large} />
              <AvatarFallback>{`${user?.name.first[0]}${user?.name.last[0]}`}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl mb-2 md:text-xl lg:text-2xl xl:text-3xl">{`${user?.name.first} ${user?.name.last}`}</CardTitle>
              <CardDescription>
                <Badge
                  className="border-gray-400 rounded-full text-md md:text-sm"
                  variant="outline">
                  {position}
                </Badge>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Suspense>
    </Card>
  );
};

export default Team;
