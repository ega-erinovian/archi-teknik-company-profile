"use client";

import { User } from "@/types/User";
import axios from "axios";
import { use, useEffect, useState } from "react";

const useGetRandomUser = (people: number) => {
  const [users, setUsers] = useState<User[] | null>(null);

  const getRandomUser = async () => {
    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?results=${people}&nat=gb`
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return { users, getRandomUser };
};

export default useGetRandomUser;
