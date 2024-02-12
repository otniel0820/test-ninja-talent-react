'use client'

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../data/api";


export const useUsers = () => {
  const {
    isLoading,
    isError,
    data: users = [],
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return {
    isLoading,
    isError,
    users,
    isFetching,
  };
};
