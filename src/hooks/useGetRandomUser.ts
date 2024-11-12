"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  picture: {
    large: string;
  };
  cell: string;
  email: string;
  gender: string;
  id: { name: string; value: string };
  name: { first: string; last: string; title: string };
}

const useGetRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const getRandomUser = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/");
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return { user, getRandomUser };
};

export default useGetRandomUser;
